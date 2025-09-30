import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const productFiltersSchema = z.object({
  collection: z.string().optional(),
  category: z.string().optional(),
  featured: z.coerce.boolean().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
  search: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  inStock: z.coerce.boolean().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = productFiltersSchema.parse(Object.fromEntries(searchParams));

    const supabase = await createClient();

    // Start building the query
    let query = supabase
      .from('products')
      .select(`
        *,
        collections (
          id,
          slug,
          name_en,
          name_pt,
          name_es
        ),
        categories (
          id,
          slug,
          name_en,
          name_pt,
          name_es
        )
      `)
      .eq('is_active', true);

    // Apply filters
    if (filters.collection) {
      query = query.eq('collections.slug', filters.collection);
    }

    if (filters.category) {
      query = query.eq('categories.slug', filters.category);
    }

    if (filters.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters.minPrice !== undefined) {
      query = query.gte('price', filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      query = query.lte('price', filters.maxPrice);
    }

    if (filters.inStock) {
      query = query.gt('stock_quantity', 0);
    }

    if (filters.search) {
      // Simple text search - in a real app you might want full-text search
      query = query.or(
        `name_en.ilike.%${filters.search}%,name_pt.ilike.%${filters.search}%,name_es.ilike.%${filters.search}%,sku.ilike.%${filters.search}%`
      );
    }

    // Get total count for pagination
    const { count } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true);

    // Apply pagination and ordering
    const { data: products, error } = await query
      .order('created_at', { ascending: false })
      .range(filters.offset, filters.offset + filters.limit - 1);

    if (error) {
      console.error('Products query error:', error);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch products',
          },
        },
        { status: 500 }
      );
    }

    const totalPages = Math.ceil((count || 0) / filters.limit);

    return NextResponse.json({
      success: true,
      data: {
        products: products || [],
        pagination: {
          total: count || 0,
          page: Math.floor(filters.offset / filters.limit) + 1,
          pageSize: filters.limit,
          totalPages,
        },
      },
    });
  } catch (error) {
    console.error('Products API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_error',
            message: 'Invalid query parameters',
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