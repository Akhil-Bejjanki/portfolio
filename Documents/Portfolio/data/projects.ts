import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Material Sorter",
        description: "Autonomous material sorter using VEX API",
        category: "Engineering",
        image: "/placeholder-drone.jpg", // Replace with real image
        tech: ["C++", "3D Modeling", "Live Demo"],
        liveUrl: "https://example.com",
        codeUrl: "https://github.com/example/drone",
        featured: true,
    },
    {
        id: "2",
        title: "Music Video",
        description: "Music Video",
        category: "Video Production",
        image: "/placeholder-video.jpg", // Replace with real image
        tech: ["Adobe Premiere"],
        liveUrl: "https://youtube.com",
        featured: true,
    },
    {
        id: "3",
        title: "RaspberryPi Motion Detector Robot",
        description: "Robot traverses surrounding area",
        category: "Engineering",
        image: "/placeholder-portfolio.jpg", // Replace with real image
        tech: ["RaspberryPi", "Ultrasonic Sensor"],
        codeUrl: "https://github.com/example/portfolio",
        featured: false,
    },
    {
        id: "4",
        title: "Smart Path AI",
        description: "AI learning tool",
        category: "Engineering",
        image: "/placeholder-iot.jpg", // Replace with real image
        tech: ["React", "Graph-RAG", "MongoDb"],
        featured: true,
    },
];
