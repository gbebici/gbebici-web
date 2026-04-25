import { motion } from "framer-motion";

const FeaturedProduction = () => {
  // Usar o domínio nocookie ajuda a evitar bloqueios de privacidade/cookies
  const videoId = "QXNZi1xz-_I";
  const startTime = 93;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${startTime}&modestbranding=1&rel=0&enablejsapi=1`;

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Featured Production
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Chorou Bebel — <span className="text-muted-foreground">Desprevenido</span> ft. Duarte
          </h2>

          <div className="video-container aspect-video mb-6 overflow-hidden rounded-lg shadow-2xl bg-black">
            <iframe
              src={embedUrl}
              title="Chorou Bebel - Desprevenido ft. Duarte"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          <div className="flex flex-wrap gap-3">
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