import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Wrench,
  Zap,
  WashingMachine,
  Clock,
  ShieldCheck,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  Flame,
  Thermometer,
  Wind,
  Play,
  ImageOff,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-repair.png";
import aboutImg from "@/assets/about-repair.jpg";
import logoImg from "@/assets/logo.png";
// ─── Real work photos ───────────────────────────────────────
import gImg1 from "@/assets/photo_2026-06-23_18-01-06.jpg";
import gImg2 from "@/assets/photo_2026-06-23_18-01-11.jpg";
import gImg3 from "@/assets/photo_2026-06-23_18-01-15.jpg";
import gImg4 from "@/assets/photo_2026-06-23_18-01-16.jpg";
import gImg5 from "@/assets/photo_2026-06-23_18-02-45.jpg";
import gImg6 from "@/assets/photo_2026-06-23_18-02-49.jpg";
import gImg7 from "@/assets/photo_2026-06-23_18-02-59.jpg";
import gImg8 from "@/assets/photo_2026-06-22_22-25-48.jpg";
import gImg9 from "@/assets/photo_2026-06-23_17-59-00.jpg";
import gImg10 from "@/assets/photo_2026-06-23_18-01-19.jpg";
import gImg11 from "@/assets/photo_2026-06-23_18-02-55.jpg";
// ─── Service / Appliance photos ─────────────────────────────
import sImg1 from "@/assets/download (2).png"; // Washing Machine
import sImg2 from "@/assets/download (3).png"; // Refrigerator
import sImg3 from "@/assets/download.png";     // Stove / Oven
import sImg4 from "@/assets/download (5).png"; // Generator
import sImg5 from "@/assets/download (8).png"; // AC
import sImg6 from "@/assets/download (7).png"; // Vacuum Cleaner / Room cleaner

// ─── YouTube Shorts IDs ───────────────────────────
const YOUTUBE_SHORTS = [
  "sGOt2vpdog8",
  "PF6fe8p8zug",
  "sxH2XcluF2Y",
  "_R8b-HDSf98",
  "z2wpNWOXjdc",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cool Tec — Washing Machine, Refrigerator & Appliance Repair in Addis Ababa" },
      {
        name: "description",
        content:
          "Cool Tec is Addis Ababa's trusted home appliance repair service. We fix washing machines, refrigerators, stoves, ovens and generators — same-day service, 12-month warranty. Call now!",
      },
      {
        name: "keywords",
        content:
          "washing machine repair Addis Ababa, refrigerator repair Addis Ababa, stove repair Addis Ababa, oven repair Addis Ababa, generator repair Addis Ababa, home appliance repair Ethiopia, appliance technician Addis Ababa, cool tec repair, washing machine repair near me Addis Ababa, fridge repair Ethiopia",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Cool Tec Appliance Repair" },
      { property: "og:title", content: "Cool Tec — Appliance Repair in Addis Ababa" },
      {
        property: "og:description",
        content:
          "Expert washing machine, refrigerator, stove, oven and generator repair in Addis Ababa. Fast, affordable, guaranteed.",
      },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "ET-AA" },
      { name: "geo.placename", content: "Addis Ababa, Ethiopia" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Local Business JSON-LD structured data for Google ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cool Tec Appliance Repair",
            description:
              "Professional home appliance repair service in Addis Ababa. Washing machines, refrigerators, stoves, ovens, generators and more.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
            areaServed: "Addis Ababa, Ethiopia",
            serviceType: [
              "Washing Machine Repair",
              "Refrigerator Repair",
              "Stove Repair",
              "Oven Repair",
              "Generator Repair",
            ],
            priceRange: "$$",
            openingHours: "Mo-Sa 08:00-18:00",
          }),
        }}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ═══════════════════  NAV — UNTOUCHED  ═══════════════════ */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Cool Tec Appliance Repair Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-display text-xl font-semibold">
              Cool <span className="text-gold">Tec</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#home" className="text-foreground border-b border-gold pb-1">
              Home
            </a>
            <a href="#services" className="hover:text-foreground transition">
              Services
            </a>
            <a href="#about" className="hover:text-foreground transition">
              About
            </a>
            <a href="#work" className="hover:text-foreground transition">
              Our Work
            </a>
            <a href="#contact" className="hover:text-foreground transition">
              Contact
            </a>
          </nav>
          <a href="#contact" className="btn-gold text-sm hover:[&]:btn-gold-hover">
            Book Repair <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ═══════════════════  HERO  ═══════════════════ */}
      <section id="home" className="relative w-full" style={{ height: "100vh" }}>
        <img
          src={heroImg}
          alt="Cool Tec certified technician repairing a home appliance in Addis Ababa"
          width={1536}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.12 0.012 60 / 0.92) 0%, oklch(0.12 0.012 60 / 0.55) 55%, transparent 100%)",
          }}
        />
        <div className="relative h-full grid lg:grid-cols-2 gap-10 px-10 md:px-16 max-w-7xl mx-auto pt-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Certified Appliance Repair — Addis Ababa &amp; Adama
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold">
              We Fix Your Home <br />
              Appliances <span className="text-gradient-gold italic">Fast.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Washing machines, refrigerators, stoves, ovens, generators — our certified
              technicians come to your door anywhere in Addis Ababa and Adama, backed by a 12-month
              warranty.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="btn-gold">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="text-sm text-foreground/80 hover:text-foreground">
                View Services →
              </a>
            </div>
          </div>
        </div>
        {/* bottom strip */}
        <div className="absolute bottom-0 inset-x-0 bg-background/70 backdrop-blur border-t border-border px-8 py-5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-secondary">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <p className="font-display text-gold italic text-lg leading-none">Same-Day</p>
              <p className="text-xs text-muted-foreground mt-1">Home visit available</p>
            </div>
          </div>
          <p className="hidden md:block text-muted-foreground max-w-md text-right text-xs">
            Over 5,000 appliances restored in Addis Ababa. Free diagnosis, transparent pricing, no
            fix — no fee.
          </p>
          <button className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-secondary">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════════════  SERVICES  ═══════════════════ */}
      <section id="services" className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">What We Fix</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Every Appliance <span className="text-gradient-gold italic">We Handle.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              From the laundry room to the kitchen and beyond — one trusted team, every home
              appliance repair in Addis Ababa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: WashingMachine,
                img: sImg1,
                title: "Washing Machine Repair",
                desc: "Not spinning, leaking, noisy or won't start? We diagnose and fix all brands — LG, Samsung, Bosch, Ariston and more.",
                keywords: "washing machine repair Addis Ababa",
              },
              {
                icon: Thermometer,
                img: sImg2,
                title: "Refrigerator Repair",
                desc: "Not cooling, freezing over, water leaking or making strange sounds? We restore your fridge the same day.",
                keywords: "refrigerator repair Addis Ababa",
              },
              {
                icon: Flame,
                img: sImg3,
                title: "Stove & Oven Repair",
                desc: "Gas or electric — burner issues, ignition failures, temperature problems fixed fast with genuine parts.",
                keywords: "stove oven repair Addis Ababa",
              },
              {
                icon: Zap,
                img: sImg4,
                title: "Generator Repair",
                desc: "Won't start, losing power or overheating? Our engineers get your generator running reliably again.",
                keywords: "generator repair Addis Ababa",
              },
              {
                icon: Wind,
                img: sImg5,
                title: "Air Conditioner Repair",
                desc: "Not cooling, leaking water or tripping power? AC service, gas refill and full maintenance available.",
                keywords: "AC repair Addis Ababa",
              },
              {
                icon: Wrench,
                img: sImg6,
                title: "Room Cleaner & Other Appliances",
                desc: "Vacuum cleaner, microwave, dishwasher, water heater — if it plugs in or runs on gas, we fix it.",
                keywords: "appliance repair Ethiopia",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold transition"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center p-6">
                  <div
                    className="absolute top-3 left-3 w-10 h-10 rounded-full grid place-items-center z-10"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <s.icon className="w-4 h-4 text-background" />
                  </div>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500 drop-shadow-2xl"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-xs text-gold hover:gap-2 transition-all"
                  >
                    Book Service <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  GALLERY  ═══════════════════ */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Real Results</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Our Work <span className="text-gradient-gold italic">In Action.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Real jobs, real customers, real results — across Addis Ababa.
            </p>
          </div>

          {/* ── In-Progress shots ── */}
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">During Repair</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { img: gImg1, alt: "Technician repairing washing machine control board outdoors", label: "Washing Machine Board Repair" },
              { img: gImg2, alt: "Technician servicing refrigerator evaporator coils", label: "Refrigerator Coil Service" },
              { img: gImg3, alt: "Technician diagnosing washing machine with multimeter", label: "Washer Diagnostics" },
              { img: gImg4, alt: "Open top-load washing machine under inspection", label: "Top-Load Washer Inspection" },
              { img: gImg6, alt: "Technician soldering appliance circuit board", label: "Control Board Soldering" },
              { img: gImg5, alt: "Technician holding motor component for repair", label: "Motor Component Repair" },
              { img: gImg7, alt: "Two technicians refilling refrigerant gas on a freezer", label: "Freezer Gas Refill" },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold transition"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ background: "oklch(0.3 0.05 60 / 0.85)", color: "white" }}
                  >
                    In Progress
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Completed / Team shots ── */}
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Completed Jobs &amp; Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: gImg8, alt: "Cool Tec technician with two fully repaired washing machines", label: "Twin Washer Restoration", tag: "Completed" },
              { img: gImg9, alt: "Technician completing top-load washing machine repair", label: "Top-Load Washer Repair", tag: "Completed" },
              { img: gImg11, alt: "Technician with repaired dishwasher in kitchen", label: "Kitchen Appliance Service", tag: "Completed" },
              { img: gImg10, alt: "Cool Tec — For any washer problem call us", label: "Washing Machine Specialists", tag: "Team" },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold transition"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: item.tag === "Completed" ? "oklch(0.35 0.08 150 / 0.85)" : "var(--gradient-gold)",
                      color: "white",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  YOUTUBE VIDEO  ═══════════════════ */}
      <section id="video" className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Watch Us Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              See Cool Tec <span className="text-gradient-gold italic">In Action.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Watch how our certified technicians diagnose and repair home appliances with precision.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory" style={{ scrollbarWidth: "thin" }}>
            {YOUTUBE_SHORTS.map((id, index) => (
              <div
                key={id}
                className="relative rounded-2xl overflow-hidden border border-border shrink-0 snap-center"
                style={{ boxShadow: "var(--shadow-card)", aspectRatio: "9/16", height: "500px" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`Cool Tec Appliance Repair Short ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  ABOUT  ═══════════════════ */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">About Cool Tec</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Addis Ababa &amp; Adama's Most{" "}
              <span className="text-gradient-gold italic">Trusted</span> Appliance Repair.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Based in Addis Ababa and Adama, Cool Tec has been restoring home appliances for families and
              businesses across the cities. We believe in fixing what others throw away — saving you
              money and keeping your home running smoothly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "5K+", l: "Appliances Fixed" },
                { n: "98%", l: "Success Rate" },
                { n: "12mo", l: "Warranty" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-gold">{s.n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-background transition text-sm"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-full overflow-hidden mx-auto max-w-md"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <img
                src={aboutImg}
                alt="Cool Tec technician repairing a home appliance in Addis Ababa"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════  WHY CHOOSE US  ═══════════════════ */}
      <section id="work" className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              The Repair Team That{" "}
              <span className="text-gradient-gold italic">Delivers.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                t: "Same-Day Home Visit",
                d: "We come to you — anywhere in Addis Ababa. Most repairs done the same day you call.",
              },
              {
                icon: ShieldCheck,
                t: "12-Month Warranty",
                d: "Every repair is backed by our written warranty — parts and labor fully included.",
              },
              {
                icon: Wrench,
                t: "Certified Technicians",
                d: "Our engineers are trained and certified on all major appliance brands sold in Ethiopia.",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="p-8 rounded-2xl bg-card border border-border hover:border-gold transition"
              >
                <div
                  className="w-12 h-12 rounded-full grid place-items-center mb-5"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <f.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-display text-2xl">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════  TESTIMONIAL / CTA  ═══════════════════ */}
      <section id="contact" className="py-24 px-6">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-border"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-display text-2xl md:text-3xl leading-snug max-w-2xl mx-auto">
            "My washing machine broke down on a Sunday morning. Cool Tec came within 2 hours and
            fixed it on the spot. Outstanding service!"
          </p>
          <p className="mt-5 text-sm text-muted-foreground">— Mekdes T., Addis Ababa</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+251900150536" className="btn-gold">
              <Phone className="w-4 h-4" /> Call +251 90 015 0536
            </a>
            <a href="https://wa.me/251900150536" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
              or message on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            <p>© 2026 Cool Tec Appliance Repair. All rights reserved.</p>
            <p className="text-xs mt-1">
              Washing Machine • Refrigerator • Stove • Oven • Generator Repair — Addis Ababa &amp; Adama,
              Ethiopia
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* ═══════════════════  FLOATING SOCIAL WIDGET  ═══════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
        <div className="flex flex-col gap-2 translate-y-4 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href="https://www.tiktok.com/@eliterepaircenter?_r=1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition border border-white/10"
          >
            <span className="font-bold text-sm tracking-wide">TikTok</span>
          </a>
          <a
            href="https://wa.me/251900150536"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition"
          >
            <span className="font-bold text-sm tracking-wide">WhatsApp</span>
          </a>
          <a
            href="https://t.me/Madebyenjera"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#0088cc] text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition"
          >
            <span className="font-bold text-sm tracking-wide">Telegram</span>
          </a>
        </div>
        <button
          className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-background shadow-lg hover:scale-105 transition-transform"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
