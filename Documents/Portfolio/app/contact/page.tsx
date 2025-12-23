"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg bg-[#0f0f0f] border border-white/10 p-8 rounded-2xl shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Get In Touch</h1>
                    <p className="text-gray-400">
                        Send me a message!
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl flex flex-col items-center justify-center space-y-4">
                        <CheckCircle size={48} />
                        <p className="font-semibold text-lg">Message Sent Successfully!</p>
                        <Button onClick={() => setStatus("idle")} variant="outline">
                            Send Another
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                                placeholder="Akhil Bejjanki"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
                                placeholder="akhil@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors resize-none"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                <AlertCircle className="mr-2" size={16} />
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <Button type="submit" disabled={status === "loading"} className="w-full py-4 text-base">
                            {status === "loading" ? "Sending..." : "Send Message"}
                            {!status && <Send className="ml-2" size={18} />}
                        </Button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
