import type { Metadata } from "next";
import { philosophy, site } from "@/lib/content";
import { CtaBand, PageHero, SectionHead, StatBand } from "@/components/ui";

export const metadata: Metadata = { title: "Who We Are" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Three Decades of Federal Contracting Experience"
        lead={`Proposal Foundry has helped small businesses compete for government contracts since ${site.founded}. It is a brand of ${site.parent}.`}
      />
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Leadership" title="David Daniel, Principal" />
            <p className="body">
              David Daniel brings three decades of federal contracting experience, including management of a $650M
              aerospace and defense program for a large prime contractor.
            </p>
          </div>
          <aside className="aside">
            <h2>Our Philosophy</h2>
            <p className="body" style={{ color: "var(--ink)" }}>&ldquo;{philosophy}&rdquo;</p>
          </aside>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <StatBand />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
