import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = { title: "Resources", description: "Resources to help you navigate life,work and wellbeing." };

export default function Resources() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page"><div className="container"><div className="eyebrow">Resources</div><h2>Resources to help you navigate life, work and wellbeing.</h2></div></section>
        <ScrollReveal>
<section className="section brand-section"><div className="container"><div className="three-grid">
          {["Articles","Events & Workshops"].map((t)=><article className="card" key={t}><h3>{t}</h3><p>Coming soon.</p></article>)}
        </div></div></section>
</ScrollReveal>
      </main>
    </PageShell>
  );
}