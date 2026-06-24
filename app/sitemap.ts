import type { MetadataRoute } from "next";
import { visualArchiveEntries } from "@/data/visualArchive";

const siteUrl = "https://ninod.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/studio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/visual-archive`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/wearable-archive`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/acquire`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/card`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const archiveRoutes: MetadataRoute.Sitemap = visualArchiveEntries.map((entry) => ({
    url: `${siteUrl}/visual-archive/${entry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...archiveRoutes];
}
