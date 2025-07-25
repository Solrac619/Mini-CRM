import { useState } from 'react';
import axios from '../api/axios';

export default function ContactoForm() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/formulario', formulario);
      setEnviado(true);
      setFormulario({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setError('');
    } catch (err) {
      console.error(err);
      setError('Hubo un problema al enviar el formulario.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 bg-gray-800 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Contáctanos</h3>
      {enviado ? (
        <div className="text-green-400 text-center">¡Gracias por tu mensaje! Te contactaremos pronto.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formulario.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
}
