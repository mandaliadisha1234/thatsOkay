import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = { title: "About Disha", description: "Meet Disha, an Organisational Psychologist and wellness & development practitioner." };

export default function About() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page"><div className="container hero-grid"><div><div className="eyebrow">Meet Disha</div><h1>The person behind That&apos;s Okay.</h1><p className="hero-sub">A Wellness coach & Strength assessment practitioner helping people and organisations navigate real-life and workplace challenges.</p></div><div className="hero-visual"><div className="hero-photo-placeholder">Replace with a natural portrait of Disha</div></div></div></section>
        <ScrollReveal>
<section className="section brand-section"><div className="container"><div className="eyebrow">Why That&apos;s Okay.?</div><h2 className="section-title">People don&apos;t need to be fixed.</h2><p className="section-copy">Sometimes we need space to understand where we are, the right tools to move forward and support that works for us.</p></div></section>
</ScrollReveal>
        <ScrollReveal>
<section className="section"><div className="container"><div className="eyebrow">Our values</div><h2 className="section-title">Confidentiality, Psychological safety and Inclusivity</h2></div></section>
</ScrollReveal>
      </main>
    </PageShell>
  );
}