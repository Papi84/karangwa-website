"use client";

import { useEffect, useState } from "react";

interface AssetInfo {
  name: string;
  browser_download_url: string;
  size: number;
}

interface ReleaseData {
  version: string | null;
  releaseName: string | null;
  publishedAt: string | null;
  releaseUrl: string;
  platforms: {
    windows: AssetInfo | null;
    mac: AssetInfo | null;
    macIntel: AssetInfo | null;
    linuxDeb: AssetInfo | null;
    linuxAppImage: AssetInfo | null;
    linuxRpm: AssetInfo | null;
  };
}

type Platform = "windows" | "mac" | "linux";

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "linux";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "mac";
  return "linux";
}

const platformNames: Record<Platform, string> = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
};

const platformIcons: Record<Platform, string> = {
  windows: "fab fa-windows",
  mac: "fab fa-apple",
  linux: "fab fa-linux",
};

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function DownloadIshyango() {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const detected = detectPlatform();
    setSelectedPlatform(detected);

    // Cache key so we don't re-fetch on every mount unnecessarily
    const cached = sessionStorage.getItem("ishyango-release");
    if (cached) {
      try {
        setRelease(JSON.parse(cached));
        setLoading(false);
        return;
      } catch {
        // fall through to fetch
      }
    }

    fetch("/api/github-release")
      .then((r) => r.json())
      .then((data: ReleaseData) => {
        setRelease(data);
        sessionStorage.setItem("ishyango-release", JSON.stringify(data));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const getAssetForSelected = (): AssetInfo | null => {
    if (!release || !selectedPlatform) return null;
    const p = release.platforms;
    switch (selectedPlatform) {
      case "windows":
        return p.windows;
      case "mac":
        return p.mac ?? p.macIntel;
      case "linux":
        return p.linuxDeb ?? p.linuxAppImage ?? p.linuxRpm;
    }
  };

  const getAltAssets = (): { label: string; asset: AssetInfo | null }[] => {
    if (!release) return [];
    const p = release.platforms;
    const all: { label: string; asset: AssetInfo | null }[] = [
      { label: "Windows (.exe)", asset: p.windows },
      { label: "macOS (Apple Silicon)", asset: p.mac },
      { label: "macOS (Intel)", asset: p.macIntel },
      { label: "Linux (.deb)", asset: p.linuxDeb },
      { label: "Linux (.AppImage)", asset: p.linuxAppImage },
      { label: "Linux (.rpm)", asset: p.linuxRpm },
    ];
    return all.filter((a) => a.asset !== null);
  };

  const primaryAsset = getAssetForSelected();

  return (
    <section id="download" className="py-16 md:py-20 xl:py-28 px-4">
      <div className="container mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <div className="glass-card p-6 md:p-8 xl:p-12 text-center">
          <i className="fas fa-download text-4xl md:text-6xl neon-blue mb-4"></i>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
            Download Ishyango Desktop
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base xl:text-lg">
            Your Git-like learning companion for PDFs. Available on all platforms.
          </p>

          {loading && (
            <div className="py-8">
              <div className="inline-block w-8 h-8 border-2 border-[var(--neon-green)] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400 mt-2 text-sm">Checking for latest release...</p>
            </div>
          )}

          {error && !release && (
            <div className="py-8">
              <p className="text-gray-400 text-sm">
                Could not fetch release info. {" "}
                <a
                  href="https://github.com/Papi84/ishyango-desktop/releases"
                  target="_blank"
                  className="text-[var(--neon-blue)] hover:underline"
                >
                  Visit the releases page instead
                </a>
              </p>
            </div>
          )}

          {release && !loading && (
            <>
              {/* Platform selectors */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {(Object.keys(platformNames) as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`glass-card min-h-[44px] px-4 py-2 rounded border text-sm transition duration-200 ${
                      selectedPlatform === p
                        ? "border-[var(--neon-green)] text-[var(--neon-green)] bg-[var(--neon-green)] bg-opacity-10"
                        : "border-gray-600 text-gray-400 hover:border-gray-400"
                    }`}
                  >
                    <i className={`${platformIcons[p]} mr-2`}></i>
                    {platformNames[p]}
                  </button>
                ))}
              </div>

              {/* Primary download button */}
              {primaryAsset ? (
                <a
                  href={primaryAsset.browser_download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block max-w-full glass-card px-5 py-3 md:px-8 md:py-4 rounded border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-[var(--dark-bg)] font-bold hover:shadow-lg hover:shadow-[var(--glow-green)] transition duration-300 text-base md:text-lg mb-4"
                >
                  <i className={`${platformIcons[selectedPlatform!]} mr-2`}></i>
                  Download for {platformNames[selectedPlatform!]}
                  <span className="block text-xs font-normal mt-1 opacity-70">
                    {primaryAsset.name} ({formatBytes(primaryAsset.size)})
                  </span>
                </a>
              ) : (
                <div className="py-4">
                  <p className="text-gray-400 text-sm mb-2">
                    No {platformNames[selectedPlatform!]} build available for this release.
                  </p>
                </div>
              )}

              {/* Version & release date */}
              <div className="text-gray-400 text-sm mb-6">
                {release.version && (
                  <span className="mr-4">
                    <i className="fas fa-tag mr-1"></i> v{release.version}
                  </span>
                )}
                {release.publishedAt && (
                  <span>
                    <i className="far fa-calendar-alt mr-1"></i>
                    {formatDate(release.publishedAt)}
                  </span>
                )}
              </div>

              {/* Other platform links */}
              {getAltAssets().length > (primaryAsset ? 1 : 0) && (
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Other platforms
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {getAltAssets()
                      .filter((a) => a.asset?.browser_download_url !== primaryAsset?.browser_download_url)
                      .map(({ label, asset }) => (
                        <a
                          key={asset!.name}
                          href={asset!.browser_download_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-card px-3 py-1.5 rounded border border-gray-600 text-gray-400 hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)] text-xs transition duration-200"
                        >
                          {label}
                        </a>
                      ))}
                  </div>
                </div>
              )}

              {/* View all releases */}
              <div className="mt-6">
                <a
                  href={release.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--neon-blue)] hover:underline text-sm"
                >
                  <i className="fab fa-github mr-1"></i> View all releases on GitHub
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
