import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NotesProvider } from "@/context/NotesContext";
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
  title: "Notes Manager",
  description: "Post-it style notes app with Firebase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}