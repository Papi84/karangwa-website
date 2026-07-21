import { NextResponse } from "next/server";

const GH_OWNER = "Papi84";
const GH_REPO = "ishyango-desktop";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate once per hour

// Platform detection helpers for asset filenames
const platformPatterns = {
  windows: /x64-setup\.exe$/i,
  mac: /aarch64\.dmg$/i,
  macIntel: /x64\.dmg$/i,
  linux: /amd64\.(deb|AppImage)$/i,
  linuxDeb: /amd64\.deb$/i,
  linuxAppImage: /amd64\.AppImage$/i,
  linuxRpm: /x86_64\.rpm$/i,
};

interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
}

interface ReleaseData {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  assets: Asset[];
}

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          // No token needed for public repos (subject to rate limit)
          // If rate limiting becomes an issue, add: Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: { revalidate: 3600, tags: ["ishyango-release"] },
      },
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const data: ReleaseData = await res.json();

    // Categorize assets by platform
    const categorized: Record<string, Asset | null> = {
      windows: null,
      mac: null,
      macIntel: null,
      linuxDeb: null,
      linuxAppImage: null,
      linuxRpm: null,
    };

    for (const asset of data.assets) {
      if (platformPatterns.windows.test(asset.name)) {
        categorized.windows = asset;
      } else if (platformPatterns.macIntel.test(asset.name)) {
        categorized.macIntel = asset;
      } else if (platformPatterns.mac.test(asset.name)) {
        categorized.mac = asset;
      } else if (platformPatterns.linuxDeb.test(asset.name)) {
        categorized.linuxDeb ??= asset;
      } else if (platformPatterns.linuxAppImage.test(asset.name)) {
        categorized.linuxAppImage ??= asset;
      } else if (platformPatterns.linuxRpm.test(asset.name)) {
        categorized.linuxRpm ??= asset;
      }
    }

    return NextResponse.json(
      {
        version: data.tag_name.replace(/^v/, ""),
        releaseName: data.name,
        publishedAt: data.published_at,
        releaseUrl: data.html_url,
        platforms: categorized,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    // Fallback to cached or empty
    return NextResponse.json(
      {
        version: null,
        releaseName: null,
        publishedAt: null,
        releaseUrl: "https://github.com/Papi84/ishyango-desktop/releases",
        platforms: {
          windows: null,
          mac: null,
          macIntel: null,
          linuxDeb: null,
          linuxAppImage: null,
          linuxRpm: null,
        },
      },
      { status: 200 },
    );
  }
}
