import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, CheckCircle2, Grid2x2, Box, TrafficCone, Loader2 } from "lucide-react";
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

const CTA_BTN =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60";

function Index() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight">Pareto<span className="text-primary">Talent</span></span>
        <a href="#access" className="text-sm font-medium text-muted-foreground hover:text-foreground">Get the audit →</a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 text-center md:pt-24">
          <span className="inline-block rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-xs font-semibold tracking-widest text-accent-foreground">
            FREE DIAGNOSTIC GUIDE FOR 7-FIGURE FOUNDERS
          </span>
          <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            How 7-Figure Founders Reclaim <span className="text-primary">20+ Hours/Week</span> Without Micromanaging a Reactive VA
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Stop writing 10-page SOPs for low-cost task-checkers. Download The 10-Minute Bottleneck Audit and discover how to delegate complete operational domains using Pareto's Black Box Method.
          </p>
          <a href="#access" className={`${CTA_BTN} mt-10`}>
            Get The 10-Minute Bottleneck Audit (Free PDF) <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Inside */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">What's Inside The 10-Minute Audit</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Grid2x2, t: "The 3-Step Diagnostic Matrix", d: "Map your operational footprint into 4 quadrants to instantly isolate low-leverage tasks." },
            { icon: TrafficCone, t: "Green / Yellow / Red Decision Architecture", d: "Eliminate 90% of daily team interruptions by establishing clear decision latitude." },
            { icon: Box, t: "The Black Box Delegation Model", d: "Learn how to brief outcomes, goals, and constraints instead of micromanaging process steps." },
          ].map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="rounded-2xl border bg-card p-8 transition hover:border-primary/40">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Icon className="h-6 w-6" /></div>
                <span className="text-sm font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who */}
      <section className="border-y bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Engineered Specifically For Overwhelmed Founders</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "7- and 8-Figure Founders, CEOs, & Agency Owners ($500K–$5M+ ARR) working 60–80 hours/week.",
              "Founders trapped in operational chaos acting as the main bottleneck for their team's daily decisions.",
              "Executives frustrated with low-cost \"reactive\" VAs who require constant hand-holding.",
            ].map((b) => (
              <div key={b} className="flex gap-4 rounded-2xl border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <p className="text-foreground/90">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Backed By The Pareto Talent Standard</h2>
        <div className="mt-12 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "< 0.1%", l: "Selection Acceptance Rate", s: "Rigorous 40+ hr vetting & PI behavioral evaluation" },
            { n: "93%", l: "12-Month Client-Operator Retention Rate" },
            { n: "20+ Hrs", l: "Average Weekly Founder Bandwidth Reclaimed" },
            { n: "100%", l: "Zero-Risk Matching & Lifetime Replacement Guarantees" },
          ].map((s) => (
            <div key={s.n} className="border-b bg-card p-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="text-4xl font-extrabold text-primary">{s.n}</div>
              <div className="mt-3 font-semibold">{s.l}</div>
              {s.s && <div className="mt-1 text-sm text-muted-foreground">{s.s}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="access" className="scroll-mt-8 px-6 pb-24">
        <LeadForm />
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pareto Talent. All rights reserved.
      </footer>
    </main>
  );
}

const QUESTIONS = [
  { key: "revenue", label: "What is your annual revenue?", options: ["$500K - $1M ARR", "$1M - $5M+ ARR", "Under $500K ARR"] },
  { key: "team_size", label: "How big is your team?", options: ["1-4", "5-20", "20+"] },
  { key: "bottleneck", label: "What is your primary bottleneck?", options: ["Inbox, calendar & admin", "Operations & project management", "Client delivery & fulfillment", "Sales & lead follow-up"] },
  { key: "timeline", label: "When are you looking to hire?", options: ["Immediately", "Within 30 days", "1-3 months", "Just researching"] },
] as const;

type Answers = Record<(typeof QUESTIONS)[number]["key"], string>;

function LeadForm() {
  const submit = useServerFn(submitLead);
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Answers>({ revenue: "", team_size: "", bottleneck: "", timeline: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const total = QUESTIONS.length + 1;

  const contactValid = contact.name.trim() && /^\S+@\S+\.\S+$/.test(contact.email) && contact.phone.trim().length >= 5;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactValid) { setErr("Please complete all fields with a valid email."); return; }
    setStatus("loading"); setErr("");
    try {
      await submit({ data: { ...contact, ...answers } });
      setStatus("done");
    } catch (e) {
      setStatus("error"); setErr(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  const input = "w-full rounded-lg border bg-input/20 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <div className="mx-auto max-w-xl rounded-2xl border bg-card p-8 shadow-glow md:p-10">
      {status === "done" ? (
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">You're in.</h2>
          <p className="mt-2 text-muted-foreground">Thanks, {contact.name.split(" ")[0]}. Your request for The 10-Minute Bottleneck Audit has been received.</p>
        </div>
      ) : (
        <>
          <h2 className="text-center text-2xl font-bold md:text-3xl">Get Instant Access To The Audit</h2>
          <div className="mt-6 flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
          <p className="mt-3 text-xs font-medium text-muted-foreground">Step {step + 1} of {total}</p>

          {step < QUESTIONS.length ? (
            <fieldset className="mt-6">
              <legend className="text-lg font-semibold">{QUESTIONS[step]!.label}</legend>
              <div className="mt-4 space-y-3">
                {QUESTIONS[step]!.options.map((opt) => {
                  const q = QUESTIONS[step]!;
                  const selected = answers[q.key] === opt;
                  return (
                    <label key={opt} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 transition ${selected ? "border-primary bg-accent" : "hover:border-primary/40"}`}>
                      <input
                        type="radio" name={q.key} value={opt} checked={selected} className="sr-only"
                        onChange={() => { setAnswers((a) => ({ ...a, [q.key]: opt })); setTimeout(() => setStep((s) => s + 1), 180); }}
                      />
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${selected ? "border-primary bg-primary text-primary-foreground" : ""}`}>
                        {selected && <Check className="h-3 w-3" />}
                      </span>
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="mt-6 text-sm text-muted-foreground hover:text-foreground">← Back</button>
              )}
            </fieldset>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input className={input} placeholder="Full name" value={contact.name} maxLength={120} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
              <input className={input} type="email" placeholder="Work email" value={contact.email} maxLength={255} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              <input className={input} type="tel" placeholder="Phone number" value={contact.phone} maxLength={40} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
              {err && <p className="text-sm text-destructive">{err}</p>}
              <button type="submit" disabled={status === "loading"} className={`${CTA_BTN} w-full`}>
                {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Download Free Audit PDF <ArrowRight className="h-5 w-5" /></>}
              </button>
              <button type="button" onClick={() => setStep(step - 1)} className="text-sm text-muted-foreground hover:text-foreground">← Back</button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
