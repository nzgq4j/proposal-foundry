"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { markets, services, products, site } from "@/lib/content";
import { consultHref } from "@/lib/links";

const company = [
  { href: "/about", name: "Who We Are" },
  { href: "/past-performance", name: "Past Performance" },
  { href: "/contact", name: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href="/" className="brand" onClick={close}>
          <Image src="/proposal-foundry-mark.png" alt="Proposal Foundry" width={51} height={56} priority />
          <span>{site.name}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          <div className="nav__item">
            <button className="nav__trigger" type="button" aria-haspopup="true">Who We Serve</button>
            <div className="nav__menu">
              {markets.map((m) => (
                <Link key={m.slug} href={`/who-we-serve/${m.slug}`}>
                  {m.name}
                  <small>{m.short}</small>
                </Link>
              ))}
            </div>
          </div>
          <div className="nav__item">
            <button className="nav__trigger" type="button" aria-haspopup="true">Services</button>
            <div className="nav__menu">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>
              ))}
            </div>
          </div>
          <div className="nav__item">
            <button className="nav__trigger" type="button" aria-haspopup="true">Products</button>
            <div className="nav__menu">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>
              ))}
            </div>
          </div>
          <Link className="nav__link" href="/pricing">Pricing</Link>
          <div className="nav__item">
            <button className="nav__trigger" type="button" aria-haspopup="true">Company</button>
            <div className="nav__menu">
              {company.map((c) => (
                <Link key={c.href} href={c.href}>{c.name}</Link>
              ))}
            </div>
          </div>
          <Link className="btn btn--primary nav__cta" href={consultHref()}>Consultation</Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-nav" className="mobile-nav container" data-open={open}>
        <h3>Who We Serve</h3>
        {markets.map((m) => (
          <Link key={m.slug} href={`/who-we-serve/${m.slug}`} onClick={close}>{m.name}</Link>
        ))}
        <h3>Services</h3>
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} onClick={close}>{s.name}</Link>
        ))}
        <h3>Products</h3>
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} onClick={close}>{p.name}</Link>
        ))}
        <h3>Company</h3>
        <Link href="/pricing" onClick={close}>Pricing</Link>
        {company.map((c) => (
          <Link key={c.href} href={c.href} onClick={close}>{c.name}</Link>
        ))}
        <Link className="btn btn--primary" href={consultHref()} onClick={close}>Schedule a Consultation</Link>
      </div>
    </header>
  );
}
