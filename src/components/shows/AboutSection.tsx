"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="gabriel-bebici py-28 md:py-36">
      <div className="container px-6">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Image */}
          <div className="relative">
            <a href="https://www.instagram.com/gbebici/" target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] overflow-hidden rounded-sm group">
              <img
                src="/artist-portrait.jpg"
                alt="Gabriel Bebici"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </a>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-sm" />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">O Diferencial</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium mb-6 leading-tight">
              Versatilidade
              <br />
              <span className="italic text-gold">Refinada</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              <p>
                Com um repertório de milhares de músicas e uma tradição familiar
                que atravessa generations, Gabriel Bebici une autenticidade,
                sensibilidade e técnica apurada em cada apresentação.
              </p>
              <p>
                Um evento especial de verdade merece a música perfeita. E essa
                curadoria musical personalizada é feita em tempo real pelo
                artista, acompanhando o feeling dos convidados. Do MPB mais
                intimista ao axé retrô envolvente, sempre com a sensibilidade
                que ocasiões especiais exigem.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gold font-serif-display text-2xl">20+</p>
                  <p className="text-muted-foreground text-xs tracking-wide uppercase mt-1">Anos de Palco</p>
                </div>
                <div className="text-center">
                  <p className="text-gold font-serif-display text-2xl">700+</p>
                  <p className="text-muted-foreground text-xs tracking-wide uppercase mt-1">Eventos</p>
                </div>
                <div className="text-center">
                  <p className="text-gold font-serif-display text-2xl">1000+</p>
                  <p className="text-muted-foreground text-xs tracking-wide uppercase mt-1">Músicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;