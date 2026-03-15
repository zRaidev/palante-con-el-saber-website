export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    navegacion: [
      { href: "#inicio", label: "Inicio" },
      { href: "#sobre-nosotros", label: "Sobre nosotros" },
      { href: "#contactanos", label: "Contáctanos" },
      { href: "#alianzas", label: "Alianzas estratégicas" },
    ],
    recursos: [
      { href: "https://www.instagram.com/palanteconelsaber", label: "Instagram" },
      { href: "https://www.tiktok.com/@palanteconelsaber", label: "Tiktok" },
      { href: "https://www.linkedin.com/company/pa-lante-con-el-saber", label: "LinkedIn" },
    ]
  }

  return (
    <footer className="bg-linear-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-white.png" className="h-8 w-8 " alt="Pa'lante Con El Saber" />
              <span className="font-serif text-xl font-bold text-white">
                {"Pa'lante Con El Saber"}
              </span>
            </div>
            <p className="text-white/80 max-w-md mb-4">
              Proyecto juvenil panameño nacido en el Laboratorio Latinoamericano de Acción Ciudadana 2026
            </p>
            <p className="text-white/80 font-serif italic text-lg">
              {"\"Decide bien hoy, para llegar lejos mañana\""}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nuestras Redes</h4>
            <ul className="space-y-2">
              {links.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

                    {/* Navigation links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              {links.navegacion.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            © {currentYear} {"Pa'lante Con El Saber"}. Todos los derechos reservados.
          </p>
          <p className="text-white/80 text-sm flex items-center gap-1">
            Made by <a className="font-bold" target="_blank" href="https://www.linkedin.com/in/i-vergara/">Isaac Vergara</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
