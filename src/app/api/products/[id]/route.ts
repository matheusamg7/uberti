import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'missing_parameter',
            message: 'Product ID is required',
          },
        },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data: product, error } = await supabase
      .from('products')
      .select(`
        *,
        collections (
          id,
          slug,
          name_en,
          name_pt,
          name_es,
          description_en,
          description_pt,
          description_es
        ),
        categories (
          id,
          slug,
          name_en,
          name_pt,
          name_es
        )
      `)
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'product_not_found',
              message: 'Product not found',
            },
          },
          { status: 404 }
        );
      }

      console.error('Product query error:', error);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch product',
          },
        },
        { status: 500 }
      );
    }

    // Get related products from the same collection
    const { data: relatedProducts } = await supabase
      .from('products')
      .select(`
        id,
        slug,
        sku,
        name_en,
        name_pt,
        name_es,
        price,
        images,
        featured
      `)
      .eq('collection_id', product.collection_id)
      .eq('is_active', true)
      .neq('id', id)
      .limit(4)
      .order('featured', { ascending: false });

    return NextResponse.json({
      success: true,
      data: {
        product,
        relatedProducts: relatedProducts || [],
      },
    });
  } catch (error) {
    console.error('Product detail API error:', error);

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