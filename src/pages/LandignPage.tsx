import ContactoForm from "./ContactForm";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">PYMEBoost</h1>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:text-indigo-400">Características</a>
          <a href="#contacto" className="hover:text-indigo-400">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Impulsa tu PYME al siguiente nivel</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Plataforma moderna para gestionar leads, automatizar tareas y aumentar tus ventas sin complicaciones.
        </p>
        <a
          href="/login"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition"
        >
          Comienza ahora
        </a>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">¿Por qué elegirnos?</h3>
          <p className="text-gray-400">Una solución simple, efectiva y escalable para emprendedores.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-white">Gestión de Leads</h4>
            <p className="text-sm text-gray-300">Organiza tus contactos y haz seguimiento en tiempo real.</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-white">Automatización</h4>
            <p className="text-sm text-gray-300">Ahorra tiempo automatizando tareas repetitivas.</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-white">Reportes y métricas</h4>
            <p className="text-sm text-gray-300">Toma decisiones basadas en datos reales.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">¿Listo para crecer?, Contactanos</h3>
        <p className="text-gray-400">Únete a cientes de emprendedores que ya confían en PYMEBoost.</p>
       
      </section>

      <section id="contacto" className="bg-gray-900 px-4 py-6">
  <ContactoForm />
</section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PYMEBoost. Todos los derechos reservados.
      </footer>
    </div>
  );
}
