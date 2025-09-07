import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oseng - Portfolio Profesional",
  description: "Portfolio profesional dengan desain elegan dan modern. Menampilkan karya, pengalaman, dan keahlian dalam pengembangan web.",
  keywords: ["Portfolio", "Web Development", "Frontend", "Backend", "UI/UX", "Oseng"],
  authors: [{ name: "Oseng Portfolio" }],
  openGraph: {
    title: "Oseng - Portfolio Profesional",
    description: "Portfolio profesional dengan desain elegan dan modern",
    url: "https://oseng-portfolio.vercel.app",
    siteName: "Oseng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oseng - Portfolio Profesional",
    description: "Portfolio profesional dengan desain elegan dan modern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-slate-800`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
