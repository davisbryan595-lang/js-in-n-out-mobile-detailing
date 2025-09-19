import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  imageClass: string;
};

const services: Service[] = [
  {
    title: "Exterior Wash & Wax",
    desc: "Foam wash, hand‑dry, and protective wax for a brilliant shine.",
    imageClass: "gallery-1",
  },
  {
    title: "Interior Deep Clean",
    desc: "Vacuum, shampoo, and sanitize for a spotless cabin.",
    imageClass: "about-hero-bg",
  },
  {
    title: "Full Mobile Detail",
    desc: "Complete inside & out refresh at your location.",
    imageClass: "hero-bg",
  },
  {
    title: "Headlight Restoration",
    desc: "Restore clarity and improve nighttime visibility.",
    imageClass: "gallery-3",
  },
  {
    title: "Tire & Rim Shine",
    desc: "Deep clean and dress for a crisp, like‑new look.",
    imageClass: "gallery-2",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Professional packages tailored to your needs and schedule.</p>
          </div>
          <a href="#contact" className="hidden sm:inline btn-secondary">Get a Quote</a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <article key={s.title} className="card overflow-hidden">
              <div className={`${s.imageClass} h-44 w-full`} />
              <div className="p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#contact" className="btn-primary">Book Now</a>
                  <a href="#services" className="text-sm text-white/80 hover:text-white">Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <a href="#services" className="btn-secondary w-full justify-center">View All Services</a>
        </div>
      </div>
    </section>
  );
}
