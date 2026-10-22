import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/brand.config";
import { MenuProvider } from "@/components/site/MenuContext";
import Header from "@/components/site/Header";
import MenuOverlay from "@/components/site/MenuOverlay";

const display = Inter({ variable: "--font-display", subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "home", template: "%s" },
  description: brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
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
