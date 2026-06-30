import { motion } from "framer-motion";

const FeaturedProduction = () => {
  // Usar o domínio nocookie ajuda a evitar bloqueios de privacidade/cookies
  const videoId = "QXNZi1xz-_I";
  const startTime = 93;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${startTime}&modestbranding=1&rel=0&enablejsapi=1`;

  return (
    // 1. Mudamos para min-h-dvh e reduzimos o padding vertical para py-8
    <section id="featured" className="min-h-dvh flex flex-col justify-center items-center px-4 sm:px-6 py-8 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl flex flex-col justify-center w-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col"
        >
          {/* 2. Reduzido margem inferior de mb-4 para mb-2 */}
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">
            Featured Production
          </p>

          {/* 3. Reduzido margem inferior de mb-8 para mb-5 e diminuído sutilmente o texto no mobile */}
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Chorou Bebel — <span className="text-muted-foreground">Desprevenido</span> ft. Duarte
          </h2>

          {/* 4. Aplicada a trava de segurança baseada na altura da tela (48vh) */}
          <div
            className="relative aspect-video mb-5 overflow-hidden rounded-lg shadow-2xl bg-black w-full mx-auto"
            style={{ maxWidth: "min(100%, 48vh * (16/9))" }}
          >
            <iframe
              src={embedUrl}
              title="Chorou Bebel - Desprevenido ft. Duarte"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-start">
            <span className="badge-special">Indie Pop Production</span>
            <span className="badge-special">Production</span>
            <span className="badge-special">Arrangement</span>
            <span className="badge-special">Mix</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduction;