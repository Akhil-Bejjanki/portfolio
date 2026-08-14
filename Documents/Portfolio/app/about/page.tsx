"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

const skills = [
    "Java", "React", "Python", "C++", "Next.js", "Node.js",
    "Git", "TypeScript", "Spring", "MongoDb", "Arduino", "Rust", "RaspberryPi", "PCB Design", "Breadboarding", "Soldering", "AutoDesk Fusion", "Onshape",
];

const experience = [
    {
        role: "Robotics Engineer",
        company: "RoboCup",
        date: "August 2025 – Present",
        description: "Developed firmware in Rust for autonomous robots, implementing RTIC-based cooling systems, I²C hardware communication, and multi-agent AI frameworks for autonomous decision-making."
    },
    {
        role: "Undergraduate Researcher",
        company: "Mechatronics & Motivation @ Flavin Neuromachines Lab",
        date: "August 2025 – Present",
        description: "Designed flexible PCBs in Altium and developed BLE IoT sensor firmware for wearable haptic rings and EMG devices, enabling real-time muscle signal processing and feedback."
    },
    {
        role: "Web-Dev Intern",
        company: "Hydra",
        date: "May 2025 – August 2025",
        description: "Designed and implemented website features connecting open-source contributors with companies while incorporating modern layout design and analyzing AI-driven business models."
    },
    {
        role: "Software Engineering Intern",
        company: "lkey studios",
        date: "Aug 2023 – July 2024",
        description: "Built and launched responsive full-stack web features and online shop components using React, including multilingual support for over 50 monthly active users."
    },
    {
        role: "Programming Captain",
        company: "AVHS Engineers",
        date: "Aug 2022 – May 2025",
        description: "Led robotics team to state finals by programming C++ autonomous and driver-control systems for competition robots with pneumatics and catapults while mentoring new members."
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Profile Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        {/* Profile Image */}
                        <div className="relative w-48 h-48 flex-shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                                <img
                                    src="/images/photos-me/pfp.png"
                                    alt="Akhil Bejjanki"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-white">About Me</h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hello! I&apos;m <span className="text-blue-400 font-semibold">Akhil Bejjanki</span>, a driven Computer Engineering student at
                                <span className="text-yellow-400 font-semibold"> Georgia Institute of Technology</span>.
                                Through projects, internships, and academic coursework, I have developed a strong foundation in software development and hardware design. I hope to continue developing efficient, reliable systems through a summer 2027 internship in software engineering or embedded hardware development.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <Button href="/images/Akhil Bejjanki-Resume.pdf">
                                    <Download className="mr-2" size={18} /> Resume
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-blue-200 border border-white/5 hover:border-blue-500/50 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Experience</h2>
                        <div className="space-y-8">
                            {experience.map((item, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-blue-500/30 pb-8 last:pb-0">
                                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                    <div className="text-blue-400 mb-2">{item.company} | {item.date}</div>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
