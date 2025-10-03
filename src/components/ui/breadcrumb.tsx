import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: string;
}

export function Breadcrumb({ items, locale }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      <Link
        href={`/${locale}`}
        className="hover:text-gray-900 transition-colors"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {index === items.length - 1 ? (
            <span
              className="text-gray-900 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
