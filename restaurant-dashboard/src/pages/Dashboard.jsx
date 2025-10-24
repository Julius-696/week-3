import Card from '../components/Card';
import DashboardStats from '../components/DashboardStats';

const Dashboard = () => {
  const recentOrders = [
    { id: 1, table: 5, items: ['Classic Burger (2)', 'Caesar Salad'], total: 34.97, status: 'In Progress' },
    { id: 2, table: 3, items: ['Margherita Pizza', 'Iced Tea (2)'], total: 22.97, status: 'Ready' },
    { id: 3, table: 8, items: ['Pasta Carbonara', 'House Wine'], total: 28.98, status: 'Pending' }
  ];

  const popularItems = [
    { name: 'Classic Burger', orders: 45, rating: 4.8 },
    { name: 'Margherita Pizza', orders: 38, rating: 4.7 },
    { name: 'Caesar Salad', orders: 32, rating: 4.5 },
    { name: 'Pasta Carbonara', orders: 28, rating: 4.6 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Table {order.table}</p>
                    <p className="text-sm text-gray-500">{order.items.join(', ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${order.total}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'Ready' ? 'bg-green-100 text-green-800' :
                      order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Items</h2>
            <div className="space-y-4">
              {popularItems.map(item => (
                <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.orders} orders this week</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium text-gray-900">{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;