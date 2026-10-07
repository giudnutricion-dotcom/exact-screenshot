import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Layers,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Share2,
  Mail,
  Zap,
} from "lucide-react";
import { z } from "zod";

const thankYouSearchSchema = z.object({
  name: z.string().optional().catch(""),
  email: z.string().optional().catch(""),
});

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search) => thankYouSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Your Bottleneck Audit Is Ready | Pareto Talent" },
      {
        name: "description",
        content:
          "Instant access to The 10-Minute Bottleneck Audit. Your diagnostic worksheet and 3-step action guide to reclaim 15+ hours/week.",
      },
      { property: "og:title", content: "Your Bottleneck Audit Is Ready | Pareto Talent" },
      {
        property: "og:description",
        content: "Instant access to The 10-Minute Bottleneck Audit. Reclaim 15+ hours/week without micromanagement.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ThankYouPage,
});

const AUDIT_DOC_URL =
  "https://docs.google.com/document/d/1Hd5MjJr7MtvgzcxJo9JyeO9HTrsipbSVjrudn6ifh_Q/edit?usp=sharing";

// Shared button styles consistent with design system
const CTA_BTN =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-primary-foreground shadow-green-glow transition-all duration-200 hover:scale-[1.03] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 active:scale-[0.98]";

const CTA_BTN_STYLE: React.CSSProperties = {
  background: "linear-gradient(135deg, #10B981, #34D399)",
  fontFamily: "var(--font-display)",
};

function ThankYouPage() {
  const { name, email } = Route.useSearch();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rawName = name ? name.trim() : "";
  const firstName = rawName ? rawName.split(" ")[0] : "";
  const displayEmail = email ? email.trim() : "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(AUDIT_DOC_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need special Google Drive permissions to edit the audit?",
      a: "No! The Google Doc is shared with public view access. To edit and type in your own responses, simply open the document and click 'File → Make a copy'. This creates a private duplicate inside your personal Google Drive that only you and your team can see.",
    },
    {
      q: "Why didn't I receive a calendar link to book a 1-on-1 strategy call?",
      a: "Pareto places dedicated, top-tier bilingual operators who take complete ownership of entire business departments for a flat $3,500/month. We strictly protect founder capital: businesses under $500K ARR typically get far higher ROI by self-implementing lean SOPs and keeping burn low rather than hiring full-time executive operators. Once you scale past $500K ARR and need a full-time operator, our doors are open.",
    },
    {
      q: "Can I share this audit document with my co-founder or leadership team?",
      a: "Yes, 100%. You have full permission to duplicate and distribute this worksheet internally across your leadership and operational staff.",
    },
    {
      q: "How long does it take to complete the Bottleneck Audit?",
      a: "Approximately 10 minutes. It was specifically built for time-starved founders. You only need to run through the Quadrant 1 vs 4 inventory on Page 2 and mark low-leverage recurring tasks.",
    },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-deep)" }}>
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(10,14,20,.85)",
          backdropFilter: "blur(16px)",
          borderColor: "var(--border-glass)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pareto<span style={{ color: "var(--green-light)" }}>Talent</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "rgba(16,185,129,.10)",
                border: "1px solid rgba(16,185,129,.25)",
                color: "var(--green-light)",
                fontFamily: "var(--font-display)",
              }}
            >
              <FileText className="h-3.5 w-3.5" /> Asset TY-PDF-01 Delivered
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid var(--border-glass)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-display)",
              }}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO HEADER ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
        {/* ambient gradients */}
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--green) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Status Badge */}
          <div
            className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(16,185,129,.12)",
              border: "1px solid rgba(16,185,129,.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--green-light)", fontFamily: "var(--font-display)" }}
            >
              Diagnostic Complete · Asset Unlocked
            </span>
          </div>

          {/* Success Check Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full relative">
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{ background: "rgba(16,185,129,.15)", filter: "blur(10px)" }}
            />
            <div
              className="relative flex h-20 w-20 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,.25), rgba(6,78,59,.4))",
                border: "2px solid rgba(16,185,129,.4)",
                boxShadow: "0 0 30px rgba(16,185,129,.3)",
              }}
            >
              <CheckCircle2 className="h-10 w-10" style={{ color: "var(--green-bright)" }} />
            </div>
          </div>

          <h1
            className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {firstName ? (
              <>
                Your Audit Is Ready,{" "}
                <span className="text-gradient-green">{firstName}</span>.
              </>
            ) : (
              <>
                Your <span className="text-gradient-green">Bottleneck Audit</span> Is Ready.
              </>
            )}
          </h1>

          <p
            className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Thank you for completing the diagnostic. Your private copy of{" "}
            <strong style={{ color: "var(--text-primary)" }}>The 10-Minute Bottleneck Audit</strong> is
            unlocked and ready for instant access below.
          </p>

          {/* Recipient verification banner */}
          {displayEmail && (
            <div
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid var(--border-glass)",
                color: "var(--text-muted)",
              }}
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>
                A permanent backup link has been sent to{" "}
                <strong style={{ color: "var(--text-primary)" }}>{displayEmail}</strong>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── CORE DELIVERABLE CARD (TY-PDF-01) ────────────────────── */}
      <section className="relative px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(16,185,129,.3)",
              boxShadow: "var(--shadow-green-glow)",
            }}
          >
            {/* Top decorative glow badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6" style={{ borderColor: "var(--border-glass)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(16,185,129,.12)",
                    border: "1px solid rgba(16,185,129,.3)",
                  }}
                >
                  <BookOpen className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <span
                    className="block text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--green-light)", fontFamily: "var(--font-display)" }}
                  >
                    Primary Resource · TY-PDF-01
                  </span>
                  <h2
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    The 10-Minute Bottleneck Audit
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-glass)",
                  }}
                >
                  <Clock className="h-3.5 w-3.5 text-emerald-400" /> 10-Min Diagnostic
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: "rgba(16,185,129,.1)",
                    color: "var(--green-bright)",
                    border: "1px solid rgba(16,185,129,.2)",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" /> Google Docs
                </span>
              </div>
            </div>

            {/* Document Details & Included Modules */}
            <div className="mt-8 space-y-4">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                This is the exact operational framework we run with 7-figure founders before placing an executive operator.
                It will immediately pinpoint where your hours are leaking and show you how to cut 15–20 hours of daily friction.
              </p>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(0,0,0,.25)",
                  border: "1px solid var(--border-glass)",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                >
                  What&apos;s included in your document:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Quadrant 1 vs 4 Matrix:</strong> Isolate high-leverage vs admin drag
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Hourly Value Calculator:</strong> Calculate the actual cost of your time
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>EOD Slack Digest Template:</strong> Kill 80% of unnecessary meetings
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span style={{ color: "var(--text-primary)" }}>
                      <strong>Black Box Delegation Rubric:</strong> The blueprint for full task ownership
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href={AUDIT_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CTA_BTN} w-full text-center text-lg`}
                style={CTA_BTN_STYLE}
              >
                <span>Open Google Doc Audit Now</span>
                <ExternalLink className="h-5 w-5" />
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold transition-all hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid var(--border-glass)",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Document Link</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center sm:text-right" style={{ color: "var(--text-muted)" }}>
                  💡 <strong>Tip:</strong> In Google Docs, click <em>File → Make a copy</em> to save.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-STEP IMMEDIATE ACTION PLAN ─────────────────────────── */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-3"
              style={{
                background: "var(--green-muted)",
                border: "1px solid rgba(16,185,129,.3)",
                color: "var(--green-light)",
                fontFamily: "var(--font-display)",
              }}
            >
              Action Plan · Email U-1 Playbook
            </span>
            <h2
              className="text-2xl font-extrabold md:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              How To Reclaim Your First 10–15 Hours This Week
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
              Even before hiring a dedicated executive operator, executing these 3 steps from the audit will immediately stop the leakage:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div
              className="rounded-2xl p-6 relative flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-glass)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold"
                    style={{
                      background: "rgba(16,185,129,.15)",
                      color: "var(--green-bright)",
                      border: "1px solid rgba(16,185,129,.3)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    01
                  </span>
                  <Layers className="h-5 w-5 text-emerald-400 opacity-60" />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Run The Inventory (Page 2)
                </h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  List every recurring task you touched this week. Categorize them into Quadrant 1 (revenue drivers) vs Quadrant 4 (operational noise).
                </p>
              </div>
              <div
                className="mt-6 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5"
                style={{ borderColor: "rgba(255,255,255,.06)", color: "var(--green-light)" }}
              >
                <Zap className="h-3 w-3" /> Reclaims: 4–6 hrs/week
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="rounded-2xl p-6 relative flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-glass)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold"
                    style={{
                      background: "rgba(224,151,63,.15)",
                      color: "var(--ember-2)",
                      border: "1px solid rgba(224,151,63,.3)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    02
                  </span>
                  <ShieldCheck className="h-5 w-5 text-amber-400 opacity-60" />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Eliminate Before Delegating
                </h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Never pay someone to do a task that shouldn&apos;t exist. If an administrative check does not directly protect revenue or clients, delete it immediately.
                </p>
              </div>
              <div
                className="mt-6 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5"
                style={{ borderColor: "rgba(255,255,255,.06)", color: "var(--ember-2)" }}
              >
                <Zap className="h-3 w-3" /> Reclaims: 3–5 hrs/week
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="rounded-2xl p-6 relative flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-glass)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold"
                    style={{
                      background: "rgba(16,185,129,.15)",
                      color: "var(--green-bright)",
                      border: "1px solid rgba(16,185,129,.3)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    03
                  </span>
                  <Sparkles className="h-5 w-5 text-emerald-400 opacity-60" />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Install The EOD Slack Digest
                </h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Implement our 3-bullet asynchronous End-of-Day report with your team. Eliminates constant &quot;quick questions&quot; and 80% of routine sync meetings.
                </p>
              </div>
              <div
                className="mt-6 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5"
                style={{ borderColor: "rgba(255,255,255,.06)", color: "var(--green-light)" }}
              >
                <Zap className="h-3 w-3" /> Reclaims: 5–8 hrs/week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY CARD: WHY WE DON'T SELL YOU RIGHT NOW ──── */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,.05), rgba(10,14,20,.95))",
              border: "1px solid rgba(16,185,129,.2)",
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "var(--green-muted)",
                  border: "1px solid rgba(16,185,129,.3)",
                }}
              >
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--green-light)", fontFamily: "var(--font-display)" }}
                >
                  Radical Transparency &amp; Founder Respect
                </span>
                <h3
                  className="text-xl font-bold md:text-2xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Why We Didn&apos;t Pitch You A Strategy Call
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Most talent agencies will gladly book a sales call with anyone who breathes, only to hard-sell you on hiring an assistant you might not be ready for.
              </p>
              <p>
                At <strong>Pareto Talent</strong>, we operate differently. Our model pairs founders with elite, top 0.1% Latin American bilingual operators at a flat <strong>$3,500/month</strong>. At that standard, our operators take total ownership of entire operational departments.
              </p>
              <p>
                For companies operating under $500K ARR, spending $3,500/mo on dedicated executive infrastructure is rarely the highest-ROI move. At your current stage, your focus should be product iteration, customer acquisition, and keeping burn lean.
              </p>
              <p>
                That is why we provide you with our proprietary <strong>10-Minute Bottleneck Audit</strong> completely free. Run the audit, reclaim your hours, scale your revenue, and when you cross the $500K ARR mark and need a full-time operational right hand, you know where to find us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-center text-xl font-bold md:text-2xl mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden transition-colors"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-glass)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-bold focus:outline-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-emerald-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5 pt-1 text-sm leading-relaxed border-t"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "rgba(255,255,255,.05)",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA & NAVIGATION ─────────────────────────────── */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,.02)",
              border: "1px solid var(--border-glass)",
            }}
          >
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Ready To Dive In?
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              Keep this page bookmarked, or open your worksheet now in Google Docs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={AUDIT_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CTA_BTN}`}
                style={CTA_BTN_STYLE}
              >
                Open Google Doc Audit <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid var(--border-glass)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                <ArrowLeft className="h-4 w-4" /> Return to Homepage
              </Link>
            </div>
          </div>
        </div>
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
            <Link to="/" className="transition hover:text-foreground">
              Home
            </Link>
            <a
              href="https://paretotalent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              paretotalent.com
            </a>
            <a
              href={AUDIT_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              Audit Google Doc
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
