import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const category = searchParams.get("category");

    let filteredProjects = projects;

    if (featured === "true") {
        filteredProjects = filteredProjects.filter((p) => p.featured);
    }

    if (category && category !== "All") {
        filteredProjects = filteredProjects.filter((p) => p.category === category);
    }

    // Sort by ID (numerical)
    filteredProjects.sort((a, b) => Number(a.id) - Number(b.id));

    return NextResponse.json(filteredProjects);
}
