# AGENTS.md - Guidelines for Agentic Coding in DES Website Repository

## Overview
This repository contains the DES Engineering Services website built with Astro, plain CSS, and Markdown content collections. Follow these guidelines when working with this codebase.

## Commands

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing
```bash
# Run all tests
npm test

# Run a single test (replace 'test-name' with actual test)
npm test -- -t "test-name"

# Run tests in watch mode
npm run test:watch
```

### Linting
```bash
# Run ESLint
npm run lint

# Fix linting errors
npm run lint:fix

# Run Prettier
npm run format

# Check formatting
npm run format:check
```

### Deployment
```bash
# Deploy to Cloudflare Pages
npm run deploy

# Deploy preview
npm run deploy:preview
```

## Code Style Guidelines

### Modularity Principle
- Emphasize modularity by splitting functionality into multiple, focused files
- Discourage monolithic approaches with one giant file containing all logic
- Each component, utility, or function should have a single, clear responsibility
- Prefer composition over inheritance when building complex UI elements
- Keep files under 200 lines when possible for better maintainability
- Group related functionality but avoid over-engineering simple utilities

### File Organization
- Components: `src/components/`
- Pages: `src/pages/`
- Content collections: `src/content/`
- Styles: `src/styles/`
- Scripts: `src/scripts/`
- Assets: `public/`

### Astro Components
- Use `.astro` extension for components
- Prefer client:load, client:idle, client:visible, client:only, client:media directives appropriately
- Export constants and functions in code fences (`---`)
- Use `define:vars` for component props when needed

### CSS/Styling
- Use plain CSS (not Tailwind) as specified in tech stack
- Follow BEM-like naming: `block-element--modifier`
- Keep styles scoped to components when possible
- Use CSS custom properties for theme values
- Mobile-first approach in media queries

### JavaScript/TypeScript
- Use `const` and `let`, never `var`
- Prefer arrow functions for callbacks
- Template literals for string interpolation
- Destructuring for objects/arrays
- Async/await over .then() chains
- TypeScript for logic files (.ts), JSDoc for .js when needed
- Export only what's needed

### Markdown Content
- Frontmatter for metadata (title, description, date, etc.)
- Proper heading hierarchy (H1 once per page, then H2, H3, etc.)
- Alt text for all images
- Consistent formatting for service pages
- Use relative links for internal navigation

### Import Statements
- Group imports: external, internal, relative
- Alphabetize within groups
- No unused imports
- Relative imports with `./` or `../`
- Astro components: `import Component from '@/components/Component.astro'`
- Content collections: `import { getCollection } from 'astro:content'`

### Naming Conventions
- Components: PascalCase (e.g., `Header.astro`)
- Functions/variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case
- CSS classes: kebab-case
- Content collection names: singular (e.g., `service` not `services`)

### Error Handling
- Try/catch for async operations
- Provide user-friendly error messages
- Log errors appropriately in development
- Fail gracefully with fallback UI
- Validate form inputs both client and server side

### Accessibility
- Semantic HTML elements
- Proper alt text for images
- Sufficient color contrast
- Keyboard navigable interfaces
- ARIA labels when needed
- Focus management for modals/dialogs

### Performance
- Optimize images (use `<picture>` with WebP fallbacks)
- Lazy load below-the-fold content
- Minimize render-blocking resources
- Use `client:visible` for non-critical components
- Leverage Astro's built-in optimizations

## Cloudflare Specific
- Pages Functions in `src/functions/`
- Environment variables in `.dev.vars`
- KV namespace bindings in wrangler.toml
- Turnstile sitekey/secret in environment variables

## Content Guidelines
- Follow PRD messaging principles
- Professional, clear, confident tone
- Lead with what DES does
- Connect services to client outcomes
- Include location relevance naturally
- Proof-oriented statements over promotional

## SEO Best Practices
- Unique title tag and meta description per page
- Proper H1/H2/H3 hierarchy
- Optimized image alt text
- Clean, descriptive URLs
- Internal linking between related pages
- Schema markup where relevant (Organization, LocalBusiness, Service)

## Trust Signals (from PRD)
- Registered company status
- Years of experience
- Team expertise
- Project types served
- Industries served
- Safety and quality commitments
- Response time promises
- Client/testimonials when available

## Contact Form Handling
- Use Cloudflare Pages Function for form processing
- Resend for email delivery
- Turnstile for spam protection
- Validate all fields (name, email, phone, service, message)
- Provide clear success/error states
- Respect user privacy and data protection

## When in Doubt
1. Refer to the tech-stack.md for architectural decisions
2. Follow the product-requirements-document.md for content and UX guidance
3. Maintain consistency with existing code patterns
4. Prioritize simplicity, reliability, and performance

## Memory Bank Documentation
- Always read `memory-bank/@architecture.md` before writing any code to understand the current architecture and database schema
- Always read `memory-bank/@game-design-document.md` before writing any code to understand design intentions
- After adding a major feature or completing a milestone, update `memory-bank/@architecture.md` with the latest changes
- These files represent the single source of truth for system architecture and design