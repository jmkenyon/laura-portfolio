export type Project = {
  slug: string; 
  title: string;
  projeto: string;
  equipe: string;
  ano: string;
  gridSize: number; 
  description: string[];
  padding?: string
  images: {
    thumbnail: string;
    gallery: string[];
    plants?: string[];
    secondary?: {
      src: string;
      size: "small" | "medium" | "large" | "xl"; 
    }[];
    doublePlants?: string[]
  };
  embreve?: boolean
};