import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card flex flex-col items-start justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Ready for a Spotless Ride?</h3>
            <p className="mt-1 text-sm text-white/70">Book your mobile detail today. We’ll come to you!</p>
          </div>
          <a href="#contact" className="btn-primary">Book Now</a>
        </div>
      </div>
    </section>
  );
}
