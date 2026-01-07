import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AssistBot from "@/components/ui/AssistBot";
import CookieBanner from "@/components/ui/CookieBanner";
import TermsModal from "@/components/ui/TermsModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azerex - AI-First Digital Transformation",
  description: "Creating Engineering Disruption with AI-First Digital Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans animate-in fade-in duration-700`}
      >
        {children}
        <AssistBot />
        <CookieBanner />
        <TermsModal />
      </body>
    </html>
  );
}
