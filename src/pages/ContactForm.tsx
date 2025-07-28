import { useState } from 'react';
import axios from '../api/axios';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactoForm() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!aceptaPolitica) {
      setError('Debes aceptar el aviso de privacidad.');
      return;
    }

    if (!captchaToken) {
      setError('Por favor, completa el CAPTCHA.');
      return;
    }

    try {
      await axios.post('/formulario', { ...formulario, captchaToken }); // Puedes validar token en backend si lo deseas
      setEnviado(true);
      setFormulario({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setAceptaPolitica(false);
      setCaptchaToken(null);
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
          {/* Campos existentes */}
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

          {/* Aviso de privacidad */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={aceptaPolitica}
              onChange={() => setAceptaPolitica(!aceptaPolitica)}
              className="mt-1"
            />
            <div className="flex justify-center items-center">
            <label className="text-gray-300 text-m">
              He leído y acepto la <strong>Política de Privacidad</strong> y
              Acepto el{' '}
              <a href="/aviso-privacidad" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
                aviso de privacidad
              </a>.
            </label>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <ReCAPTCHA
  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
  onChange={handleCaptchaChange}
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
