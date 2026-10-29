import type { Metadata } from "next";
import Link from "next/link";
import { pricing } from "@/lib/content";
import { ComparisonTable, CtaBand, PageHero, SectionHead, TierCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Posted prices for Proposal Foundry packages and software, and how engagements are quoted.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Posted Prices for Products, Fixed Fees for Engagements"
        lead="Packages and software are sold at posted prices. Services are quoted at a fixed fee after a free consultation."
      />
      <section className="section section--cream">
        <div className="container">
          {pricing.map((p) => (
            <div className="pricing-group" key={p.slug}>
              <div className="pricing-group__head">
                <h2 className="h2" style={{ margin: 0 }}>{p.product}</h2>
                <Link className="link" href={`/products/${p.slug}`}>What&apos;s included →</Link>
              </div>
              <div className="tiers">
                {p.tiers.map((t) => (
                  <TierCard key={t.name} tier={t} product={p.product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Engagements"
            title="Services Are Quoted at a Fixed Fee"
            lead="Response Development, Proposal Management, SLED and Commercial Responses, SOP and Plan Development, and 508 Remediation are priced by solicitation size and page count. Strategic BD Partner is a monthly retainer."
          />
          <ComparisonTable />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
