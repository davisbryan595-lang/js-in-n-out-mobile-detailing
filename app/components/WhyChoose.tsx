export default function WhyChoose() {
  const items = [
    {
      title: "We Come to You",
      desc: "Fully mobile service at your home or workplace.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand" aria-hidden>
          <path d="M3 7a2 2 0 0 1 2-2h8l4 4h2a2 2 0 0 1 2 2v7h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z"/>
        </svg>
      ),
    },
    {
      title: "Flexible Scheduling",
      desc: "Book around your life, not the other way around.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand" aria-hidden>
          <path d="M7 2v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2zM5 10h14v8H5z"/>
        </svg>
      ),
    },
    {
      title: "Affordable & Professional",
      desc: "Quality results without the dealership prices.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand" aria-hidden>
          <path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7z"/>
        </svg>
      ),
    },
    {
      title: "Top‑Quality Products",
      desc: "We use pro‑grade, safe, and effective products.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand" aria-hidden>
          <path d="M7 2h10v6H7zM5 8h14v14H5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Convenient, reliable, and meticulous mobile auto detailing you can trust.</p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">{it.icon}</div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
