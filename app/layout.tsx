import type { Metadata } from "next";
import { Poppins } from "next/font/google";


import "./globals.css";
import { Providers } from "./components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: "Laura Consoni",
  description: "Laura Consoni's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className={`${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}