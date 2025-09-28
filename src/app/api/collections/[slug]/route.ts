import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const collectionProductsSchema = z.object({
  category: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const filters = collectionProductsSchema.parse(Object.fromEntries(searchParams));

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'missing_parameter',
            message: 'Collection slug is required',
          },
        },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Get collection details
    const { data: collection, error: collectionError } = await supabase
      .from('collections')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (collectionError) {
      if (collectionError.code === 'PGRST116') {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'collection_not_found',
              message: 'Collection not found',
            },
          },
          { status: 404 }
        );
      }

      console.error('Collection query error:', collectionError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch collection',
          },
        },
        { status: 500 }
      );
    }

    // Get products in this collection
    let productsQuery = supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          slug,
          name_en,
          name_pt,
          name_es
        )
      `)
      .eq('collection_id', collection.id)
      .eq('is_active', true);

    // Filter by category if specified
    if (filters.category) {
      productsQuery = productsQuery.eq('categories.slug', filters.category);
    }

    // Get total count for pagination
    const { count } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('collection_id', collection.id)
      .eq('is_active', true);

    // Apply pagination and ordering
    const { data: products, error: productsError } = await productsQuery
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false })
      .range(filters.offset, filters.offset + filters.limit - 1);

    if (productsError) {
      console.error('Products query error:', productsError);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch collection products',
          },
        },
        { status: 500 }
      );
    }

    // Get available categories in this collection
    const { data: categories, error: categoriesError } = await supabase
      .from('products')
      .select(`
        categories (
          id,
          slug,
          name_en,
          name_pt,
          name_es
        )
      `)
      .eq('collection_id', collection.id)
      .eq('is_active', true);

    const uniqueCategories = categories
      ? Array.from(
          new Map(
            categories
              .map(p => p.categories)
              .filter(Boolean)
              .map(cat => [cat!.id, cat])
          ).values()
        )
      : [];

    const totalPages = Math.ceil((count || 0) / filters.limit);

    return NextResponse.json({
      success: true,
      data: {
        collection,
        products: products || [],
        categories: uniqueCategories,
        pagination: {
          total: count || 0,
          page: Math.floor(filters.offset / filters.limit) + 1,
          pageSize: filters.limit,
          totalPages,
        },
      },
    });
  } catch (error) {
    console.error('Collection detail API error:', error);

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