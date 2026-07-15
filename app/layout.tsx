import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karangwa Abubakar | AI in Education + Builder",
  description: "Building AI-powered tools for students. Creator of Ishyango.AI - Git-like learning companion for PDFs. Weekly AI news & insights.",
  keywords: ["AI", "EdTech", "Ishyango.AI", "Machine Learning", "Student Tools", "Knowledge Graph"],
  authors: [{ name: "Karangwa Abubakar" }],
  openGraph: {
    title: "Karangwa Abubakar | AI in Education + Builder",
    description: "Building AI-powered tools for students. Creator of Ishyango.AI",
    url: "https://karangwa.com",
    siteName: "karangwa.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karangwa Abubakar | AI in Education + Builder",
    description: "Building AI-powered tools for students. Creator of Ishyango.AI",
    creator: "@coolerme",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="circuit-bg antialiased">
        {children}
      </body>
    </html>
  );
}
