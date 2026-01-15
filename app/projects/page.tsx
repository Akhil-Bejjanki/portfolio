"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Engineering", "Video Production"];

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                setProjects(data);
                setFilteredProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            }
        }
        fetchProjects();
    }, []);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
                projects.filter((p) => p.category === activeCategory)
            );
        }
    }, [activeCategory, projects]);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        My Projects
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive list of my technical projects and creative works.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12 flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-white text-black border-white shadow-lg shadow-white/10"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-500 py-20">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
