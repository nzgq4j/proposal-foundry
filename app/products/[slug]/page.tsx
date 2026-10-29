import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/content";
import OfferPage from "@/components/OfferPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = products.find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.summary } : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const offer = products.find((s) => s.slug === slug);
  if (!offer) notFound();
  return <OfferPage offer={offer} base="/products" baseName="Products" />;
}
