import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "AVAMOUSSA – École de natation | Apprendre à vie, avec amour",
  description: "École de natation AVAMOUSSA au Sénégal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}