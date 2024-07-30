import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center px-5 md:px-24 max-w-[850px] mx-auto">
      <Navbar />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        storageKey="theme"
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
