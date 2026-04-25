import { motion } from "framer-motion";
import studioPortrait from "@/assets/studio-portrait.jpeg";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return <section id="about" className="py-16 md:py-32 px-4 sm:px-6 relative overflow-hidden">
    {/* Background decorative text */}
    <div className="absolute -left-10 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
      <span className="font-display text-[40vw] md:text-[20vw] font-extrabold text-foreground/[0.015] leading-none -rotate-90">
        15+
      </span>
    </div>

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary mb-3">
            About Me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[0.95]">
            15+ YEARS<br />
            <span className="text-muted-foreground">CRAFTING</span><br />
            <span className="text-muted-foreground">SOUND</span>
          </h2>
          <p className="font-mono text-muted-foreground leading-relaxed mb-4 text-base">
            Brazilian music producer with 15+ years of experience,
            working remotely with artists worldwide. I turn raw ideas into
            finished, professional tracks ready for release.
          </p>
          <p className="font-mono text-muted-foreground leading-relaxed text-base">
            Blending organic instrumentation with modern production
            techniques, creating timeless music that resonates emotionally.
          </p>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <Link href="https://www.instagram.com/gbebici/" target="_blank" rel="noopener noreferrer" className="block w-full h-full rounded-lg overflow-hidden">
              <Image src={studioPortrait} alt="Gabriel Bebici in studio" className="w-full h-full object-cover" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section >;
};
export default About;