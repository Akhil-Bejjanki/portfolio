export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Engineering" | "Video Production";
  image: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}
