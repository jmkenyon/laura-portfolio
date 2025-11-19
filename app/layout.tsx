import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Providers } from "./components/Providers";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300"],
});

export const metadata: Metadata = {
  title: "Laura Consoni | Arquitetura",
  description:
    "Portfólio da arquiteta Laura Consoni. Projetos residenciais, comerciais e interiores com enfoque em arquitetura contemporânea, materiais naturais e soluções detalhadas. São Paulo, Brasil.",
  keywords: [
    "arquitetura",
    "arquiteta",
    "interiores",
    "design de interiores",
    "arquitetura contemporânea",
    "projetos residenciais",
    "projetos comerciais",
    "arquitetura São Paulo",
    "arquitetura Brasil",
    "portfólio de arquitetura",
    "estúdio de arquitetura",
    "arquitetura autoral",
    "arquitetura minimalista",
    "renovação",
    "reforma",
    "arquitetura moderna",
    "laura consoni",
  ],
  authors: [{ name: "Laura Consoni" }],
  creator: "Laura Consoni",
  publisher: "Laura Consoni",
  metadataBase: new URL("https://lauraconsoni.com"),
  openGraph: {
    title: "Laura Consoni — Arquitetura e Interiores",
    description:
      "Portfólio de arquitetura e interiores da arquiteta Laura Consoni. Projetos residenciais, comerciais e espaços contemporâneos desenvolvidos em São Paulo e no Brasil.",
    url: "https://lauraconsoni.com",
    siteName: "Laura Consoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/laura-about.jpg",
        width: 1200,
        height: 630,
        alt: "Projeto de Arquitetura por Laura Consoni",
      },
    ],
  },
  alternates: {
    canonical: "https://lauraconsoni.com",
  },
  category: "architecture",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-white font-extralight">
      <body className={`${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
