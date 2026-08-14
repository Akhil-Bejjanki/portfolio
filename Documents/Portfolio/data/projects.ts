import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Material Sorter",
        description: "Autonomous material sorter using VEX API",
        category: "Embedded Hardware",
        image: "/images/projects/marblewebsite.png",
        tech: ["C++", "3D Modeling", "Engineering Design"],
        liveUrl: "https://www.youtube.com/watch?v=-ida7KRZlcA",
        reportUrl: "/images/projects/Akhil Bejjanki, Ryan Vir, Janav Rakesh, Luke Chen - 3.3.1 Project Report.pdf",
        featured: true,
    },
    {
        id: "2",
        title: "Smart Path AI",
        description: "AI learning tool",
        category: "Software + AI",
        image: "/placeholder-iot.jpg",
        tech: ["React", "Graph-RAG", "MongoDB"],
        featured: true,
        comingSoon: true,
    },
    {
        id: "3",
        title: "RaspberryPi Motion Detector Robot",
        description: "Robot traverses surrounding area",
        category: "Embedded Hardware",
        image: "/placeholder-portfolio.jpg",
        tech: ["RaspberryPi", "Ultrasonic Sensor"],
        codeUrl: "https://github.com/example/portfolio",
        featured: true,
        comingSoon: true,
    },
];
