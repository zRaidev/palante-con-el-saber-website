import { Target, Telescope } from "lucide-react"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations"

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Misión",
      description: "Consolidar un modelo integral de orientación vocacional reconocido como referente nacional, institucionalizado en el sistema educativo, que articule educación media, educación superior y sector productivo mediante alianzas estratégicas, programas vocacionales prácticos y una red de profesionales mentores, impactando de manera sostenible la toma de decisiones académicas."
    },
    {
      icon: Telescope,
      title: "Visión",
      description: "Consolidar un modelo de orientación vocacional innovador y sostenible que articule el sistema educativo, la educación superior y el sector productivo, contribuyendo a que los jóvenes en Panamá tomen decisiones académicas informadas y alineadas con su potencial."
    }
  ]

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <Reveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Es un proyecto juvenil panameño nacido en el Laboratorio Latinoamericano de Acción Ciudadana 2026 que acompaña a estudiantes de 9° grado en la elección de su bachillerato.
            </p>
          </div>
        </Reveal>

        {/* Features grid */}
        <StaggerContainer className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <StaggerItem key={index} direction="up" distance={30} className="flex">
              <div className="flex-1 bg-linear-to-r from-primary to-secondary animated-gradient rounded-2xl p-8 md:p-12 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-center">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="w-full outline mt-28 rounded-4xl" />

        {/* Mission statement */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-40 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Enfrentamos un problema
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              En el contexto educativo actual, un porcentaje significativo de jóvenes entre 14 y 15 años que cursan la premedia (9° grado) eligen su bachiller sin contar con un proceso estructurado de orientación académica, basándose principalmente en...
            </p>
            <a className="bg-primary text-white hover:bg-primary/90 py-2 px-12 rounded-lg mt-10 inline-block" href="/problema">
              Ver más
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
