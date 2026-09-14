"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Video, Code, CheckCircle } from "lucide-react";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

interface PageProps {
    params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                <p className="text-gray-400 mb-8">The project you are looking for does not exist.</p>
                <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
            </motion.div>

            {/* Header Header & Details */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 mb-12"
            >
                <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                        {project.category}
                    </span>
                    {project.liveUrl && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Deployment
                        </span>
                    )}
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                    {project.title}
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-200 text-sm font-medium rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                    {project.liveUrl && (
                        <Button href={project.liveUrl} variant="primary" className="text-base py-3 px-6">
                            {project.liveLabel ? `Visit ${project.liveLabel}` : "Visit Live Deployment"} <ExternalLink size={18} className="ml-2" />
                        </Button>
                    )}
                    {project.codeUrl && (
                        <Button href={project.codeUrl} variant="outline" className="text-base py-3 px-6">
                            GitHub Repository <Github size={18} className="ml-2" />
                        </Button>
                    )}
                    {project.demoUrl && (
                        <Button href={project.demoUrl} variant="outline" className="text-base py-3 px-6">
                            Demo Video <Video size={18} className="ml-2" />
                        </Button>
                    )}
                </div>
            </motion.div>

            {/* Project Video / Image Showcase */}
            {(() => {
                const youtubeMatch = project.demoUrl?.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                const embedUrl = (youtubeMatch && youtubeMatch[2].length === 11) ? `https://www.youtube.com/embed/${youtubeMatch[2]}` : null;

                if (embedUrl) {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl bg-black/40"
                        >
                            <iframe
                                src={embedUrl}
                                title={`${project.title} Demo Video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </motion.div>
                    );
                }

                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative w-full h-[320px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl bg-black/40"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </motion.div>
                );
            })()}

            {/* Detailed Descriptions */}
            <div className="space-y-12">
                {/* GT Movies Store Description */}
                {project.longDescription && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                            <Code className="text-blue-400" size={28} />
                            {project.title} Description
                        </h2>
                        <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                            {project.longDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Process Description */}
                {project.processDescription && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                            <CheckCircle className="text-emerald-400" size={28} />
                            Process Description
                        </h2>
                        <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                            {project.processDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.section>
                )}
            </div>
        </div>
    );
}
