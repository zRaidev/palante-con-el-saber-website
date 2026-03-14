import { BookOpen, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    navegacion: [
      { href: "#inicio", label: "Inicio" },
      { href: "#sobre-nosotros", label: "Sobre nosotros" },
      { href: "#contactanos", label: "Contáctanos" },
    ],
    recursos: [
      { href: "#", label: "Test vocacional" },
      { href: "#", label: "Guía de bachilleratos" },
      { href: "#", label: "Consejos para estudiantes" },
    ]
  }

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-white" strokeWidth={1.5} />
              <span className="font-serif text-xl font-bold text-white">
                {"Pa'lante Con El Saber"}
              </span>
            </div>
            <p className="text-white/80 max-w-md mb-4">
              Proyecto de desarrollo sostenible dedicado a empoderar a los jóvenes 
              en la elección de su bachillerato, contribuyendo a construir un futuro mejor.
            </p>
            <p className="text-white/80 font-serif italic text-lg">
              {"\"Decide bien hoy, para llegar lejos mañana\""}
            </p>
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

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            © {currentYear} {"Pa'lante Con El Saber"}. Todos los derechos reservados.
          </p>
          <p className="text-white/80 text-sm flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-400 fill-red-400" /> para el desarrollo sostenible
          </p>
        </div>
      </div>
    </footer>
  )
}
