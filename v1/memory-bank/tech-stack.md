# Tech Stack Recommendation for the DES Website PRD

## Simplest Yet Most Robust Stack
**Astro + plain CSS + Markdown content collections + Cloudflare Pages + Cloudflare DNS + one Cloudflare Pages Function + Resend + Cloudflare Turnstile**

This is my strongest recommendation if the goal is to keep the DES site:
- simple
- cheap
- fast
- SEO-friendly
- easy to host
- hard to break

It avoids the usual complexity traps:
- no database
- no WordPress plugin maintenance
- no heavy frontend app framework
- no custom backend server
- no always-on VPS
- no paid CMS required on day one

---

## Final Recommendation in One Line

**Astro + plain CSS + Markdown content collections + Cloudflare Pages + Cloudflare DNS + one Pages Function for the contact form + Resend + Turnstile**

---

## Why this is the best answer to the “simplest yet robust” challenge

### 1. Astro
Use **Astro** as the site framework.

Why:
- built for content-driven websites like company, marketing, and service websites
- generates fast pages with minimal JavaScript by default
- excellent for SEO and Core Web Vitals
- simpler than using a full app framework like Next.js for a brochure/lead-gen site

Astro gives enough structure to build a professional site without the overhead of a more app-like stack.

### 2. Plain CSS
Use **plain CSS** (or CSS modules) instead of Tailwind for version 1.

Why:
- fewer dependencies
- less tooling
- less lock-in
- easier to understand later
- enough for a small B2B service website

For DES, the design system is not complex enough to require a utility-first framework unless the build grows significantly.

### 3. Markdown Content Collections
Use **Astro content collections with Markdown** for service pages, FAQs, and reusable content.

Why:
- no CMS cost
- no admin panel to maintain
- structured content with validation
- very reliable and version-controlled
- easy to back up

This is the simplest robust content setup if updates are occasional.

### 4. Cloudflare Pages
Use **Cloudflare Pages** for hosting.

Why:
- very low cost
- global CDN
- strong reliability
- easy Git-based deployment
- good fit for static websites

### 5. Cloudflare DNS
Use **Cloudflare DNS** even if the domain remains at GoDaddy initially.

Why:
- better DNS management
- free SSL/CDN/security benefits through Cloudflare
- easier long-term setup than staying fully inside GoDaddy hosting

### 6. One Cloudflare Pages Function
Use **one simple serverless function** only for the contact form.

Why:
- keeps the site mostly static
- no separate backend server needed
- only dynamic feature is form submission
- easy to maintain

### 7. Resend
Use **Resend** to send contact-form emails.

Why:
- reliable transactional email delivery
- simple integration
- better than trying to send mail directly from shared hosting

### 8. Cloudflare Turnstile
Use **Turnstile** to protect the contact form.

Why:
- lightweight spam protection
- better user experience than old-style CAPTCHA
- free and easy to add

---

## Why I Removed Other Layers

### No CMS in v1
A CMS sounds convenient, but it adds cost, maintenance, auth, schemas, and another point of failure.

For DES, the content likely changes occasionally, not daily. That means Markdown is the cleaner starting point.

If you later want non-technical editing, you can add Sanity in phase 2 without rebuilding everything.

### No Next.js
Next.js is excellent, but it is more framework than this site needs.

Use it only if DES later adds:
- a client portal
- dashboards
- authenticated areas
- complex dynamic content

### No WordPress as the primary recommendation
WordPress is easy to find developers for, but it is not the simplest robust stack in the long run because it usually means:
- plugin updates
- theme issues
- performance tuning
- more security maintenance

### No database
This site does not need one.

A company website with service pages and a contact form should stay static for maximum reliability and lower cost.

---

## Best Practical Architecture

### Frontend
- Astro
- plain CSS

### Content
- Markdown files in Astro content collections

### Hosting
- Cloudflare Pages

### DNS / security / SSL
- Cloudflare DNS

### Contact form
- Cloudflare Pages Function
- Resend
- Cloudflare Turnstile

### Analytics
- Google Analytics 4
- Google Search Console
- optional Microsoft Clarity

---

## Why this stack is robust

This setup is robust because almost everything is static.

That means:
- fewer runtime failures
- fewer attack surfaces
- better performance
- lower hosting cost
- easier backup and recovery
- easier migration later

If something breaks, there are very few moving parts to inspect.

---

## Cheapest Migration Path from GoDaddy

### Recommended path
1. keep the domain at GoDaddy for now
2. move DNS to Cloudflare or point records as needed
3. rebuild the site in Astro
4. deploy on Cloudflare Pages
5. replace the current contact flow with Pages Function + Resend + Turnstile

This gives you the savings first without forcing a risky all-at-once migration.

### Later optional step
Transfer the domain from GoDaddy to Cloudflare Registrar or another cheaper registrar after the new site is stable.

---

## Best Answer

If you want the **simplest yet most robust** stack possible for the DES PRD, I recommend:

# Astro + plain CSS + Markdown content collections + Cloudflare Pages + Cloudflare DNS + one Pages Function + Resend + Turnstile

That is the minimum stack I would confidently use for a professional B2B services website in 2026.
