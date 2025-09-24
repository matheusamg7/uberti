'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Package,
  ArrowUpDown
} from 'lucide-react'

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - substituir por dados reais do Supabase
  const collections = [
    {
      id: '1',
      slug: 'bergamot',
      name: {
        en: 'Bergamot',
        pt: 'Bergamota',
        es: 'Bergamota'
      },
      description: {
        en: 'A collection inspired by the delicate essence of bergamot',
        pt: 'Uma coleção inspirada na essência delicada da bergamota',
        es: 'Una colección inspirada en la esencia delicada de la bergamota'
      },
      heroImage: '/mock/bergamot-hero.jpg',
      isActive: true,
      displayOrder: 1,
      productCount: 8,
      createdAt: '2024-01-10',
    },
    {
      id: '2',
      slug: 'elements',
      name: {
        en: 'Elements',
        pt: 'Elementos',
        es: 'Elementos'
      },
      description: {
        en: 'Celebrating the fundamental elements of nature',
        pt: 'Celebrando os elementos fundamentais da natureza',
        es: 'Celebrando los elementos fundamentales de la naturaleza'
      },
      heroImage: '/mock/elements-hero.jpg',
      isActive: true,
      displayOrder: 2,
      productCount: 12,
      createdAt: '2023-11-15',
    },
    {
      id: '3',
      slug: 'earth',
      name: {
        en: 'Earth',
        pt: 'Terra',
        es: 'Tierra'
      },
      description: {
        en: 'Grounded in the raw beauty of earthen materials',
        pt: 'Baseada na beleza bruta dos materiais terrosos',
        es: 'Basada en la belleza cruda de los materiales terrosos'
      },
      heroImage: '/mock/earth-hero.jpg',
      isActive: false,
      displayOrder: 3,
      productCount: 6,
      createdAt: '2023-09-20',
    },
    {
      id: '4',
      slug: 'urban',
      name: {
        en: 'Urban',
        pt: 'Urbano',
        es: 'Urbano'
      },
      description: {
        en: 'Contemporary pieces for the modern urban lifestyle',
        pt: 'Peças contemporâneas para o estilo de vida urbano moderno',
        es: 'Piezas contemporáneas para el estilo de vida urbano moderno'
      },
      heroImage: '/mock/urban-hero.jpg',
      isActive: true,
      displayOrder: 4,
      productCount: 15,
      createdAt: '2024-02-01',
    },
  ]

  const filteredCollections = collections.filter(collection =>
    collection.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    collection.slug.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (collectionId: string) => {
    // Implementar lógica de exclusão
    console.log('Delete collection:', collectionId)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-light text-neutral-900 mb-2">Collections</h1>
          <p className="text-neutral-600">Manage your product collections and their stories</p>
        </div>
        <Link href="collections/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Collection
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCollections.map((collection) => (
          <Card key={collection.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-[4/3] bg-neutral-100 rounded-t-lg flex items-center justify-center">
                <span className="text-neutral-400 text-sm font-medium">
                  Hero Image
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-1">
                    {collection.name.en}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    /{collection.slug}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={collection.isActive ? 'default' : 'secondary'}>
                    {collection.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </div>

              <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                {collection.description.en}
              </p>

              <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                  <Package className="h-4 w-4" />
                  <span>{collection.productCount} products</span>
                </div>
                <span>Order: {collection.displayOrder}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Created {new Date(collection.createdAt).toLocaleDateString()}
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    asChild
                  >
                    <Link href={`collections/${collection.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    asChild
                  >
                    <Link href={`collections/${collection.id}/edit`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDelete(collection.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCollections.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-neutral-400 mb-4">
              <Package className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              No collections found
            </h3>
            <p className="text-neutral-500 mb-4">
              {searchQuery
                ? `No collections match "${searchQuery}"`
                : 'Get started by creating your first collection'
              }
            </p>
            {!searchQuery && (
              <Link href="collections/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Collection
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}