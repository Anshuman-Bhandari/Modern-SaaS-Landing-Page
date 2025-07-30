import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADmyBRAND",
  description: "Elevate your marketing strategy with data-driven insights, powerful automation, and cutting-edge AI technology. Scale your brand like never before with ADmyBRAND.",
  keywords: "marketing automation, AI marketing, brand management, digital marketing, SaaS, marketing platform",
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://admybrand.com'),
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    title: "ADmyBRAND - AI-Powered Marketing Platform",
    description: "Transform your brand presence with cutting-edge AI technology and powerful automation tools.",
    url: 'https://admybrand.com',
    siteName: 'ADmyBRAND',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND - AI-Powered Marketing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND - AI-Powered Marketing Platform',
    description: 'Transform your brand presence with cutting-edge AI technology and powerful automation tools.',
    images: ['/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/images/logo.jpeg" />
        <link rel="shortcut icon" href="/images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
