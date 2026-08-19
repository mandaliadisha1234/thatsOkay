# That's Okay. — Website V3 polish

This iteration keeps the existing brand direction and adds a production-focused polish pass.

## Included

- Fixed apostrophe/HTML-entity bugs inside JavaScript strings.
- Added a reusable responsive header with accessible mobile navigation.
- Added a reusable global footer to every page.
- Added page-level SEO metadata and Open Graph defaults.
- Added hover/focus interaction polish across buttons, cards, pathways and service blocks.
- Added subtle organic motion to the hero, decorative shapes, logo mark and image placeholders.
- Added scroll reveal motion with `prefers-reduced-motion` support.
- Improved mobile navigation and responsive spacing.
- Added a more polished visual treatment without introducing a new animation dependency.

## Recommended next product/content pass

1. Replace Disha image placeholders with real photography.
2. Add dedicated service detail pages for individual and organisation offerings.
3. Replace “Coming soon” resources with the first useful articles/guides.
4. Add a real enquiry form and confirmation flow.
5. Add Privacy Policy, Cookie Policy and Accessibility pages before analytics/cookies go live.
6. Add favicon/brand assets and a social sharing image.
7. Add sitemap/robots configuration and structured data for the professional service.
8. Clarify service outcomes, target problems and engagement formats on the organisation page.
9. Add pricing/“what to expect” information where commercially appropriate.
10. Run a final accessibility, Lighthouse and cross-browser QA pass after real imagery/content is added.

## Validation note

The project dependencies were not available in the execution environment, and `npm install` could not complete within the available execution window. The source was therefore checked for the identified JSX/TypeScript issues, but a full `next build` should be run locally/CI after dependencies are installed.


## Contact & testimonials setup

The contact form and testimonial submission form use Resend's email API from server-side Next.js route handlers. Add `RESEND_API_KEY` and a verified `RESEND_FROM_EMAIL` to your environment variables. Submissions are sent to `connect@thatsokay.ie`; the visitor's email is set as the reply-to address.

The testimonial workflow is intentionally moderated: submissions are emailed to `connect@thatsokay.ie` and are **not published automatically**. After reviewing a submission and receiving/confirming permission, add the approved testimonial to `app/testimonials/data.ts`.

`TESTIMONIAL_ACCESS_CODE` is optional. If set, the submission endpoint requires that code; if blank, anyone with the submission URL can submit. This provides a simple gate without exposing an admin password in client code.

Resend's current Next.js guidance supports App Router route handlers and server-side API keys. See the official guide: https://resend.com/nextjs
