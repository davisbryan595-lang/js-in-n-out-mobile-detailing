"use client";
import { useEffect, useRef } from "react";

const images = [
  "https://images.pexels.com/photos/6873020/pexels-photo-6873020.jpeg",
  "https://images.pexels.com/photos/9709893/pexels-photo-9709893.jpeg",
  "https://images.pexels.com/photos/6873021/pexels-photo-6873021.jpeg",
  "https://images.pexels.com/photos/9709892/pexels-photo-9709892.jpeg",
  "https://images.pexels.com/photos/9709896/pexels-photo-9709896.jpeg",
  "https://images.pexels.com/photos/6872736/pexels-photo-6872736.jpeg",
  "https://images.pexels.com/photos/6872741/pexels-photo-6872741.jpeg",
  "https://images.pexels.com/photos/6872979/pexels-photo-6872979.jpeg",
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function scrollByDir(dir: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <section id="gallery" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A glimpse of our mobile detailing results—glossy finishes and spotless interiors.</p>

        <div className="relative mt-6">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 pr-2"
          >
            {images.map((src, i) => (
              <div key={src} className="relative aspect-video w-[80%] min-w-[80%] snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={src + '?auto=compress&cs=tinysrgb&w=1600'} alt={`Detailing work ${i + 1}`} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="absolute -bottom-4 right-2 flex gap-2">
            <button aria-label="Previous" onClick={() => scrollByDir(-1)} className="btn-secondary">Prev</button>
            <button aria-label="Next" onClick={() => scrollByDir(1)} className="btn-primary">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
