import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — IOCL Policy Copilot" },
      { name: "description", content: "Table flattening, circular tracker, structured answers, admin panel and observability for the IOCL Policy Copilot." },
      { property: "og:title", content: "Features — IOCL Policy Copilot" },
      { property: "og:description", content: "Every capability mapped to a PRD requirement." },
    ],
  }),
  component: Features,
});

const groups = [
  {
    eyebrow: "Ingestion",
    title: "From PDF chaos to queryable knowledge",
    features: [
      { t: "Multi-format ingestion", d: "DOP, IMM Approval Matrix, IMM Roles & Responsibilities and IMM Manual 2023 — 283 pages, ~6,354 chunks." },
      { t: "Table Handler", d: "Pseudocode-driven flattening of Cl 2.3, Cl 2.1, all DOP tables (1.0–6.0, B/C/D) and IMM matrices." },
      { t: "Scanned-page detection", d: "OCR fallback with flagged-pages workflow for the admin to review." },
      { t: "Document version manifest", d: "Every chunk carries doc name, version, page and ingestion timestamp." },
    ],
  },
  {
    eyebrow: "Retrieval & generation",
    title: "Grounded answers, never guesses",
    features: [
      { t: "Top-5 retrieval", d: "ChromaDB vector search with similarity threshold 0.65 and IOCL-terminology-weighted embeddings." },
      { t: "Circular-aware re-ranking", d: "When a chunk is superseded by a circular, the replacement text wins automatically." },
      { t: "Cross-reference resolver", d: "Intra-document references resolved; Marketing DOA references flagged explicitly." },
      { t: "Structured 5-field answer", d: "Authority · ₹ Limit · Clause · Source · Finance Concurrence — every reply, every time." },
      { t: "Confidence score", d: "Each answer ships a confidence score so the employee knows when to verify." },
      { t: "Hallucination refusal", d: "Out-of-scope queries return: \"This question cannot be answered from the indexed documents.\"" },
    ],
  },
  {
    eyebrow: "Chat experience",
    title: "Fast, calm, mobile-ready",
    features: [
      { t: "Conversation thread", d: "Light + dark, source chips, loading dots, helpful/unhelpful feedback per turn." },
      { t: "Source panel", d: "Inspect the exact chunks behind any answer with page numbers." },
      { t: "Cite this", d: "One click formats: \"DOP Cl 2.3 C(1), p.13/31, updated by Cir F/12/151 (11.12.2019).\"" },
      { t: "Conversational context", d: "Up to 5 prior turns carry across, so \"And for a Grade F officer?\" just works." },
    ],
  },
  {
    eyebrow: "Admin",
    title: "Run the knowledge base without touching code",
    features: [
      { t: "Drag-and-drop uploads", d: "Per-document ingestion logs with success/failure feedback." },
      { t: "Table Validation Report", d: "Stratified sampling across DOP and IMM tables to verify flattening." },
      { t: "Circular Register", d: "All 9 circulars listed with base_text_snippet and replacement_text, fully auditable." },
      { t: "Accuracy cron", d: "Nightly run against the 50-Q signed-off test set with diffable result logs." },
      { t: "Ollama health & metrics", d: "/health, /admin/metrics and P1/P2/P3 alert tiers wired into the panel." },
    ],
  },
];

function Features() {
  return (
    <>
      <Section
        eyebrow="Features"
        title="Every line of the PRD, expressed as a product surface."
        intro="From table flattening to circular tracking to admin observability — built specifically for IOCL's corpus, not adapted from a generic chat product."
      >
        <div />
      </Section>
      {groups.map((g) => (
        <section key={g.title} className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">{g.eyebrow}</div>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy">{g.title}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {g.features.map((f) => (
                <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-bold text-navy">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
