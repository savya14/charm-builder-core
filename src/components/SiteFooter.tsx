import logoAsset from "@/assets/iocl-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="IndianOil" className="h-10 w-10 rounded bg-white p-1" />
            <div>
              <div className="font-display text-base font-bold">Indian Oil Corporation Limited</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/60">Refineries Division · Policy Copilot</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            A private, on-premises Retrieval-Augmented Generation chatbot for the Delegation of Powers
            and Integrated Materials Management corpus. Built for accuracy. Engineered for compliance.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-saffron">Product</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Features</li><li>How it works</li><li>Admin panel</li><li>API</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-saffron">Internal</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Materials & Contracts Dept.</li><li>IT — Refineries</li><li>Document Owners</li><li>Helpdesk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-white/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Indian Oil Corporation Limited. For internal use only.</div>
          <div>Classification: Internal — Refineries Division</div>
        </div>
      </div>
    </footer>
  );
}
