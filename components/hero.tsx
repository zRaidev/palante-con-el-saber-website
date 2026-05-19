"use client"

import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations"

const floatingShapes = [
  { size: 6, x: "10%", y: "25%", duration: 6, delay: 0 },
  { size: 4, x: "85%", y: "20%", duration: 8, delay: 1 },
  { size: 8, x: "70%", y: "65%", duration: 7, delay: 2 },
  { size: 5, x: "20%", y: "75%", duration: 9, delay: 0.5 },
  { size: 3, x: "50%", y: "35%", duration: 5, delay: 1.5 },
  { size: 12, x: "90%", y: "45%", duration: 10, delay: 0.8, opacity: 0.15 },
]

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

        {/* Floating decorative shapes */}
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 pointer-events-none"
            style={{
              width: shape.size * 4,
              height: shape.size * 4,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              y: [0, -20, 0, 15, 0],
              opacity: [0.2, 0.5, 0.2, 0.4, 0.2],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <FadeIn direction="up" distance={40}>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white italic leading-tight text-balance">
                  Decide bien hoy, para llegar lejos mañana
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" distance={30} delay={0.2}>
                <p className="mt-3 text-white/90 text-lg md:text-xl max-w-lg">
                  Te acompañamos en tu elección de bachillerato
                </p>
              </FadeIn>
              
              <FadeIn direction="up" distance={20} delay={0.4}>
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
              </FadeIn>
            </div>

            {/* Right content - Logo */}
            <div className="hidden flex-1 lg:flex justify-center md:justify-end">
              <FadeIn direction="right" distance={60} delay={0.3} duration={0.9}>
                <div className="relative flex flex-col items-center backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <motion.img
                    src='/logo-white.png'
                    alt="Pa'lante con el saber"
                    className="w-80"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
