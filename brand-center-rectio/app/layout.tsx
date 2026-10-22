import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/brand.config";
import { MenuProvider } from "@/components/site/MenuContext";
import Header from "@/components/site/Header";
import MenuOverlay from "@/components/site/MenuOverlay";

const primary = Geist({ variable: "--font-primary", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: brand.name, template: `%s · ${brand.name}` },
  description: brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${primary.variable} ${grotesk.variable} h-full`}>
      <body className="min-h-full">
        <MenuProvider>
          <Header />
          <MenuOverlay />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
