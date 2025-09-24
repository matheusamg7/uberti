'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  AlertTriangle
} from 'lucide-react'

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - substituir por dados reais do Supabase
  const products = [
    {
      id: '1',
      sku: 'UBT-001',
      name: 'Flowing Black Dress',
      collection: 'Bergamot',
      category: 'Clothing',
      price: 890.00,
      stock: 2,
      status: 'Active',
      image: '/mock/product-1.jpg',
      featured: true,
    },
    {
      id: '2',
      sku: 'UBT-002',
      name: 'Artisan Necklace Gold',
      collection: 'Elements',
      category: 'Necklaces',
      price: 450.00,
      stock: 5,
      status: 'Active',
      image: '/mock/product-2.jpg',
      featured: false,
    },
    {
      id: '3',
      sku: 'UBT-003',
      name: 'Ceramic Vase White',
      collection: 'Earth',
      category: 'Decoration',
      price: 280.00,
      stock: 0,
      status: 'Out of Stock',
      image: '/mock/product-3.jpg',
      featured: false,
    },
    {
      id: '4',
      sku: 'UBT-004',
      name: 'Leather Handbag Black',
      collection: 'Urban',
      category: 'Accessories',
      price: 650.00,
      stock: 8,
      status: 'Active',
      image: '/mock/product-4.jpg',
      featured: true,
    },
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.collection.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStockBadgeColor = (stock: number) => {
    if (stock === 0) return 'destructive'
    if (stock <= 3) return 'secondary'
    return 'default'
  }

  const getStockText = (stock: number) => {
    if (stock === 0) return 'Out of Stock'
    if (stock <= 3) return 'Low Stock'
    return 'In Stock'
  }

  const handleDelete = (productId: string) => {
    // Implementar lógica de exclusão
    console.log('Delete product:', productId)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2">Products</h1>
          <p className="text-neutral-600">Manage your product catalog</p>
        </div>
        <Link href="products/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search products, SKU, or collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Products ({filteredProducts.length})</span>
            <div className="text-sm text-neutral-500">
              {products.filter(p => p.stock <= 3).length} products need attention
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Collection</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <span className="text-neutral-400 text-xs font-medium">
                          IMG
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-neutral-900">
                            {product.name}
                          </p>
                          {product.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-neutral-500">
                          {product.sku}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-neutral-900">{product.collection}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-neutral-600">{product.category}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">R$ {product.price.toFixed(2)}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {product.stock <= 3 && product.stock > 0 && (
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                      )}
                      <Badge
                        variant={getStockBadgeColor(product.stock)}
                        className="text-xs"
                      >
                        {getStockText(product.stock)}
                      </Badge>
                      <span className="text-sm text-neutral-500">
                        ({product.stock})
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.status === 'Active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <Link href={`products/${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <Link href={`products/${product.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}