import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const messiriSans = El_Messiri({
  variable: "--font-messiri-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Comida | Find your favorite recipes",
  description: "Discover and share your favorite recipes with La Comida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${messiriSans.variable}`}>
        <div className="layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
