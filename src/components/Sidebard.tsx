// src/components/Sidebar.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
  <div
  className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ${
    isOpen ? 'w-64' : 'w-16'
  } min-h-screen`}
>

      {/* Botón de toggle */}
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          ☰
        </button>
        {isOpen && <span className="font-bold">MiniCRM</span>}
      </div>

      {/* Navegación */}
      <nav className="flex-1">
        <ul className="space-y-2 mt-4">
          <li
            className="px-4 py-2 hover:bg-gray-700 flex items-center cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <LayoutDashboard className="w-5 h-5" />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </li>
        </ul>
      </nav>

      {/* Cerrar sesión */}
      <div
        className="px-4 py-4 border-t border-gray-700 flex items-center cursor-pointer hover:bg-gray-700"
        onClick={handleLogout}
      >
        <LogOut className="w-5 h-5" />
        {isOpen && <span className="ml-3">Cerrar sesión</span>}
      </div>
    </div>
  );
}
