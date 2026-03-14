import { BookOpen, Star, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Curved gradient background */}
      <div className="relative py-20 lg:py-24">
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
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white italic leading-tight text-balance">
                Decide bien hoy, para llegar lejos mañana
              </h1>
              
              <p className="mt-3 text-white/90 text-lg md:text-xl max-w-lg">
                Te acompañamos en tu elección de bachillerato
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className=" text-black hover:text-white hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <a href="#contactanos">
                    <Users className="mr-2 h-5 w-5" />
                    Solicitar orientacion
                  </a>
                </Button>
              </div>
            </div>

            {/* Right content - Logo */}
            <div className="hidden flex-1 lg:flex justify-center md:justify-end">
              <div className="relative flex flex-col items-center backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <img src='/logo-white.png' alt="Pa'lante con el saber" className="w-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
