import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // In a real app, you would send an email using Resend, SendGrid, etc.
        // For now, we just log it to the console (server-side).
        console.log("Contact Form Submission:", { name, email, message });

        return NextResponse.json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
