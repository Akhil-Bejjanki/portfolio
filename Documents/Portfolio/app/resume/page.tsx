"use client";

import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ResumePage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h1 className="text-3xl font-bold text-white">My Resume</h1>
                    <Button href="/images/Akhil Bejjanki-Resume.pdf" variant="primary">
                        Download PDF <Download className="ml-2" size={18} />
                    </Button>
                </div>

                {/* PDF Viewer using object or iframe */}
                <div className="w-full h-[800px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
                    <object
                        data="/images/Akhil Bejjanki-Resume.pdf"
                        type="application/pdf"
                        className="w-full h-full"
                    >
                        <div className="flex flex-col items-center justify-center w-full h-full text-center p-8 space-y-4">
                            <p className="text-gray-400">
                                It appears you don&apos;t have a PDF plugin for this browser.
                            </p>
                            <Button href="/images/Akhil Bejjanki-Resume.pdf" variant="outline">
                                Click here to download the PDF
                            </Button>
                        </div>
                    </object>
                </div>
            </div>
        </div>
    );
}
