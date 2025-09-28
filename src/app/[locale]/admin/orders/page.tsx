'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Search,
  Eye,
  Package,
  Clock,
  Truck,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock data - substituir por dados reais do Supabase
  const orders = [
    {
      id: '1',
      orderNumber: 'ORD-001',
      customer: {
        name: 'Ana Silva',
        email: 'ana@example.com'
      },
      status: 'delivered',
      total: 890.00,
      itemCount: 1,
      products: ['Flowing Black Dress'],
      createdAt: '2024-01-15T10:30:00Z',
      shippedAt: '2024-01-16T14:20:00Z',
      deliveredAt: '2024-01-18T09:15:00Z',
    },
    {
      id: '2',
      orderNumber: 'ORD-002',
      customer: {
        name: 'Carlos Santos',
        email: 'carlos@example.com'
      },
      status: 'shipped',
      total: 1140.00,
      itemCount: 2,
      products: ['Artisan Necklace Gold', 'Flowing Black Dress'],
      createdAt: '2024-01-14T15:45:00Z',
      shippedAt: '2024-01-15T11:30:00Z',
    },
    {
      id: '3',
      orderNumber: 'ORD-003',
      customer: {
        name: 'Maria Oliveira',
        email: 'maria@example.com'
      },
      status: 'processing',
      total: 930.00,
      itemCount: 3,
      products: ['Ceramic Vase White', 'Silver Ring Minimal', 'Leather Handbag'],
      createdAt: '2024-01-13T09:20:00Z',
    },
    {
      id: '4',
      orderNumber: 'ORD-004',
      customer: {
        name: 'João Costa',
        email: 'joao@example.com'
      },
      status: 'pending',
      total: 650.00,
      itemCount: 1,
      products: ['Leather Handbag Black'],
      createdAt: '2024-01-13T16:10:00Z',
    },
    {
      id: '5',
      orderNumber: 'ORD-005',
      customer: {
        name: 'Paula Mendes',
        email: 'paula@example.com'
      },
      status: 'cancelled',
      total: 280.00,
      itemCount: 1,
      products: ['Ceramic Bowl Set'],
      createdAt: '2024-01-12T12:00:00Z',
    },
  ]

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />
      case 'processing':
        return <Package className="h-4 w-4" />
      case 'shipped':
        return <Truck className="h-4 w-4" />
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />
      case 'cancelled':
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'secondary'
      case 'processing':
        return 'default'
      case 'shipped':
        return 'default'
      case 'delivered':
        return 'default'
      case 'cancelled':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-light text-neutral-900 mb-2">Orders</h1>
        <p className="text-neutral-600">Manage customer orders and fulfillment</p>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-neutral-900">
              {orderStats.total}
            </div>
            <p className="text-sm text-neutral-600">Total Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-orange-600">
              {orderStats.pending}
            </div>
            <p className="text-sm text-neutral-600">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-blue-600">
              {orderStats.processing}
            </div>
            <p className="text-sm text-neutral-600">Processing</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-purple-600">
              {orderStats.shipped}
            </div>
            <p className="text-sm text-neutral-600">Shipped</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-green-600">
              {orderStats.delivered}
            </div>
            <p className="text-sm text-neutral-600">Delivered</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search orders, customer name, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-neutral-900">
                        {order.orderNumber}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-neutral-900">
                        {order.customer.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {order.customer.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      <p className="text-sm text-neutral-700 truncate">
                        {order.products.join(', ')}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getStatusColor(order.status) as 'default' | 'secondary' | 'destructive' | 'outline'}
                      className="flex items-center gap-1 w-fit"
                    >
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">
                      R$ {order.total.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-neutral-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <Link href={`orders/${order.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {filteredOrders.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-neutral-400 mb-4">
              <Package className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">
              No orders found
            </h3>
            <p className="text-neutral-500">
              {searchQuery || statusFilter !== 'all'
                ? 'Try adjusting your search or filters'
                : 'Orders will appear here once customers start purchasing'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}