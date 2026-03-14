import { BookOpen, Star, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Curved gradient background */}
      <div className="relative">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B1538" />
              <stop offset="100%" stopColor="#1a365d" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heroGradient)"
            d="M0,0 L1440,0 L1440,360 Q720,400 0,360 Z"
          />
        </svg>
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* Left content - Slogan and CTA */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white italic leading-relaxed text-balance">
                Decide bien hoy, para llegar lejos mañana
              </h1>
              
              <p className="mt-6 text-white/90 text-lg md:text-xl max-w-lg">
                Te ayudamos a elegir el bachillerato ideal para tu futuro profesional
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-[#8B1538] hover:bg-white/90 font-semibold px-8"
                  asChild
                >
                  <a href="#bachilleratos">
                    Explorar opciones
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <a href="#contactanos">
                    <Users className="mr-2 h-5 w-5" />
                    Solicitar orientacion
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
                  <p className="text-white/80 text-sm">Jovenes orientados</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">6</p>
                  <p className="text-white/80 text-sm">Bachilleratos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                  <p className="text-white/80 text-sm">Gratuito</p>
                </div>
              </div>
            </div>

            {/* Right content - Logo */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                {/* Stars */}
                <div className="flex gap-2 mb-4">
                  <Star className="h-5 w-5 text-white fill-white" />
                  <Star className="h-6 w-6 text-white fill-white" />
                  <Star className="h-5 w-5 text-white fill-white" />
                </div>
                
                {/* Book icon with path */}
                <div className="relative">
                  <BookOpen className="h-28 w-28 md:h-36 md:w-36 text-white" strokeWidth={1} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-14 md:h-20 bg-white/80 rounded-full" />
                  </div>
                </div>
                
                {/* Brand name */}
                <div className="mt-6 text-center">
                  <h2 className="font-serif text-4xl md:text-5xl text-white font-bold italic">
                    {"Pa'lante"}
                  </h2>
                  <p className="text-white text-base md:text-lg tracking-widest uppercase mt-2">
                    Con El Saber
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
