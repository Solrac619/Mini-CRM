import { useEffect, useState } from 'react';
import type { Lead } from '../types/Lead';
import axios from '../api/axios';
import LeadTable from '../components/LeadTable';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Sidebar from '../components/Sidebard';


type Estado = 'nuevo' | 'contactado' | 'descartado';

const COLORS: Record<Estado, string> = {
  nuevo: '#6366F1',
  contactado: '#10B981',
  descartado: '#EF4444',
};


export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const obtenerLeads = async () => {
    const res = await axios.get('/formulario');
    setLeads(res.data);
  };

  useEffect(() => {
    obtenerLeads();
  }, []);

  const estadoCounts = leads.reduce(
    (acc, lead) => {
      acc[lead.estado] = (acc[lead.estado] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const pieData = Object.entries(estadoCounts).map(([estado, count]) => ({
    name: estado,
    value: count,
  }));

  const flujoData = leads
    .reduce((acc, lead) => {
      const fecha = new Date(lead.creado_en).toISOString().split('T')[0];
      const existing = acc.find((item) => item.date === fecha);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ date: fecha, count: 1 });
      }
      return acc;
    }, [] as { date: string; count: number }[])
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
     <div className="flex bg-gray-900 text-white min-h-screen">
    <Sidebar />
    <main className="flex-grow p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Dashboard de Leads</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
         {(['nuevo', 'contactado', 'descartado'] as Estado[]).map((estado) => (
  <div key={estado} className="bg-gray-800 p-4 rounded-lg shadow text-center">
    <h3 className="text-lg font-semibold capitalize">{estado}</h3>
    <p className="text-3xl font-bold" style={{ color: COLORS[estado] }}>
      {estadoCounts[estado] || 0}
    </p>
  </div>
))}

        </div>

        {/* Gráficas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* PieChart */}
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Distribución por estado</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name as keyof typeof COLORS]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* LineChart */}
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Flujo de leads nuevos</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={flujoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabla */}
        <LeadTable leads={leads} onEstadoChange={obtenerLeads} />
      </main>
    </div>
  );
}
