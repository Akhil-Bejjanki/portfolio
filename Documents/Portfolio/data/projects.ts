import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Material Sorter",
        description: "Autonomous material sorter using VEX API",
        category: "Engineering",
        image: "/images/projects/marblewebsite.png", // Replace with real image
        tech: ["C++", "3D Modeling", "Engineering Design"],
        liveUrl: "https://www.youtube.com/watch?v=-ida7KRZlcA",
        reportUrl: "/images/projects/Akhil Bejjanki, Ryan Vir, Janav Rakesh, Luke Chen - 3.3.1 Project Report.pdf",
        featured: true,
    },
    {
        id: "4",
        title: "Music Video",
        description: "Music Video",
        category: "Video Production",
        image: "/placeholder-video.jpg", // Replace with real image
        tech: ["Adobe Premiere"],
        liveUrl: "https://youtube.com",
        featured: false,
        comingSoon: true,
    },
    {
        id: "3",
        title: "RaspberryPi Motion Detector Robot",
        description: "Robot traverses surrounding area",
        category: "Engineering",
        image: "/placeholder-portfolio.jpg", // Replace with real image
        tech: ["RaspberryPi", "Ultrasonic Sensor"],
        codeUrl: "https://github.com/example/portfolio",
        featured: true,
        comingSoon: true,
    },
    {
        id: "2",
        title: "Smart Path AI",
        description: "AI learning tool",
        category: "Engineering",
        image: "/placeholder-iot.jpg", // Replace with real image
        tech: ["React", "Graph-RAG", "MongoDB"],
        featured: true,
        comingSoon: true,
    },
];
