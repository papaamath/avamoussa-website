import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "AVAMOUSSA - Ecole de natation | Apprendre a vie, avec amour",
  description: "Ecole de natation AVAMOUSSA au Senegal. Stages, formations, coaching prive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div className="pt-16">{children}</div>
        <a href="https://wa.me/221785015969" target="_blank" style={{position:'fixed',bottom:'24px',right:'24px',backgroundColor:'#25D366',color:'white',borderRadius:'50px',padding:'14px 20px',fontWeight:'bold',fontSize:'16px',zIndex:9999,textDecoration:'none'}}>
          💬 WhatsApp
        </a>
      </body>
    </html>
  );
}