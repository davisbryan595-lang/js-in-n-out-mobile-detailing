import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J��s In and Out Mobile Detailing | Professional Mobile Detailing in Downriver, MI",
  description:
    "We bring premium mobile car detailing to your doorstep across the Downriver area. Flexible scheduling, professional results. Call 313-815-7810.",
  metadataBase: new URL("https://js-in-n-out-mobile-detailing.vercel.app"),
  openGraph: {
    title: "J’s In and Out Mobile Detailing",
    description:
      "Professional mobile detailing at your doorstep. We work around your schedule so you don’t have to!",
    type: "website",
  },
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <Container>
            <nav className="flex items-center justify-between py-4" aria-label="Primary">
              <Link href="/" className="flex items-center gap-3">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F1d8d5acbe3294840a9d4d470b6f97d73?format=webp&width=800" alt="J's In and Out logo" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-lg font-semibold tracking-tight">J’s In and Out</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/services" className="nav-link">Services</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </div>
              <div className="flex items-center gap-3">
                <a href="tel:13138157810" className="hidden sm:inline text-sm text-white/80 hover:text-white">(313) 815-7810</a>
                <Link href="/contact" className="btn-primary">Book Now</Link>
              </div>
            </nav>
          </Container>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-white/10 bg-black">
          <Container>
            <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
              <div>
                <p className="text-xl font-semibold">J’s In and Out Mobile Detailing</p>
                <p className="mt-2 max-w-sm text-sm text-white/70">We bring professional mobile detailing to your driveway across Michigan’s Downriver area.</p>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium text-white/80">Contact</p>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-brand" href="mailto:jackbovia5@gmail.com">jackbovia5@gmail.com</a></li>
                  <li><a className="hover:text-brand" href="tel:13138157810">(313) 815-7810</a></li>
                  <li><span className="text-white/70">Downriver, Michigan • Mobile Service</span></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium text-white/80">Follow</p>
                <div className="flex items-center gap-4">
                  <a aria-label="Facebook" href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12"/></svg>
                  </a>
                  <a aria-label="Instagram" href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
                  </a>
                  <a aria-label="TikTok" href="#" className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden><path d="M12.7 2h3.2c.3 1.2 1 2.4 2 3.3 1 1 2.2 1.6 3.5 1.8v3.2a8.4 8.4 0 0 1-5.5-1.9v7.8a6.2 6.2 0 1 1-6.2-6.2c.3 0 .5 0 .8.1V13a3.1 3.1 0 1 0 2.2 3V2Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} J’s In and Out Mobile Detailing. All rights reserved.</div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
