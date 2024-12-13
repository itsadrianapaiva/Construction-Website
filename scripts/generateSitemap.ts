import * as fs from "fs";
import * as path from "path";


const SITE_URL = "https://www.dreammakersconstruction.ca"; 


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

  
  const publicDir = path.resolve("./public");

 
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

 
  fs.writeFileSync(path.resolve(publicDir, "sitemap.xml"), sitemapXml);

  console.log("Sitemap generated successfully!");
  console.log(`Sitemap saved to: ${path.resolve(publicDir, "sitemap.xml")}`);
}


generateSitemap();

export default generateSitemap;
