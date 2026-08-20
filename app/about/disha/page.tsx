import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Disha",
  description: "Meet Disha, an Organisational Psychologist and wellness & development practitioner.",
};

export default function AboutDisha() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Meet Disha</div>
              <h1>The person behind That&apos;s Okay.</h1>
              <p className="hero-sub">A Wellness coach & Strength assessment practitioner helping people and organisations navigate real-life and workplace challenges.</p>
            </div>
            <div className="hero-visual image-frame">
              <Image
                src="/images/disha-hero.jpg"
                alt="Disha portrait"
                width={800}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
          </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container about-grid about-disha-grid">
              <div className="about-photo">
                <Image
                  src="/images/disha-about.jpg"
                  alt="Disha portrait"
                  width={800}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div>
                <div className="eyebrow">About Disha</div>
                <h2 className="section-title">The person behind That&apos;s Okay.</h2>
                <p className="section-copy">
                  Disha is an Organisational Psychologist, Wellness coach & Strength assessment practitioner
                  bringing together psychology, coaching and practical tools to help people and
                  organisations navigate real-life and workplace challenges.
                </p>
                <div className="stats">
                  <div className="stat"><strong>12+</strong><span>years experience</span></div>
                  <div className="stat"><strong>8+</strong><span>years working in Ireland</span></div>
                  <div className="stat"><strong>MSc</strong><span>Work & Organisational Psychology</span></div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section">
            <div className="container">
              <div className="eyebrow">Why That&apos;s Okay.?</div>
              <h2 className="section-title">People don&apos;t need to be fixed.</h2>
              <p className="section-copy">Sometimes we need space to understand where we are, the right tools to move forward and support that works for us.</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container">
              <div className="eyebrow">Our values</div>
              <h2 className="section-title">Confidentiality, Psychological safety and Inclusivity</h2>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}