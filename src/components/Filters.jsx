export default function Filters({ onSearchChange, onFilterChange }) {
    return (
      <div className="bg-white p-4 shadow rounded mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="Search car/driver..."
          className="border p-2 rounded w-full md:w-1/3"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select className="border p-2 rounded" onChange={(e) => onFilterChange('tripType', e.target.value)}>
          <option value="">Trip Type</option>
          <option value="Adventure">Adventure</option>
          <option value="Business">Business</option>
        </select>
        <select className="border p-2 rounded" onChange={(e) => onFilterChange('seats', e.target.value)}>
          <option value="">Seats</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>
    );
  }
  