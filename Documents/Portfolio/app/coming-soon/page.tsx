import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0f0f0f]">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Icon Animation */}
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                    <div className="relative bg-[#1a1a1a] p-8 rounded-full border border-white/10 flex items-center justify-center">
                        <Clock className="w-16 h-16 text-blue-400 animate-pulse" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        Coming Soon
                    </h1>
                    <p className="text-gray-400 text-lg">
                        I&apos;m currently working on documenting this project.
                        Check back soon for the full case study and code!
                    </p>
                </div>

                <div className="pt-8">
                    <Button
                        href="/projects"
                        variant="primary"
                        className="w-full sm:w-auto px-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Button>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
