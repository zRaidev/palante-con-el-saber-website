import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Equipo() {
  return (
    <div>
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  );
}


import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  category: "Coordinador" | "Mentor";
  image: string;
}

const team: TeamMember[] = [
  // --- COORDINADORES (11) ---
  { name: "Eduardo Navarro", role: "Coordinador General", category: "Coordinador", image: "/team/coord-1.jpg" },
  { name: "Gabriel Almengor", role: "Subcoordinador General", category: "Coordinador", image: "/team/coord-2.jpg" },
  { name: "Emely Van Horn", role: "Secretaria General", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Elías González", role: "Director de Presupuesto", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Isaac Vergara", role: "Coord. de Académico", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Makenzie Agrazal", role: "Coord. de Académica", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Paola Fong", role: "Coord. de Datos", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Alfonso Quintero", role: "Coord. de Datos", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Sharlis Herrera", role: "Coord. de Logística", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Samantha Araúz", role: "Coord. de Redes", category: "Coordinador", image: "/team/coord-3.jpg" },
  { name: "Noreida Machado", role: "Coord. de Redes", category: "Coordinador", image: "/team/coord-3.jpg" },
  // ... Agrega los otros 8 aquí
  
  // --- MENTORES (3) ---
  { name: "Julio César Barría", role: "Mentor", category: "Mentor", image: "/team/mentor-3.jpg" },
  { name: "Yarlines García", role: "Mentor Asistente", category: "Mentor", image: "/team/mentor-2.jpg" },
  { name: "Aarón Murillo", role: "Mentor Académico", category: "Mentor", image: "/team/mentor-1.jpg" },
];

export function TeamSection() {
  const coordinators = team.filter((m) => m.category === "Coordinador");
  const mentors = team.filter((m) => m.category === "Mentor");

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un grupo multidisciplinario comprometido con la educación y el desarrollo 
            de nuevas oportunidades para todos.
          </p>
        </div>

        {/* Sección de Coordinadores */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-blue-700 mb-8 border-l-4 border-blue-700 pl-4">
            Coordinadores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coordinators.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Sección de Mentores */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-700 mb-8 border-l-4 border-emerald-700 pl-4">
            Mentores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {mentors.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
      {/* Contenedor de Imagen con el Aspect Ratio 510x740 */}
      <div className="relative aspect-510/740 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradiente para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info debajo de la foto */}
      <div className="p-5">
        <h4 className="text-lg font-bold text-slate-800">{member.name}</h4>
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </div>
  );
}