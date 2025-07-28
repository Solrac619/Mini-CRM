// src/pages/AvisoPrivacidad.tsx
export default function AvisoPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-400">Aviso de Privacidad y Seguridad</h1>

      <p className="mb-4">
        En <strong>MiniCRM</strong>, respetamos y protegemos la privacidad de nuestros usuarios. Este aviso de privacidad explica cómo recopilamos, usamos y protegemos tus datos personales cuando interactúas con nuestro sitio web o servicios.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300">1. Datos personales que recopilamos</h2>
      <p className="mb-4">
        Cuando completas el formulario de contacto, recopilamos los siguientes datos:
        <ul className="list-disc list-inside ml-4">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono (opcional)</li>
          <li>Mensaje que nos envías</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300">2. Uso de la información</h2>
      <p className="mb-4">
        Utilizamos tus datos únicamente para responder a tus solicitudes de contacto, brindar soporte y ofrecerte información relevante sobre nuestros servicios. No compartimos tus datos con terceros sin tu consentimiento.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300">3. Protección de datos</h2>
      <p className="mb-4">
        Tus datos se almacenan de forma segura y se protegen mediante protocolos de seguridad estándar. Además, este formulario utiliza Google reCAPTCHA para evitar el uso indebido por bots o usuarios malintencionados.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300">4. Derechos del usuario</h2>
      <p className="mb-4">
        En cualquier momento puedes solicitar la actualización, eliminación o acceso a tus datos personales mediante un correo a: <a href="mailto:soporte@minicrm.com" className="text-indigo-400 underline">soporte@minicrm.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300">5. Cambios en el aviso</h2>
      <p className="mb-4">
        Este aviso puede actualizarse en el futuro. Si realizamos cambios importantes, te notificaremos en esta página.
      </p>

      <p className="mt-8 text-sm text-gray-400">Última actualización: Julio 2025</p>
    </div>
  );
}
