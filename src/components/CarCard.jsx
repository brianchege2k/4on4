import { useState } from 'react';
import BookingModal from './BookingModal';

export default function CarCard({ car }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
        <img src={car.image} alt={car.model} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{car.model}</h2>
          <p className="text-sm text-gray-600">{car.driver}</p>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>{car.seats} Seats</span>
            <span>{car.tripType}</span>
          </div>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
            onClick={() => setModalOpen(true)}
          >
            Book / Inquire
          </button>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} car={car} />
    </>
  );
}
