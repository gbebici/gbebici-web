"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const videos = [
  { id: "Fl0h4EvHGvg", title: "Gabriel Bebici ao vivo — Performance 1" },
  { id: "MLP6qXHYa18", title: "Gabriel Bebici ao vivo — Performance 2" },
  { id: "tIShsA7yDPU", title: "Gabriel Bebici ao vivo — Performance 3" },
  { id: "AYlhQ6Xp7mo", title: "Gabriel Bebici ao vivo — Performance 4" },
  { id: "Y_uYapMtmpI", title: "Gabriel Bebici ao vivo — Performance 5" },
];

const VideoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(videos.length);
  const [activated, setActivated] = useState<Record<number, boolean>>({});
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Drag handler on the progress bar
  const handleProgressPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!api || !progressRef.current) return;
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);

    const moveTo = (clientX: number) => {
      const rect = progressRef.current!.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const index = Math.round(ratio * (count - 1));
      api.scrollTo(index);
    };
    moveTo(e.clientX);

    const onMove = (ev: PointerEvent) => moveTo(ev.clientX);
    const onUp = (ev: PointerEvent) => {
      target.releasePointerCapture(ev.pointerId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const progressPct = count > 1 ? (current / (count - 1)) * 100 : 0;

  const originUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <section id="video" className="gabriel-bebici py-28 md:py-36 bg-secondary/50">
      <div className="container px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Ao Vivo</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-medium">
              Veja em <span className="italic text-gold">ação</span>
            </h2>
            <p className="text-muted-foreground text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
              Uma seleção de {videos.length} performances que traduzem a atmosfera dos eventos.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-2 md:px-12 relative">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {videos.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-[88%] sm:basis-4/5 md:basis-1/2"
                  >
                    <div className="relative aspect-video bg-card border border-border rounded-sm overflow-hidden hover:border-gold/30 transition-colors duration-500 group">
                      {activated[index] ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1&origin=${encodeURIComponent(originUrl)}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          /* RESOLVE O ERRO 153 ENVIANDO O REFERER DA ORIGEM EXIGIDO PELO YOUTUBE */
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActivated((s) => ({ ...s, [index]: true }))}
                          className="absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center"
                          style={{
                            backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)`,
                          }}
                          aria-label={`Reproduzir ${video.title}`}
                        >
                          <span className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-300" />
                          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-background/60 backdrop-blur-sm text-gold shadow-[0_8px_30px_-8px_hsl(var(--gold)/0.6)] group-hover:scale-110 group-hover:bg-gold group-hover:text-[#1A1814] transition-all duration-300">
                            <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                          </span>
                        </button>
                      )}
                      <span className="absolute top-3 left-3 z-10 bg-background/70 backdrop-blur-sm text-gold-light text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-sm border border-gold/20 pointer-events-none">
                        {String(index + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-gold/30 text-gold hover:bg-gold/10 hover:text-gold hover:border-gold/60" />
              <CarouselNext className="hidden md:flex border-gold/30 text-gold hover:bg-gold/10 hover:text-gold hover:border-gold/60" />
            </Carousel>

            {/* Mobile side arrows + progress controls */}
            <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
              <button
                type="button"
                aria-label="Vídeo anterior"
                onClick={() => api?.scrollPrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background/60 text-gold backdrop-blur-sm hover:bg-gold/10 active:scale-95 transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 max-w-[180px]">
                <div
                  ref={progressRef}
                  onPointerDown={handleProgressPointer}
                  className="relative h-6 flex items-center cursor-grab active:cursor-grabbing touch-none select-none"
                  role="slider"
                  aria-valuemin={1}
                  aria-valuemax={count}
                  aria-valuenow={current + 1}
                  aria-label="Navegar entre vídeos"
                >
                  <div className="w-full h-[3px] bg-gold/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-[width] duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <div
                    className="absolute h-3.5 w-3.5 rounded-full bg-gold border-2 border-background shadow-[0_0_12px_hsl(var(--gold)/0.6)] -translate-x-1/2 transition-[left] duration-300 pointer-events-none"
                    style={{ left: `${progressPct}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                aria-label="Próximo vídeo"
                onClick={() => api?.scrollNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background/60 text-gold backdrop-blur-sm hover:bg-gold/10 active:scale-95 transition-all duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots indicators (clickable) */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para vídeo ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                    }`}
                />
              ))}
            </div>

            <p className="text-center text-gold-light/60 text-[10px] tracking-[0.3em] uppercase mt-5 md:hidden">
              Toque no play para assistir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;