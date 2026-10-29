import Link from "next/link";
import { markets, products, services, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__brand">{site.name}</p>
            <p>{site.tagline}</p>
            <address style={{ fontStyle: "normal", marginTop: 16 }}>
              {site.address.map((l) => (
                <span key={l} style={{ display: "block" }}>{l}</span>
              ))}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
          <div>
            <h2>Who We Serve</h2>
            <ul>
              {markets.map((m) => (
                <li key={m.slug}><Link href={`/who-we-serve/${m.slug}`}>{m.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}><Link href={`/products/${p.slug}`}>{p.name}</Link></li>
              ))}
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link href="/about">Who We Are</Link></li>
              <li><Link href="/past-performance">Past Performance</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>© {year} {site.parent}. All rights reserved.</span>
          <span>{site.name} is a brand of {site.parent}.</span>
        </div>
      </div>
    </footer>
  );
}
