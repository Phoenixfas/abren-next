import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AbrenCare - Välkommen till Abrencare – din partner för personcentrerad vård och omsorg i hemmet.",
  description: "På AbrenCare erbjuder vi ett brett utbud av tjänster för att hjälpa individer att leva självständigt i bekvämligheten av sina egna hem.",
  keywords: "AbrenCare, home health care, independent living, home care services, health care provider, senior care",
  authors: [{ name: "AbrenCare" }],
  robots: "index, follow",
  openGraph: {
    title: "AbrenCare - Välkommen till Abrencare – din partner för personcentrerad vård och omsorg i hemmet.",
    description: "På AbrenCare erbjuder vi ett brett utbud av tjänster för att hjälpa individer att leva självständigt i bekvämligheten av sina egna hem.",
    url: "https://www.abrencare.se",
    siteName: "AbrenCare",
    images: [
      {
        url: "/abren-care-eng.png",
        width: 1200,
        height: 630,
        alt: "AbrenCare - Home Health Services"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AbrenCare",
    title: "AbrenCare - Välkommen till Abrencare – din partner för personcentrerad vård och omsorg i hemmet.",
    description: "På AbrenCare erbjuder vi ett brett utbud av tjänster för att hjälpa individer att leva självständigt i bekvämligheten av sina egna hem.",
    images: "/abren-care-eng.png",
  },
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
