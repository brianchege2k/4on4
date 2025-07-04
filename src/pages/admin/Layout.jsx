// src/pages/Admin/Layout.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Admin</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="dashboard" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Dashboard
          </NavLink>
          <NavLink to="vehicles" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Vehicles
          </NavLink>
          <NavLink to="bookings" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Bookings
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
} 








