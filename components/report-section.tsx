"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, CheckCircle, XCircle } from "lucide-react"

const reportSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Ingresa un correo electrónico válido").optional().or(z.literal("")),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
})

type ReportForm = z.infer<typeof reportSchema>

export default function ReportSection() {
  const [mailStatus, setMailStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReportForm>({
    resolver: zodResolver(reportSchema),
  })

  const onSubmit = async (data: ReportForm) => {
    setIsSubmitting(true)
    setMailStatus({ type: null, message: '' })

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_REPORT_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_REPORT_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name || 'Anónimo',
          email: data.email || 'No proporcionado',
          description: data.description,
        },
        process.env.NEXT_PUBLIC_REPORT_EMAILJS_PUBLIC_KEY
      )

      setMailStatus({ type: 'success', message: 'Reporte enviado correctamente. Gracias por tu feedback.' })
      reset()
    } catch (error) {
      console.error("Error enviando reporte:", error)
      setMailStatus({ type: 'error', message: 'Hubo un error enviando el reporte. Inténtalo de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Reportar un Problema
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ayúdanos a mejorar reportando problemas, bugs, o enviando sugerencias.
            Tu feedback es invaluable para nosotros.
          </p>
        </div>

        {/* Report form */}
        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name field (optional) */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre (opcional)</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email field (optional) */}
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico (opcional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Description field (required) */}
            <div className="space-y-2">
              <Label htmlFor="description">Descripción del reporte *</Label>
              <Textarea
                id="description"
                placeholder="Describe el problema, sugerencia o feedback que quieres reportar..."
                rows={5}
                {...register("description")}
                className={errors.description ? "border-destructive" : ""}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description.message}</p>
              )}
            </div>

            {/* Status message */}
            {mailStatus.type && (
              <Alert className={mailStatus.type === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
                {mailStatus.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={mailStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {mailStatus.message}
                </AlertDescription>
              </Alert>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Reporte
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}