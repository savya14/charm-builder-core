import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Compliance — IOCL Policy Copilot" },
      { name: "description", content: "Fully on-prem RAG. Zero data egress. Audit trail with session ID and IP. P1/P2/P3 alert tiers. Internal Refineries Division." },
      { property: "og:title", content: "Security & Compliance — IOCL Policy Copilot" },
      { property: "og:description", content: "Built for an internal IOCL deployment with no third-party LLM calls." },
    ],
  }),
  component: Security,
});

const pillars = [
  { t: "On-prem only", d: "Ollama and ChromaDB run inside the IOCL network. No third-party LLM API is ever called.", k: "Zero egress" },
  { t: "Document-grounded", d: "Generation is constrained to retrieved chunks. Out-of-scope queries are refused, not invented.", k: "0% hallucination target" },
  { t: "Full audit trail", d: "Every /query call is logged with session ID, IP, user grade, top-5 chunk IDs and final answer.", k: "Forensics-ready" },
  { t: "Circular fidelity", d: "Replacement text is applied at retrieval — no analyst can accidentally cite a superseded clause.", k: "9 circulars tracked" },
  { t: "Operational alerts", d: "P1 / P2 / P3 escalation tiers wired to /admin/metrics, /health and the accuracy cron.", k: "24/7 observability" },
  { t: "Internal classification", d: "All UI surfaces are watermarked Internal — Refineries Division. LDAP gate for Admin Panel (V2).", k: "Need-to-know" },
];

function Security() {
  return (
    <>
      <Section
        eyebrow="Security"
        title="Private by design. Compliant by construction."
        intro="The Policy Copilot is an internal IOCL system. Nothing about it depends on the public internet — and nothing about a query ever leaves the network."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-7">
              <div className="inline-flex rounded-full bg-navy px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy-foreground">{p.k}</div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What is — and isn't — stored">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-display text-lg font-bold text-navy">Stored on IOCL infra</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              <li>• Document chunks + embeddings (ChromaDB)</li>
              <li>• Circular Register (base_text_snippet, replacement_text)</li>
              <li>• Query audit log (session, IP, grade, retrieved chunk IDs)</li>
              <li>• Feedback events (helpful / not helpful)</li>
              <li>• Accuracy test results (daily cron)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-saffron/40 bg-card p-7">
            <h3 className="font-display text-lg font-bold text-saffron">Never sent anywhere external</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              <li>• Source PDFs or any extracted text</li>
              <li>• User queries, full or hashed</li>
              <li>• Generated answers</li>
              <li>• Document metadata or version manifest</li>
              <li>• Telemetry, crash logs or analytics</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
