import { useState } from 'react';
import Card from '../components/Card';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Classic Burger',
      price: 12.99,
      category: 'Main Course',
      description: 'Juicy beef patty with lettuce, tomato, and special sauce',
      image: '/images/burger.jpg',
      available: true,
      allergies: ['gluten', 'dairy'],
      prepTime: '15 mins'
    },
    {
      id: 2,
      name: 'Caesar Salad',
      price: 8.99,
      category: 'Starters',
      description: 'Fresh romaine lettuce with parmesan and croutons',
      image: '/images/caesar-salad.jpg',
      available: true,
      allergies: ['gluten', 'dairy', 'eggs'],
      prepTime: '10 mins'
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      price: 14.99,
      category: 'Main Course',
      description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
      image: '/images/pizza.jpg',
      available: true,
      allergies: ['gluten', 'dairy'],
      prepTime: '20 mins'
    },
    {
      id: 4,
      name: 'Tiramisu',
      price: 6.99,
      category: 'Desserts',
      description: 'Classic Italian dessert with coffee and mascarpone',
      image: '/images/tiramisu.jpg',
      available: true,
      allergies: ['gluten', 'dairy', 'eggs'],
      prepTime: '5 mins'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const filteredItems = menuItems
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add New Item
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <Card key={item.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
                <span className="text-lg font-bold text-indigo-600">${item.price}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Prep time:</span>
                  <span>{item.prepTime}</span>
                </div>
                
                {item.allergies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.allergies.map(allergy => (
                      <span 
                        key={allergy}
                        className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    item.available ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  <span className="text-sm text-gray-600">
                    {item.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors">Edit</button>
                  <button className="text-red-600 hover:text-red-800 transition-colors">Delete</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;