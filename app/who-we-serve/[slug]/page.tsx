import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { markets, products, services } from "@/lib/content";
import { Checks, CtaBand, MarketSelector, OfferCard, PageHero, SectionHead } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = markets.find((x) => x.slug === slug);
  return m ? { title: `${m.name} Contracting`, description: m.intro } : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const market = markets.find((m) => m.slug === slug);
  if (!market) notFound();
  const offers = market.services.map((s) => services.find((x) => x.slug === s)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={`Who We Serve: ${market.name}`}
        title={market.headline}
        lead={market.intro}
        crumbs={[{ href: "/", name: "Home" }, { href: "/who-we-serve", name: "Who We Serve" }]}
      />
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <MarketSelector current={market.slug} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Clients We Serve" title={`Built for ${market.name} Buyers`} />
          <div className="grid grid--3">
            {market.buyers.map((b) => (
              <div className="card" key={b.title}>
                <h3 className="card-title">{b.title}</h3>
                <p className="body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container split">
          <div>
            <SectionHead eyebrow="What Changes" title={`How ${market.name} Solicitations Differ`} />
            <Checks items={market.differences} />
          </div>
          <aside className="aside">
            <h2>Also Available</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}><a href={`/products/${p.slug}`}>{p.name}</a></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Services" title={`Services for ${market.name} Pursuits`} />
          <div className="grid grid--4">
            {offers.map((o) => (
              <OfferCard key={o.slug} href={`/services/${o.slug}`} name={o.name} summary={o.summary} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
