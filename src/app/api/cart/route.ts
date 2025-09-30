// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const addToCartSchema = z.object({
  productId: z.string().uuid('Invalid product ID'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1').max(99, 'Quantity cannot exceed 99'),
  size: z.string().optional(),
});

// GET - Get user's cart
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  try {
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

    // Get cart items with product details
    const { data: cartItems, error: cartError } = await supabase
      .from('cart_items')
      .select(`
        *,
        products (
          id,
          sku,
          slug,
          name_en,
          name_pt,
          name_es,
          price,
          images,
          sizes,
          stock_quantity,
          is_active,
          collections (
            name_en,
            name_pt,
            name_es
          )
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (cartError) {
      console.error('Cart query error:', cartError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch cart',
          },
        },
        { status: 500 }
      );
    }

    // Calculate totals
    const items = cartItems || [];
    const subtotal = items.reduce((total, item) => {
      if (item.products && item.products.is_active) {
        return total + (item.products.price * item.quantity);
      }
      return total;
    }, 0);

    const itemCount = items.reduce((count, item) => {
      if (item.products && item.products.is_active) {
        return count + item.quantity;
      }
      return count;
    }, 0);

    return NextResponse.json({
      success: true,
      data: {
        items: items.filter(item => item.products && item.products.is_active),
        summary: {
          itemCount,
          subtotal: Number(subtotal.toFixed(2)),
          shipping: 0, // Will be calculated at checkout
          total: Number(subtotal.toFixed(2)),
        },
      },
    });
  } catch (error) {
    console.error('Get cart API error:', error);

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

// POST - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity, size } = addToCartSchema.parse(body);

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

    // Verify product exists and is active
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('id, sku, name_en, price, stock_quantity, is_active, sizes')
      .eq('id', productId)
      .single();

    if (productError || !product || !product.is_active) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'product_not_found',
            message: 'Product not found or unavailable',
          },
        },
        { status: 404 }
      );
    }

    // Check stock
    if (product.stock_quantity < quantity) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'insufficient_stock',
            message: `Only ${product.stock_quantity} items available`,
          },
        },
        { status: 400 }
      );
    }

    // Check if size is required and valid
    if (product.sizes && product.sizes.length > 0 && !size) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'size_required',
            message: 'Size selection is required for this product',
          },
        },
        { status: 400 }
      );
    }

    if (size && product.sizes && !product.sizes.includes(size)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'invalid_size',
            message: 'Selected size is not available',
          },
        },
        { status: 400 }
      );
    }

    // Check if item already exists in cart
    const { data: existingItem } = await supabase
      .from('cart_items')
      .select('id, quantity')
      .eq('user_id', user.id)
      .eq('product_id', productId)
      .eq('size', size || '')
      .single();

    let cartItem;

    if (existingItem) {
      // Update existing item
      const newQuantity = existingItem.quantity + quantity;

      if (product.stock_quantity < newQuantity) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'insufficient_stock',
              message: `Only ${product.stock_quantity} items available. You have ${existingItem.quantity} in cart.`,
            },
          },
          { status: 400 }
        );
      }

      const { data: updatedItem, error: updateError } = await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', existingItem.id)
        .select(`
          *,
          products (
            id,
            sku,
            name_en,
            name_pt,
            name_es,
            price,
            images
          )
        `)
        .single();

      if (updateError) {
        console.error('Cart update error:', updateError);
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'update_failed',
              message: 'Failed to update cart item',
            },
          },
          { status: 500 }
        );
      }

      cartItem = updatedItem;
    } else {
      // Add new item
      const { data: newItem, error: insertError } = await supabase
        .from('cart_items')
        .insert([
          {
            user_id: user.id,
            product_id: productId,
            quantity,
            size: size || null,
          },
        ])
        .select(`
          *,
          products (
            id,
            sku,
            name_en,
            name_pt,
            name_es,
            price,
            images
          )
        `)
        .single();

      if (insertError) {
        console.error('Cart insert error:', insertError);
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'add_failed',
              message: 'Failed to add item to cart',
            },
          },
          { status: 500 }
        );
      }

      cartItem = newItem;
    }

    return NextResponse.json({
      success: true,
      data: {
        item: cartItem,
      },
      message: 'Item added to cart successfully',
    });
  } catch (error) {
    console.error('Add to cart API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_error',
            message: 'Invalid input data',
            details: error.issues,
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