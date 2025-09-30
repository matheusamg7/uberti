import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const collectionsFiltersSchema = z.object({
  active: z.coerce.boolean().optional().default(true),
  limit: z.coerce.number().int().min(1).max(50).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = collectionsFiltersSchema.parse(Object.fromEntries(searchParams));

    const supabase = await createClient();

    // Build query
    let query = supabase
      .from('collections')
      .select(`
        *,
        products (
          count
        )
      `)
      .order('display_order', { ascending: true });

    if (filters.active !== undefined) {
      query = query.eq('is_active', filters.active);
    }

    if (filters.limit) {
      query = query.limit(filters.limit);
    }

    const { data: collections, error } = await query;

    if (error) {
      console.error('Collections query error:', error);
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'database_error',
            message: 'Failed to fetch collections',
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        collections: collections || [],
        total: collections?.length || 0,
      },
    });
  } catch (error) {
    console.error('Collections API error:', error);

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