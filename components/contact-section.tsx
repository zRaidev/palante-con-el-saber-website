"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contacto@palanteconelsaber.org",
      href: "mailto:contacto@palanteconelsaber.org"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Tu ciudad, España",
      href: "#"
    }
  ]

  return (
    <section id="contactanos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¿Tienes preguntas sobre tu futuro académico? Estamos aquí para ayudarte. 
            Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="h-4 w-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary to-secondary rounded-xl text-center">
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                ¿Listo para tomar la decisión correcta?
              </h4>
              <p className="text-white/90 mb-4">
                Agenda una sesión de orientación vocacional gratuita.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Agendar cita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
