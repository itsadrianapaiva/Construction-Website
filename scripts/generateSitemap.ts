import * as fs from "fs";
import * as path from "path";

// Define your site's base URL
const SITE_URL = "https://www.dreammakersconstruction.ca"; // Replace with your actual domain

// Define routes based on your main.tsx
const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    path: "/privacy-policy",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    path: "/terms-of-service",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    path: "/sitemap",
    priority: "0.3",
    changefreq: "weekly",
  },
];

// Generate Sitemap Function
function generateSitemap() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${SITE_URL}${route.path === "/" ? "" : route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.resolve("./public");

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write sitemap to public directory
  fs.writeFileSync(path.resolve(publicDir, "sitemap.xml"), sitemapXml);

  console.log("Sitemap generated successfully!");
  console.log(`Sitemap saved to: ${path.resolve(publicDir, "sitemap.xml")}`);
}

// Run the generation
generateSitemap();

export default generateSitemap;
