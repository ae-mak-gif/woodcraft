import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["400", "500", "600"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "WoodCraft — Furniture shaped by nature", template: "%s | WoodCraft" },
  description: "Considered wooden furniture, made with intention. Explore WoodCraft collections or begin a bespoke commission.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    title: "WoodCraft — A story carved in wood",
    description: "Furniture shaped by nature. Refined by craft. Made to last.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}