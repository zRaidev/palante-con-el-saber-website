import LogoLoop from './LogoLoop';
import AcpLogo from '../public/alliances-logos/acp.webp';
import JuxlaeLogo from '../public/alliances-logos/juxlae.webp';
import AspadeLogo from '../public/alliances-logos/aspade.webp';
import HardplotLogo from '../public/alliances-logos/hardplot.webp';
import JudLogo from '../public/alliances-logos/jud.webp';
import SilveraLezcanoLogo from '../public/alliances-logos/silvera-lezcano.webp';
import AepsiLogo from '../public/alliances-logos/aepsi.webp';

const techLogos = [
  { node: <img src={AcpLogo.src} alt="Aspade" />, title: "Aspade", href: "https://www.pancanal.com/" },
  { node: <img src={JuxlaeLogo.src} alt="Aepsi" />, title: "Asep", href: "https://hablemosdeeducacion.com/" },
  { node: <img src={AspadeLogo.src} alt="Aspade" />, title: "Aspade", href: "https://www.aspadepanama.com/" },
  { node: <img src={HardplotLogo.src} alt="Hardplot" />, title: "Hardplot", href: "https://hardplot.com" },
  { node: <img src={JudLogo.src} alt="Jud" />, title: "Juped", href: "https://www.instagram.com/jud_usma" },
  { node: <img src={SilveraLezcanoLogo.src} alt="Silvera Lezcano" />, title: "Silvera Lezcano", href: "https://www.silalaw.com/" },
  { node: <img src={AepsiLogo.src} alt="Aepsi" />, title: "Asep", href: "https://www.instagram.com/aepsi" }
];

export default function AllianceSection() {
  return (
    <section className="pt-12 bg-gray-100">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16 text-center">Nuestras Alianzas</h2>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={100}
          gap={200}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#F5F5F5"
          ariaLabel="Technology partners"
          />
      </div>
    </section>
  );
}
