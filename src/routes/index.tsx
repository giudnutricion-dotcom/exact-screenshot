import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, CheckCircle2, Grid2x2, Box, TrafficCone, Loader2, Shield } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The 10-Minute Bottleneck Audit | Pareto Talent" },
      { name: "description", content: "Free diagnostic guide for 7-figure founders: reclaim 20+ hours/week by delegating complete operational domains with Pareto's Black Box Method." },
      { property: "og:title", content: "The 10-Minute Bottleneck Audit | Pareto Talent" },
      { property: "og:description", content: "Reclaim 20+ hours/week without micromanaging a reactive VA. Download the free audit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ── Shared button styles ──────────────────────────────────────────────
const CTA_BTN =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-primary-foreground shadow-green-glow transition-all duration-200 hover:scale-[1.03] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 active:scale-[0.98]";

const CTA_BTN_STYLE: React.CSSProperties = {
  background: "linear-gradient(135deg, #10B981, #34D399)",
  fontFamily: "var(--font-display)",
};

// ── Reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-ready").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
function Index() {
  useScrollReveal();

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-deep)" }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(10,14,20,.85)", backdropFilter: "blur(16px)", borderColor: "var(--border-glass)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pareto<span style={{ color: "var(--green-light)" }}>Talent</span>
          </span>
          <a
            href="#access"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "var(--green-muted)",
              border: "1px solid rgba(16,185,129,.3)",
              color: "var(--green-light)",
              fontFamily: "var(--font-display)",
            }}
          >
            Get the audit →
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* ambient gradients */}
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6 pb-28 pt-20 text-center md:pt-28">

          {/* Trust badge */}
          <div
            className="reveal-ready mx-auto mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,.03)", border: "1px solid var(--border-glass)", backdropFilter: "blur(8px)" }}
          >
            {/* avatar stack */}
            <span className="flex">
              {["JD","JP","JR","+"].map((initials, i) => (
                <span
                  key={initials}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    background: i < 3 ? "linear-gradient(135deg,#1b2730,#0e1620)" : "var(--green-muted)",
                    border: "2px solid var(--bg-deep)",
                    color: "var(--green-bright)",
                    marginRight: "-8px",
                    zIndex: 4 - i,
                  }}
                >
                  {initials}
                </span>
              ))}
            </span>
            <span style={{ color: "var(--green-light)", letterSpacing: "1px", fontSize: "13px" }}>★★★★★</span>
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>4.9</strong> · Trusted by 100+ founders
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal-ready mt-2 text-4xl font-extrabold leading-[1.07] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            How 7-Figure Founders Reclaim{" "}
            <span className="text-gradient-green">20+ Hours/Week</span>
            <br className="hidden md:block" /> Without Micromanaging a Reactive VA
          </h1>

          {/* Badge chip */}
          <div
            className="reveal-ready mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{
              background: "var(--green-muted)",
              border: "1px solid rgba(16,185,129,.22)",
              color: "var(--green-bright)",
              fontFamily: "var(--font-display)",
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
              <path d="M4 10.5l4 4 8-9" />
            </svg>
            FREE DIAGNOSTIC GUIDE FOR 7-FIGURE FOUNDERS
          </div>

          {/* Subtext */}
          <p
            className="reveal-ready mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            Stop writing 10-page SOPs for low-cost task-checkers. Download{" "}
            <strong style={{ color: "var(--text-primary)" }}>The 10-Minute Bottleneck Audit</strong>{" "}
            and discover how to delegate complete operational domains using Pareto's Black Box Method.
          </p>

          {/* CTAs */}
          <div className="reveal-ready mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#access" className={CTA_BTN} style={CTA_BTN_STYLE}>
              Get The Bottleneck Audit (Free) <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl px-6 py-4 text-base font-semibold transition-all hover:scale-105"
              style={{ border: "1px solid var(--border-glass)", color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
            >
              See how it works
            </a>
          </div>

          {/* Trust footnote */}
          <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
            🔒 No spam · Your audit arrives in 60 seconds
          </p>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)", background: "rgba(16,185,129,.04)" }}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-0 md:grid-cols-4">
          {[
            { n: "< 0.1%",  l: "Selection Rate",         s: "40+ hr vetting & PI behavioral eval" },
            { n: "93%",     l: "12-Mo Retention Rate",    s: "Client-operator retention" },
            { n: "20+ Hrs", l: "Weekly Bandwidth Reclaimed", s: "Avg. per founder" },
            { n: "100+",    l: "Founders Served",         s: "93% via word-of-mouth" },
          ].map((s, i) => (
            <div
              key={s.n}
              className="reveal-ready border-b px-6 py-8 text-center md:border-b-0"
              style={{ borderColor: "var(--border-glass)", borderRight: i < 3 ? "1px solid var(--border-glass)" : undefined }}
            >
              <div
                className="text-3xl font-extrabold md:text-4xl text-gradient-green"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.n}
              </div>
              <div className="mt-2 text-sm font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{s.l}</div>
              {s.s && <div className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{s.s}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT'S INSIDE ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span
          className="reveal-ready mx-auto mb-4 block text-center text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--green-light)", fontFamily: "var(--font-display)", letterSpacing: "0.14em" }}
        >
          What's Inside
        </span>
        <h2
          className="reveal-ready text-center text-3xl font-extrabold tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          The 10-Minute Bottleneck Audit
        </h2>
        <p
          className="reveal-ready mx-auto mt-4 max-w-xl text-center text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Three frameworks that 7-figure founders use to stop being the bottleneck in their own business.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Grid2x2,
              num: "01",
              t: "The 3-Step Diagnostic Matrix",
              d: "Map your operational footprint into 4 quadrants to instantly isolate low-leverage tasks consuming your highest-value hours.",
            },
            {
              icon: TrafficCone,
              num: "02",
              t: "Green / Yellow / Red Decision Architecture",
              d: "Eliminate 90% of daily team interruptions by establishing clear decision latitude and accountability zones.",
            },
            {
              icon: Box,
              num: "03",
              t: "The Black Box Delegation Model",
              d: "Brief outcomes, goals, and constraints instead of micromanaging process steps — and finally get time back.",
            },
          ].map(({ icon: Icon, num, t, d }) => (
            <div
              key={t}
              className="reveal-ready group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-glass)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(400px 200px at 60% -20%, rgba(16,185,129,.10), transparent 70%)" }}
              />
              <div className="relative flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(158deg, rgba(110,231,183,.20), rgba(16,185,129,.04))",
                    border: "1px solid rgba(16,185,129,.26)",
                    boxShadow: "0 8px 20px -10px rgba(16,185,129,.55)",
                    color: "var(--green-bright)",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span
                  className="text-sm font-bold"
                  style={{ color: "rgba(148,163,184,.3)", fontFamily: "var(--font-display)" }}
                >
                  {num}
                </span>
              </div>
              <h3
                className="relative mt-6 text-lg font-bold leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {t}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)", background: "rgba(255,255,255,.015)" }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span
            className="reveal-ready mx-auto mb-4 block text-center text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--green-light)", fontFamily: "var(--font-display)", letterSpacing: "0.14em" }}
          >
            Engineered For
          </span>
          <h2
            className="reveal-ready text-center text-3xl font-extrabold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Overwhelmed Founders Who Are Done Being the Bottleneck
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Revenue Stage",
                text: "7- and 8-Figure Founders, CEOs, & Agency Owners ($500K–$5M+ ARR) working 60–80 hours/week.",
              },
              {
                label: "Pain Point",
                text: "Founders trapped in operational chaos acting as the main bottleneck for their team's daily decisions.",
              },
              {
                label: "Past Experience",
                text: 'Executives frustrated with low-cost "reactive" VAs who require constant hand-holding and produce more management work.',
              },
            ].map((b) => (
              <div
                key={b.label}
                className="reveal-ready flex gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-glass)" }}
              >
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--green-muted)", border: "1px solid rgba(16,185,129,.25)" }}
                >
                  <Check className="h-4 w-4" style={{ color: "var(--green-light)" }} />
                </div>
                <div>
                  <p
                    className="mb-1 text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--green-light)", fontFamily: "var(--font-display)" }}
                  >
                    {b.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM MARQUEE ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 460px at 50% -6%, rgba(224,151,63,.07), transparent 64%)" }}
        />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span
            className="reveal-ready inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--ember-soft)", border: "1px solid var(--ember-line)", color: "var(--ember-2)", fontFamily: "var(--font-display)" }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ember)", boxShadow: "0 0 10px var(--ember)", display: "inline-block" }} />
            The Structural Trap
          </span>
          <h2
            className="reveal-ready mt-5 text-3xl font-extrabold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            The Real Reason Your Business{" "}
            <span className="text-gradient-amber">Can't Grow Past You</span>
          </h2>
          <p
            className="reveal-ready mx-auto mt-4 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            These aren't productivity problems. They're symptoms of a structural trap: you've become the thing your business{" "}
            <strong style={{ color: "var(--text-primary)" }}>can't run without — and can't grow past.</strong>
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative mt-12">
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
              maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
            }}
          >
            <MarqueeTrack />
          </div>
          <p className="mt-4 text-center text-xs" style={{ color: "var(--text-muted)" }}>
            ↺ Auto-scrolling · hover to pause
          </p>
        </div>

        <p
          className="reveal-ready mx-auto mt-10 max-w-xl text-center text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Recognize three or more?{" "}
          <strong style={{ color: "var(--text-primary)" }}>You don't have a productivity problem — you have a structural one.</strong>{" "}
          <span style={{ color: "var(--green-light)" }}>That's exactly what the Bottleneck Audit reveals.</span>
        </p>
      </section>

      {/* ── HOW IT WORKS (PROCESS PIPELINE) ─────────────────────── */}
      <section
        id="how-it-works"
        className="scroll-mt-20 overflow-hidden py-24"
        style={{ borderTop: "1px solid var(--border-glass)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span
              className="reveal-ready inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--green-muted)", border: "1px solid rgba(16,185,129,.18)", color: "var(--green-light)", fontFamily: "var(--font-display)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 10px var(--green)", display: "inline-block" }} />
              Our Process
            </span>
            <h2
              className="reveal-ready mt-5 text-3xl font-extrabold tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              From Audit to{" "}
              <span className="text-gradient-green">Operational Freedom</span>
              {" "}in 4 Steps
            </h2>
            <p
              className="reveal-ready mx-auto mt-4 max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              A clear, fast path from "overwhelmed" to "delegating like a pro."
            </p>
          </div>

          <Pipeline />

          {/* Guarantee strip */}
          <div
            className="reveal-ready mx-auto mt-14 flex flex-col items-center gap-5 rounded-2xl px-8 py-6 text-center md:flex-row md:text-left"
            style={{ background: "linear-gradient(135deg, rgba(16,185,129,.09), var(--bg-card))", border: "1px solid rgba(16,185,129,.22)" }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--green-muted)", border: "1px solid rgba(16,185,129,.26)" }}
            >
              <Shield className="h-6 w-6" style={{ color: "var(--green-bright)" }} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Zero-Risk Access:</strong>{" "}
              The Bottleneck Audit is 100% free. No credit card, no obligation. If you qualify for a strategy session, you choose whether to continue — no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ───────────────────────────────────────────── */}
      <section id="access" className="scroll-mt-8 px-6 pb-28 pt-10">
        <LeadForm />
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--border-glass)", background: "rgba(0,0,0,.2)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <span
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Pareto<span style={{ color: "var(--green-light)" }}>Talent</span>
          </span>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Pareto Talent. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="https://paretotalent.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">
              paretotalent.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ════════════════════════════════════════════════════════════════════
// MARQUEE TRACK
// ════════════════════════════════════════════════════════════════════
const PAIN_CARDS = [
  { pct: "80%", sub: "of founders report this", title: "Drowning in Admin", body: "Email, calendar, routine tasks — buried in low-value work while real decisions wait." },
  { pct: "70%", sub: "of founders report this", title: "No Time, No Life", body: "Nights and weekends consumed. The business demands more hours than one person can give." },
  { pct: "40%", sub: "of founders report this", title: "Things Fall Through Cracks", body: "Missed follow-ups, lost deals, forgotten commitments. No one watching the open loops." },
  { pct: "50%", sub: "of founders report this", title: "Everything Runs From Memory", body: "No systems, no SOPs. Every process depends on you being present. Fragile." },
  { pct: "60%+", sub: "came to us burned before", title: "Burned by a VA Before", body: "A previous hire created more management work than it saved. No vetting, no accountability." },
  { pct: "30%", sub: "of founders report this", title: "Wearing Too Many Hats", body: "CEO, ops, scheduler, firefighter — all at once. Growth starts to feel like a trap." },
];

function MarqueeTrack() {
  const cards = [...PAIN_CARDS, ...PAIN_CARDS]; // duplicate for seamless loop

  return (
    <div
      className="flex gap-4"
      style={{
        width: "max-content",
        padding: "14px 9px",
        animation: "marquee-scroll 44s linear infinite",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
    >
      {cards.map((c, i) => (
        <article
          key={i}
          className="group relative flex-none overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
          style={{
            width: 340,
            background: "var(--bg-card)",
            border: "1px solid var(--border-glass)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(158deg, rgba(242,185,104,.22), rgba(224,151,63,.05))",
                border: "1px solid var(--ember-line)",
                boxShadow: "0 8px 20px -10px rgba(224,151,63,.55)",
              }}
            >
              <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, color: "var(--ember-2)" }} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>
            <div className="text-right">
              <p
                className="text-2xl font-extrabold leading-none text-gradient-amber"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.pct}
              </p>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{c.sub}</p>
            </div>
          </div>
          <h3
            className="mt-4 text-base font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {c.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {c.body}
          </p>
        </article>
      ))}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PROCESS PIPELINE
// ════════════════════════════════════════════════════════════════════
const STEPS = [
  { num: "1", label: "Step 1", title: "Answer 4 Quick Questions", body: "Tell us about your revenue stage, team size, and primary bottleneck. Takes 60 seconds." },
  { num: "2", label: "Step 2", title: "Get The Audit Instantly", body: "Your copy of The 10-Minute Bottleneck Audit lands in your inbox immediately." },
  { num: "3", label: "Step 3", title: "Apply the Frameworks", body: "Use the 3-Step Diagnostic Matrix to pinpoint exactly which hours you can reclaim this week." },
  { num: "4", label: "Step 4", title: "Book Your Strategy Call", body: "If you qualify, lock in a free 1-on-1 session with our placement team to map your delegation plan." },
];

const STEP_ICONS = [
  // Question mark / form
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26, color: "var(--green-bright)" }}><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M8.5 9l1.5 1.5 3-3M8.5 15l1.5 1.5 3-3" /></svg>,
  // Download
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26, color: "var(--green-bright)" }}><path d="M12 15V3M9 12l3 3 3-3" /><rect x="3" y="18" width="18" height="3" rx="1.5" /></svg>,
  // Lightbulb / apply
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26, color: "var(--green-bright)" }}><path d="M12 2C8.7 2 6 4.7 6 8c0 2.2 1.2 4.1 3 5.2V15a1 1 0 001 1h4a1 1 0 001-1v-1.8c1.8-1.1 3-3 3-5.2C18 4.7 15.3 2 12 2z" /><path d="M9 18h6M10 21h4" /></svg>,
  // Calendar
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 26, height: 26, color: "var(--green-bright)" }}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></svg>,
];

function Pipeline() {
  const pipeRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pipeRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(pipeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pipeRef} className="relative mt-16">
      {/* connector rail (desktop) */}
      <div
        className="absolute hidden md:block"
        style={{
          top: 34,
          left: "12.5%",
          right: "12.5%",
          height: 2,
          background: "rgba(255,255,255,.07)",
          borderRadius: 2,
        }}
      />
      {/* animated fill */}
      {active && (
        <div
          className="absolute hidden md:block"
          style={{
            top: 34,
            left: "12.5%",
            right: "12.5%",
            height: 2,
            background: "linear-gradient(90deg, var(--green), var(--green-light), var(--teal))",
            borderRadius: 2,
            animation: "pipe-fill 1.6s cubic-bezier(.65,0,.35,1) forwards",
            transformOrigin: "left center",
            boxShadow: "0 0 8px rgba(52,211,153,.6)",
          }}
        />
      )}

      <div className="grid gap-8 md:grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className="flex flex-col items-center text-center"
            style={{
              opacity: active ? 1 : 0.4,
              transform: active ? "scale(1)" : "scale(0.88)",
              transition: `opacity 0.55s ease ${i * 0.4}s, transform 0.6s cubic-bezier(.34,1.56,.64,1) ${i * 0.4}s`,
            }}
          >
            {/* node */}
            <div
              className="relative mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(158deg,#13241d,#0c1813)",
                border: "1px solid rgba(16,185,129,.32)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.12), inset 0 -12px 22px rgba(16,185,129,.12), 0 14px 30px -14px rgba(16,185,129,.6)",
              }}
            >
              {STEP_ICONS[i]}
              {/* step number badge */}
              <span
                className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold"
                style={{
                  background: "var(--green)",
                  color: "#04120c",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 0 0 4px var(--bg-deep)",
                  transform: active ? "scale(1)" : "scale(0)",
                  transition: `transform 0.5s cubic-bezier(.34,1.56,.64,1) ${i * 0.4 + 0.3}s`,
                }}
              >
                {step.num}
              </span>
            </div>
            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--green-light)", fontFamily: "var(--font-display)" }}
            >
              {step.label}
            </p>
            <h3
              className="mb-2 text-base font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: 200 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// LEAD FORM  — all original logic preserved, visual upgrade only
// ════════════════════════════════════════════════════════════════════
const QUESTIONS = [
  { key: "revenue",    label: "What is your annual revenue?",    options: ["$500K - $1M ARR", "$1M - $5M+ ARR", "Under $500K ARR"] },
  { key: "team_size",  label: "How big is your team?",           options: ["1-4", "5-20", "20+"] },
  { key: "bottleneck", label: "What is your primary bottleneck?", options: ["Inbox, calendar & admin", "Operations & project management", "Client delivery & fulfillment", "Sales & lead follow-up"] },
  { key: "timeline",   label: "When are you looking to hire?",   options: ["Immediately", "Within 30 days", "1-3 months", "Just researching"] },
] as const;

type Answers = Record<(typeof QUESTIONS)[number]["key"], string>;

function LeadForm() {
  const submit = useServerFn(submitLead);
  const navigate = useNavigate();
  const [step, setStep]       = useState(0);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Answers>({ revenue: "", team_size: "", bottleneck: "", timeline: "" });
  const [status, setStatus]   = useState<"idle" | "loading" | "done" | "error">("idle");
  const [isQualified, setIsQualified] = useState(false);
  const [err, setErr]         = useState("");
  const total = QUESTIONS.length + 1;

  const contactValid =
    contact.name.trim() &&
    /^\S+@\S+\.\S+$/.test(contact.email) &&
    contact.phone.trim().length >= 5;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactValid) { setErr("Please complete all fields with a valid email."); return; }
    setStatus("loading"); setErr("");
    try {
      const res = await submit({ data: { ...contact, ...answers } });
      const qualified =
        res?.qualified ?? (answers.revenue !== "Under $500K ARR" && answers.timeline !== "Just researching");
      setIsQualified(qualified);

      if (!qualified) {
        // Automatically route unqualified leads to the dedicated Thank You Page
        const trimmedName = contact.name.trim();
        const trimmedEmail = contact.email.trim();
        try {
          await navigate({
            to: "/thank-you",
            search: {
              name: trimmedName || undefined,
              email: trimmedEmail || undefined,
            },
          });
        } catch {
          const params = new URLSearchParams();
          if (trimmedName) params.set("name", trimmedName);
          if (trimmedEmail) params.set("email", trimmedEmail);
          const qs = params.toString();
          window.location.href = `/thank-you${qs ? `?${qs}` : ""}`;
        }
        return;
      }

      setStatus("done");
    } catch (e) {
      setStatus("error");
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all";
  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,.05)",
    border: "1px solid var(--border-glass)",
  };
  const inputFocusStyle = `
    [&:focus] { border-color: var(--green) !important; box-shadow: 0 0 0 3px rgba(16,185,129,.15); }
  `;

  return (
    <div className="mx-auto max-w-lg">
      {/* card */}
      <div
        className="rounded-2xl p-8 md:p-10"
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(16,185,129,.2)",
          boxShadow: "var(--shadow-green-glow)",
        }}
      >
        {status === "done" ? (
          /* ── SUCCESS SCREEN ── */
          <div className="text-center">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "var(--green-muted)", border: "1px solid rgba(16,185,129,.3)" }}
            >
              <CheckCircle2 className="h-9 w-9" style={{ color: "var(--green-light)" }} />
            </div>

            {isQualified ? (
              <div className="mt-6 space-y-5">
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{ background: "var(--green-muted)", border: "1px solid rgba(16,185,129,.3)", color: "var(--green-light)", fontFamily: "var(--font-display)" }}
                >
                  Step 2 of 2 — Strategy Call Reserved
                </span>
                <h2
                  className="text-2xl font-extrabold leading-snug md:text-3xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Audit Dispatched + Lock In Your 15-Min Strategy Session
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Thanks, {contact.name.split(" ")[0]}. We've sent{" "}
                  <strong style={{ color: "var(--text-primary)" }}>The 10-Minute Bottleneck Audit</strong> to{" "}
                  {contact.email}.
                </p>
                <div
                  className="rounded-xl p-5 text-left text-sm leading-relaxed"
                  style={{ background: "rgba(16,185,129,.06)", border: "1px solid rgba(16,185,129,.18)", color: "var(--text-secondary)" }}
                >
                  Because your business is operating at{" "}
                  <strong style={{ color: "var(--text-primary)" }}>{answers.revenue}</strong>, you qualify for a
                  1-on-1 operational audit with our placement team to map the exact 15–20 hours of daily friction
                  you can offload this month.
                </div>
                <div className="space-y-3 pt-1">
                  <a
                    href={`https://calendly.com/giudnutricion/30min?name=${encodeURIComponent(contact.name)}&email=${encodeURIComponent(contact.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CTA_BTN} w-full`}
                    style={CTA_BTN_STYLE}
                  >
                    Schedule Your 15-Min Strategy Call <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1Hd5MjJr7MtvgzcxJo9JyeO9HTrsipbSVjrudn6ifh_Q/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium underline-offset-4 hover:underline"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Or open your Google Doc Audit directly →
                  </a>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: "var(--green-muted)",
                    border: "1px solid rgba(16,185,129,.3)",
                    color: "var(--green-light)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Diagnostic Completed · Free Access
                </span>
                <h2
                  className="text-2xl font-extrabold md:text-3xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Your Audit Is Ready!
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Thanks, {contact.name.split(" ")[0] || "Founder"}. Your copy of{" "}
                  <strong style={{ color: "var(--text-primary)" }}>The 10-Minute Bottleneck Audit</strong> is
                  ready.
                </p>
                <div className="space-y-3 pt-1">
                  <Link
                    to="/thank-you"
                    search={{
                      name: contact.name.trim() || undefined,
                      email: contact.email.trim() || undefined,
                    }}
                    className={`${CTA_BTN} w-full`}
                    style={CTA_BTN_STYLE}
                  >
                    View Your Audit &amp; Action Guide <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href="https://docs.google.com/document/d/1Hd5MjJr7MtvgzcxJo9JyeO9HTrsipbSVjrudn6ifh_Q/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium underline-offset-4 hover:underline"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Or open Google Doc directly →
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ── FORM ── */
          <>
            <h2
              className="text-center text-2xl font-extrabold md:text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Get Instant Access To The Audit
            </h2>
            <p className="mt-2 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              Free · No credit card · Delivered in 60 seconds
            </p>

            {/* Progress bar */}
            <div className="mt-6 flex gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full transition-all duration-500"
                  style={{
                    background: i <= step
                      ? "linear-gradient(90deg, var(--green), var(--green-light))"
                      : "rgba(255,255,255,.08)",
                    boxShadow: i <= step ? "0 0 8px rgba(16,185,129,.4)" : undefined,
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              Step {step + 1} of {total}
            </p>

            {step < QUESTIONS.length ? (
              /* ── QUIZ STEPS ── */
              <fieldset className="mt-7">
                <legend
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {QUESTIONS[step]!.label}
                </legend>
                <div className="mt-4 space-y-3">
                  {QUESTIONS[step]!.options.map((opt) => {
                    const q = QUESTIONS[step]!;
                    const selected = answers[q.key] === opt;
                    return (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-4 transition-all duration-200"
                        style={{
                          border: selected ? "1px solid var(--green)" : "1px solid var(--border-glass)",
                          background: selected ? "rgba(16,185,129,.10)" : "rgba(255,255,255,.02)",
                          boxShadow: selected ? "0 0 16px rgba(16,185,129,.18)" : undefined,
                        }}
                      >
                        <input
                          type="radio"
                          name={q.key}
                          value={opt}
                          checked={selected}
                          className="sr-only"
                          onChange={() => {
                            setAnswers((a) => ({ ...a, [q.key]: opt }));
                            setTimeout(() => setStep((s) => s + 1), 180);
                          }}
                        />
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all"
                          style={{
                            border: selected ? "1px solid var(--green)" : "1px solid rgba(255,255,255,.2)",
                            background: selected ? "var(--green)" : "transparent",
                          }}
                        >
                          {selected && <Check className="h-3 w-3" style={{ color: "#04120c" }} />}
                        </span>
                        <span className="text-sm font-medium" style={{ color: selected ? "var(--text-primary)" : "var(--text-secondary)" }}>
                          {opt}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="mt-5 text-sm transition hover:text-foreground"
                    style={{ color: "var(--text-muted)" }}
                  >
                    ← Back
                  </button>
                )}
              </fieldset>
            ) : (
              /* ── CONTACT FORM ── */
              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <style>{inputFocusStyle}</style>
                <input
                  className={inputCls}
                  style={inputStyle}
                  placeholder="Full name"
                  value={contact.name}
                  maxLength={120}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
                <input
                  className={inputCls}
                  style={inputStyle}
                  type="email"
                  placeholder="Work email"
                  value={contact.email}
                  maxLength={255}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
                <input
                  className={inputCls}
                  style={inputStyle}
                  type="tel"
                  placeholder="Phone number"
                  value={contact.phone}
                  maxLength={40}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
                {err && <p className="text-sm" style={{ color: "var(--destructive)" }}>{err}</p>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`${CTA_BTN} w-full`}
                  style={CTA_BTN_STYLE}
                >
                  {status === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>Download Free Audit PDF <ArrowRight className="h-5 w-5" /></>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="w-full text-sm transition hover:text-foreground"
                  style={{ color: "var(--text-muted)" }}
                >
                  ← Back
                </button>
                <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
                  🔒 No spam · Your audit arrives in 60 seconds
                </p>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
