import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: "Laura Consoni",
  description: "Laura Consoni's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
