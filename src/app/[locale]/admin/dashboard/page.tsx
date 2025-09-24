import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertCircle
} from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Total Products',
      value: '24',
      change: '+2 from last month',
      changeType: 'increase',
      icon: Package,
    },
    {
      name: 'Total Orders',
      value: '128',
      change: '+12 from last month',
      changeType: 'increase',
      icon: ShoppingCart,
    },
    {
      name: 'Total Customers',
      value: '67',
      change: '+8 from last month',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Revenue',
      value: 'R$ 45,320',
      change: '+15.3% from last month',
      changeType: 'increase',
      icon: DollarSign,
    },
  ]

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Ana Silva',
      product: 'Flowing Black Dress',
      amount: 'R$ 890,00',
      status: 'Shipped',
      date: '2024-01-15',
    },
    {
      id: '#ORD-002',
      customer: 'Carlos Santos',
      product: 'Artisan Necklace Gold',
      amount: 'R$ 450,00',
      status: 'Processing',
      date: '2024-01-14',
    },
    {
      id: '#ORD-003',
      customer: 'Maria Oliveira',
      product: 'Ceramic Vase White',
      amount: 'R$ 280,00',
      status: 'Delivered',
      date: '2024-01-13',
    },
    {
      id: '#ORD-004',
      customer: 'João Costa',
      product: 'Leather Handbag Black',
      amount: 'R$ 650,00',
      status: 'Pending',
      date: '2024-01-13',
    },
  ]

  const lowStockProducts = [
    {
      name: 'Flowing Black Dress',
      sku: 'UBT-001',
      stock: 2,
      collection: 'Bergamot',
    },
    {
      name: 'Silver Ring Minimal',
      sku: 'UBT-015',
      stock: 1,
      collection: 'Elements',
    },
    {
      name: 'Ceramic Bowl Set',
      sku: 'UBT-008',
      stock: 3,
      collection: 'Earth',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-light text-neutral-900 mb-2">Dashboard</h1>
        <p className="text-neutral-600">Overview of your store performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-600">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-neutral-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-neutral-900">
                {stat.value}
              </div>
              <p className="flex items-center text-xs text-neutral-600 mt-1">
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-light">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-200">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-neutral-900">{order.id}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-neutral-100 text-neutral-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600">{order.customer} • {order.product}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-neutral-500">{order.date}</span>
                          <span className="font-medium text-neutral-900">{order.amount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Alert */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-light flex items-center">
                <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                Low Stock Alert
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-200">
                {lowStockProducts.map((product) => (
                  <div key={product.sku} className="p-4 hover:bg-neutral-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-neutral-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {product.sku} • {product.collection}
                        </p>
                      </div>
                      <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.stock <= 2 ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {product.stock} left
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}