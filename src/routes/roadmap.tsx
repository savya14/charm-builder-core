import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — IOCL Policy Copilot" },
      { name: "description", content: "Phased delivery plan: MVP (Months 1–2), V1 (Months 3–4), V2 (Months 5–6) with exit criteria for each phase." },
      { property: "og:title", content: "Roadmap — IOCL Policy Copilot" },
      { property: "og:description", content: "MVP → V1 → V2 with measurable exit criteria." },
    ],
  }),
  component: Roadmap,
});

const phases = [
  {
    tag: "MVP",
    months: "Months 1 – 2",
    goal: "Demonstrate the core RAG pipeline on DOP Cl 2.3 and Cl 2.1, plus a functional chat UI.",
    scope: [
      "DOP PDF only (31 pages)",
      "Table Handler: Cl 2.3 + Cl 2.1 (~60 flat rows)",
      "Circular Tracker: 9 hard-coded circulars; overrides for F/12/151 and F/12/176",
      "Top-5 retrieval, similarity 0.65",
      "5-field answer formatter",
      "Chat UI: dark mode, source chips, cursor glow",
      "Admin Panel: upload, list, delete, Table Validation Report",
    ],
    exit: [
      "Admin uploads DOP and verifies chunks",
      "Grade-G open-tender query returns ₹2400L · DOP Cl 2.3 C(1) · FC > ₹10L",
      "≥ 90% accuracy on 30-Q test set",
      "P95 latency ≤ 8 s · 0% hallucination on 10 adversarial queries",
    ],
  },
  {
    tag: "V1",
    months: "Months 3 – 4",
    goal: "Full document corpus coverage and the move from \"works\" to \"trusted\".",
    scope: [
      "All 4 documents indexed (DOP + 3 IMM docs)",
      "Table Handler: all DOP tables (1.0–6.0, B/C/D) + all IMM matrices",
      "Auto-parse circulars from DOP page 1; partial overrides",
      "Cross-reference resolver (intra + external flag)",
      "Circular-aware retrieval + confidence scoring",
      "UI: source panel, feedback, conversation history",
      "Admin: Circular Register, re-ingest, Ollama health, accuracy cron",
    ],
    exit: [
      "6,354 chunks indexed (100% coverage)",
      "≥ 95% accuracy on 50-Q signed-off test set",
      "F/12/151 override applied in ≥ 3 test queries",
      "Marketing DOA cross-ref flagged in ≥ 2 test queries",
    ],
  },
  {
    tag: "V2",
    months: "Months 5 – 6",
    goal: "Enterprise readiness and advanced features.",
    scope: [
      "Incremental re-ingestion (< 30 s for changed sections)",
      "Auto-detect new circulars from upload",
      "Query cache (24 h exact-match)",
      "Conversational context (5 prior turns)",
      "Multi-hop cross-reference resolution",
      "\"Cite this\" button · user-grade pre-filter",
      "LDAP auth for Admin Panel · usage analytics",
    ],
    exit: [
      "Incremental re-ingest of DOP < 30 s",
      "Follow-up \"And for a Grade F officer?\" uses prior context correctly",
      "Citation formatter outputs circular ID when applicable",
      "100 concurrent users · P95 ≤ 10 s (GPU-accelerated)",
    ],
  },
];

function Roadmap() {
  return (
    <>
      <Section
        eyebrow="Phased delivery"
        title="MVP → V1 → V2"
        intro="Each phase ships with measurable exit criteria. Nothing moves forward until the previous bar is cleared and the M&C Department signs off."
      >
        <div className="space-y-10">
          {phases.map((p, idx) => (
            <div key={p.tag} className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="flex flex-col items-start justify-between gap-4 border-b border-border bg-surface px-8 py-6 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground">
                    {p.tag}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Phase {idx + 1}</div>
                    <div className="font-display text-xl font-bold text-navy">{p.months}</div>
                  </div>
                </div>
                <p className="max-w-xl text-sm text-foreground/80 md:text-right">{p.goal}</p>
              </div>
              <div className="grid gap-8 px-8 py-8 md:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-saffron">Scope</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.scope.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                        <span className="text-foreground/85">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-navy">Exit criteria</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.exit.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                        <span className="text-foreground/85">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
