import { Microscope, Calculator, Palette, Briefcase, Globe, Cpu } from "lucide-react"

export default function BachilleratosSection() {
  const bachilleratos = [
    {
      icon: Microscope,
      title: "Ciencias de la Salud",
      description: "Para quienes sueñan con carreras en medicina, enfermería, farmacia o biología.",
      careers: ["Medicina", "Enfermería", "Farmacia", "Biología"]
    },
    {
      icon: Calculator,
      title: "Ciencias y Tecnología",
      description: "Ideal para futuros ingenieros, matemáticos y científicos.",
      careers: ["Ingenierías", "Matemáticas", "Física", "Arquitectura"]
    },
    {
      icon: Palette,
      title: "Humanidades y Artes",
      description: "Explora tu creatividad y pasión por las artes y las humanidades.",
      careers: ["Bellas Artes", "Diseño", "Historia del Arte", "Música"]
    },
    {
      icon: Globe,
      title: "Ciencias Sociales",
      description: "Comprende la sociedad y prepárate para carreras que impactan comunidades.",
      careers: ["Derecho", "Psicología", "Periodismo", "Sociología"]
    },
    {
      icon: Briefcase,
      title: "Administración",
      description: "Desarrolla habilidades de gestión y liderazgo empresarial.",
      careers: ["ADE", "Economía", "Contabilidad", "Marketing"]
    },
    {
      icon: Cpu,
      title: "Tecnológico",
      description: "Sumérgete en el mundo de la tecnología y la innovación digital.",
      careers: ["Informática", "Electrónica", "Robótica", "Telecomunicaciones"]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Opciones de Bachillerato
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora las diferentes modalidades de bachillerato y descubre cuál se adapta mejor a tus intereses y metas profesionales.
          </p>
        </div>

        {/* Bachilleratos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bachilleratos.map((bach, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <bach.icon className="h-10 w-10 text-white mb-2" />
                <h3 className="font-serif text-xl font-bold text-white">
                  {bach.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {bach.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {bach.careers.map((career, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
