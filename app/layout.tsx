import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhail Ahmed  - Portfolio",
  description: "Recent IT graduate proficient in front-end development (React.js, Next.js, TypeScript) and Python programming. Skilled in MS Office Suite and office automation.",
  keywords: ["Suhail Ahmed", "Web Developer", "React", "Next.js", "TypeScript", "Python", "Portfolio"],
  authors: [{ name: "Suhail Ahmed " }],
  openGraph: {
    title: "Suhail Ahmed  - Portfolio",
    description: "Recent IT graduate proficient in front-end development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
