import type { Metadata } from "next";
import { NotesProvider } from "@/context/NotesContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes Manager",
  description: "Post-it style notes app with Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
