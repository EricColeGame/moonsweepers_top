export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Moon Sweepers Wiki",
  shortName: "Moon Sweepers",
  logoText: "M",
  tagline: "Guides, Tools & Updates for Lunar Cleanup",
  description: "Fan-made guides and updates for Moon Sweepers, the cooperative lunar cleanup game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://moonsweepers.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://moonsweepers.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5335510/Moon_Sweepers/",
  heroVideoId: "dEM3_CJFZWQ", // Official Moon Sweepers gameplay trailer
  social: {
    discord: "https://discord.gg/5ATRkXkAAe",
    youtube: "https://www.youtube.com/@MoonSweepers",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
