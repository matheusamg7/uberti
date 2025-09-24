import type { Metadata } from "next";
import { fontClasses } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "UBERTI - Artesanal Fashion",
  description: "Discover Helena's artisanal fashion collections. Handcrafted pieces that blend elegance with unique storytelling.",
  keywords: ["fashion", "artesanal", "handcrafted", "elegante", "design", "moda"],
  authors: [{ name: "Helena UBERTI" }],
  creator: "Helena UBERTI",
  publisher: "UBERTI",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: "UBERTI - Artesanal Fashion",
    description: "Discover Helena's artisanal fashion collections",
    url: "/",
    siteName: "UBERTI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBERTI - Artesanal Fashion",
    description: "Discover Helena's artisanal fashion collections",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClasses} antialiased`}>
        {children}
      </body>
    </html>
  );
}
