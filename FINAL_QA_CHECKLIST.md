# FINAL_QA_CHECKLIST.md — Btechkers Sourcing Website

Status indicators:
- **PASS**: Implemented, verified, and functioning in code/build.
- **NEEDS CONFIGURATION**: Requires real client details (email, phone, images) before launch.
- **NEEDS MANUAL TEST**: Requires live manual network/browser testing by site owner after deployment.
- **NOT COMPLETED**: Reserved for items out of scope or deferred.

---

## 1. ROUTING & CORE NAVIGATION

| Test Item | Route | Status | Notes |
|-----------|-------|--------|-------|
| Homepage rendering | `/` | **PASS** | 13 complete sections, animations, trust bar, CTA |
| About Us page | `/about` | **PASS** | 4-stat grid, 5 regional experts, Surat hub, mission/vision |
| Services page | `/services` | **PASS** | 20 services, 4 categories, compliance disclaimer, FAQs |
| Industries page | `/industries` | **PASS** | 3 featured + 9 additional sectors, unlisted callout |
| Global Network page | `/global-network` | **PASS** | Interactive SVG map, pulse markers, regional profiles |
| Source From India page | `/source-from-india` | **PASS** | Manufacturing clusters, Gujarat advantage, verification |
| Trade Agreements section | `/source-from-india#trade-agreements` | **PASS** | 13 agreements, status filters, official links, disclaimer |
| Route alias redirect | `/why-source-from-india` | **PASS** | Correctly redirects to `/source-from-india` |
| Case Studies page | `/case-studies` | **PASS** | 2 documented B2B studies, confidentiality & NDA notice |
| Blog listing page | `/blog` | **PASS** | Featured article, search bar, category filter, 10 posts |
| Blog article pages | `/blog/:slug` | **PASS** | Markdown rendering, author, Article JSON-LD, related articles |
| Collaborate page | `/collaborate` | **PASS** | Dual pathways (Agents vs Manufacturers), Partner FAQs |
| Contact page | `/contact` | **PASS** | Two-column layout, WhatsApp CTA, 3-step process, FAQs |
| Privacy Policy | `/privacy-policy` | **PASS** | Data handling, FormSubmit, catalogue handling, user rights |
| Terms & Disclaimer | `/terms` | **PASS** | Sourcing scope, direct contracting, customs disclaimer |
| Confirmation page | `/thank-you` | **PASS** | Success state, transmission badge, next steps guide |
| 404 Fallback page | `/*` | **PASS** | Custom 404 UI with direct recovery buttons |
| Header navigation & dropdown | Site-wide | **PASS** | Desktop dropdown + accessible mobile slide drawer |
| Footer links & copyright | Site-wide | **PASS** | Dynamic year, social links, legal disclaimers, contact items |
| Scroll to top button | Site-wide | **PASS** | Appears after 400px scroll, smooth window scroll reset |
| Floating WhatsApp button | Site-wide | **PASS** | Route-aware prefilled messaging, non-overlapping FAB |

---

## 2. DESIGN & VISUAL CONSISTENCY

| Design Element | Target Standard | Status | Notes |
|----------------|-----------------|--------|-------|
| Primary Color Palette | `#3A506B` (Slate Blue), `#FFFFFF` | **PASS** | Consistently defined in `--color-slate-blue` |
| Secondary Palette | `#24384F`, `#EDF2F6`, `#F7F9FB`, `#667085`, `#182230` | **PASS** | Global CSS custom properties enforced |
| Typography | Headings: `Manrope`, Body: `Inter` | **PASS** | Google Fonts imported in `global.css` |
| Hero styling | Consistent `.page-hero` layout | **PASS** | Eyebrow, title, subtitle, breadcrumbs standard |
| Card radius & shadows | `var(--radius-md)`, `var(--shadow-md)` | **PASS** | Uniform card aesthetic across all pages |
| Section padding & spacing | `padding: 5rem 0` desktop, `3.5rem 0` mobile | **PASS** | Modular responsive container rules |
| Button styles | `.btn--primary`, `.btn--secondary`, `.btn--white` | **PASS** | Standardized padding, radius, hover transitions |
| Animation overhead | Restrained transitions, fade-in | **PASS** | Uses CSS hardware acceleration; no heavy libs |
| Reduced motion support | `prefers-reduced-motion: reduce` | **PASS** | Animations disable automatically for accessibility |

---

## 3. BUSINESS & CONTENT INTEGRITY

| Rule / Content Item | Specification | Status | Notes |
|---------------------|---------------|--------|-------|
| Connection claims | 10,000+ connections vs 2,000+ verified | **PASS** | Consistently distinguished site-wide |
| Factory audit locations | India and Indonesia only | **PASS** | Specifically qualified across all pages |
| China sourcing model | Remote sourcing via established contacts | **PASS** | No China office or resident inspectors claimed |
| Regional partners | Africa, UK, Germany, Poland, Croatia | **PASS** | Described as collaborative network partners |
| Customs broker status | Btechkers is NOT a licensed customs broker | **PASS** | Explicitly stated in Services, India, and Terms |
| Trade agreement disclaimers | Tariffs depend on HS codes & Rules of Origin | **PASS** | EFTA clearly distinguished from EU; no zero duty promises |
| Case study integrity | No fabricated names, ROI, or fake savings | **PASS** | Client names and formulas protected by NDAs |
| Pricing transparency | Customized per project; no fixed packages | **PASS** | Consistently stated across all service descriptions |
| Unlisted products | Legal tradable categories can be inquired | **PASS** | Featured callouts on Industries and FAQ sections |

---

## 4. FORMS & CONTACT FUNCTIONALITY

| Feature | Component | Status | Notes |
|---------|-----------|--------|-------|
| Buyer Form validation | `BuyerForm.jsx` | **PASS** | Required fields, email regex format validation |
| Supplier Form validation | `SupplierForm.jsx` | **PASS** | Required fields, business type, category selection |
| Optional PDF catalogue upload | `SupplierForm.jsx` | **PASS** | 5MB limit, PDF MIME/extension check, remove button |
| FormSubmit integration | Both forms | **PASS** | AJAX POST payload, honeypot spam protection |
| Demo mode safeguard | `site.js` check | **PASS** | Prevents dummy submissions to fictitious emails |
| Live email delivery test | FormSubmit API | **NEEDS MANUAL TEST** | Owner must perform once `CONTACT_EMAIL` is set |
| FormSubmit email activation | First submission | **NEEDS MANUAL TEST** | Requires clicking verification link in recipient inbox |
| Central contact configuration | `src/config/site.js` | **NEEDS CONFIGURATION** | Replace `'YOUR_EMAIL@example.com'`, phone, WhatsApp |
| Direct click-to-call links | `getTelLink()` | **PASS** | Centralized safe tel: protocol builder |
| Direct mailto links | `getMailtoLink()` | **PASS** | Centralized mailto: builder with prefilled subject |
| WhatsApp click-to-chat | `getWhatsAppLink()` | **PASS** | Route-specific encoded prefilled messages |

---

## 5. TECHNICAL SEO & METADATA

| SEO Item | Implementation | Status | Notes |
|----------|----------------|--------|-------|
| Unique Title Tags | `SEO.jsx` on all routes | **PASS** | Contextual titles with ` \| Btechkers` suffix |
| Unique Meta Descriptions | `SEO.jsx` on all routes | **PASS** | Tailored 140-160 character descriptions |
| Canonical URLs | `SEO.jsx` on all routes | **PASS** | Full `https://sourcing.btechkers.com` origin |
| Open Graph tags | `og:title`, `og:image`, `og:url` | **PASS** | Standard Open Graph and Twitter Card tags |
| Organization Schema | JSON-LD in `SEO.jsx` | **PASS** | Valid schema with logo, contactPoint, sameAs |
| Article Schema | JSON-LD in `SEO.jsx` | **PASS** | Injected on all 10 blog post detail pages |
| BreadcrumbList Schema | JSON-LD in `SEO.jsx` | **PASS** | Injected on inner pages with breadcrumbs |
| Search engine robots rules | `public/robots.txt` | **PASS** | Allows all crawlers, points to sitemap.xml |
| XML Sitemap | `public/sitemap.xml` | **PASS** | 14 canonical pages + 10 static blog articles |
| Heading Hierarchy | `H1` -> `H2` -> `H3` | **PASS** | Single semantic H1 per page, structured subtitles |
| Image Alt Text | `ImageWithFallback.jsx` | **PASS** | Descriptive alt attributes across all pages |

---

## 6. ASSETS & GRAPHICS

| Asset Item | Path / Location | Status | Notes |
|------------|-----------------|--------|-------|
| Central Asset Registry | `src/config/assets.js` | **PASS** | Single source of truth for all image paths |
| Image Fallback Handling | `ImageWithFallback.jsx` | **PASS** | Renders neutral icon if file missing; no broken UI |
| Official Logo Preservation | `public/images/branding/` | **PASS** | Logo component preserved with text fallback |
| Two About Profile Cards | `src/config/assets.js` | **NEEDS CONFIGURATION** | Ready for real photos: `aboutCardOne`, `aboutCardTwo` |
| Real Team & Location Photos | `public/images/` | **NEEDS CONFIGURATION** | Add production photos before public launch |

---

## 7. RESPONSIVENESS & ACCESSIBILITY

| Viewport / Test | Breakpoint | Status | Notes |
|-----------------|------------|--------|-------|
| Small mobile | 320px – 375px | **PASS** | No horizontal overflow; responsive typography |
| Large mobile | 414px – 480px | **PASS** | Full-width forms, stacked grids, mobile nav |
| Tablet | 768px – 1024px | **PASS** | 2-column grids, readable navigation |
| Desktop & Wide screens | 1200px – 1440px | **PASS** | Max width constrained containers (`--container-max`) |
| Interactive Map on Mobile | `< 768px` | **PASS** | SVG map gracefully collapses to card selector |
| Floating WhatsApp Placement | Mobile vs Desktop | **PASS** | 48px round FAB on mobile, pill on desktop |
| Keyboard accessibility | `Tab` & `Enter` | **PASS** | Visible focus states, aria-labels, escape handlers |
| Form accessibility | `<label htmlFor>` | **PASS** | Explicit labels, error descriptions, ARIA attributes |

---

## 8. BUILD & DEPLOYMENT PREPARATION

| Item | Requirement | Status | Notes |
|------|-------------|--------|-------|
| Production Build | `npm run build` | **PASS** | Vite compiles in ~15s, 0 errors, gzip optimized |
| SPA Fallback Rewrite | `public/_redirects` | **PASS** | `/*  /index.html  200` for Netlify/static servers |
| Subdomain Isolation | `sourcing.btechkers.com` | **PASS** | Independent from main `btechkers.com` domain |
| Hosting Documentation | `PROJECT_SETUP.md` | **PASS** | Full Netlify, Vercel, cPanel, Nginx guides provided |

---

## SUMMARY OF REQUIRED ACTIONS BEFORE LAUNCH

1. **`NEEDS CONFIGURATION`**: Edit `src/config/site.js` to replace email, phone, and WhatsApp placeholders with genuine company contact info.
2. **`NEEDS CONFIGURATION`**: Add real brand photos into `public/images/` and update `src/config/assets.js`.
3. **`NEEDS MANUAL TEST`**: Submit a live test on `/contact` and click the FormSubmit activation link in your email.
4. **`NEEDS MANUAL TEST`**: Point DNS CNAME for `sourcing` to your web host and confirm SSL certification.
