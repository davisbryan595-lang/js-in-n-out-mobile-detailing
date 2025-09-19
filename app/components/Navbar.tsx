"use client";
import Link from "next/link";
import { useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Primary">
          <Link href="/#home" className="flex items-center gap-3" onClick={close}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F1d8d5acbe3294840a9d4d470b6f97d73?format=webp&width=800"
              alt="J's In and Out logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-lg font-semibold tracking-tight">J’s In and Out</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:13138157810" className="text-sm text-white/80 hover:text-white">(313) 815-7810</a>
            <a href="#contact" className="btn-primary">Book Now</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden pb-4">
            <div className="card p-4">
              <div className="flex flex-col gap-3">
                <a href="#about" className="nav-link" onClick={close}>About</a>
                <a href="#services" className="nav-link" onClick={close}>Services</a>
                <a href="#gallery" className="nav-link" onClick={close}>Gallery</a>
                <a href="#contact" className="nav-link" onClick={close}>Contact</a>
                <a href="tel:13138157810" className="text-sm text-white/80 hover:text-white" onClick={close}>(313) 815-7810</a>
                <a href="#contact" className="btn-primary" onClick={close}>Book Now</a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
