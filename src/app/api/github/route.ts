import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/lib/github";

export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    const stats = await fetchGitHubStats();
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
