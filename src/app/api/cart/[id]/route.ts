import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const updateCartItemSchema = z.object({
  quantity: z.number().int().min(0, 'Quantity must be at least 0').max(99, 'Quantity cannot exceed 99'),
});

// PUT - Update cart item quantity
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { quantity } = updateCartItemSchema.parse(body);

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'missing_parameter',
            message: 'Cart item ID is required',
          },
        },
        { status: 400 }
      );
    }

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

    // Get cart item with product info
    const { data: cartItem, error: cartError } = await supabase
      .from('cart_items')
      .select(`
        *,
        products (
          id,
          sku,
          name_en,
          stock_quantity,
          is_active
        )
      `)
      .eq('id', id)
      .eq('user_id', user.id)
      .single();

    if (cartError || !cartItem) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'cart_item_not_found',
            message: 'Cart item not found',
          },
        },
        { status: 404 }
      );
    }

    // If quantity is 0, remove the item
    if (quantity === 0) {
      const { error: deleteError } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', id);

      if (deleteError) {
        console.error('Cart item delete error:', deleteError);
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'delete_failed',
              message: 'Failed to remove item from cart',
            },
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Item removed from cart',
      });
    }

    // Check stock availability
    if (cartItem.products && cartItem.products.stock_quantity < quantity) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'insufficient_stock',
            message: `Only ${cartItem.products.stock_quantity} items available`,
          },
        },
        { status: 400 }
      );
    }

    // Update quantity
    const { data: updatedItem, error: updateError } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', id)
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
      console.error('Cart item update error:', updateError);
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

    return NextResponse.json({
      success: true,
      data: {
        item: updatedItem,
      },
      message: 'Cart item updated successfully',
    });
  } catch (error) {
    console.error('Update cart item API error:', error);

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

// DELETE - Remove cart item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'missing_parameter',
            message: 'Cart item ID is required',
          },
        },
        { status: 400 }
      );
    }

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

    // Delete the cart item (only if it belongs to the user)
    const { error: deleteError } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (deleteError) {
      console.error('Cart item delete error:', deleteError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'delete_failed',
            message: 'Failed to remove item from cart',
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Item removed from cart',
    });
  } catch (error) {
    console.error('Delete cart item API error:', error);

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