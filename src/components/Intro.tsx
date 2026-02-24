import { useState, useEffect } from "react"; // 1. Importar hooks
import Image from "next/image";
import { motion } from "framer-motion";

const Intro = () => {
  // 2. Estado para controlar se a intro terminou
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    // 3. O "timer" da mina: espera 2 segundos e dispara a saída
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="mainImage"
      initial={{ height: "100vh" }}
      animate={{ height: isIntroFinished ? "5vh" : "100vh" }}
      transition={{ duration: 2 , ease: "easeInOut" }}
      className="relative flex flex-col justify-center items-center overflow-hidden w-full"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.6]">
          <Image
            src="/studio-image2.jpeg"
            alt="Background Hero"
            fill
            priority
            className="object-cover"
            quality={70}
            sizes="100vw"
          />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </motion.section>
  );
};

export default Intro;