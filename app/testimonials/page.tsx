import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";
import { testimonials } from "./data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Experiences shared by people and organisations who have worked with That’s Okay.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container">
            <div className="eyebrow">Testimonials</div>
            <h1>Our Client Experiences</h1>
            <p className="hero-sub">Hear from the people and organisations we’ve supported as they share their experiences of working with That’s Okay.</p>
          </div>
        </section>

        <ScrollReveal>
          <section className="section">
            <div className="container">
              {testimonials.length ? (
                <div className="testimonial-grid">
                  {testimonials.map((item, index) => (
                    <blockquote className="testimonial-card" key={`${item.name}-${index}`}>
                      <div className="testimonial-mark">“</div>
                      <p>{item.quote}</p>
                      <footer><strong>{item.name}</strong>{item.context && <span>{item.context}</span>}</footer>
                    </blockquote>
                  ))}
                </div>
              ) : (
                <div className="empty-testimonials">
                  <div className="eyebrow">Coming soon</div>
                  <h2>The first testimonials will appear here soon.</h2>
                  <p>We're building this collection carefully, with permission from the people who choose to share their experiences.</p>
                </div>
              )}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}
