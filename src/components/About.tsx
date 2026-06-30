import { motion } from "framer-motion";
import studioPortrait from "@/assets/studio-portrait.jpeg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    // 1. Mudamos para min-h-dvh, centralizamos tudo e reduzimos o padding global para py-8
    <section id="about" className="min-h-dvh flex flex-col justify-center items-center py-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
        <span className="font-display text-[40vw] md:text-[20vw] font-extrabold text-foreground/[0.015] leading-none -rotate-90">
          15+
        </span>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 2. Margem inferior reduzida de mb-3 para mb-1 */}
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary mb-1">
              About Me
            </p>

            {/* 3. Ajustado o tamanho no md (de 6xl para 5xl) e reduzida a margem mb-6 para mb-4 */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-[0.95]">
              15+ YEARS<br />
              <span className="text-muted-foreground">CRAFTING</span><br />
              <span className="text-muted-foreground">SOUND</span>
            </h2>

            {/* 4. Textos levemente mais responsivos e margens ajustadas */}
            <p className="font-mono text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">
              Brazilian music producer with 15+ years of experience,
              working remotely with artists worldwide. I turn raw ideas into
              finished, professional tracks ready for release.
            </p>
            <p className="font-mono text-muted-foreground leading-relaxed text-sm md:text-base">
              Blending organic instrumentation with modern production
              techniques, creating timeless music that resonates emotionally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center w-full"
          >
            {/* 5. Trava de segurança na imagem: max-h-[40vh] no mobile e max-h-[55vh] no desktop */}
            <div className="aspect-[4/5] overflow-hidden w-full max-h-[40vh] md:max-h-[55vh] rounded-lg shadow-2xl">
              <Link href="https://www.instagram.com/gbebici/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image src={studioPortrait} alt="Gabriel Bebici in studio" className="w-full h-full object-cover" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;