import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://switch-integrated-website.vercel.app"),
  title: {
    default: "Switch Integrated | Digital Communication Solutions | Nigeria",
    template: "%s",
  },
  description:
    "Switch Integrated is a Nigerian digital solutions and customer engagement company delivering enterprise messaging, OTP, USSD, mobile engagement, and digital communication infrastructure for businesses across Africa.",
  icons: {
    icon: [
      { url: "/brand/switch-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/switch-icon.svg",
    apple: "/brand/switch-icon.svg",
  },
  openGraph: {
    title: "Switch Integrated | Digital Communication Solutions | Nigeria",
    description:
      "Switch Integrated is a Nigerian digital solutions and customer engagement company delivering enterprise messaging, OTP, USSD, mobile engagement, and digital communication infrastructure for businesses across Africa.",
    url: "https://switch-integrated-website.vercel.app",
    siteName: "Switch Integrated",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Switch Integrated",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch Integrated | Digital Communication Solutions | Nigeria",
    description:
      "Switch Integrated is a Nigerian digital solutions and customer engagement company delivering enterprise messaging, OTP, USSD, mobile engagement, and digital communication infrastructure for businesses across Africa.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
