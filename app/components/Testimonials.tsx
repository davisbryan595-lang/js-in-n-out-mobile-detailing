"use client";
import { useEffect, useState } from "react";

type Testimonial = { quote: string; name: string; role: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "They came right to my driveway and made my SUV look brand new. Super convenient!",
    name: "Chris M.",
    role: "Interior + Exterior",
  },
  {
    quote: "Professional, on time, and very detailed. Highly recommend!",
    name: "Jasmine R.",
    role: "Full Detail",
  },
  {
    quote:
      "Headlights were yellow and cloudy—now they’re crystal clear. Great work!",
    name: "Andre T.",
    role: "Headlight Restoration",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Customers Say</h2>
        <p className="section-subtitle">Reviews that reflect our commitment to quality and convenience.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`card p-5 transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-50"}`}
            >
              <blockquote className="text-sm leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-white/70">{t.name} • {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
