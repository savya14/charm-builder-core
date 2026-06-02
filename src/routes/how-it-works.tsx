import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — IOCL Policy Copilot" },
      { name: "description", content: "End-to-end RAG pipeline: ingestion, table flattening, circular overrides, retrieval, generation and structured answers — all on IOCL infrastructure." },
      { property: "og:title", content: "How it works — IOCL Policy Copilot" },
      { property: "og:description", content: "The architecture and data flow behind every answer." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    n: "01",
    t: "Admin uploads the corpus",
    d: "DOP, IMM Approval Matrix, IMM Roles & Responsibilities, IMM Manual 2023. Stored locally; never leaves the network.",
  },
  {
    n: "02",
    t: "Parsing + Table Handler",
    d: "Text is extracted; multi-column tables are flattened into structured natural-language sentences indexed by clause, grade and ₹ value.",
  },
  {
    n: "03",
    t: "Circular Tracker overlays",
    d: "Each of the 9 known circulars carries a base_text_snippet and replacement_text. The Tracker applies overrides at retrieval time.",
  },
  {
    n: "04",
    t: "Chunks → embeddings → ChromaDB",
    d: "An IOCL-terminology-weighted embedding model encodes every chunk. ChromaDB stores them on local disk with metadata.",
  },
  {
    n: "05",
    t: "Employee asks a question",
    d: "The chat UI sends the query (+ optional division filter) to /query. Audit trail captures session ID and IP.",
  },
  {
    n: "06",
    t: "Retrieval + circular-aware re-rank",
    d: "Top-5 chunks above similarity 0.65. Any chunk superseded by a circular is replaced with the circular's effective text.",
  },
  {
    n: "07",
    t: "Ollama generates a grounded answer",
    d: "A strict system prompt restricts output to the 5-field structure: Authority, ₹ Limit, Clause, Source, Finance Concurrence.",
  },
  {
    n: "08",
    t: "Structured response + sources",
    d: "API returns JSON; UI renders the answer with source chips, confidence score, and a \"Cite this\" formatter.",
  },
];

function HowItWorks() {
  return (
    <>
      <Section
        eyebrow="How it works"
        title="Eight steps. Zero data egress."
        intro="A purpose-built RAG pipeline that respects IOCL's documents, circulars and compliance posture end-to-end."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="relative overflow-hidden rounded-2xl border border-border bg-card p-7">
              <div className="absolute right-5 top-4 font-display text-6xl font-extrabold text-saffron/15">{s.n}</div>
              <h3 className="font-display text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Architecture" title="What runs where">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <pre className="overflow-x-auto p-6 font-mono text-[12px] leading-6 text-navy md:text-[13px]">{String.raw`
 ┌──────────────────────────┐         ┌────────────────────────────┐
 │  Employee · Browser      │  HTTPS  │  Chat UI  (React)          │
 │  Grade E – I             │ ──────▶ │  /query · /feedback        │
 └──────────────────────────┘         └─────────────┬──────────────┘
                                                    │ JSON
                                                    ▼
 ┌────────────────────────────────────────────────────────────────┐
 │  Backend (FastAPI · on-prem)                                   │
 │  ├─ Auth + Audit (session_id, ip)                              │
 │  ├─ Query Pipeline   ── Circular-aware re-ranking              │
 │  ├─ Retrieval (top-5, sim ≥ 0.65)  ◀──┐                        │
 │  └─ Answer Formatter (5-field, refuse if ungrounded)           │
 └───────────┬───────────────────────────┼────────────────────────┘
             │                           │
             ▼                           ▼
 ┌────────────────────┐         ┌──────────────────────────────┐
 │  Ollama (local)    │         │  ChromaDB (local disk)       │
 │  IOCL-tuned model  │         │  ~6,354 chunks · metadata    │
 └────────────────────┘         └──────────────────────────────┘

                Admin Panel ──▶ Ingestion · Circular Register · /admin/metrics
`}</pre>
        </div>
      </Section>

      <Section eyebrow="Example query" title="A real round-trip">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Question</div>
            <p className="mt-2 font-display text-lg font-semibold text-navy">
              "What is the approval limit for a Grade G officer for open tender on lowest basis?"
            </p>
          </div>
          <div className="rounded-2xl border border-saffron/30 bg-saffron/5 p-7">
            <div className="text-xs uppercase tracking-wider text-saffron">Answer</div>
            <ul className="mt-2 space-y-1 text-sm text-foreground/85">
              <li><strong>Authority:</strong> Grade G</li>
              <li><strong>Limit:</strong> ₹2,400 Lakh</li>
              <li><strong>Clause:</strong> DOP Cl 2.3 C(1)</li>
              <li><strong>Source:</strong> DOP (v 02.02.2022)</li>
              <li><strong>Finance Concurrence:</strong> Yes, beyond ₹10 Lakh</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
