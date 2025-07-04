import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import CarCard from '../components/CarCard';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ tripType: '', seats: '' });

  // Fetch local dummy API
  useEffect(() => {
    fetch('/data/cars.json')
      .then((res) => res.json())
      .then((data) => setAllCars(data))
      .catch((err) => console.error('Failed to fetch cars:', err));
  }, []);

  // Filtering logic
  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      car.model.toLowerCase().includes(search.toLowerCase()) ||
      car.driver.toLowerCase().includes(search.toLowerCase()) ||
      car.numberPlate.toLowerCase().includes(search.toLowerCase());

    const matchesTrip = filters.tripType
      ? car.tripType.toLowerCase() === filters.tripType.toLowerCase()
      : true;

    const matchesSeats = filters.seats
      ? car.seats.toString() === filters.seats
      : true;

    return matchesSearch && matchesTrip && matchesSeats;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Carousel />
      <div className="max-w-6xl mx-auto p-6">
        <Filters
          onSearchChange={setSearch}
          onFilterChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No cars found.</p>
          )}
        </div>
      </div>
      <Footer />

    </div>
  );
}
