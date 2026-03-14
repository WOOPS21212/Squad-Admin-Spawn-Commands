import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_ID = "G-SVXGDS7F4Q";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squad Spawn Commands – Vehicle & Deployable Admin Reference",
  description:
    "Complete quick-reference for all Squad admin spawn commands. Search and filter vehicles, emplacements, and deployables across all factions. Click to copy AdminCreateVehicle commands.",
  keywords: [
    "Squad",
    "Squad game",
    "admin commands",
    "spawn commands",
    "AdminCreateVehicle",
    "AdminCreateDeployable",
    "Squad vehicles",
    "Squad admin",
    "Squad server",
    "Squad mods",
  ],
  verification: {
    google: "EvYbxANs_zjB5P21VN6Z4VpFKIpL74R1P_qFmNMeXOI",
  },
  openGraph: {
    title: "Squad Spawn Commands",
    description:
      "Searchable quick-reference for all Squad admin spawn commands. Vehicles, emplacements, and deployables across every faction.",
    url: "https://squadcommands.com",
    siteName: "Squad Commands",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
