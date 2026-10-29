import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/content";
import OfferPage from "@/components/OfferPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.summary } : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const offer = services.find((s) => s.slug === slug);
  if (!offer) notFound();
  return <OfferPage offer={offer} base="/services" baseName="Services" />;
}
