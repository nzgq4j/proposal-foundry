import Link from "next/link";
import { pricing, scannerNote, type Offer } from "@/lib/content";
import { buyHref, consultHref } from "@/lib/links";
import { Checks, CtaBand, PageHero, SectionHead, Steps, TierCard } from "./ui";

export default function OfferPage({ offer, base, baseName }: { offer: Offer; base: string; baseName: string }) {
  const tiers = pricing.find((p) => p.slug === offer.slug);
  const primary =
    offer.cta === "consult"
      ? { href: consultHref(), label: "Schedule a Consultation" }
      : offer.cta === "trial"
        ? { href: consultHref(), label: "Start Free Trial" }
        : { href: tiers ? "#pricing" : buyHref(offer.name), label: tiers ? "See Pricing" : "Buy Now" };

  return (
    <>
      <PageHero
        eyebrow={offer.name}
        title={offer.headline}
        lead={offer.intro}
        crumbs={[{ href: "/", name: "Home" }, { href: base, name: baseName }]}
      >
        <div className="btn-row">
          <Link className="btn btn--primary" href={primary.href}>{primary.label}</Link>
          {offer.cta !== "consult" && (
            <Link className="btn btn--inverse" href={consultHref()}>Talk to Us</Link>
          )}
        </div>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="What You Get" title="Included" />
            <Checks items={offer.includes} />
            {offer.slug === "508-scanner" && <p className="note">{scannerNote}</p>}
          </div>
          <aside className="aside">
            <h2>Built For</h2>
            <ul>
              {offer.forWho.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="How It Works" title="Four Steps From Start to Submission" />
          <Steps steps={offer.steps} />
        </div>
      </section>

      {tiers && (
        <section className="section section--cream" id="pricing">
          <div className="container">
            <SectionHead eyebrow="Pricing" title={`${offer.name} Plans`} />
            <div className="tiers">
              {tiers.tiers.map((t) => (
                <TierCard key={t.name} tier={t} product={offer.name} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
