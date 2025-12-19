export type Project = {
  slug: string; 
  title: string;
  projeto: string;
  equipe: string;
  ano: string;
  gridSize: number; 
  description: string[];
  images: {
    thumbnail: string;
    gallery: string[];
    plants?: string[];
    secondary?: {
      src: string;
      size: "small" | "medium" | "large"; 
    }[];
  };
  embreve?: boolean
};