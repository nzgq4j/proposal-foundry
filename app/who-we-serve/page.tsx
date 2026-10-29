import type { Metadata } from "next";
import { CtaBand, MarketSelector, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Who We Serve" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Federal, State and Local, and Commercial Buyers"
        lead="One proposal team and one set of products, applied to the rules of each market."
      />
      <section className="section">
        <div className="container">
          <MarketSelector />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
