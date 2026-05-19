"use client";
import { Music, Users, Mic } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const formats = [
  {
    icon: Mic,
    title: "Solo",
    subtitle: "Voz & Violão",
    description: "Intimista e elegante. Ideal para jantares e recepções sofisticadas onde a música cria a atmosfera perfeita.",
  },
  {
    icon: Users,
    title: "Duo",
    subtitle: "Harmonia Completa",
    description: "Preenchimento harmônico ideal para recepções e coquetéis, com a riqueza de dois instrumentos em perfeita sintonia.",
  },
  {
    icon: Music,
    title: "Trio",
    subtitle: "Energia & Balanço",
    description: "Samba-rock, Axé Retrô e Rock Nacional com a energia que celebrações especiais merecem. Festas que ninguém esquece.",
  },
];

const FormatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="formatos" className="gabriel-bebici py-28 md:py-36 bg-secondary/50">
      {/* ADICIONADO mx-auto AQUI para garantir a centralização perfeita no Vite */}
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Formatos</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium">
              Escolha o <span className="italic text-gold">formato ideal</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formats.map((format) => (
              <div
                key={format.title}
                className="group bg-card border border-border rounded-sm p-8 hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
              >
                <format.icon className="w-5 h-5 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="font-serif-display text-xl font-medium mb-1">{format.title}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-4">{format.subtitle}</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;