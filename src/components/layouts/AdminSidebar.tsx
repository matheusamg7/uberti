'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Package2,
  FolderOpen,
  ShoppingCart,
  LogOut,
  Settings,
  Users
} from 'lucide-react'

interface AdminSidebarProps {
  locale: string
}

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Products',
    href: '/admin/products',
    icon: Package2,
  },
  {
    name: 'Collections',
    href: '/admin/collections',
    icon: FolderOpen,
  },
  {
    name: 'Orders',
    href: '/admin/orders',
    icon: ShoppingCart,
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: Users,
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
]

export default function AdminSidebar({ locale }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-neutral-200">
        <div className="flex h-16 shrink-0 items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2"
          >
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs">U</span>
            </div>
            <span className="font-light text-xl tracking-wider">UBERTI</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const fullHref = `/${locale}${item.href}`
                  const isActive = pathname === fullHref

                  return (
                    <li key={item.name}>
                      <Link
                        href={fullHref}
                        className={cn(
                          isActive
                            ? 'bg-neutral-50 text-black'
                            : 'text-neutral-700 hover:text-black hover:bg-neutral-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-colors'
                        )}
                      >
                        <item.icon
                          className={cn(
                            isActive ? 'text-black' : 'text-neutral-400 group-hover:text-black',
                            'h-5 w-5 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                href={`/${locale}/api/auth/logout`}
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-black transition-colors"
              >
                <LogOut
                  className="h-5 w-5 shrink-0 text-neutral-400 group-hover:text-black"
                  aria-hidden="true"
                />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}