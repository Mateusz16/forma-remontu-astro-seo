import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://renovation-demo.example.com",
  output: "static",
  trailingSlash: "always",
});
