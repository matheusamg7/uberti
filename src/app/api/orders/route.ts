import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createOrderSchema = z.object({
  shippingAddress: z.object({
    fullName: z.string().min(2, 'Full name is required'),
    addressLine1: z.string().min(5, 'Address is required'),
    addressLine2: z.string().optional(),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    postalCode: z.string().min(5, 'Postal code is required'),
    country: z.string().min(2, 'Country is required'),
    phone: z.string().optional(),
  }),
  paymentMethod: z.string().min(1, 'Payment method is required'),
});

const ordersFiltersSchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered']).optional(),
});

// GET - Get user's orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = ordersFiltersSchema.parse(Object.fromEntries(searchParams));

    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'unauthorized',
            message: 'Authentication required',
          },
        },
        { status: 401 }
      );
    }

    // Build query
    let query = supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (
            id,
            sku,
            name_en,
            name_pt,
            name_es,
            images
          )
        )
      `)
      .eq('user_id', user.id);

    if (filters.status) {
      query = query.eq('status', filters.status);
    }

    // Get total count for pagination
    const { count } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id);

    // Apply pagination and ordering
    const { data: orders, error: ordersError } = await query
      .order('created_at', { ascending: false })
      .range(filters.offset, filters.offset + filters.limit - 1);

    if (ordersError) {
      console.error('Orders query error:', ordersError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch orders',
          },
        },
        { status: 500 }
      );
    }

    const totalPages = Math.ceil((count || 0) / filters.limit);

    return NextResponse.json({
      success: true,
      data: {
        orders: orders || [],
        pagination: {
          total: count || 0,
          page: Math.floor(filters.offset / filters.limit) + 1,
          pageSize: filters.limit,
          totalPages,
        },
      },
    });
  } catch (error) {
    console.error('Get orders API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_error',
            message: 'Invalid query parameters',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'internal_server_error',
          message: 'An unexpected error occurred',
        },
      },
      { status: 500 }
    );
  }
}

// POST - Create new order from cart
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { shippingAddress, paymentMethod } = createOrderSchema.parse(body);

    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'unauthorized',
            message: 'Authentication required',
          },
        },
        { status: 401 }
      );
    }

    // Get user's cart items
    const { data: cartItems, error: cartError } = await supabase
      .from('cart_items')
      .select(`
        *,
        products (
          id,
          sku,
          name_en,
          price,
          stock_quantity,
          is_active
        )
      `)
      .eq('user_id', user.id);

    if (cartError || !cartItems || cartItems.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'empty_cart',
            message: 'Cart is empty',
          },
        },
        { status: 400 }
      );
    }

    // Validate cart items (stock, active products)
    const validationErrors = [];

    for (const item of cartItems) {
      if (!item.products || !item.products.is_active) {
        validationErrors.push(`Product ${item.product_id} is no longer available`);
        continue;
      }

      if (item.products.stock_quantity < item.quantity) {
        validationErrors.push(`Insufficient stock for ${item.products.name_en}`);
      }
    }

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_failed',
            message: 'Cart validation failed',
            details: validationErrors,
          },
        },
        { status: 400 }
      );
    }

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => {
      return total + (item.products!.price * item.quantity);
    }, 0);

    const shipping = 0; // Free shipping for now
    const total = subtotal + shipping;

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          user_id: user.id,
          status: 'pending',
          subtotal: Number(subtotal.toFixed(2)),
          shipping: Number(shipping.toFixed(2)),
          total: Number(total.toFixed(2)),
          shipping_address: shippingAddress,
        },
      ])
      .select()
      .single();

    if (orderError) {
      console.error('Order creation error:', orderError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'order_creation_failed',
            message: 'Failed to create order',
          },
        },
        { status: 500 }
      );
    }

    // Create order items
    const orderItemsData = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      size: item.size,
      price_at_time: item.products!.price,
    }));

    const { error: orderItemsError } = await supabase
      .from('order_items')
      .insert(orderItemsData);

    if (orderItemsError) {
      console.error('Order items creation error:', orderItemsError);
      // TODO: In a real app, we should rollback the order creation
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'order_items_creation_failed',
            message: 'Failed to create order items',
          },
        },
        { status: 500 }
      );
    }

    // Update product stock
    for (const item of cartItems) {
      const { error: stockError } = await supabase
        .from('products')
        .update({
          stock_quantity: item.products!.stock_quantity - item.quantity,
        })
        .eq('id', item.product_id);

      if (stockError) {
        console.error('Stock update error:', stockError);
        // Continue with other items, log the error
      }
    }

    // Clear user's cart
    const { error: clearCartError } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user.id);

    if (clearCartError) {
      console.error('Clear cart error:', clearCartError);
      // Don't fail the order, just log the error
    }

    return NextResponse.json({
      success: true,
      data: {
        order,
      },
      message: 'Order created successfully',
    });
  } catch (error) {
    console.error('Create order API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_error',
            message: 'Invalid input data',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'internal_server_error',
          message: 'An unexpected error occurred',
        },
      },
      { status: 500 }
    );
  }
}