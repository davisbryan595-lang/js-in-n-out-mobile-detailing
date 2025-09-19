import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="relative about-hero-bg">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-3 max-w-2xl text-white/80">Owned and operated by Jack Todd Bovia, J’s In and Out Mobile Detailing brings premium detailing services directly to you—anywhere in the Downriver area.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mt-4 text-white/80">Jack’s passion for pristine vehicles started at a young age. What began as a hobby quickly turned into a mission: make professional car care simple, convenient, and accessible for everyone. Today, we deliver meticulous results without you ever leaving your driveway.</p>
            <h3 className="mt-8 font-semibold">Mission Statement</h3>
            <p className="mt-2 text-white/80">To bring convenience and quality to every vehicle we touch.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">✓</span><span>Mobile service across Downriver, Michigan</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">✓</span><span>Flexible scheduling that fits your life</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">✓</span><span>Professional products and processes</span></li>
            </ul>
            <div className="mt-8"><Link href="/contact" className="btn-primary">Book Now</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="gallery-1 h-40 rounded-xl" />
            <div className="gallery-2 h-40 rounded-xl" />
            <div className="gallery-3 h-40 rounded-xl col-span-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
