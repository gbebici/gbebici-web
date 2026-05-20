"use client";

const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Olá, gostaria de fazer um orçamento para um evento particular!");
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "whatsapp_click",
      label: "",
      timestamp: new Date().toISOString(),
    });
  }
  window.open(`https://wa.me/5527995096289?text=${message}`, "_blank");
};



const HeroSection = () => {
  return (
    <section id="hero" className="gabriel-bebici relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Gabriel Bebici em apresentação ao vivo"
          className="w-full h-full object-cover object-[84%_15%] md:object-[92%_14%]"
          style={{ transform: "scaleX(-1)" }}
          loading="eager"
        />
        {/* Soft blur layer that fades into the image (no glass edges) */}
        <div
          aria-hidden
          className="absolute inset-0 backdrop-blur-lg md:backdrop-blur-xl"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, hsl(0 0% 0% / 0.95) 0%, hsl(0 0% 0% / 0.75) 35%, hsl(0 0% 0% / 0.3) 65%, transparent 92%)",
            maskImage:
              "linear-gradient(to left, hsl(0 0% 0% / 0.95) 0%, hsl(0 0% 0% / 0.75) 35%, hsl(0 0% 0% / 0.3) 65%, transparent 92%)",
          }}
        />
        {/* Tonal gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-background/85 via-background/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-background/20" />
        {/* Warm vignette to softly darken corners */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, hsl(20 25% 5% / 0.35) 80%, hsl(20 30% 4% / 0.65) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container flex justify-end px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <div className="w-full max-w-xl px-2 py-10 text-right md:px-4 md:py-14">
          <p className="text-gold-light text-xs md:text-sm tracking-[0.35em] uppercase mb-7 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Gabriel Bebici
          </p>
          <h1 className="font-serif-display text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl md:leading-tight font-medium mb-7 animate-fade-in-up tracking-tight [text-shadow:0_2px_24px_hsl(var(--background)/0.6)]" style={{ animationDelay: "0.4s" }}>
            Música ao Vivo para
            <br />
            <span className="italic text-gold">Eventos Selecionados</span>
          </h1>
          <p className="ml-auto max-w-lg text-foreground/90 text-base md:text-lg mb-4 leading-[1.7] animate-fade-in-up font-light [text-shadow:0_1px_12px_hsl(var(--background)/0.7)]" style={{ animationDelay: "0.6s" }}>
            A sofisticação da música brasileira em curadoria refinada.
          </p>
          <p className="ml-auto max-w-lg text-foreground/85 text-base md:text-lg mb-10 md:mb-12 leading-[1.7] animate-fade-in-up font-light [text-shadow:0_1px_12px_hsl(var(--background)/0.7)]" style={{ animationDelay: "0.7s" }}>
            Formatos Solo, Duo ou Trio para jantares e celebrações exclusivas.
          </p>
          <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="/"
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 md:gap-3 overflow-hidden rounded-full bg-[#c29c54] px-8 py-3.5 md:px-12 md:py-4.5 text-[11px] md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#1A1814] shadow-[0_10px_30px_-10px_hsl(var(--gold)/0.4)] transition-all duration-300 hover:bg-[#d6af66] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
            >
              <span className="relative">Consultar Disponibilidade</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <a href="#sobre" className="block text-gold/50 hover:text-gold transition-colors duration-300 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;