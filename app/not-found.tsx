import Link from "next/link";
import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page Not Found" lead="The page you requested does not exist.">
      <div className="btn-row">
        <Link className="btn btn--primary" href="/">Go Home</Link>
      </div>
    </PageHero>
  );
}
