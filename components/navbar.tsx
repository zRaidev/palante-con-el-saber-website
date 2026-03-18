"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/problema", label: "El problema" },
    { href: "/equipo", label: "Nuestro equipo" },
    { href: "/#contactanos", label: "Contáctanos" }
  ]

  return (
    <div className='sticky top-0 z-50 shadow-sm'>
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <nav className="relative container mx-auto px-4 py-2">
        <div className="flex items-center justify-between relative">
          {/* Logo - Solo imagen */}
          <a href="#" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Pa'lante con el saber"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground font-medium hover:text-primary transition-colors underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
    </header>
    {/* Mobile Navigation */}
<div
  className={`
    absolute left-0 top-[35%] w-full bg-background border-t border-border z-30
    transition-transform duration-350 ease-in-out
    ${isMenuOpen ? "translate-y-[35%]" : "-translate-y-[65%]"}
  `}
>
  <ul className="flex flex-col gap-4 p-4">
    {navLinks.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className="text-foreground font-medium hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
</div>
    </div>
  )
}
