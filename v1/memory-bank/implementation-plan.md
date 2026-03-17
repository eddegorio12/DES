# Implementation Plan
## DES Base Website (Astro + Plain CSS + Markdown Collections + Cloudflare Pages)

**Goal:** Build the base DES marketing website as a fast, SEO-friendly, low-maintenance product using Astro, plain CSS, Markdown content collections, Cloudflare Pages, one serverless form endpoint, Resend, and Cloudflare Turnstile.

**Scope of this plan:** Base product only.

Included in base product:
- Home page
- About page
- Services index page
- Individual service detail pages
- Contact page
- Global header/footer/navigation
- Contact form submission flow
- Basic SEO setup
- Mobile responsiveness
- Deployment to Cloudflare Pages

Excluded from this plan:
- Blog
- Case studies
- Testimonials system
- CMS dashboard
- Multi-language support
- Advanced analytics
- Client portal
- Careers system

---

## Phase 1: Align on the base product

### Step 1: Confirm the base site map
**Instruction:** Create the approved page list for v1: Home, About, Services, one page per core service, and Contact.

**Test:** Review the site map and confirm there are no extra pages beyond the approved v1 scope.

### Step 2: Confirm the core service list
**Instruction:** Freeze the initial service list that will be published in v1. Use the existing DES service categories already identified in the PRD.

**Test:** Verify that every approved service appears once in the list and that no duplicate or placeholder services remain.

### Step 3: Confirm the primary conversion goal
**Instruction:** Define the primary website action as “contact DES for quote / project discussion.” Treat all page design and content decisions as supporting that goal.

**Test:** Check that every planned page includes at least one clear path to the contact action.

### Step 4: Freeze v1 content sections
**Instruction:** Approve the exact content sections for each page before build work starts.
- Home: hero, service overview, why DES, CTA
- About: company overview, mission/values, capabilities, CTA
- Services index: service list with summaries
- Service detail pages: overview, scope, benefits, CTA
- Contact: contact details, form, CTA

**Test:** Confirm each page has a final approved section list and no unresolved placeholder sections.

---

## Phase 2: Set up the project foundation

### Step 5: Create the repository for the website
**Instruction:** Create one dedicated repository for the DES website and use a clean main branch strategy.

**Test:** Confirm the repository exists, is accessible to the team, and contains only website-related files.

### Step 6: Initialize the Astro project
**Instruction:** Set up a new Astro project as the base framework for the site.

**Test:** Start the local development server and confirm the default Astro site loads successfully in the browser.

### Step 7: Remove unused starter content
**Instruction:** Delete all default demo pages, sample posts, unused assets, and starter content that do not belong to DES.

**Test:** Confirm no starter/demo content appears anywhere in the site or file structure.

### Step 8: Define the project folder structure
**Instruction:** Organize the project into clear folders for pages, layouts, components, content, styles, public assets, and serverless logic.

**Test:** Review the folder tree and confirm each folder has one clear purpose with no ambiguous placement.

### Step 9: Set up the global style system
**Instruction:** Create one global stylesheet and define the base rules for typography, spacing, buttons, forms, containers, colors, and responsive breakpoints.

**Test:** Apply the global styles to a sample page and verify that text, buttons, spacing, and form fields render consistently.

### Step 10: Define reusable layout rules
**Instruction:** Establish the standard page layout pattern for header, main content area, CTA spacing, and footer.

**Test:** Open multiple pages and confirm the structure is visually consistent from page to page.

---

## Phase 3: Create the content model

### Step 11: Set up the page content source
**Instruction:** Store page content in structured Markdown files so the content can be edited without changing page templates.

**Test:** Update one Markdown page field and confirm the change appears correctly on the rendered page.

### Step 12: Set up the service content collection
**Instruction:** Create a structured content collection for services. Each service must have a title, short summary, slug, page heading, service overview, scope details, benefits, and CTA text.

**Test:** Add one complete service entry and confirm the site can read and display all required fields.

### Step 13: Create content validation rules
**Instruction:** Require all service entries to include the mandatory fields needed to render a complete service page.

**Test:** Intentionally remove one required field from a service entry and verify the content validation fails.

### Step 14: Add the initial DES content
**Instruction:** Populate the content files for Home, About, Contact, and all approved service entries using the approved PRD messaging.

**Test:** Review all content files and confirm that there are no lorem ipsum blocks, draft notes, or unresolved placeholders.

---

## Phase 4: Build the shared site structure

### Step 15: Build the site header
**Instruction:** Create the global header with DES branding, primary navigation, and a visible contact CTA.

**Test:** Visit every page and verify the header appears correctly and links to the correct destinations.

### Step 16: Build the site footer
**Instruction:** Create the global footer with company name, short description, contact details, quick links, and copyright.

**Test:** Visit every page and verify the footer is present, readable, and contains working links.

### Step 17: Build the global CTA block
**Instruction:** Create one reusable CTA block that can be inserted on Home, About, Services, service detail pages, and Contact.

**Test:** Add the CTA block to multiple pages and confirm the content and button styling remain consistent.

### Step 18: Build the base page layout component
**Instruction:** Create one reusable page layout that manages metadata, header, footer, and global spacing.

**Test:** Render at least three different pages with the layout and confirm they share the same structure without duplicated page wrapper logic.

---

## Phase 5: Build the page templates

### Step 19: Build the Home page template
**Instruction:** Create the Home page using the approved sections and ensure the hero clearly explains what DES does within the first screen.

**Test:** Open the page on desktop and mobile and confirm the value proposition and primary CTA are visible without confusion.

### Step 20: Build the About page template
**Instruction:** Create the About page template and present DES as a professional engineering services and manpower supply company.

**Test:** Review the page and confirm it contains all approved About sections in the correct order.

### Step 21: Build the Services index template
**Instruction:** Create a Services page that lists all core services with short summaries and links to their detail pages.

**Test:** Confirm every approved service appears once on the page and links to a live destination.

### Step 22: Build the service detail page template
**Instruction:** Create one reusable service detail template that renders individual service entries from the content collection.

**Test:** Open at least two different service pages and confirm both render from the same template with different content.

### Step 23: Build the Contact page template
**Instruction:** Create the Contact page with DES contact details, contact form, and clear contact CTA language.

**Test:** Review the page and confirm all required contact methods are visible and easy to use.

---

## Phase 6: Add navigation and routing behavior

### Step 24: Connect all internal links
**Instruction:** Link the header, footer, CTA blocks, Services page, and service cards so there are no dead ends in the site flow.

**Test:** Manually click through every internal link and confirm there are no broken routes.

### Step 25: Add active navigation state
**Instruction:** Show the current page state clearly in the header navigation so users know where they are.

**Test:** Visit each top-level page and verify the correct navigation item is highlighted.

### Step 26: Add a not-found page
**Instruction:** Create a simple 404 page that helps the visitor return to the Home page or Services page.

**Test:** Visit a non-existent URL and confirm the 404 page is displayed correctly.

---

## Phase 7: Apply responsive design

### Step 27: Define mobile-first layouts
**Instruction:** Design every page starting from the mobile layout, then expand to tablet and desktop.

**Test:** Review all pages at small-screen width and confirm there is no horizontal scrolling.

### Step 28: Adjust navigation for small screens
**Instruction:** Ensure the navigation remains usable on mobile and does not hide critical actions such as Contact.

**Test:** Use a mobile viewport and confirm navigation remains accessible and functional.

### Step 29: Check content readability at all sizes
**Instruction:** Tune spacing, text sizes, card widths, and button sizes so content remains readable across device sizes.

**Test:** Review Home, one service page, and Contact on mobile, tablet, and desktop and confirm readability is strong in all three cases.

---

## Phase 8: Add essential SEO foundations

### Step 30: Add page-level metadata support
**Instruction:** Ensure every page can define its own title tag and meta description.

**Test:** Inspect the rendered HTML for Home, About, one service page, and Contact and confirm each page has unique metadata.

### Step 31: Set the heading hierarchy
**Instruction:** Use one clear H1 per page and logical H2/H3 sections beneath it.

**Test:** Review the heading structure on each template and confirm there is no skipped or duplicated top-level heading misuse.

### Step 32: Create clean page URLs
**Instruction:** Use simple, readable URLs for all pages and services.

**Test:** Confirm the URLs are human-readable and do not include unnecessary parameters or file-like naming patterns.

### Step 33: Generate a sitemap
**Instruction:** Configure the site to generate a sitemap that includes all public pages.

**Test:** Open the generated sitemap and confirm it lists Home, About, Services, all service pages, and Contact.

### Step 34: Add a robots file
**Instruction:** Create a robots file appropriate for production crawling.

**Test:** Open the robots file in the browser and confirm it is present and readable.

### Step 35: Add image alt text rules
**Instruction:** Require meaningful alt text for all non-decorative images.

**Test:** Review all images used on the site and confirm each non-decorative image has appropriate alt text.

---

## Phase 9: Build the contact form flow

### Step 36: Define the contact form fields
**Instruction:** Use only the base required fields for v1: name, company, email, phone, service needed, and project details.

**Test:** Confirm all required fields appear on the page and are clearly labeled.

### Step 37: Add client-side input validation rules
**Instruction:** Require the form to block incomplete or obviously invalid submissions before the request is sent.

**Test:** Attempt to submit with missing required fields and confirm the submission is blocked with clear error messaging.

### Step 38: Add Cloudflare Turnstile protection
**Instruction:** Add Turnstile to the form so automated spam submissions are filtered before email delivery.

**Test:** Confirm the form will not submit unless Turnstile validation is completed successfully.

### Step 39: Create the serverless submission endpoint
**Instruction:** Build one Pages Function that receives the contact form submission, validates the request, verifies Turnstile, and forwards the message using Resend.

**Test:** Send a valid form submission in a non-production environment and confirm the endpoint accepts it and returns a success response.

### Step 40: Configure Resend delivery
**Instruction:** Set up Resend so contact submissions are delivered to the correct DES inbox.

**Test:** Submit a valid form and confirm the email arrives in the intended inbox with all expected fields.

### Step 41: Create success and error states
**Instruction:** Show clear success messaging after a valid submission and clear error messaging when submission fails.

**Test:** Trigger both a valid submission and an intentional failure case and confirm both messages are understandable.

### Step 42: Prevent duplicate rapid submissions
**Instruction:** Add a simple protection rule so the same user cannot accidentally submit the form multiple times in quick succession.

**Test:** Attempt repeated rapid submissions and confirm duplicate behavior is limited appropriately.

---

## Phase 10: Add production hardening

### Step 43: Set environment variables
**Instruction:** Store all email and anti-spam configuration values as environment variables rather than hard-coded values.

**Test:** Review the configuration and confirm secrets are not committed to the repository.

### Step 44: Add a noindex rule for non-production builds if needed
**Instruction:** Prevent staging or preview versions from being indexed by search engines.

**Test:** Inspect a preview deployment and confirm it is not configured like a public production crawl target.

### Step 45: Optimize media assets
**Instruction:** Compress and standardize all images before launch so page weight stays low.

**Test:** Review the final asset set and confirm there are no oversized images included by mistake.

### Step 46: Remove unused files and dependencies
**Instruction:** Delete anything not used by the base product before launch.

**Test:** Review the project and confirm there are no dead pages, unused components, or abandoned content files.

---

## Phase 11: Verify accessibility and usability

### Step 47: Test keyboard navigation
**Instruction:** Ensure all menus, links, buttons, and form fields are reachable and usable with keyboard-only navigation.

**Test:** Navigate the full site using only the keyboard and confirm all critical actions are accessible.

### Step 48: Verify form label clarity
**Instruction:** Ensure every form field has a clear visible label and understandable helper or error text when needed.

**Test:** Review the form visually and confirm no field relies only on placeholder text for meaning.

### Step 49: Check color contrast and button clarity
**Instruction:** Confirm text, buttons, links, and form states are visually clear and sufficiently distinct.

**Test:** Review all major page sections and confirm interface elements remain legible and easy to identify.

---

## Phase 12: Deploy and launch

### Step 50: Connect the repository to Cloudflare Pages
**Instruction:** Set up Cloudflare Pages to build and deploy the Astro site from the repository.

**Test:** Trigger a deployment and confirm the site builds successfully without manual intervention.

### Step 51: Configure the production domain
**Instruction:** Point the production domain to the Cloudflare-hosted site while preserving existing business-critical services such as email.

**Test:** Open the production domain and confirm the new site loads correctly over HTTPS.

### Step 52: Configure preview deployments
**Instruction:** Enable preview deployments so every major change can be reviewed before release.

**Test:** Open a preview build from a non-main branch and confirm it has a working review URL.

### Step 53: Add production environment variables
**Instruction:** Set all required production secrets and configuration values inside Cloudflare before launch.

**Test:** Confirm the production contact form works correctly after deployment.

### Step 54: Run the launch checklist
**Instruction:** Perform one final full-site review before announcing launch.

Launch checklist must include:
- all pages load
- no broken links
- metadata is present
- form works
- mobile layout works
- production domain resolves correctly
- no demo content remains

**Test:** Complete the checklist and record a pass/fail result for each item.

---

## Phase 13: Post-launch validation

### Step 55: Submit the sitemap to search tools
**Instruction:** Register the live site in the relevant search webmaster tools and submit the sitemap.

**Test:** Confirm the sitemap is accepted successfully.

### Step 56: Verify indexed page readiness
**Instruction:** Check that public pages are crawlable and not accidentally blocked.

**Test:** Inspect the live pages and confirm there are no unintended noindex or crawl-blocking settings.

### Step 57: Perform a real inquiry test
**Instruction:** Submit one real production inquiry through the live contact form and verify full end-to-end delivery.

**Test:** Confirm the production form shows success to the user and the message arrives in the DES inbox.

### Step 58: Confirm rollback readiness
**Instruction:** Ensure the team can quickly redeploy the previous stable version or revert a bad release.

**Test:** Review the deployment history and confirm a prior version can be restored.

---

## Definition of Done for Base Product

The base product is complete only when all of the following are true:
- Home, About, Services, service detail pages, and Contact are live
- All approved DES v1 content is present
- Navigation works across the full site
- The site is responsive on mobile and desktop
- Each page has basic SEO metadata
- The contact form is protected, validated, and delivers email successfully
- The site is deployed on Cloudflare Pages
- No placeholder/demo content remains
- A final end-to-end production test has passed

---

## Recommended Build Order Summary

1. Freeze site map and service scope
2. Create Astro project and folder structure
3. Define global styles and layout
4. Set up Markdown content and service collection
5. Build header, footer, layout, CTA block
6. Build Home, About, Services, service detail pages, Contact
7. Connect navigation and routes
8. Make the site responsive
9. Add metadata, sitemap, robots, and alt text discipline
10. Build and test contact form flow with Turnstile and Resend
11. Harden production configuration
12. Deploy to Cloudflare Pages
13. Run launch and post-launch validation
