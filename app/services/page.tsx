import type { Metadata } from "next";
import { services } from "@/lib/content";
import { CtaBand, OfferCard, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Proposal and Business Development Services"
        lead="Engagements quoted at a fixed fee, delivered by our proposal team."
      />
      <section className="section">
        <div className="container grid grid--3">
          {services.map((s) => (
            <OfferCard key={s.slug} href={`/services/${s.slug}`} name={s.name} summary={s.summary} level={s.level} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
