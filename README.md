# Forma Remontu — portfolio demo

Statyczny projekt demonstracyjny strony lokalnej firmy remontowej. „Forma Remontu” jest fikcyjną marką, dane kontaktowe korzystają z wartości przykładowych, a miejsca na fotografie wypełnia jeden neutralny placeholder. Projekt nie przedstawia realizacji ani oferty istniejącego wykonawcy.

## Uruchomienie

```bash
npm install
npm run dev
```

## Kontrola jakości

```bash
npm run build
npm run verify
```

`npm run build` wykonuje kontrolę Astro/TypeScript i generuje statyczny serwis. `npm run verify` sprawdza wynikowy HTML, metadane, canonicale, JSON-LD, sitemapę, reguły `noindex` i linki wewnętrzne.

## Cloudflare Pages

Projekt nie wymaga adaptera ani funkcji serwerowych. W panelu Cloudflare Pages ustaw:

- framework preset: `Astro`;
- build command: `npm run build`;
- build output directory: `dist`;
- Node.js: `22.12.0` lub nowszy;
- zmienną `PUBLIC_SITE_URL`: pełny publiczny adres podglądu, np. `https://nazwa-projektu.pages.dev`.

Po pierwszym przydzieleniu adresu `pages.dev` ustaw `PUBLIC_SITE_URL` i uruchom ponowny deployment, aby canonicale i sitemap korzystały z właściwego hosta. Plik `wrangler.toml` wskazuje ten sam katalog wyjściowy dla wdrożeń wykonywanych przez Wrangler.

Wersja demonstracyjna jest celowo wyłączona z indeksowania przez meta robots, `robots.txt` oraz nagłówek `X-Robots-Tag` w `public/_headers`. Przed przekształceniem projektu w prawdziwy serwis trzeba świadomie usunąć te trzy blokady i podać zweryfikowane dane firmy.

## Najważniejsze miejsca

- `src/data/site.ts` — centralne dane fikcyjnej marki, usługi i galerie.
- `src/layouts/BaseLayout.astro` — metadane, canonicale i dane strukturalne.
- `src/pages/oferta/[slug].astro` — wspólny wzorzec 13 stron usługowych.
- `src/pages/galeria/[slug].astro` — wspólny wzorzec 4 galerii.
- `src/styles/` — tokeny oraz globalny system wizualny.
- `src/assets/project-photo-placeholder.svg` — wspólny placeholder wszystkich zdjęć realizacji.
- `public/_headers` — nagłówki bezpieczeństwa, cache zasobów i blokada indeksowania.

## Status

To gotowy do statycznej publikacji podgląd portfolio, nie serwis produkcyjny. Telefon, poczta i adres są nieaktywne lub przykładowe; formularz, analityka i integracje marketingowe nie są uruchomione.
