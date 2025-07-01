export default function BookingModal({ isOpen, onClose, car }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow w-full max-w-md relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-black" onClick={onClose}>✕</button>
          <h2 className="text-xl font-bold mb-4">Book {car.model}</h2>
          <form className="flex flex-col gap-4">
            <input className="border p-2 rounded" placeholder="Company Name" required />
            <input className="border p-2 rounded" placeholder="Contact Number" required />
            <input className="border p-2 rounded" placeholder="Email" type="email" required />
            <div className="flex gap-2">
              <input className="border p-2 rounded w-1/2" type="date" />
              <input className="border p-2 rounded w-1/2" type="date" />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
          </form>
        </div>
      </div>
    );
  }
  