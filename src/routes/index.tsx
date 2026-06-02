import { createFileRoute, Link } from "@tanstack/react-router";
import { ChatPreview } from "@/components/ChatPreview";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IOCL Policy Copilot — Delegation of Powers in seconds" },
      { name: "description", content: "Private on-prem RAG chatbot. Ask the DOP and IMM in plain English; get grounded answers with clause, grade, ₹ limit and FC requirement." },
      { property: "og:title", content: "IOCL Policy Copilot" },
      { property: "og:description", content: "From 15 minutes of PDF hunting to 8 seconds of grounded answers." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Personas />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" /> Refineries Division · Internal
          </div>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-balance text-navy md:text-7xl">
            The Delegation of Powers,
            <span className="block gradient-text">answered in 8 seconds.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A private, on-premises RAG chatbot for IOCL. Ask about approval limits, Finance Concurrence,
            tender authorities and circular amendments — and get a cited, current, compliance-grade answer
            grounded in the official 283-page corpus.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90">
              See how it works <span className="text-saffron">→</span>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary">
              Explore features
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["283", "pages indexed"],
              ["9", "circulars tracked"],
              ["100%", "on-prem"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl font-bold text-navy">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ChatPreview />
      </div>
    </section>
  );
}

function Stats() {
  const rows = [
    { k: "≥ 95%", v: "Answer accuracy on 50-Q test set", note: "Sign-off by M&C Dept Head" },
    { k: "≤ 8 s", v: "P95 query latency", note: "16 GB · 8-core on-prem" },
    { k: "0", v: "Bytes leave IOCL network", note: "Ollama + ChromaDB, local" },
    { k: "5", v: "Fields in every answer", note: "Grade · ₹ · Clause · Source · FC" },
  ];
  return (
    <Section eyebrow="Targets" title="Engineered against numbers, not vibes." intro="Every KPI in the PRD maps to a measurable behaviour in the product.">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {rows.map((r) => (
          <div key={r.v} className="bg-card p-7">
            <div className="font-display text-4xl font-bold text-navy">{r.k}</div>
            <div className="mt-2 text-sm font-semibold">{r.v}</div>
            <div className="mt-1 text-xs text-muted-foreground">{r.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Problem() {
  const items = [
    { t: "High-stakes lookups", d: "A wrong limit or missing FC requirement can invalidate a procurement action or trigger a compliance breach." },
    { t: "Dense, table-heavy PDFs", d: "DOP Cl 2.3 alone has 5 sub-categories × 4 grade columns. Standard PDF text extraction garbles them badly." },
    { t: "Living documents", d: "The DOP has been amended by 9 circulars (F/12/123 → F/12/163). Searching the base alone returns superseded values." },
    { t: "Cross-referenced clauses", d: "Clauses point to other clauses and to Marketing DOA 9.01(b)(i). Following the trail by hand is slow." },
  ];
  return (
    <Section eyebrow="The problem" title="283 pages. 9 amendments. 5-minute deadlines.">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((i, idx) => (
          <div key={i.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7">
            <div className="absolute right-6 top-6 font-display text-5xl font-extrabold text-saffron/15 transition group-hover:text-saffron/30">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-xl font-bold text-navy">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  const items = [
    { t: "Table Flattener", d: "Multi-column approval tables converted into structured natural-language sentences the LLM can reason over." },
    { t: "Circular Tracker", d: "All 9 amendments encoded. Queries always surface the current version — base text and replacement text both auditable." },
    { t: "Grounded generation", d: "Top-5 retrieval over ChromaDB with similarity threshold 0.65. If no chunk matches, the bot refuses to guess." },
    { t: "Structured answer", d: "Every reply returns Authority, Limit, Clause, Source document and Finance Concurrence — never freeform prose." },
    { t: "On-prem inference", d: "Ollama runs the model locally. ChromaDB stores embeddings on disk. Zero data egress, full audit trail." },
    { t: "Admin Panel", d: "Drag-and-drop ingestion, Table Validation Report, daily accuracy cron, and a Circular Register that's editable." },
  ];
  return (
    <Section eyebrow="The solution" title="A RAG pipeline built around IOCL's documents — not the other way around.">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-navy-foreground">
              <span className="h-2 w-2 rounded-full bg-saffron" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-navy">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Personas() {
  return (
    <Section eyebrow="Who it's for">
      <div className="grid gap-6 md:grid-cols-2">
        <PersonaCard
          role="Admin — Materials & Contracts"
          grade="Grade F / G"
          bullets={[
            "Uploads the corpus through a drag-and-drop panel.",
            "Re-ingests when a new circular is issued.",
            "Reviews Table Validation Report and accuracy logs.",
          ]}
        />
        <PersonaCard
          role="Employee — IOCL Officer"
          grade="Grade E – I"
          bullets={[
            "Asks a question in plain English on desktop or mobile.",
            "Receives Grade · ₹ Limit · Clause · Source · FC — every time.",
            "Cites the chunk and circular directly in their file.",
          ]}
        />
      </div>
    </Section>
  );
}

function PersonaCard({ role, grade, bullets }: { role: string; grade: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-navy">{role}</h3>
        <span className="rounded-full bg-saffron/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-saffron">{grade}</span>
      </div>
      <ul className="mt-5 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-foreground/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-navy-foreground md:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-saffron/10 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-balance md:text-5xl">
              Built for IOCL. Hosted by IOCL. Answerable to IOCL.
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Roll out to one refinery, measure against the 50-Q test set signed off by the M&amp;C
              Department, then scale across the Refineries Division.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/security" className="rounded-full bg-saffron px-5 py-3 text-center text-sm font-semibold text-saffron-foreground">
              Read the security model
            </Link>
            <Link to="/roadmap" className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">
              View phased delivery
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
