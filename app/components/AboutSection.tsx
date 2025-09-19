export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <p className="text-brand text-xs font-semibold uppercase tracking-wider">Downriver, Michigan • Mobile</p>
          <h2 className="section-title mt-2">About J’s In and Out Mobile Detailing</h2>
          <p className="mt-4 text-white/80">Owned and operated by Jack Todd Bovia, we bring premium mobile detailing directly to your driveway across the Downriver area. We work around your schedule—providing flexible, reliable, and professional service without the dealership price tag.</p>
          <h3 className="mt-6 font-semibold">What You Can Expect</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full brand-badge">✓</span><span>Convenient mobile service at your home or workplace</span></li>
            <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full brand-badge">✓</span><span>Flexible scheduling to fit your day</span></li>
            <li className="flex items-start gap-3"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full brand-badge">✓</span><span>Professional products and meticulous care</span></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#services" className="btn-secondary">See Services</a>
            <a href="#contact" className="btn-primary">Book Now</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="gallery-1 h-40 rounded-xl" />
          <div className="gallery-2 h-40 rounded-xl" />
          <div className="gallery-3 h-40 rounded-xl col-span-2" />
        </div>
      </div>
    </section>
  );
}
