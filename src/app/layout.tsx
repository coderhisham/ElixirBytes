import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElixirBytes",
  description: "Tech solutions for the modern world",
  icons: {
    icon: "/assets/icons/ElixirBytes.png",
  },
  metadataBase: new URL("https://elixirbytes.com"),
  openGraph: {
    title: "ElixirBytes",
    description: "Tech solutions for the modern world",
    url: "https://elixirbytes.com",
    siteName: "ElixirBytes",
    images: [
      {
        url: "/assets/icons/ElixirBytes.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElixirBytes",
    description: "Tech solutions for the modern world",
    images: ["/assets/icons/ElixirBytes.png"],
  },
  other: {
    "whatsapp-platform": "WhatsApp",
    "apple-mobile-web-app-capable": "yes",
  },
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
        {children}
      </body>
    </html>
  );
}
