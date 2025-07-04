// src/pages/Admin/Dashboard.jsx
export default function Dashboard() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Total Vehicles: 0</div>
          <div className="bg-white p-4 rounded shadow">Total Bookings: 0</div>
          <div className="bg-white p-4 rounded shadow">Drivers: 0</div>
        </div>
      </div>
    );
  }