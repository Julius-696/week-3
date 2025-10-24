const DashboardStats = () => {
  const stats = [
    { name: 'Total Orders', stat: '24', change: '12%', changeType: 'increase' },
    { name: 'Avg. Order Value', stat: '$45.50', change: '2.3%', changeType: 'increase' },
    { name: 'Active Tables', stat: '8/12', change: '4%', changeType: 'decrease' },
    { name: 'Pending Reservations', stat: '6', change: '8%', changeType: 'increase' },
  ];

  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Last 24 hours</h3>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
              </div>

              <div
                className={`${
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                } inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0`}
              >
                {item.changeType === 'increase' ? '↑' : '↓'} {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DashboardStats;