import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "./Navbar";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AbrenCare - Välkommen till Abrencare – din partner för personcentrerad vård och omsorg i hemmet.",
  description: "På AbrenCare erbjuder vi ett brett utbud av tjänster för att hjälpa individer att leva självständigt i bekvämligheten av sina egna hem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
          {children}
      </body>
    </html>
  );
}
