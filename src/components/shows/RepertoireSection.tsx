"use client";

const genres = [
  "MPB",
  "Bossa Nova",
  "Rock Nacional",
  "Samba",
  "Axé Retrô",
  "Xote",
  "Baião",
  "Samba-Rock",
  "Reggae",
  "Internacionais",
];

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const RepertoireSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="repertorio" className="gabriel-bebici py-28 md:py-36">
      {/* ADICIONADO mx-auto AQUI para centralizar perfeitamente no build do Vite */}
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Curadoria Musical</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium">
              <span className="italic text-gold">Repertório</span>
            </h2>
            <p className="text-muted-foreground text-sm font-light mt-4 max-w-lg mx-auto">
              Uma seleção refinada dos melhores gêneros da música brasileira, adaptada ao tom do seu evento.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-6 py-3 border border-gold/20 rounded-sm text-sm tracking-wider uppercase text-gold-light hover:bg-gold/10 hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;