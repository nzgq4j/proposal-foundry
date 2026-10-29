import type { Metadata } from "next";
import { site } from "@/lib/content";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a Free Consultation"
        lead="Send us the solicitation number or a short description of your pursuit."
      />
      <section className="section">
        <div className="container grid grid--2">
          <div className="contact-card">
            <h2 className="card-title">Email</h2>
            <p className="body">For consultations, package purchases and scan requests.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation request")}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div className="contact-card">
            <h2 className="card-title">Office</h2>
            <address>
              {site.name}
              <br />
              {site.address.map((l) => (
                <span key={l} style={{ display: "block" }}>{l}</span>
              ))}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
