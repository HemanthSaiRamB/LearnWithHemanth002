import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "30-Day GenAI Builder Plan",
  description: "A premium sprint dashboard for completing a 15-sprint Generative AI builder roadmap."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
