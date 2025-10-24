import { useState } from 'react'
import Card from '../components/Card'

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      tableNumber: 5,
      customer: 'John Smith',
      items: [
        { name: 'Classic Burger', quantity: 2, price: 12.99 },
        { name: 'Caesar Salad', quantity: 1, price: 8.99 }
      ],
      status: 'In Progress',
      time: '10:30 AM',
      total: 34.97,
      notes: 'No onions in burger'
    },
    {
      id: 2,
      tableNumber: 3,
      customer: 'Sarah Johnson',
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 14.99 },
        { name: 'Iced Tea', quantity: 2, price: 3.99 }
      ],
      status: 'Ready',
      time: '10:45 AM',
      total: 22.97,
      notes: 'Extra cheese on pizza'
    },
    {
      id: 3,
      tableNumber: 8,
      customer: 'Mike Wilson',
      items: [
        { name: 'Pasta Carbonara', quantity: 1, price: 16.99 },
        { name: 'House Wine', quantity: 1, price: 8.99 }
      ],
      status: 'Pending',
      time: '11:00 AM',
      total: 25.98,
      notes: ''
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('All');

  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Ready': 'bg-green-100 text-green-800',
    'Completed': 'bg-gray-100 text-gray-800'
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = statusFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Order
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        {['All', 'Pending', 'In Progress', 'Ready', 'Completed'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-md transition-colors ${
              statusFilter === status
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOrders.map(order => (
          <Card key={order.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Table {order.tableNumber}</h3>
                  <p className="text-sm text-gray-500">{order.customer} • {order.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </div>

              <div className="space-y-2 my-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{item.quantity}x</span> {item.name}
                    </div>
                    <span>${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {order.notes && (
                <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="font-medium">Notes:</span> {order.notes}
                </div>
              )}

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-lg font-bold text-gray-900">Total: ${order.total.toFixed(2)}</span>
                <div className="flex space-x-3">
                  <select
                    className="rounded-md border-gray-300 text-sm"
                    value={order.status}
                    onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Ready">Ready</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button className="text-red-600 hover:text-red-800 transition-colors">Cancel</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Orders