import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { CtaBand, OfferCard, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Packages and Software at a Posted Price"
        lead="Buy without a sales call: proposal kits, plan templates, AI tools and accessibility scanning."
      >
        <div className="btn-row">
          <Link className="btn btn--primary" href="/pricing">See Pricing</Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="container grid grid--2">
          {products.map((p) => (
            <OfferCard key={p.slug} href={`/products/${p.slug}`} name={p.name} summary={p.summary} level={p.level} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
