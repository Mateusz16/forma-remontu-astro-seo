import type { APIRoute } from "astro";
import { company, galleryGroups, services } from "@/data/site";

const staticPaths = ["/", "/o-nas/", "/galeria/", "/kontakt/"];
const paths = [
  ...staticPaths,
  ...services.map((service) => `/oferta/${service.slug}/`),
  ...galleryGroups.map((gallery) => `/galeria/${gallery.slug}/`),
];

export const GET: APIRoute = () => {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, company.domain).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
