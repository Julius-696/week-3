import { useState } from 'react'
import Card from '../components/Card'

const Reservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customerName: 'John Smith',
      date: '2025-10-24',
      time: '19:00',
      guests: 4,
      status: 'Confirmed',
      phoneNumber: '555-0123',
      specialRequests: 'Window seat preferred'
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      date: '2025-10-24',
      time: '20:30',
      guests: 2,
      status: 'Pending',
      phoneNumber: '555-0124',
      specialRequests: 'Anniversary celebration'
    }
  ])

  const statusColors = {
    'Confirmed': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Cancelled': 'bg-red-100 text-red-800'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reservations</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Reservation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reservations.map(reservation => (
          <Card key={reservation.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{reservation.customerName}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(reservation.date).toLocaleDateString()} at {reservation.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[reservation.status]}`}>
                  {reservation.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {reservation.guests} guests
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {reservation.phoneNumber}
                </div>
                {reservation.specialRequests && (
                  <div className="text-gray-600 italic">
                    "{reservation.specialRequests}"
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Cancel</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Reservations