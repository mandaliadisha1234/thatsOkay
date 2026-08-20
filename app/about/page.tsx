import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About That’s Okay.",
  description: "The idea, values and approach behind That’s Okay.",
};

export default function About() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container">
            <div className="eyebrow">Why That&apos;s Okay.?</div>
            <h1>People don&apos;t need to be fixed.</h1>
            <p className="hero-sub">
              That&apos;s Okay brings psychology, wellbeing and development together to help
              people and organisations understand themselves, find practical ways
              forward and create healthier ways of living and working.
            </p>
          </div>
        </section>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container">
              <div className="eyebrow">The idea behind That&apos;s Okay.</div>
              <h2 className="section-title">Start where you are.</h2>
              <p className="section-copy">
                That&apos;s Okay brings psychology, wellbeing and development together to help
                people and organisations understand themselves, find practical ways
                forward and create healthier ways of living and working.
              </p>

              <div className="three-grid">
                <article className="card">
                  <h3>Psychology-informed</h3>
                  <p>Grounded in psychological knowledge and an understanding of people, behaviour and context.</p>
                </article>
                <article className="card">
                  <h3>Human-centred</h3>
                  <p>People are more than a problem, diagnosis, job title or performance measure.</p>
                </article>
                <article className="card">
                  <h3>Practical</h3>
                  <p>Insight is useful when it can become a strategy, tool or change you can actually use.</p>
                </article>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section">
            <div className="container">
              <div className="eyebrow">Our values</div>
              <h2 className="section-title">Confidentiality, Psychological safety and Inclusivity</h2>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section about-link-section">
            <div className="container">
              <div className="eyebrow">Meet Disha</div>
              <h2 className="section-title">The person behind That&apos;s Okay.</h2>
              <p className="section-copy">
                A Wellness coach & Strength assessment practitioner helping people and organisations navigate real-life and workplace challenges.
              </p>
              <Link className="pill-link" href="/about/disha">About Disha</Link>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}
