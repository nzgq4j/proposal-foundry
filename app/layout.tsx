import type { Metadata } from "next";
import "@fontsource/albert-sans/300.css";
import "@fontsource/albert-sans/400.css";
import "@fontsource/albert-sans/500.css";
import "@fontsource/albert-sans/600.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal-foundry.com"),
  title: {
    default: "Proposal Foundry | Results are what we deliver.",
    template: "%s | Proposal Foundry",
  },
  description:
    "Proposal development, proposal management, response packages, packaged plans, AI BD tools and 508 scanning for small businesses competing for federal, state, local and commercial contracts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
