import Link from "next/link";

type Service = { title: string; desc: string; details: string; imageClass: string };

const services: Service[] = [
  {
    title: "Exterior Wash & Wax",
    desc: "Foam wash, hand‑dry, and protective wax.",
    details: "Includes pre‑rinse, foam bath, hand wash, wheel faces, towel dry, and a premium wax for lasting shine.",
    imageClass: "gallery-1",
  },
  {
    title: "Interior Deep Clean",
    desc: "Vacuum, shampoo, sanitize.",
    details: "Floor mats, carpets, seats, vents, panels, and streak‑free glass for a fresh, renewed cabin.",
    imageClass: "about-hero-bg",
  },
  {
    title: "Full Mobile Detailing Package",
    desc: "Complete inside & out refresh.",
    details: "Best value. Combines exterior wash & wax with interior deep clean for a full transformation.",
    imageClass: "hero-bg",
  },
  {
    title: "Headlight Restoration",
    desc: "Clarity and safety restored.",
    details: "Oxidation removal, polish, and UV protection to brighten your night driving.",
    imageClass: "gallery-3",
  },
  {
    title: "Tire & Rim Shine",
    desc: "Clean and dress.",
    details: "Degrease, scrub, and finish with a non‑sling dressing for a crisp look.",
    imageClass: "gallery-2",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle">Professional mobile detailing services delivered at your convenience.</p>
        </header>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card overflow-hidden">
              <div className={`${s.imageClass} h-44 w-full`} />
              <div className="p-5">
                <h2 className="font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm text-white/80">{s.desc}</p>
                <p className="mt-2 text-xs text-white/60">{s.details}</p>
                <div className="mt-4"><Link href="/contact" className="btn-primary">Book Now</Link></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
