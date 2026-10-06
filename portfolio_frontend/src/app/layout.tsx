import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ui/ClickSpark";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "mikishlep — Frontend / Fullstack developer",
    template: "%s — mikishlep",
  },
  description: "Портфолио frontend / fullstack разработчика: сайты, интерфейсы и веб-приложения.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body id="top" className="min-h-full flex flex-col">
        <ClickSpark
            sparkColor="#111318"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
