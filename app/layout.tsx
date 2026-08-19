import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "That’s Okay. | Psychology-informed wellness consultancy",
    template: "%s | That’s Okay.",
  },
  description:
    "Psychology-informed wellness and development for people and workplaces in Ireland and online.",
  metadataBase: new URL("https://thatsokay.ie"),
  openGraph: {
    title: "That’s Okay. | Psychology-informed wellness consultancy",
    description:
      "Psychology-informed support for how you live, work and grow — and healthier workplaces for organisations.",
    type: "website",
    url: "https://thatsokay.ie",
    siteName: "That’s Okay.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
