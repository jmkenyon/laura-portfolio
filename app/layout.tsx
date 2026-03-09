import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Providers } from "./components/Providers";
import { headers } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300"],
});

const brasilMetadata = {
  title: "Laura Consoni | Arquitetura",
  description:
    "Portfólio da arquiteta Laura Consoni. Projetos residenciais, comerciais e interiores com enfoque em arquitetura contemporânea, materiais naturais e soluções detalhadas. São Paulo, Brasil.",
  keywords: [
    "arquitetura",
    "arquiteta",
    "arquiteto",
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
  metadataBase: new URL("https://lauraconsoni.com.br"),
  openGraph: {
    title: "Laura Consoni — Arquitetura e Interiores",
    description:
      "Portfólio de arquitetura e interiores da arquiteta Laura Consoni. Projetos residenciais, comerciais e espaços contemporâneos desenvolvidos em São Paulo e no Brasil.",
    url: "https://lauraconsoni.com.br",
    siteName: "Laura Consoni",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/laura-about_2.webp",
        width: 1200,
        height: 630,
        alt: "Projeto de Arquitetura por Laura Consoni",
      },
    ],
  },
  alternates: {
    canonical: "https://lauraconsoni.com.br",
  },
  category: "architecture",
};

const englishMetadata = {
  title: "Laura Consoni | Architecture",
  description:
    "Portfolio of architect Laura Consoni. Residential, commercial and interior projects with a focus on contemporary architecture, natural materials and detailed design solutions. Based in São Paulo, Brazil.",
  keywords: [
    "architecture",
    "architect",
    "interior design",
    "interiors",
    "contemporary architecture",
    "residential architecture",
    "commercial architecture",
    "architecture portfolio",
    "architecture studio",
    "modern architecture",
    "minimalist architecture",
    "renovation",
    "refurbishment",
    "bespoke architecture",
    "Brazilian architecture",
    "São Paulo architect",
    "laura consoni",
  ],
  authors: [{ name: "Laura Consoni" }],
  creator: "Laura Consoni",
  publisher: "Laura Consoni",
  metadataBase: new URL("https://lauraconsoni.co.uk"),
  openGraph: {
    title: "Laura Consoni — Architecture & Interiors",
    description:
      "Architecture and interiors portfolio of Laura Consoni. Residential, commercial and contemporary spaces designed in São Paulo, Brazil.",
    url: "https://lauraconsoni.co.uk",
    siteName: "Laura Consoni",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/laura-about_2.webp",
        width: 1200,
        height: 630,
        alt: "Architecture project by Laura Consoni",
      },
    ],
  },
  alternates: {
    canonical: "https://lauraconsoni.co.uk",
  },
  category: "architecture",
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";

  if (host.endsWith(".co.uk")) return englishMetadata;
  if (host.endsWith(".com.br")) return brasilMetadata;
  return brasilMetadata; // default
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const lang = host.endsWith(".co.uk") ? "en-GB" : "pt-BR";

  return (
    <html lang={lang} className="bg-white font-extralight">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
