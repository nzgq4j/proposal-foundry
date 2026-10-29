import Link from "next/link";
import { philosophy, pastPerformance, products, services } from "@/lib/content";
import { consultHref } from "@/lib/links";
import { ComparisonTable, CtaBand, MarketSelector, OfferCard, SectionHead, StatBand } from "@/components/ui";

const levels = [
  {
    name: "Services",
    term: "Quoted per engagement",
    items: services.map((s) => ({ href: `/services/${s.slug}`, name: s.name })),
  },
  {
    name: "Packages",
    term: "Posted price",
    items: products.filter((p) => p.level === "Package").map((p) => ({ href: `/products/${p.slug}`, name: p.name })),
  },
  {
    name: "Software",
    term: "Subscription",
    items: products.filter((p) => p.level === "Software").map((p) => ({ href: `/products/${p.slug}`, name: p.name })),
  },
];

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=70)" }}
      >
        <div className="container hero__inner">
          <p className="eyebrow">Proposal Foundry</p>
          <h1 className="h1">Forging Capabilities Into Contract Awards</h1>
          <p className="lead">
            We help small businesses win federal, state, local and commercial contracts with proposal development,
            proposal management, ready-to-use packages and AI tools.
          </p>
          <div className="btn-row">
            <Link className="btn btn--primary" href={consultHref()}>Schedule a Consultation</Link>
            <Link className="btn btn--inverse" href="#offers">Explore Our Offers</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Who we serve">
        <div className="container">
          <SectionHead eyebrow="Who We Serve" title="Choose Your Market" />
          <MarketSelector />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="Results That Matter"
            title="Success Is the Only Metric That Counts"
            lead="Federal proposals typically take 40 to 60 hours of your top staff. Our turnkey responses need 5 to 10 hours of your time."
          />
          <StatBand />
        </div>
      </section>

      <section className="section" id="offers">
        <div className="container">
          <SectionHead
            eyebrow="What We Do"
            title="Services Built for Small Business Reality"
            lead="Buy the level of help you need: a full engagement, a fixed-price package or software you run yourself."
          />
          <div className="grid grid--3">
            {levels.map((l) => (
              <div className="level" key={l.name}>
                <h3 className="level__name">{l.name}</h3>
                <p className="level__term">{l.term}</p>
                <ul>
                  {l.items.map((i) => (
                    <li key={i.href}>
                      <Link href={i.href}>{i.name} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Featured" title="Where Most Clients Start" />
          <div className="grid grid--3">
            {[services[0], services[1], products[1]].map((o) => (
              <OfferCard
                key={o.slug}
                href={`/${o.level === "Service" ? "services" : "products"}/${o.slug}`}
                name={o.name}
                summary={o.summary}
                level={o.level}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--inverse">
        <div className="container">
          <p className="eyebrow">Our Philosophy</p>
          <p className="quote">&ldquo;{philosophy}&rdquo;</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="On Equal Footing"
            title="What a Large Firm's Proposal Shop Does, You Get With Proposal Foundry"
          />
          <ComparisonTable />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="Past Performance" title="Past Performance That Speaks" />
          <div className="grid grid--2">
            {pastPerformance.map((p) => (
              <div className="pp" key={p.title}>
                <p className="pp__value">{p.value}</p>
                <p className="pp__agency">{p.agency}</p>
                <h3 className="card-title">{p.title}</h3>
                <p className="body" style={{ marginTop: 8 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link className="link" href="/past-performance">All past performance →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
