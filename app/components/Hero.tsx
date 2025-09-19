"use client";

export default function Hero() {
  return (
    <section id="home" className="relative hero-bg">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-2xl fade-slide-in">
          <p className="text-brand text-sm font-semibold tracking-wider uppercase">We work around your schedule so you don’t have to!</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight tracking-tight">Professional Mobile Detailing at Your Doorstep</h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">Premium exterior and interior services delivered to you anywhere in the Downriver area. Fast, friendly, and flawless.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn-primary">Book Now</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
