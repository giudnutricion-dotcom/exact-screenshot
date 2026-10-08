const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const fullName = process.argv[2] || "Giuliana Denise Acevedo Struciat";
const applicationEmail = process.argv[3] || "deniseacestruciat@gmail.com";

// ─── All project links ────────────────────────────────────────────────────────
const links = [
  { label: "Landing Page (LP-MAIN-01)",            url: "https://lovable.dev/preview/qVwkk9XkKvtTeMpMSwwQkAknGvoWywzL" },
  { label: "Business Map (MAP-BIZ-01)",             url: "https://app.diagrams.net/#G1NB0yMU1q4FVjw3Gufi0E8utUun-ELnyU#%7B%22pageId%22%3A%22FXnT8L-CWzDkFWurG9us%22%7D" },
  { label: "Business Map Backup (Google Drive)",   url: "https://drive.google.com/file/d/1NB0yMU1q4FVjw3Gufi0E8utUun-ELnyU/view" },
  { label: "ClickUp Project Breakdown (CLICKUP-OPS-01)", url: "https://sharing.clickup.com/90171581493/l/h/6-901717574004-1/2b12e30ef936048" },
  { label: "Lead Magnet Launch SOP (SOP-OPS-001)",   url: "https://docs.google.com/document/d/12_WIYYqbJB0uh2QV-QpMmdcDKrPQyVxE4G9-llODpLw/edit?usp=sharing" },
  { label: "Qualifying Intake Form (FORM-QUAL-01)", url: "Embedded in Landing Page — conditional routing logic built in-page" },
  { label: "Booking Page (BOOK-CAL-01)",            url: "https://calendly.com/giudnutricion/30min" },
  { label: "Lead Magnet PDF (TY-PDF-01)",           url: "https://docs.google.com/document/d/1Hd5MjJr7MtvgzcxJo9JyeO9HTrsipbSVjrudn6ifh_Q/edit?usp=sharing" },
  { label: "Thank You Download Page (TY-PDF-01)",   url: "https://lovable.dev/preview/qVwkk9XkKvtTeMpMSwwQkAknGvoWywzL/thank-you" },
  { label: "CRM Pipeline (Pareto High-Ticket EA Pipeline)", url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Opt-In Automation Workflow (FORM-QUAL-01 Trigger)", url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Qualified Follow-Up Email Q-1",         url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Qualified Follow-Up Email Q-2",         url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Qualified Follow-Up Email Q-3",         url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Unqualified Nurture Email U-1",         url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Booking Confirmation Email",            url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "24-Hour Pre-Call Reminder Email",       url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "1-Hour Pre-Call SMS/Email Nudge",       url: "https://docs.google.com/document/d/1MfC1d-A0J7ydGFc62SkKy-nhv0DXtHm7eRpWVAevBGg/edit?usp=sharing" },
  { label: "Ad Creatives & Copy Suite (AD 1 – AD 5)", url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Ad Creative — AD 1: Trapped Agency Owner", url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Ad Creative — AD 2: Reactive VA Trap",  url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Ad Creative — AD 3: $1,000/Hour Math",  url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Ad Creative — AD 4: Green/Yellow/Red Framework", url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Ad Creative — AD 5: Right Hand Blueprint", url: "https://docs.google.com/document/d/1lfTt0HaG_RQNbGvIN7Dq0DrzZ5GVf7uSxjIKVrRNLIc/edit?usp=sharing" },
  { label: "Loom Walkthrough Video (2-Minute Presentation)", url: "https://www.loom.com/share/0fd0922b3f874a2ab4a11df334aedc0d" },
];

// ─── Walkthrough Parts 1 to 3 ────────────────────────────────────────────────
const parts1to3 = [
  {
    num: "Part 1",
    title: "Second Brain, Competitor Research & ICP Setup",
    built: "Comprehensive diagnostic teardown of Athena, Shepherd, and Boldly. Synthesized target ICP: 7- and 8-figure agency CEOs & founders ($500K–$5M+ ARR) suffocating in operational drag. Mapped core pain points into 3 distinct founder archetypes: The Trapped Agency Owner, The Fast-Scaling CEO, and The Disorganized Visionary.",
    why: "Generic virtual assistant positioning attracts low-budget clients seeking cheap labor. Positioning specifically around executive operational leverage justifies high-ticket placement pricing and attracts serious 7-figure operators.",
    linkLabel: "Landing Page (LP-MAIN-01)",
  },
  {
    num: "Part 2",
    title: "Funnel Journey Map (Business Map)",
    built: "End-to-end interactive architecture map designed in diagrams.net with Google Drive backup. Diagrams full journey: Ad traffic (5 creative angles) → Landing page & intake form → Bifurcated routing (Qualified route to Calendly booking; Unqualified route to direct asset download) → CRM webhook tagging & pipeline → Email nurture & pre-call reminder sequence.",
    why: "A comprehensive visual map aligns all technical and marketing stakeholders, eliminates lead leakage at branch points, and ensures zero single points of failure across the funnel infrastructure.",
    linkLabel: "Business Map (diagrams.net)",
  },
  {
    num: "Part 3",
    title: "ClickUp Project Breakdown & Launch SOP",
    built: "1. ClickUp Project Breakdown (CLICKUP-OPS-01): Built backwards from Oct 7 with 6 core milestones (Research, Lead Magnet, Funnel, CRM, Ads, QA). Every task assigned an Owner (Giuliana Acevedo), strict Deadline, Status, and Priority. 2. Written Launch SOP (SOP-OPS-001): Authored a complete, step-by-step Standard Operating Procedure with 5 structured phases (Research & ICP, Asset Production, Funnel Wiring & Bifurcated Routing, CRM & Nurture, AI Ads & QA) so subsequent lead magnet campaigns can be replicated with exact precision.",
    why: "Backwards-planning from the launch date guarantees on-time delivery with zero ambiguity. Writing the step-by-step SOP ensures institutional repeatability, enabling any team operator to execute future lead magnet launches flawlessly.",
    linkLabel: "ClickUp Breakdown (CLICKUP-OPS-01) · Launch SOP (SOP-OPS-001)",
  },
];

// ─── Walkthrough Parts 5 & 6 ──────────────────────────────────────────────────
const parts5to6 = [
  {
    num: "Part 5",
    title: "Lead Magnet Asset & Live Delivery",
    built: "Published live as a shareable public Google Doc incorporating the 4-Quadrant Matrix, Black Box Delegation Model, and Green/Yellow/Red Decision Architecture. Completely on-brand with Pareto styling. Immediate delivery email configured upon form opt-in with pre-call booking instructions.",
    why: "Instant delivery removes friction, provides immediate standalone utility even if the founder never books a call, and demonstrates operational speed as a tangible proof of Pareto's standard.",
    linkLabel: "Lead Magnet PDF (TY-PDF-01)",
  },
  {
    num: "Part 6",
    title: "Funnel Architecture, Page Copy & Agenda Integration",
    built: "Landing page live on Lovable/React: Hero, What's Inside, Who It's For, Proof stats (<0.1% acceptance, 93% retention, 20+ hrs reclaimed, 100% guarantee), and embedded form. 4-question qualification intake: Qualified leads route to Calendly (BOOK-CAL-01) with pre-filled metadata; unqualified leads route to the dedicated /thank-you screen delivering the audit directly.",
    why: "Frictionless bifurcated routing protects sales capacity while maximizing opt-in velocity and perceived executive authority.",
    linkLabel: "Landing Page (LP-MAIN-01) · Booking Page (BOOK-CAL-01)",
  },
];

// ─── Walkthrough Parts 7 to 9 ────────────────────────────────────────────────
const parts7to9 = [
  {
    num: "Part 7",
    title: "CRM Pipeline & Automation Workflows",
    built: "Five-stage pipeline (Opted In, Qualified, Call Booked, Client, Unqualified Leads) fully codified with trigger automations, $7,500 opportunity generation, and internal team Slack alerts. Complete 7-part email & SMS copywriting suite: 3-email qualified follow-up sequence (Q-1 at 4h, Q-2 at 24h, Q-3 at 48h), unqualified instant delivery email (U-1), and Calendly pre-call show-up sequence (confirmation, 24h reminder, 1h SMS nudge). Full QA verification with 3 test cases passed.",
    why: "Automates nurture and sales ops without human friction, ensuring zero lead leakage and maintaining an 85%+ target show rate on scheduled strategy sessions.",
    linkLabel: "CRM Pipeline & Email Suite (Google Doc)",
  },
  {
    num: "Part 8",
    title: "Launch Materials & AI Ad Creatives",
    built: "Unified visual identity guidelines (Deep Obsidian #0B0F17, Laser Emerald #10B981, Swiss typography). Five complete Facebook ad creatives across distinct angles (AD 1: Trapped Agency Owner, AD 2: Reactive VA Trap, AD 3: $1,000/Hour Founder Math, AD 4: Green/Yellow/Red Framework, AD 5: Right Hand Blueprint). Each ad includes Hook, Qualifier, Mechanism, Proof, Offer, CTA, and a production AI image prompt.",
    why: "Diversified creative angles prevent ad fatigue, target different psychological triggers within the same ICP, and maintain rigorous visual consistency with the funnel and lead magnet.",
    linkLabel: "Ad Creative Suite (AD 1 – AD 5 Google Doc)",
  },
  {
    num: "Part 9",
    title: "2-Minute Loom Presentation Blueprint",
    built: "Executive 2-minute video walkthrough recorded and published live on Loom (https://www.loom.com/share/0fd0922b3f874a2ab4a11df334aedc0d). The presentation executes the precision 5-tab walkthrough: Ad Creatives → Live Landing Page & 4-Question Intake Form → Calendly Qualified Booking Route → The 10-Minute Bottleneck Audit Google Doc → CRM Pipeline & Automation Engine. Delivered with crisp spoken commentary articulating the strategic positioning, high-ticket backend bridge, and verified launch readiness.",
    why: "A live recorded screen walkthrough proves that the entire end-to-end funnel is fully built, integrated, and verified to operate seamlessly with zero technical friction.",
    linkLabel: "Loom Walkthrough Video (2-Minute Presentation)",
  },
];

// ─── HTML ─────────────────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pareto Talent — Submission</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --green:        #059669;
    --green-dim:    rgba(5,150,105,0.08);
    --green-border: rgba(5,150,105,0.22);
    --text:         #111827;
    --text-2:       #374151;
    --text-3:       #6B7280;
    --border:       #E5E7EB;
    --border-2:     #D1D5DB;
    --bg:           #FFFFFF;
    --bg-2:         #F9FAFB;
    --bg-3:         #F3F4F6;
    --fd: 'Plus Jakarta Sans', sans-serif;
    --fb: 'DM Sans', sans-serif;
    --fm: 'JetBrains Mono', monospace;
  }

  @page {
    size: A4 portrait;
    margin: 13mm 15mm 13mm 15mm;
  }

  * { box-sizing: border-box; margin: 0; padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--fb);
    font-size: 10.5px;
    line-height: 1.55;
  }

  /* ── Page helpers ── */
  .page {
    page-break-after: always;
    break-after: page;
    min-height: 268mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .page-last {
    page-break-after: avoid;
    break-after: avoid;
    min-height: 268mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .fill { flex: 1; }

  /* ── Footer ── */
  .footer {
    border-top: 1px solid var(--border);
    margin-top: 10px;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: var(--text-3);
    font-family: var(--fd);
  }
  .footer-brand { font-weight: 700; color: var(--text); }
  .footer-brand em { font-style: normal; color: var(--green); }

  /* ── Section label (eyebrow) ── */
  .eyebrow {
    font-family: var(--fd);
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--green);
    margin-bottom: 5px;
  }

  /* ── Typography ── */
  h1 {
    font-family: var(--fd);
    font-size: 28px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: var(--text);
  }
  h2 {
    font-family: var(--fd);
    font-size: 13px;
    font-weight: 700;
    color: var(--text);
    line-height: 1.3;
    letter-spacing: -0.015em;
  }
  h3 {
    font-family: var(--fd);
    font-size: 10.5px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 3px;
  }
  p { color: var(--text-2); margin-bottom: 4px; }
  strong { color: var(--text); font-weight: 600; }

  /* ── Divider ── */
  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 12px 0;
  }

  /* ── Cover meta row ── */
  .meta-row {
    display: flex;
    gap: 8px;
    align-items: baseline;
    font-size: 10.5px;
    margin-bottom: 5px;
  }
  .meta-label {
    font-family: var(--fd);
    font-weight: 700;
    font-size: 8.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-3);
    min-width: 110px;
  }
  .meta-value { color: var(--text-2); }

  /* ── Section heading bar ── */
  .section-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--text);
    padding-bottom: 5px;
    margin-bottom: 12px;
  }
  .section-num {
    font-family: var(--fd);
    font-size: 8.5px;
    font-weight: 700;
    color: var(--text-3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ── Link index ── */
  .link-row {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--border);
    padding: 3.5px 0;
    align-items: baseline;
    font-size: 9px;
  }
  .link-row:first-child { border-top: 1px solid var(--border); }
  .link-label {
    font-family: var(--fd);
    font-weight: 600;
    color: var(--text);
    min-width: 235px;
    flex-shrink: 0;
    font-size: 8.5px;
  }
  .link-dot {
    color: var(--text-3);
    margin: 0 7px;
    flex-shrink: 0;
  }
  .link-url {
    color: var(--text-2);
    word-break: break-all;
    font-size: 8.5px;
  }
  .link-url.is-link {
    color: var(--green);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .link-url.is-dash {
    color: var(--text-3);
    font-style: italic;
  }

  /* ── Walkthrough part ── */
  .part-block {
    border-left: 2px solid var(--green);
    padding: 7px 11px;
    margin-bottom: 8px;
    background: var(--bg-2);
    border-radius: 0 5px 5px 0;
    page-break-inside: avoid;
  }
  .part-num {
    font-family: var(--fd);
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--green);
    margin-bottom: 1px;
  }
  .part-title {
    font-family: var(--fd);
    font-size: 11px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 4px;
  }
  .part-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    margin-bottom: 5px;
  }
  .part-col-label {
    font-family: var(--fd);
    font-size: 7.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-3);
    margin-bottom: 2px;
  }
  .part-text {
    font-size: 8.5px;
    color: var(--text-2);
    line-height: 1.48;
  }
  .part-link-row {
    border-top: 1px solid var(--border-2);
    padding-top: 4px;
    display: flex;
    gap: 8px;
    align-items: baseline;
    font-size: 8.5px;
  }
  .part-link-label-tag {
    font-family: var(--fd);
    font-size: 7.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-3);
    flex-shrink: 0;
  }
  .part-link-value {
    color: var(--green);
    font-family: var(--fd);
    font-weight: 600;
  }
  .part-link-value.dash { color: var(--text-3); font-style: italic; }

  /* ── Deep dive card for Part 4 ── */
  .deep-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-left: 3px solid var(--green);
    border-radius: 0 6px 6px 0;
    padding: 8px 11px;
    margin-bottom: 8px;
    page-break-inside: avoid;
  }
  .deep-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 4px;
  }
  .deep-badge {
    background: var(--green);
    color: #fff;
    font-family: var(--fd);
    font-size: 8px;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .deep-title {
    font-family: var(--fd);
    font-size: 10.5px;
    font-weight: 700;
    color: var(--text);
  }
  .deep-body {
    font-size: 8.6px;
    color: var(--text-2);
    line-height: 1.5;
  }
  .deep-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 4px;
  }
  .sub-box {
    background: #FFFFFF;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 6px 8px;
  }
  .sub-box-title {
    font-family: var(--fd);
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--green);
    margin-bottom: 3px;
  }

</style>
</head>
<body>

<!-- ════════════════════════════════════════
     SECTION 1 · COVER
════════════════════════════════════════ -->
<div class="page">
  <div>
    <!-- Brand -->
    <div style="display:flex;justify-content:space-between;align-items:center;
                border-bottom:2px solid var(--green);padding-bottom:12px;margin-bottom:28px;">
      <div style="font-family:var(--fd);font-size:16px;font-weight:800;
                  letter-spacing:-0.02em;color:var(--text);">
        Pareto<em style="font-style:normal;color:var(--green);">Talent</em>
      </div>
      <div style="font-family:var(--fd);font-size:9px;color:var(--text-3);
                  text-transform:uppercase;letter-spacing:0.08em;">
        Application Submission · October 2026
      </div>
    </div>

    <!-- Section eyebrow -->
    <div class="eyebrow">Section 1 · Cover</div>

    <!-- Title -->
    <h1 style="margin-bottom:24px;">Right Hand Executive<br>Placement Program</h1>

    <!-- Meta fields -->
    <div style="border:1px solid var(--border);border-radius:8px;
                padding:16px 20px;margin-bottom:24px;">

      <div class="meta-row">
        <span class="meta-label">Full Name</span>
        <span class="meta-value" style="font-weight:600;color:var(--text);font-size:11.5px;">${fullName}</span>
      </div>

      <div style="border-top:1px solid var(--border);margin:7px 0;"></div>

      <div class="meta-row">
        <span class="meta-label">Application Email</span>
        <span class="meta-value">${applicationEmail}</span>
      </div>

      <div style="border-top:1px solid var(--border);margin:7px 0;"></div>

      <div class="meta-row" style="align-items:flex-start;">
        <span class="meta-label">Lead Magnet Title</span>
        <span class="meta-value" style="font-style:italic;">
          The 10-Minute Bottleneck Audit: How 7-Figure Founders Reclaim 20+ Hours/Week
          Without Micromanaging a Reactive VA
        </span>
      </div>

      <div style="border-top:1px solid var(--border);margin:7px 0;"></div>

      <div class="meta-row" style="align-items:flex-start;">
        <span class="meta-label">Funnel Tool Used</span>
        <span class="meta-value">
          Lovable (React landing page) · Calendly (booking) ·
          Google Docs (lead magnet & SOP delivery) · ClickUp (project breakdown) ·
          diagrams.net (business map) · CRM with pipeline tagging & automations · Loom (walkthrough)
        </span>
      </div>

    </div>

    <!-- Brief summary -->
    <div style="background:var(--bg-2);border-radius:6px;padding:12px 15px;
                font-size:10px;color:var(--text-2);line-height:1.65;">
      This submission delivers a complete end-to-end lead magnet and high-ticket funnel for
      placing Latin American <strong>"Right Hand" Executive Assistants</strong> with 7- and 8-figure
      founders ($500K–$5M+ ARR). It covers nine parts: market research, funnel journey map,
      project SOP, lead magnet design, live asset delivery, page copy, CRM pipeline & automation,
      AI ad creatives, and a 2-minute Loom presentation video — all tested and launch-ready for October 7, 2026.
    </div>
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 1 of 6</span>
  </div>
</div>


<!-- ════════════════════════════════════════
     SECTION 2 · LINK INDEX
════════════════════════════════════════ -->
<div class="page">
  <div>
    <div class="section-bar">
      <div>
        <div class="eyebrow" style="margin-bottom:3px;">Section 2</div>
        <h2>Link Index</h2>
      </div>
      <div class="section-num">Every deliverable · one line each</div>
    </div>

    <p style="font-size:9.5px;color:var(--text-3);margin-bottom:10px;">
      Every link is listed on its own line with its exact label and direct destination URL.
    </p>

    <div>
      ${links.map(l => {
        const isUrl = l.url.startsWith('http');
        const isDash = l.url.startsWith('—');
        return `
        <div class="link-row">
          <span class="link-label">${l.label}</span>
          <span class="link-dot">·</span>
          <span class="link-url ${isUrl ? 'is-link' : isDash ? 'is-dash' : ''}">${l.url}</span>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 2 of 6</span>
  </div>
</div>


<!-- ════════════════════════════════════════
     SECTION 3 · WALKTHROUGH — PARTS 1 TO 3
════════════════════════════════════════ -->
<div class="page">
  <div>
    <div class="section-bar">
      <div>
        <div class="eyebrow" style="margin-bottom:3px;">Section 3 · Walkthrough</div>
        <h2>What Was Built, Why &amp; Link Label</h2>
      </div>
      <div class="section-num">Parts 1–3 of 9</div>
    </div>

    ${parts1to3.map(part => `
    <div class="part-block">
      <div class="part-num">${part.num}</div>
      <div class="part-title">${part.title}</div>
      <div class="part-grid">
        <div>
          <div class="part-col-label">What I Built</div>
          <div class="part-text">${part.built}</div>
        </div>
        <div>
          <div class="part-col-label">Why</div>
          <div class="part-text">${part.why}</div>
        </div>
      </div>
      <div class="part-link-row">
        <span class="part-link-label-tag">Link Label</span>
        <span class="part-link-value ${part.linkLabel === '—' ? 'dash' : ''}">${part.linkLabel}</span>
      </div>
    </div>`).join('')}
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 3 of 6</span>
  </div>
</div>


<!-- ════════════════════════════════════════
     SECTION 3 · WALKTHROUGH — PART 4 DEEP DIVE
════════════════════════════════════════ -->
<div class="page">
  <div>
    <div class="section-bar">
      <div>
        <div class="eyebrow" style="margin-bottom:3px;">Section 3 · Walkthrough</div>
        <h2>Part 4: Lead Magnet Design &amp; Backend Offer Strategy</h2>
      </div>
      <div class="section-num">Part 4 of 9 · In-Depth Development</div>
    </div>

    <!-- 1. Format & 10-Minute Promise -->
    <div class="deep-card">
      <div class="deep-header">
        <span class="deep-badge">Module 1</span>
        <span class="deep-title">Chosen Format &amp; The 10-Minute Promise</span>
      </div>
      <div class="deep-body">
        <p>• <strong>Format:</strong> Interactive Diagnostic Workbook &amp; Architecture Matrix (Delivered live as an easily copyable Google Doc and integrated on-page interactive intake tool).</p>
        <p>• <strong>Asset Title:</strong> <em>The 10-Minute Bottleneck Audit: How 7-Figure Founders Reclaim 20+ Hours/Week Without Micromanaging a Reactive VA</em>.</p>
        <p style="margin-bottom:0;">• <strong>One Specific Problem It Solves in &lt;10 Minutes:</strong> Eliminates acute "Founder Drag"—the 15 to 20 hours/week founders waste on low-leverage $10–$50/hr administrative trivia (inbox triage, calendar juggling, recurring team check-ins). In under 10 minutes, the 4-Quadrant Matrix quantifies their exact hourly opportunity loss ($985/hr founder rate) and installs the Green/Yellow/Red Decision Protocol to eliminate 90% of daily team interruptions immediately.</p>
      </div>
    </div>

    <!-- 2. MAGIC Naming Formula & Hormozi's Value Equation -->
    <div class="deep-card">
      <div class="deep-header">
        <span class="deep-badge">Module 2</span>
        <span class="deep-title">MAGIC Naming Formula &amp; Hormozi's Value Equation (Day 5)</span>
      </div>
      <div class="deep-body">
        <div class="deep-grid">
          <div class="sub-box">
            <div class="sub-box-title">The MAGIC Naming Formula</div>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>M (Magnet):</strong> Solves acute 7-figure founder operational chaos.</p>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>A (Actionable):</strong> 4-Quadrant diagnostic matrix &amp; decision rules.</p>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>G (Goal):</strong> Reclaims 15–20 hours/week of high-leverage CEO focus.</p>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>I (Instant):</strong> Completed in &lt;10 minutes with immediate clarity.</p>
            <p style="margin-bottom:0;font-size:8.3px;">• <strong>C (Clear):</strong> Unambiguous Green/Yellow/Red categorical rules.</p>
          </div>
          <div class="sub-box">
            <div class="sub-box-title">Alex Hormozi's Value Equation</div>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>Dream Outcome (&uarr;):</strong> Complete operational freedom; founder focuses strictly on $1,000/hr visionary growth &amp; enterprise sales.</p>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>Perceived Likelihood (&uarr;):</strong> Top &lt;0.1% talent, Predictive Index vetting, 93% retention, 100% Matching &amp; Lifetime Guarantees.</p>
            <p style="margin-bottom:2px;font-size:8.3px;">• <strong>Time Delay (&darr;):</strong> Instant audit in &lt;10 min; candidate placement in days.</p>
            <p style="margin-bottom:0;font-size:8.3px;">• <strong>Effort &amp; Sacrifice (&darr;):</strong> Zero babysitting; autonomous operator runs via Black Box Delegation &amp; daily Slack digests.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Qualification Criteria & Bifurcated Routing -->
    <div class="deep-card">
      <div class="deep-header">
        <span class="deep-badge">Module 3</span>
        <span class="deep-title">4-Question Qualification Criteria &amp; Bifurcated Routing (FORM-QUAL-01)</span>
      </div>
      <div class="deep-body">
        <p>The intake form strictly filters traffic to protect executive sales capacity while providing immense goodwill to early-stage founders:</p>
        <div class="deep-grid">
          <div class="sub-box" style="border-left:2px solid var(--green);">
            <div class="sub-box-title">Qualified Route (Offered a Call)</div>
            <p style="font-size:8.2px;margin-bottom:2px;">• <strong>Revenue:</strong> $500K–$1M ARR or $1M–$5M+ ARR (has proven cash flow &amp; $985/hr opportunity cost).</p>
            <p style="font-size:8.2px;margin-bottom:2px;">• <strong>Team:</strong> 5–20 or 20+ operators | <strong>Timeline:</strong> Immediate / &lt;30 days.</p>
            <p style="font-size:8.2px;margin-bottom:0;">• <strong>Routing &amp; CRM:</strong> Auto-redirect to Calendly (<code>BOOK-CAL-01</code>) for 30-min strategy session. Tag <code>status:qualified</code>, $7,500 ACV opportunity, instant team notification.</p>
          </div>
          <div class="sub-box" style="border-left:2px solid var(--border-2);">
            <div class="sub-box-title" style="color:var(--text-3);">Unqualified Route (Direct Delivery)</div>
            <p style="font-size:8.2px;margin-bottom:2px;">• <strong>Revenue:</strong> Under $500K ARR (sub-scale for high-ticket EA placement).</p>
            <p style="font-size:8.2px;margin-bottom:2px;">• <strong>Team:</strong> 1–4 team members | <strong>Timeline:</strong> "Just researching".</p>
            <p style="font-size:8.2px;margin-bottom:0;">• <strong>Routing &amp; CRM:</strong> Auto-redirect to <code>/thank-you</code> page with instant Google Doc download. Tag <code>status:unqualified</code>, Email U-1, zero calendar waste.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Next-Step High-Ticket Offer -->
    <div class="deep-card" style="margin-bottom:5px;">
      <div class="deep-header">
        <span class="deep-badge">Module 4</span>
        <span class="deep-title">The Next-Step Offer: Why a Qualified Founder Should Book a Call</span>
      </div>
      <div class="deep-body">
        <p>• <strong>The Core Problem Solved:</strong> The Audit diagnoses the exact hours lost ($985/hr founder rate), proving the bottleneck is real. However, hiring cheap offshore VAs traps the founder in the <em>Reactive VA Trap</em>—spending 10 hours a week babysitting, reviewing broken English, and managing 12-hour timezone delays.</p>
        <p>• <strong>The Solution — Pareto Right Hand Placement Program:</strong> Elite Latin American executive operators (top 0.1% acceptance rate) operating in <em>identical US timezones (EST/CST/PST)</em>, pre-vetted with Predictive Index behavioral assessments, and trained in proactive inbox triage and calendar shield.</p>
        <p>• <strong>Ironclad Risk Reversals:</strong> 100% Matching Guarantee &amp; Lifetime Replacement Guarantee, proven by a 93% 12-month client retention rate.</p>
        <p style="margin-bottom:0;">• <strong>The Strategy Call Pitch:</strong> A 30-minute <em>Delegation Architecture Session</em>. On the call, Pareto reviews the founder's completed Bottleneck Audit, designs their custom Right Hand scorecard, and maps an exact 14-day onboarding blueprint to reclaim 20+ hours/week with zero training headache.</p>
      </div>
    </div>

    <div style="border-top:1px solid var(--border);padding-top:4px;font-size:8px;color:var(--text-3);font-style:italic;">
      Link Status: Documented in Part 4 of this submission. No separate link needed (as specified in final project guidelines).
    </div>
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 4 of 6</span>
  </div>
</div>


<!-- ════════════════════════════════════════
     SECTION 3 · WALKTHROUGH — PARTS 5 & 6
════════════════════════════════════════ -->
<div class="page">
  <div>
    <div class="section-bar">
      <div>
        <div class="eyebrow" style="margin-bottom:3px;">Section 3 · Walkthrough</div>
        <h2>What Was Built, Why &amp; Link Label</h2>
      </div>
      <div class="section-num">Parts 5–6 of 9</div>
    </div>

    ${parts5to6.map(part => `
    <div class="part-block">
      <div class="part-num">${part.num}</div>
      <div class="part-title">${part.title}</div>
      <div class="part-grid">
        <div>
          <div class="part-col-label">What I Built</div>
          <div class="part-text">${part.built}</div>
        </div>
        <div>
          <div class="part-col-label">Why</div>
          <div class="part-text">${part.why}</div>
        </div>
      </div>
      <div class="part-link-row">
        <span class="part-link-label-tag">Link Label</span>
        <span class="part-link-value ${part.linkLabel === '—' ? 'dash' : ''}">${part.linkLabel}</span>
      </div>
    </div>`).join('')}
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 5 of 6</span>
  </div>
</div>


<!-- ════════════════════════════════════════
     SECTION 3 · WALKTHROUGH — PARTS 7 TO 9
════════════════════════════════════════ -->
<div class="page-last">
  <div>
    <div class="section-bar">
      <div>
        <div class="eyebrow" style="margin-bottom:3px;">Section 3 · Walkthrough</div>
        <h2>What Was Built, Why &amp; Link Label</h2>
      </div>
      <div class="section-num">Parts 7–9 of 9</div>
    </div>

    ${parts7to9.map(part => `
    <div class="part-block">
      <div class="part-num">${part.num}</div>
      <div class="part-title">${part.title}</div>
      <div class="part-grid">
        <div>
          <div class="part-col-label">What I Built</div>
          <div class="part-text">${part.built}</div>
        </div>
        <div>
          <div class="part-col-label">Why</div>
          <div class="part-text">${part.why}</div>
        </div>
      </div>
      <div class="part-link-row">
        <span class="part-link-label-tag">Link Label</span>
        <span class="part-link-value ${part.linkLabel === '—' ? 'dash' : ''}">${part.linkLabel}</span>
      </div>
    </div>`).join('')}
  </div>

  <div class="fill"></div>

  <div class="footer">
    <span class="footer-brand">Pareto<em>Talent</em></span>
    <span>End-to-End Launch Funnel Architecture</span>
    <span>Page 6 of 6</span>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync(path.resolve('pareto_submission_minimal.html'), html, 'utf8');
console.log('HTML written.');

const edge   = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlF  = path.resolve('pareto_submission_minimal.html');
const pdfF   = path.resolve('pareto_submission_minimal.pdf');
const uDir   = path.resolve('scratch_edge_user');

try {
  const cmd = `"${edge}" --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir="${uDir}" --print-to-pdf="${pdfF}" "file://${htmlF}"`;
  execSync(cmd, { stdio: 'inherit', timeout: 60000 });
  const sz = fs.statSync(pdfF).size;
  console.log(`PDF written: ${pdfF} (${(sz/1024).toFixed(0)} KB)`);
} catch (e) {
  console.error('Edge error:', e.message);
}
