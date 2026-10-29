import { site } from "./content";

/** Where "Schedule a Consultation" buttons go: the scheduler if set, otherwise the contact page. */
export function consultHref() {
  return site.schedulerUrl || "/contact";
}

/** Where purchase buttons go until checkout is connected. */
export function buyHref(product: string) {
  const subject = encodeURIComponent(`${product} purchase`);
  return `mailto:${site.email}?subject=${subject}`;
}
