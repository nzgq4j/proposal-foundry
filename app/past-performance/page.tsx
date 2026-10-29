import type { Metadata } from "next";
import { pastPerformance } from "@/lib/content";
import { CtaBand, PageHero, StatBand } from "@/components/ui";

export const metadata: Metadata = { title: "Past Performance" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Past Performance"
        title="Past Performance That Speaks"
        lead="$1.35B in contract awards supported for small businesses across all major federal agencies."
      />
      <section className="section">
        <div className="container grid grid--2">
          {pastPerformance.map((p) => (
            <div className="pp" key={p.title}>
              <p className="pp__value">{p.value}</p>
              <p className="pp__agency">{p.agency}</p>
              <h2 className="card-title">{p.title}</h2>
              <p className="body" style={{ marginTop: 8 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <StatBand />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
