'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  Package,
  DollarSign,
  Tag,
  Folder,
  Calendar,
  AlertTriangle
} from 'lucide-react'

export default function ProductDetailPage({
  params: { locale, id }
}: {
  params: { locale: string, id: string }
}) {
  // Mock product data - substituir por dados reais do Supabase
  const product = {
    id: '1',
    sku: 'UBT-001',
    name: {
      en: 'Flowing Black Dress',
      pt: 'Vestido Fluido Preto',
      es: 'Vestido Fluido Negro'
    },
    description: {
      en: 'An elegant flowing black dress crafted with premium materials and attention to detail.',
      pt: 'Um elegante vestido fluido preto confeccionado com materiais premium e atenção aos detalhes.',
      es: 'Un elegante vestido fluido negro confeccionado con materiales premium y atención al detalle.'
    },
    collection: 'Bergamot',
    category: 'Clothing',
    price: 890.00,
    stock: 2,
    status: 'Active',
    featured: true,
    images: [
      '/mock/product-1-1.jpg',
      '/mock/product-1-2.jpg',
      '/mock/product-1-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-15T09:15:00Z'
  }

  const handleDelete = () => {
    // Implementar lógica de exclusão
    console.log('Delete product:', id)
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'destructive' }
    if (stock <= 3) return { text: 'Low Stock', color: 'secondary' }
    return { text: 'In Stock', color: 'default' }
  }

  const stockStatus = getStockStatus(product.stock)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href={`/${locale}/admin/products`}
            className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link href={`/${locale}/admin/products/${id}/edit`}>
            <Button variant="outline" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Product
            </Button>
          </Link>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      {/* Product Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-light text-neutral-900">
              {product.name.en}
            </h1>
            {product.featured && (
              <Badge variant="secondary">Featured</Badge>
            )}
            <Badge variant={stockStatus.color as any}>
              {stockStatus.text}
            </Badge>
          </div>
          <p className="text-neutral-600">SKU: {product.sku}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-neutral-900">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-sm text-neutral-500">
            {product.stock} units in stock
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Product Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-neutral-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-neutral-400 text-sm font-medium">
                      Image {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Descriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Product Descriptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-neutral-900 mb-2">English</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {product.description.en}
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium text-neutral-900 mb-2">Português</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {product.description.pt}
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium text-neutral-900 mb-2">Español</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {product.description.es}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.stock <= 3 && product.stock > 0 && (
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                  )}
                  <span className="font-medium">{product.stock} units</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Price</span>
                </div>
                <span className="font-medium">R$ {product.price.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Category</span>
                </div>
                <span className="font-medium">{product.category}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Collection</span>
                </div>
                <span className="font-medium">{product.collection}</span>
              </div>
            </CardContent>
          </Card>

          {/* Product Attributes */}
          <Card>
            <CardHeader>
              <CardTitle>Product Attributes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {product.sizes && (
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 mb-2">
                    Available Sizes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-medium text-neutral-900 mb-2">
                  Status
                </h4>
                <Badge variant="default">
                  {product.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Timestamps */}
          <Card>
            <CardHeader>
              <CardTitle>Timestamps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Created</span>
                </div>
                <span className="text-sm font-medium">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm text-neutral-600">Updated</span>
                </div>
                <span className="text-sm font-medium">
                  {new Date(product.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}