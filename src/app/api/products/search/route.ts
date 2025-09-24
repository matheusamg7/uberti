import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const searchSchema = z.object({
  q: z.string().min(2, 'Search query must be at least 2 characters'),
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
  locale: z.enum(['en', 'pt', 'es']).optional().default('en'),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const { q, limit, locale } = searchSchema.parse(Object.fromEntries(searchParams));

    const supabase = await createClient();

    // Use full-text search based on locale
    let searchConfig = 'english';
    let nameField = 'name_en';
    let descField = 'description_en';

    if (locale === 'pt') {
      searchConfig = 'portuguese';
      nameField = 'name_pt';
      descField = 'description_pt';
    } else if (locale === 'es') {
      searchConfig = 'english'; // Spanish config might not be available
      nameField = 'name_es';
      descField = 'description_es';
    }

    // First try full-text search
    const { data: ftsResults, error: ftsError } = await supabase
      .rpc('search_products_fts', {
        search_term: q,
        search_locale: searchConfig,
        result_limit: limit,
      });

    let products = ftsResults;

    // If FTS fails or returns no results, fall back to simple text search
    if (ftsError || !products || products.length === 0) {
      const { data: simpleResults, error: simpleError } = await supabase
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
        .eq('is_active', true)
        .or(`${nameField}.ilike.%${q}%,${descField}.ilike.%${q}%,sku.ilike.%${q}%`)
        .limit(limit)
        .order('featured', { ascending: false });

      if (simpleError) {
        console.error('Simple search error:', simpleError);
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'search_error',
              message: 'Failed to search products',
            },
          },
          { status: 500 }
        );
      }

      products = simpleResults;
    }

    return NextResponse.json({
      success: true,
      data: {
        products: products || [],
        query: q,
        total: products?.length || 0,
      },
    });
  } catch (error) {
    console.error('Product search API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'validation_error',
            message: 'Invalid search parameters',
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