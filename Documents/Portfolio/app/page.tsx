"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects?featured=true");
        const data = await res.json();
        setFeaturedProjects(data.slice(0, 4)); // Limit to 4
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Akhil Bejjanki
              </span>
            </h1>

            <figure className="border-l-4 border-blue-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              <blockquote className="text-xl italic text-gray-300">
                &quot;The process itself often carries more value than the final destination.&quot;
              </blockquote>
            </figure>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/projects" variant="primary" className="text-lg px-8 py-4">
                View Projects <ArrowRight className="ml-2" />
              </Button>
              <Button href="/images/Akhil Bejjanki-Resume.pdf" variant="outline" className="text-lg px-8 py-4">
                Download Résumé <Download className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Collage */}
          {/* Right Side: Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-[150%] -mt-20">
              {/* Column 1 - Moves Up */}
              <motion.div
                animate={{ y: [0, -100, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex flex-col gap-4"
              >
                {[
                  "/images/photos-me/grad_pic1.webp",
                  "/images/photos-me/IMG_7631.jpg",
                  "/images/photos-me/Screen Shot 2025-05-19 at 8.22.58 PM.png",
                  "/images/photos-me/grad_pic2.webp",
                  "/images/photos-me/Screen Shot 2025-05-20 at 12.25.19 PM.png",
                ].map((src, i) => (
                  <div key={i} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery image"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Column 2 - Moves Down */}
              <motion.div
                animate={{ y: [-100, 0, -100] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex flex-col gap-4"
              >
                {[
                  "/images/photos-me/IMG_3587.jpeg",
                  "/images/photos-me/Screen Shot 2025-05-26 at 1.46.59 PM.png",
                  "/images/photos-me/grad_pic4.webp",
                  "/images/photos-me/giants_game.webp",
                ].map((src, i) => (
                  <div key={i} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery image"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Column 3 - Moves Up (Hidden on mobile if needed, but keeping for now) */}
              <motion.div
                animate={{ y: [0, -100, 0] }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                className="flex flex-col gap-4 hidden sm:flex"
              >
                {[
                  "/images/photos-me/Screen Shot 2025-05-26 at 2.29.27 PM.png",
                  "/images/photos-me/grad_pic3.webp",
                  "/images/photos-me/IMG_7633.jpg",
                  "/images/photos-me/Screen Shot 2025-05-26 at 1.14.45 PM.png",
                ].map((src, i) => (
                  <div key={i} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery image"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for smooth fade */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#000000] to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#000000] to-transparent z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl">
              A selection of my best work in software engineering and video production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {/* See More Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-8 group hover:border-blue-500/50 hover:shadow-lg transition-colors cursor-pointer"
            >
              <Link href="/projects" className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <ArrowRight className="text-white group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">View All Projects</h3>
                <p className="text-gray-400 text-sm">Explore my full portfolio</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
