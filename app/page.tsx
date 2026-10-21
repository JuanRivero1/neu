const grad = "bg-gradient-to-br from-blue-500 to-cyan-500";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold text-white">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold ${grad}`}>A</span>
      AutoFlow
    </a>
  );
}

const stats = [
  ["2+", "Proyectos demo listos"],
  ["n8n", "Herramienta principal"],
  ["2 días", "Tiempo de entrega típico"],
  ["100%", "Código + workflows tuyos"],
];

const services = [
  { title: "Gestión documental", text: "Facturas, PDFs y emails procesados automáticamente, sin copiar y pegar.", icon: "📄" },
  { title: "Reservas y agendas", text: "Chatbots de citas que reservan, consultan y cancelan por ti.", icon: "📅" },
  { title: "Flujos a medida", text: "Conecto tus herramientas y diseño el flujo exacto que tu negocio necesita.", icon: "⚙️" },
];

const projects = [
  {
    badge: "Gestoría / Contabilidad",
    title: "Automatización de facturas y clientes",
    text: "Sistema que recibe facturas por email, extrae datos con OCR, valida, carga en Google Sheets y notifica.",
    features: ["Recepción automática por email", "Extracción de datos con OCR", "Validación y carga en Google Sheets", "Notificaciones al cliente y al gestor"],
    icon: (
      <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 9h3a1 1 0 0 1 1 1v11M8 8h4M8 12h4M8 16h4" />
    ),
  },
  {
    badge: "Peluquerías / Belleza",
    title: "Chatbot de citas con agenda",
    text: "Bot de WhatsApp/Telegram que permite reservar, consultar y cancelar citas sincronizado con Google Calendar.",
    features: ["Reservas 24/7 por WhatsApp o Telegram", "Consulta y cancelación de citas", "Sincronización con Google Calendar", "Recordatorios automáticos"],
    icon: (
      <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.1 7.9 20 19M8.1 16.1 20 5" />
    ),
  },
];

const steps = [
  ["01", "Descubrimiento", "Entiendo tu proceso actual y detecto qué merece automatizarse."],
  ["02", "Diseño del flujo", "Dibujo el flujo y acordamos alcance, herramientas y plazos."],
  ["03", "Construcción", "Desarrollo y pruebo el workflow con tus datos reales."],
  ["04", "Entrega y soporte", "Te entrego todo documentado y me quedo para resolver dudas."],
];

const input =
  "w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#servicios" className="transition hover:text-white">Servicios</a>
            <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
            <a href="#proceso" className="transition hover:text-white">Cómo trabajo</a>
          </div>
          <a href="#contacto" className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400">
            Contactar
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-40 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Especialista en n8n + Python
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Automatizo procesos que{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">te roban tiempo</span>{" "}
              todos los días
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Diseño e implemento flujos de automatización reales con n8n, Python y herramientas cloud. Resultados medibles en días, no en meses.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#proyectos" className="rounded-xl bg-blue-500 px-7 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-400">
                Ver proyectos reales
              </a>
              <a href="#contacto" className="rounded-xl border border-slate-700 px-7 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-400">
                Hablar de tu caso
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800/60 bg-slate-900/30 px-6 py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map(([v, l]) => (
              <div key={l}>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">{v}</div>
                <div className="mt-2 text-sm text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Qué puedo automatizar</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:-translate-y-1 hover:border-blue-500/50">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Proyectos reales que puedes ver</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-500/50">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${grad}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden>
                    {p.icon}
                  </svg>
                </div>
                <span className="mt-6 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">{p.badge}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-slate-400">{p.text}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-8 rounded-xl bg-blue-500 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-400">
                  Quiero algo similar
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Cómo trabajo</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">{n}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-2xl scroll-mt-16 px-6 py-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">¿Listo para automatizar?</h2>
          <form className="mt-10 space-y-5 rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
            <div>
              <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-white">Nombre</label>
              <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" className={input} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">Email</label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" className={input} />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-white">¿Qué quieres automatizar?</label>
              <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntame tu caso..." className={input} />
            </div>
            <button type="button" className="w-full rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400">
              Enviar mensaje
            </button>
            <p className="text-center text-xs text-slate-500">
              Por ahora el formulario es visual. Próximamente se conectará a un workflow de n8n.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <Logo />
          <p>Hecho con n8n, Next.js y mucho café ☕</p>
          <p>© 2026 AutoFlow. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
