import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ReportSection from '@/components/report-section'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Reportar | Pa'lante Con El Saber",
  description: "Envía un reporte sobre problemas, sugerencias o feedback para mejorar Pa'lante Con El Saber.",
  keywords: ["reporte", "feedback", "problemas", "Pa'lante Con El Saber"],
  openGraph: {
    title: "Reportar | Pa'lante Con El Saber",
    description: "Envía un reporte sobre problemas, sugerencias o feedback.",
    url: "https://palanteconelsaber.site/report",
    siteName: "Pa'lante Con El Saber",
    images: [{ url: "https://palanteconelsaber.site/logo-white.png" }],
    locale: "es_PA",
    type: "website",
  },
}

export default function Report() {
  return (
    <div>
      <Navbar />
      <ReportSection />
      <Footer />
    </div>
  );
}