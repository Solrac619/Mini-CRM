import type { Lead } from '../types/Lead';
import axios from '../api/axios';

interface Props {
  leads: Lead[];
  onEstadoChange: () => void;
}

export default function LeadTable({ leads, onEstadoChange }: Props) {
  const actualizarEstado = async (id: number, estado: string) => {
    await axios.patch(`/formulario/${id}/estado`, { estado });
    onEstadoChange();
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-800 bg-gray-900 p-4">
      <table className="min-w-full divide-y divide-gray-700 text-sm text-gray-300">
        <thead className="bg-gray-800 text-gray-400 uppercase text-xs font-semibold tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left">Nombre</th>
            <th className="px-6 py-3 text-left">Correo</th>
            <th className="px-6 py-3 text-left">Teléfono</th>
            <th className="px-6 py-3 text-left">Mensaje</th>
            <th className="px-6 py-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="hover:bg-gray-800 transition duration-150"
            >
              <td className="px-6 py-4">{lead.nombre}</td>
              <td className="px-6 py-4">{lead.correo}</td>
              <td className="px-6 py-4">{lead.telefono}</td>
              <td className="px-6 py-4 max-w-sm truncate">{lead.mensaje}</td>
              <td className="px-6 py-4">
                <select
                  value={lead.estado}
                  onChange={(e) => actualizarEstado(lead.id, e.target.value)}
                  className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option value="nuevo">Nuevo</option>
                  <option value="contactado">Contactado</option>
                  <option value="descartado">Descartado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
