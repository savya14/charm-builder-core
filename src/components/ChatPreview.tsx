export function ChatPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-saffron/30 via-transparent to-navy/30 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-navy/10">
        <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-saffron" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            iocl-policy-copilot · session #4821
          </div>
          <div className="text-[11px] font-mono text-muted-foreground">on-prem · Ollama</div>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div className="flex justify-end">
            <div className="max-w-md rounded-2xl rounded-tr-sm bg-navy px-4 py-3 text-sm text-navy-foreground">
              Who can approve a single tender for proprietary items from a PSU up to ₹150 lakh?
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-saffron">Grounded answer</div>
            <div className="rounded-2xl rounded-tl-sm border border-border bg-surface px-5 py-4">
              <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-5">
                <Field label="Authority" value="Grade G" />
                <Field label="Limit (₹)" value="150 Lakh" />
                <Field label="Clause" value="DOP 2.3 A(1)(i)" />
                <Field label="Source" value="DOP v02.02.22" />
                <Field label="Finance Conc." value="Yes > ₹50L" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                <Chip>DOP.pdf · p.11</Chip>
                <Chip>Circular F/12/151</Chip>
                <Chip tone="navy">Confidence 0.94</Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-display text-[15px] font-semibold text-navy">{value}</div>
    </div>
  );
}

function Chip({ children, tone = "saffron" }: { children: React.ReactNode; tone?: "saffron" | "navy" }) {
  const cls =
    tone === "navy"
      ? "bg-navy text-navy-foreground"
      : "bg-saffron/15 text-saffron border border-saffron/30";
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${cls}`}>{children}</span>;
}
