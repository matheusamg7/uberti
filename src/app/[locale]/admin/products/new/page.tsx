'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Upload } from 'lucide-react'
import Link from 'next/link'

export default function NewProductPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Mock collections
  const collections = [
    { id: '1', name: 'Bergamot' },
    { id: '2', name: 'Elements' },
    { id: '3', name: 'Earth' },
    { id: '4', name: 'Urban' },
  ]

  const categories = [
    { value: 'clothing', label: 'Clothing' },
    { value: 'decoration', label: 'Decoration' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'accessories', label: 'Accessories' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Implementar lógica de criação do produto
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/${locale}/admin/products`)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link
          href={`/${locale}/admin/products`}
          className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-light text-neutral-900 mb-2">Add New Product</h1>
        <p className="text-neutral-600">Create a new product for your catalog</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="en" className="w-full">
                  <TabsList>
                    <TabsTrigger value="en">English</TabsTrigger>
                    <TabsTrigger value="pt">Português</TabsTrigger>
                    <TabsTrigger value="es">Español</TabsTrigger>
                  </TabsList>

                  <TabsContent value="en" className="space-y-4">
                    <div>
                      <Label htmlFor="name_en">Product Name (English)</Label>
                      <Input
                        id="name_en"
                        placeholder="Enter product name in English"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description_en">Description (English)</Label>
                      <Textarea
                        id="description_en"
                        placeholder="Enter product description in English"
                        rows={4}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="pt" className="space-y-4">
                    <div>
                      <Label htmlFor="name_pt">Nome do Produto (Português)</Label>
                      <Input
                        id="name_pt"
                        placeholder="Digite o nome do produto em português"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description_pt">Descrição (Português)</Label>
                      <Textarea
                        id="description_pt"
                        placeholder="Digite a descrição do produto em português"
                        rows={4}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="es" className="space-y-4">
                    <div>
                      <Label htmlFor="name_es">Nombre del Producto (Español)</Label>
                      <Input
                        id="name_es"
                        placeholder="Ingrese el nombre del producto en español"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description_es">Descripción (Español)</Label>
                      <Textarea
                        id="description_es"
                        placeholder="Ingrese la descripción del producto en español"
                        rows={4}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Product Images */}
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                    <div className="mt-4">
                      <label htmlFor="images" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-neutral-900">
                          Upload product images
                        </span>
                        <span className="mt-2 block text-sm text-neutral-500">
                          PNG, JPG, GIF up to 10MB each
                        </span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          className="sr-only"
                          multiple
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    placeholder="e.g., UBT-001"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price">Price (R$)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input
                    id="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="collection">Collection</Label>
                  <Select name="collection" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a collection" />
                    </SelectTrigger>
                    <SelectContent>
                      {collections.map((collection) => (
                        <SelectItem key={collection.id} value={collection.id}>
                          {collection.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    className="rounded border-neutral-300 text-black focus:ring-black"
                  />
                  <Label htmlFor="featured">Featured Product</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="active"
                    name="active"
                    defaultChecked
                    className="rounded border-neutral-300 text-black focus:ring-black"
                  />
                  <Label htmlFor="active">Product Active</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-4 pt-6 border-t">
          <Link href={`/${locale}/admin/products`}>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Product'}
          </Button>
        </div>
      </form>
    </div>
  )
}