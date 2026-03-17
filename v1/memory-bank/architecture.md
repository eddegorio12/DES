# System Architecture

## Project Structure

```
v1/
├── src/
│   ├── components/     # Reusable Astro components (Header, Footer, CTA blocks)
│   ├── content/        # Markdown content collections (page content, services)
│   ├── functions/      # Cloudflare Pages Functions (contact form endpoint)
│   ├── layouts/        # Base page layouts (metadata wrapper, structure)
│   ├── pages/          # Route-based page files (Home.astro, About.astro, etc.)
│   ├── scripts/        # JavaScript utilities (form validation, analytics)
│   └── styles/         # Global CSS (design tokens, base styles, utilities)
├── public/             # Static assets (images, fonts, favicon, robots.txt, sitemap.xml)
├── astro.config.mjs    # Astro configuration (content collections, integrations)
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration

Key Architectural Files:
- `src/styles/global.css` - Design system foundation (CSS custom properties, responsive breakpoints)
- `src/layouts/BaseLayout.astro` - Standard page wrapper with header/footer
- `src/content/config.ts` - Content collection schemas and validation
- `src/functions/contact.ts` - Serverless form handler (Resend + Turnstile)

## File Explanations

### Core Application Files

#### `astro.config.mjs`
Astro configuration file that defines:
- Content collections schema and validation
- Build settings and output configuration
- Integration with plugins (if any)
- Markdown extensions and options

#### `package.json`
Project metadata and dependencies including:
- Astro framework and core dependencies
- Development tools (TypeScript, ESLint, etc.)
- Build scripts (`dev`, `build`, `preview`)
- Version information and repository details

#### `tsconfig.json`
TypeScript configuration for type safety:
- Target JavaScript version (ES2020)
- Module resolution settings
- Path mapping for imports
- Type checking strictness level

### Source Directory Structure

#### `src/pages/`
Route-based page components that map to URLs:
- `index.astro` - Home page with hero, services overview, trust signals
- `about.astro` - About page with company information and mission
- `services/index.astro` - Services listing with all service summaries
- `services/[slug].astro` - Dynamic service detail pages using getStaticPaths()
- `contact.astro` - Contact page with form and company information
- `404.astro` - Not found page with navigation back to main content

#### `src/components/`
Reusable UI components:
- `Header.astro` - Global header with navigation and contact CTA
- `Footer.astro` - Global footer with company info and links
- `CTABlock.astro` - Reusable call-to-action block component
- (Future components can be added here for reusability)

#### `src/layouts/`
Page layout wrappers:
- `BaseLayout.astro` - Standard page wrapper with metadata, header, footer
- Provides consistent structure across all pages
- Handles SEO metadata and common page elements

#### `src/content/`
Content storage and data management:
- `pages/` - JSON files for Home, About, Contact page content
- `services/` - JSON files for all 8 service pages + manifest.json
- `data.ts` - Shared data lookup module for services
- Content is editable without code changes

#### `src/functions/`
Serverless functions for dynamic features:
- `api/contact.ts` - Contact form endpoint with validation and email delivery
- Handles POST requests, Turnstile verification, Resend integration
- Returns success/error responses to client

#### `src/styles/`
Global styling system:
- `global.css` - Comprehensive design system with CSS custom properties
- Includes typography, colors, spacing, responsive breakpoints
- Component-specific styles and utility classes

#### `src/scripts/`
Client-side JavaScript utilities:
- Form validation logic
- Interactive features (if added)
- Analytics and tracking (if implemented)

### Public Directory

#### `public/`
Static assets served directly:
- `favicon.ico` - Site favicon
- `robots.txt` - Search engine crawler instructions
- `sitemap.xml` - XML sitemap for SEO
- Images and other static media
- No processing by Astro build system

### Build Output

#### `dist/`
Production build output containing:
- Static HTML files for all pages
- Optimized CSS and JavaScript bundles
- Processed images and assets
- Ready for deployment to CDN or hosting service
```

## Site Map (v1)

- `/` - Home
- `/about` - About
- `/services` - Services index
- `/services/cable-tray-installation` - Service detail
- `/services/cable-pulling` - Service detail
- `/services/glanding-and-termination` - Service detail
- `/services/loop-check-pre-commissioning` - Service detail
- `/services/instrument-configuration-calibration` - Service detail
- `/services/inspection` - Service detail
- `/services/operation-support` - Service detail
- `/services/maintenance` - Service detail
- `/contact` - Contact

**Total**: 11 content pages (excluding 404)

## Technology Stack

- **Frontend**: Astro 6.x (static site generation, minimal JavaScript by default)
- **Styling**: Plain CSS (CSS custom properties, BEM-like naming, mobile-first)
- **Content**: Markdown files in Astro content collections (no CMS in v1)
- **Hosting**: Cloudflare Pages (global CDN, Git-based deployment)
- **Forms**: Cloudflare Pages Functions + Resend (email delivery) + Turnstile (spam protection)
- **DNS/SSL**: Cloudflare DNS (separate from hosting)

## Key Architectural Decisions

### Why Astro?
- Optimized for content-driven marketing sites
- Excellent SEO and Core Web Vitals out of the box
- Minimal runtime JavaScript → faster load times
- Simple enough for small site, scales if needed later

### Why No Database or CMS?
- v1 content changes occasionally, not daily
- Markdown collections provide version control, easy backup, no maintenance overhead
- Can add Sanity or other CMS in Phase 2 if non-technical editing needed

### Why One Serverless Function?
- Only dynamic feature is contact form submission
- Keeps site mostly static (more reliable, cheaper, faster)
- No always-on backend server required

### Why Plain CSS Over Tailwind?
- Simpler dependency tree
- Easier to understand and modify long-term
- All design needs fit comfortably in an 8KB stylesheet
- Can add utility framework later if the design system grows

## Content Organization

All content lives in `src/content/` as structured Markdown:
- `pages/` - Home, About, Contact pages (single entries)
- `services/` - One markdown file per service (8 total)

Each content collection has TypeScript schema validation to ensure required fields are present.

## Form Submission Flow

1. User fills contact form on `/contact`
2. Client-side validation runs (required fields, email format)
3. Cloudflare Turnstile token generated and attached
4. POST request to `/api/contact` (Pages Function)
5. Server validates Turnstile token with Cloudflare API
6. If valid, sends email via Resend API
7. Returns success/failure response to client
8. Client displays appropriate message

Environment variables (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `CONTACT_EMAIL`) stored in Cloudflare Pages config (never committed).

## SEO Strategy

- Unique `<title>` and `<meta description>` per page (set in page frontmatter)
- Logical heading hierarchy (one H1 per page, H2/H3 structure)
- Clean URLs (no file extensions, no parameters)
- Sitemap auto-generated by Astro (`/sitemap-index.xml`)
- `robots.txt` allows all crawlers, points to sitemap
- All images require `alt` text (enforced in content guidelines)

## Performance Approach

- All images optimized during build (Astro's built-in image optimization)
- Critical CSS inlined or loaded early
- Non-critical scripts use `client:load` or `client:idle` directives
- Prefetching for navigation links
- Static generation means instant page loads (no server-side rendering delays)

## Security Considerations

- Turnstile protects form from spam/bots (no user friction like CAPTCHA)
- Server-side validation ensures only valid submissions are processed
- Environment variables never exposed to client
- HTTPS enforced through Cloudflare (SSL/TLS termination)

## Scalability Notes

If v1 succeeds and we need to expand:
- Add content management: integrate Sanity or Contentful (keep Markdown as fallback)
- Add client portal: Next.js micro-frontend or separate app
- Add multi-language: Astro i18n support (content per locale)
- Add advanced analytics: Plausible or self-hosted alternatives
- Current architecture remains stable; expansions are additive.

## Deployment Pipeline

1. Push to `main` branch → Cloudflare Pages builds automatically
2. Build process: `npm run build` → static files in `dist/`
3. Pages deployment: `dist/` uploaded to global CDN
4. Preview deployments enabled for all PRs
5. Environment variables configured in Cloudflare dashboard
6. Custom domain configured with SSL auto-renewal

## Monitoring and Maintenance

- Cloudflare Pages provides build logs and deployment history
- Analytics via GA4 (client-side) + server logs from Resend (email deliveries)
- Form success rate tracked via Resend dashboard
- No database backups needed (content in Git)
- Rollback possible by redeploying previous commit

