export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Embedded Hardware" | "Software + AI";
  image: string;
  tech: string[];
  liveUrl?: string;
  liveLabel?: string;
  codeUrl?: string;
  demoUrl?: string;
  adminDemoUrl?: string;
  reportUrl?: string;
  featured: boolean;
  comingSoon?: boolean;
  longDescription?: string[];
  processDescription?: string[];
}
