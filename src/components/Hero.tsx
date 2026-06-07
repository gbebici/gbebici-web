import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const Hero = () => {
  const handleWhatsAppClick = () => {
    try {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_click",
          button_location: "hero_section"
        });
      }
    } catch (e) {
      console.error("Erro no GTM:", e);
    }

    const message = encodeURIComponent("Hi Gabriel, I'd like to talk about my music project!");
    window.open(`https://wa.me/5527995096289?text=${message}`, "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <span className="font-display text-[18vw] md:text-[22vw] font-black text-foreground/[0.03] whitespace-nowrap tracking-tighter">
          BEBICI
        </span>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center w-full justify-center">

        {/* Título mais alto e menos largo (scale-y-115) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[3vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[3vw] font-black leading-none tracking-tighter mt-15  flex flex-col items-center text-center w-full uppercase whitespace-nowrap scale-y-[2.5] origin-bottom"
        >
          MAKE YOUR MUSIC MATTER.
        </motion.h1>

        {/* Subtítulo colado no título */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-[2vw] sm:text-xs md:text-sm lg:text-[15px] text-muted-foreground tracking-[0.15em] md:tracking-[0.2em] uppercase mb-1 md:mb-3 whitespace-nowrap"
        >
          REMOTE PRODUCTION. GET YOUR SONG FINISHED.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full flex justify-center mb-4 md:mb-5 px-2 sm:px-0"
        >
          {/* Vídeo ocupando mais espaço (46vh) aproveitando as margens menores */}
          <div
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 w-full"
            style={{ maxWidth: "min(100%, 46vh * (16/9))" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yY3liEJC0ko"
              title="Gabriel Bebici - Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-4"
        >
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#E6C35C] hover:bg-[#D4B254] text-black font-bold text-xs md:text-sm py-3 px-8 md:py-4 md:px-12 rounded-sm transition-colors uppercase tracking-widest w-full sm:w-auto shadow-lg"
          >
            GET A FREE CONSULTATION
          </button>

          {/* Texto de rodapé maior (text-xs/sm) */}
          <div className="font-mono text-xs md:text-sm text-muted-foreground text-center opacity-80 leading-relaxed mt-1">
            <p>Available for</p>
            <p>worldwide remote collaboration.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#featured">
            <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;