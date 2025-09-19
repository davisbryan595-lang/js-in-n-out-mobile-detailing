"use client";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    try {
      const url = `${window.location.origin}/api/contact`;
      const res = await fetch(url, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Have a question or ready to book? Send a message and we’ll get back to you shortly.</p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <form onSubmit={onSubmit} className="card p-6 md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70" htmlFor="name">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus-border" />
              </div>
              <div>
                <label className="text-xs text-white/70" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus-border" />
              </div>
              <div>
                <label className="text-xs text-white/70" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus-border" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/70" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus-border" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              {status === "success" && <p className="text-sm text-green-400">Thanks! We’ll be in touch soon.</p>}
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold">Contact Info</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><span className="text-white/60">Email:</span> <a className="hover:text-brand" href="mailto:jackbovia5@gmail.com">jackbovia5@gmail.com</a></li>
                <li><span className="text-white/60">Phone:</span> <a className="hover:text-brand" href="tel:13138157810">(313) 815-7810</a></li>
                <li><span className="text-white/60">Service Area:</span> Downriver, Michigan</li>
              </ul>
            </div>
            <div className="card overflow-hidden">
              <iframe
                title="Downriver Michigan Map"
                src="https://www.google.com/maps?q=Downriver%20Michigan&output=embed"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Follow Us</h3>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12"/></svg></a>
                <a href="#" className="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg></a>
                <a href="#" className="social-icon" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M12.7 2h3.2c.3 1.2 1 2.4 2 3.3 1 1 2.2 1.6 3.5 1.8v3.2a8.4 8.4 0 0 1-5.5-1.9v7.8a6.2 6.2 0 1 1-6.2-6.2c.3 0 .5 0 .8.1V13a3.1 3.1 0 1 0 2.2 3V2Z"/></svg></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
