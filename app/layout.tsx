import type { Metadata } from "next";
import { Poppins } from "next/font/google";


import "./globals.css";
import { Providers } from "./components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Laura Consoni",
  description: "Laura Consoni's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-white font-extralight">
      <body className={`${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}