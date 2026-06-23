import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Wrench, Smartphone, Laptop, Zap, WashingMachine, Clock, ShieldCheck, Phone, ChevronLeft, ChevronRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-repair.jpg";
import aboutImg from "@/assets/about-repair.jpg";
import sLaptop from "@/assets/service-laptop.jpg";
import sPhone from "@/assets/service-phone.jpg";
import sAppliance from "@/assets/service-appliance.jpg";
import sElectric from "@/assets/service-electric.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FixForge — Premium Repair & Fixing Services" },
      { name: "description", content: "Expert repair services for phones, laptops, home appliances and electrical systems. Fast, certified and guaranteed." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
              <Wrench className="w-4 h-4 text-background" />
            </span>
            <span className="font-display text-xl font-semibold">Fix<span className="text-gold">Forge</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#home" className="text-foreground border-b border-gold pb-1">Home</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#work" className="hover:text-foreground transition">Our Work</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact" className="btn-gold text-sm hover:[&]:btn-gold-hover">
            Book Repair <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-16 px-6 bg-hero">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative" style={{ boxShadow: "var(--shadow-card)" }}>
          <img src={heroImg} alt="Expert technician repairing a smartphone" width={1536} height={1024} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.12 0.012 60 / 0.92) 0%, oklch(0.12 0.012 60 / 0.55) 55%, transparent 100%)" }} />
          <div className="relative grid lg:grid-cols-2 gap-10 p-10 md:p-16 min-h-[620px]">
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Certified Repair Studio</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold">
                We Fix What <br />
                Others <span className="text-gradient-gold italic">Replace.</span>
              </h1>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                From cracked screens to dead motherboards, our master technicians restore your devices and appliances with surgical precision — backed by a 12-month warranty.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#contact" className="btn-gold">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#services" className="text-sm text-foreground/80 hover:text-foreground">View Services →</a>
              </div>
            </div>
          </div>
          {/* bottom strip */}
          <div className="absolute bottom-0 inset-x-0 bg-background/70 backdrop-blur border-t border-border px-8 py-5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-secondary"><ChevronLeft className="w-4 h-4" /></button>
              <div>
                <p className="font-display text-gold italic text-lg leading-none">Same-Day</p>
                <p className="text-xs text-muted-foreground mt-1">Express service available</p>
              </div>
            </div>
            <p className="hidden md:block text-muted-foreground max-w-md text-right text-xs">
              Over 12,400 devices restored. Free diagnostics, transparent pricing, no fix — no fee.
            </p>
            <button className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-secondary"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* ABOUT / VALUES */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">About FixForge</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Precision built on <span className="text-gradient-gold italic">decades</span> of craftsmanship.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              We treat every repair like a restoration. Our certified engineers combine factory-grade tools, OEM parts, and an obsession with detail — so your device leaves the workshop better than it arrived.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "12K+", l: "Repairs Done" },
                { n: "98%", l: "Success Rate" },
                { n: "24h", l: "Avg. Turnaround" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-gold">{s.n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-background transition text-sm">
              Discover More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden mx-auto max-w-md" style={{ boxShadow: "var(--shadow-gold)" }}>
              <img src={aboutImg} alt="Watchmaker repairing a movement" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <button className="absolute top-1/2 -right-2 w-10 h-10 rounded-full border border-border bg-card grid place-items-center hover:border-gold">
              <ChevronRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">What We Fix</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Repairs <span className="text-gradient-gold italic">Worth</span> Trusting.
            </h2>
            <p className="mt-5 text-muted-foreground">
              From pocket-sized electronics to the appliances that power your home — one workshop, every solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: sPhone, icon: Smartphone, title: "Phone Repair", desc: "Screens, batteries, water damage, charging ports — restored in hours." },
              { img: sLaptop, icon: Laptop, title: "Laptop & PC", desc: "Motherboard, keyboard, SSD upgrades and data recovery." },
              { img: sAppliance, icon: WashingMachine, title: "Home Appliances", desc: "Washers, dryers, ovens and refrigerators back to life." },
              { img: sElectric, icon: Zap, title: "Electrical Work", desc: "Wiring, panels and lighting — safe, licensed, certified." },
            ].map((s) => (
              <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold transition" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
                    <s.icon className="w-4 h-4 text-background" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-xs text-gold hover:gap-2 transition-all">
                    Book Service <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              The Workshop That <span className="text-gradient-gold italic">Delivers.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, t: "Fast Turnaround", d: "Most repairs completed within 24 hours. Express same-day options available." },
              { icon: ShieldCheck, t: "12-Month Warranty", d: "Every fix is backed by our written warranty — parts and labor included." },
              { icon: Wrench, t: "Certified Technicians", d: "Master-level engineers with OEM-trained credentials and decades of experience." },
            ].map((f) => (
              <div key={f.t} className="p-8 rounded-2xl bg-card border border-border hover:border-gold transition">
                <div className="w-12 h-12 rounded-full grid place-items-center mb-5" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-display text-2xl">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-border" style={{ background: "var(--gradient-hero)" }}>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <p className="font-display text-2xl md:text-3xl leading-snug max-w-2xl mx-auto">
            "They saved my laptop the day before a deadline. Flawless work, fair price — I'll never go anywhere else."
          </p>
          <p className="mt-5 text-sm text-muted-foreground">— Daniel R., Architect</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" className="btn-gold">
              <Phone className="w-4 h-4" /> (555) 010-FIX1
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">or book online →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 FixForge Repair Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
