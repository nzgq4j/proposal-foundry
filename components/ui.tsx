import Link from "next/link";
import { comparison, markets, site, stats, type Tier } from "@/lib/content";
import { buyHref, consultHref } from "@/lib/links";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: { href: string; name: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href}>
                {i > 0 && " / "}
                <Link href={c.href}>{c.name}</Link>
              </span>
            ))}
          </nav>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h1">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function StatBand() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.num}>
          <p className="stat__num">{s.num}</p>
          <p className="stat__cap">{s.cap}</p>
        </div>
      ))}
    </div>
  );
}

export function OfferCard({
  href,
  name,
  summary,
  level,
}: {
  href: string;
  name: string;
  summary: string;
  level?: "Service" | "Package" | "Software";
}) {
  const badge =
    level === "Software" ? "badge" : level === "Package" ? "badge badge--package" : level === "Service" ? "badge badge--service" : "";
  return (
    <div className="card">
      {level && <span className={badge}>{level}</span>}
      <h3 className="card-title">{name}</h3>
      <p className="body">{summary}</p>
      <Link className="link" href={href}>Learn more →</Link>
    </div>
  );
}

export function MarketSelector({ current }: { current?: string }) {
  return (
    <nav className="markets" aria-label="Who we serve">
      {markets.map((m) => (
        <Link
          key={m.slug}
          className="market"
          href={`/who-we-serve/${m.slug}`}
          aria-current={current === m.slug ? "page" : undefined}
        >
          <span className="card-title">{m.name}</span>
          <span className="body">{m.short}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s) => (
        <li key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export function ComparisonTable() {
  return (
    <div className="table-wrap">
      <table className="compare">
        <thead>
          <tr>
            <th scope="col">Capability</th>
            <th scope="col">A large firm&apos;s proposal shop</th>
            <th scope="col">You, with Proposal Foundry</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((r) => (
            <tr key={r.cap}>
              <td>{r.cap}</td>
              <td>{r.large}</td>
              <td className="ours">{r.ours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TierCard({ tier, product }: { tier: Tier; product: string }) {
  const href = tier.cta === "Start Free Trial" ? consultHref() : buyHref(`${product} ${tier.name}`);
  return (
    <div className={tier.featured ? "tier tier--featured" : "tier"}>
      {tier.featured && <span className="tier__flag">Most popular</span>}
      <h3 className="card-title">{tier.name}</h3>
      {tier.price ? (
        <p className="tier__price">
          {tier.price}
          <span className="tier__term">{tier.term}</span>
        </p>
      ) : (
        <p className="tier__price tier__price--pending">
          Pricing at launch<span className="tier__term">{tier.term}</span>
        </p>
      )}
      <ul>
        {tier.includes.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <a className={tier.featured ? "btn btn--primary" : "btn btn--secondary"} href={href}>
        {tier.cta}
      </a>
    </div>
  );
}

export function CtaBand({
  title = "Ready to win your next contract?",
  body = "Schedule a free consultation to review your next solicitation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="body">{body}</p>
        </div>
        <div className="btn-row" style={{ marginTop: 0 }}>
          <Link className="btn btn--primary" href={consultHref()}>Schedule a Consultation</Link>
          <a className="btn btn--inverse" href={`mailto:${site.email}`}>Email Us</a>
        </div>
      </div>
    </section>
  );
}
