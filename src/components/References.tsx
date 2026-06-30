"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const videoReviews = [
  {
    name: "Alice Coelho",
    videoUrl: "https://www.youtube.com/shorts/0Fj0I6dI81c",
    role: "Artist"
  },
  {
    name: "Ana Lima",
    videoUrl: "https://youtube.com/shorts/kWhXj9BSjq8?si=hMQz-qB_aG2QqSD-",
    role: "Artist"
  }
];

const getYouTubeSettings = (url: string) => {
  const videoId = url.includes("shorts/")
    ? url.split("shorts/")[1]?.split(/[?#]/)[0]
    : url.split("v=")[1]?.split(/[?#]/)[0];

  return {
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`,
    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  };
};

export default function References() {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  return (
    // 1. Trocamos os paddings gigantes por py-8 e adicionamos min-h-dvh e centralização flex
    <section id="references" className="min-h-dvh flex flex-col justify-center py-8 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10 w-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-10 text-center md:text-left" // 2. Margens inferiores reduzidas
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary mb-2">
            References
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            WHAT ARTISTS<br />
            <span className="text-muted-foreground text-white">SAY</span>
          </h2>
        </motion.div>

        {/* 3. Gap reduzido entre os vídeos */}
        <div className="flex justify-center md:justify-start gap-4 md:gap-6 flex-wrap">
          {videoReviews.map((video, i) => {
            const { embedUrl, thumbnail } = getYouTubeSettings(video.videoUrl);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                // 4. A trava matemática: largura máxima ditada por uma altura segura (60vh)
                className="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden group border border-white/10 shadow-2xl flex-shrink-0"
                style={{ maxWidth: "min(100%, 60vh * (9/16))" }}
              >
                {isPlaying === i ? (
                  <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full border-0 bg-black"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <div
                    className="w-full h-full cursor-pointer relative bg-black"
                    onClick={() => setIsPlaying(i)}
                  >
                    <img
                      src={thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity scale-[1.35] origin-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = target.src.replace('maxresdefault', 'hqdefault');
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        {/* Triângulo de play levemente reduzido no mobile */}
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-primary border-b-[8px] border-b-transparent ml-1 md:border-t-[10px] md:border-l-[15px] md:border-b-[10px]" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 pointer-events-none bg-gradient-to-t from-black to-transparent p-3 md:p-4 w-full">
                      <p className="text-white font-bold text-xs md:text-sm uppercase tracking-tighter">{video.name}</p>
                      <p className="text-zinc-400 text-[9px] md:text-[10px] uppercase tracking-widest">{video.role}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}