import { Target, Users, Lightbulb, Heart } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Orientación Vocacional",
      description: "Te ayudamos a descubrir tus fortalezas y pasiones para elegir el bachillerato ideal."
    },
    {
      icon: Users,
      title: "Acompañamiento Personalizado",
      description: "Mentores capacitados te guiarán en cada paso de tu proceso de decisión."
    },
    {
      icon: Lightbulb,
      title: "Información Clara",
      description: "Conoce todas las opciones de bachillerato disponibles y sus salidas profesionales."
    },
    {
      icon: Heart,
      title: "Desarrollo Sostenible",
      description: "Promovemos decisiones educativas que contribuyan a un futuro más sostenible."
    }
  ]

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos un proyecto de desarrollo sostenible dedicado a empoderar a los jóvenes 
            en una de las decisiones más importantes de su vida académica: la elección del bachillerato.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Nuestra Misión
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Brindar a cada joven las herramientas, la información y el apoyo necesarios 
            para que puedan tomar una decisión informada sobre su futuro académico, 
            contribuyendo así al desarrollo sostenible de nuestra comunidad.
          </p>
        </div>
      </div>
    </section>
  )
}
