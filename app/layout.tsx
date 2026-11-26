import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "IPS | Стелі • Акустика • Освітлення",
  description:
    "Комплексні рішення для лікарень, офісів, освітніх закладів, ресторанів та торговельних центрів.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="flex min-h-screen flex-col">
  <Header />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}