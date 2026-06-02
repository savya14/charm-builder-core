import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  id,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      {(eyebrow || title || intro) && (
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">{eyebrow}</div>
          )}
          {title && (
            <h2 className="mt-4 font-display text-3xl font-bold text-balance text-navy md:text-5xl">{title}</h2>
          )}
          {intro && <p className="mt-4 text-base text-muted-foreground md:text-lg">{intro}</p>}
        </div>
      )}
      <div className={eyebrow || title ? "mt-14" : ""}>{children}</div>
    </section>
  );
}
