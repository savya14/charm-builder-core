import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/iocl-logo.png.asset.json";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/security", label: "Security" },
  { to: "/roadmap", label: "Roadmap" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="IndianOil" className="h-9 w-9 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold text-navy">IndianOil</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Policy Copilot</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-navy bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/roadmap"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-foreground transition-transform hover:scale-[1.02]"
        >
          Request access
          <span className="text-saffron">→</span>
        </Link>
      </div>
    </header>
  );
}
