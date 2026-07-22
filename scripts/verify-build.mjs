import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { relative } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const errors = [];
const siteOrigin = (process.env.PUBLIC_SITE_URL ?? "https://renovation-demo.example.com").replace(/\/$/, "");

const collect = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
    if (entry.isDirectory()) files.push(...await collect(path));
    else files.push(path);
  }
  return files;
};

const files = await collect(dist);
const htmlFiles = files.filter((file) => file.pathname.endsWith(".html"));
const titles = new Map();
const descriptions = new Map();

const routeFromFile = (file) => {
  const path = relative(new URL(dist).pathname, file.pathname);
  if (path === "index.html") return "/";
  if (path === "404.html") return "/404/";
  return `/${path.replace(/\/index\.html$/, "/")}`;
};

const addUnique = (map, value, route, label) => {
  if (!value) return;
  if (map.has(value)) errors.push(`${route}: duplicate ${label} shared with ${map.get(value)}`);
  map.set(value, route);
};

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = routeFromFile(file);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim() ?? "";
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? "";
  const lang = html.match(/<html lang="([^"]*)"/i)?.[1] ?? "";
  const robotsMeta = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? "";
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];

  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing description`);
  if (lang !== "pl") errors.push(`${route}: expected lang=pl, found ${lang || "missing"}`);
  if (!canonical.startsWith(`${siteOrigin}/`)) errors.push(`${route}: invalid canonical ${canonical || "missing"}`);
  if (!robotsMeta.includes("noindex")) errors.push(`${route}: demo page must include noindex`);
  if (/techbud|tailbud|693 471 479|biuro@techbudlublin\.pl/i.test(html)) errors.push(`${route}: legacy client reference found`);
  if (jsonLdBlocks.length !== 1) errors.push(`${route}: expected one JSON-LD block, found ${jsonLdBlocks.length}`);
  for (const block of jsonLdBlocks) {
    try { JSON.parse(block[1]); } catch { errors.push(`${route}: invalid JSON-LD`); }
  }

  if (route !== "/404/") {
    addUnique(titles, title, route, "title");
    addUnique(descriptions, description, route, "description");
  }

  for (const match of html.matchAll(/href="([^"]+)"/gi)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/#")) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = clean.endsWith("/")
      ? new URL(`.${clean}index.html`, dist)
      : new URL(`.${clean}`, dist);
    try { await access(target, constants.F_OK); }
    catch { errors.push(`${route}: broken internal link ${href}`); }
  }
}

const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== 21) errors.push(`sitemap: expected 21 URLs, found ${sitemapUrls.length}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push("sitemap: duplicate URLs");
if (sitemapUrls.some((url) => !url.startsWith(`${siteOrigin}/`))) errors.push("sitemap: URL outside configured demo origin");

const robots = await readFile(new URL("robots.txt", dist), "utf8");
if (!robots.includes("Disallow: /")) errors.push("robots: demo must disallow crawling");

const headers = await readFile(new URL("_headers", dist), "utf8");
if (!headers.includes("X-Robots-Tag: noindex, nofollow, noarchive")) errors.push("headers: missing X-Robots-Tag noindex policy");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({
    htmlPages: htmlFiles.length,
    sitemapUrls: sitemapUrls.length,
    uniqueTitles: titles.size,
    uniqueDescriptions: descriptions.size,
    internalLinks: "ok",
    canonicals: siteOrigin,
    indexing: "blocked for demo",
    jsonLd: "valid",
  }, null, 2));
}
