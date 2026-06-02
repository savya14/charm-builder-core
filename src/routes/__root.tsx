import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This route isn't part of the Policy Copilot.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-navy px-4 py-2 text-sm text-navy-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IOCL Policy Copilot — Delegation of Powers & IMM Q&A" },
      { name: "description", content: "Private on-prem RAG chatbot for IOCL Refineries — instant, grounded answers from DOP, IMM Approval Matrix and IMM Manual 2023." },
      { name: "author", content: "Indian Oil Corporation Limited" },
      { property: "og:title", content: "IOCL Policy Copilot — Delegation of Powers & IMM Q&A" },
      { property: "og:description", content: "Private on-prem RAG chatbot for IOCL Refineries — instant, grounded answers from DOP, IMM Approval Matrix and IMM Manual 2023." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "IOCL Policy Copilot — Delegation of Powers & IMM Q&A" },
      { name: "twitter:description", content: "Private on-prem RAG chatbot for IOCL Refineries — instant, grounded answers from DOP, IMM Approval Matrix and IMM Manual 2023." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9220ae6f-2693-4b1b-9241-c944b52d2a05/id-preview-8ae42f47--dd7519ee-3d37-440c-8e11-e22bc8179c17.lovable.app-1780363869747.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9220ae6f-2693-4b1b-9241-c944b52d2a05/id-preview-8ae42f47--dd7519ee-3d37-440c-8e11-e22bc8179c17.lovable.app-1780363869747.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
