"use client";

import Image from "next/image";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Clock, Video, Info } from "lucide-react";
import Button from "./ui/Button";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const handleCardClick = () => {
        if (project.comingSoon) {
            window.location.href = '/coming-soon';
            return;
        }

        if (project.longDescription) {
            window.location.href = `/projects/${project.id}`;
            return;
        }

        if (project.reportUrl) {
            window.open(project.reportUrl, '_blank');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={handleCardClick}
            className={`group relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full ${
                project.reportUrl || project.longDescription || project.comingSoon ? "cursor-pointer" : ""
            }`}
        >
            <div className="relative h-48 w-full overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 opacity-60" />

                {/* Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs text-white font-medium">
                    {project.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300 border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                    {project.comingSoon ? (
                        <div className="w-full">
                            <Button
                                href="/coming-soon"
                                variant="outline"
                                className="w-full text-sm py-2 px-4"
                            >
                                Coming Soon <Clock size={14} className="ml-2" />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-wrap items-center gap-2">
                                {project.longDescription && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={`/projects/${project.id}`}
                                            variant="primary"
                                            className="w-full text-xs sm:text-sm py-2 px-3 shadow-none"
                                        >
                                            Details <Info size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                                {project.codeUrl && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={project.codeUrl}
                                            variant="outline"
                                            className="w-full text-xs sm:text-sm py-2 px-3"
                                        >
                                            Code <Github size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                                {project.demoUrl && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={project.demoUrl}
                                            variant="outline"
                                            className="w-full text-xs sm:text-sm py-2 px-3"
                                        >
                                            {project.adminDemoUrl ? "User Demo" : "Demo"} <Video size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                                {project.adminDemoUrl && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={project.adminDemoUrl}
                                            variant="outline"
                                            className="w-full text-xs sm:text-sm py-2 px-3"
                                        >
                                            Admin Demo <Video size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                                {project.liveUrl && !project.liveLabel && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={project.liveUrl}
                                            variant="primary"
                                            className="w-full text-xs sm:text-sm py-2 px-3 shadow-none"
                                        >
                                            Live Demo <ExternalLink size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                                {project.reportUrl && (
                                    <div onClick={(e) => e.stopPropagation()} className="flex-1 min-w-[80px]">
                                        <Button
                                            href={project.reportUrl}
                                            variant="outline"
                                            className="w-full text-xs sm:text-sm py-2 px-3"
                                        >
                                            Report <FileText size={14} className="ml-1" />
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {project.liveUrl && project.liveLabel && (
                                <div onClick={(e) => e.stopPropagation()} className="w-full mt-1">
                                    <Button
                                        href={project.liveUrl}
                                        variant="outline"
                                        className="w-full text-xs sm:text-sm py-2 px-3"
                                    >
                                        {project.liveLabel} <ExternalLink size={14} className="ml-1" />
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
