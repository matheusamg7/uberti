import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './src/lib/i18n/config'

// Create the intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
})

export async function middleware(request: NextRequest) {
  // First handle internationalization
  const intlResponse = intlMiddleware(request)

  // For non-localized paths, apply intl middleware first
  if (intlResponse) {
    return intlResponse
  }

  // Continue with Supabase authentication for protected routes
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refreshing the auth token
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protected admin routes (any locale)
  if (request.nextUrl.pathname.match(/\/[a-z]{2}\/admin/)) {
    if (!user) {
      // Redirect to login if not authenticated
      const locale = request.nextUrl.pathname.split('/')[1]
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = `/${locale}/login`
      redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (!profile?.is_admin) {
      // Redirect to home if not admin
      const locale = request.nextUrl.pathname.split('/')[1]
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = `/${locale}`
      return NextResponse.redirect(redirectUrl)
    }
  }

  // Protected API routes
  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (!profile?.is_admin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Protected cart and account routes (any locale)
  if (
    request.nextUrl.pathname.includes('/cart') ||
    request.nextUrl.pathname.includes('/account') ||
    request.nextUrl.pathname.includes('/checkout')
  ) {
    if (!user && !request.nextUrl.pathname.includes('/api/')) {
      const locale = request.nextUrl.pathname.split('/')[1]
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = `/${locale}/login`
      redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}