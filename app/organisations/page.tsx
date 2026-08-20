import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = { title: "Support for Organisations", description: "Psychology-informed workplace wellbeing, neurodiversity, leadership and team development." };

export default function Organisations() {
  const pillars = [
    ["Workplace Wellbeing", "Helping organisations create healthier and more sustainable working environments."],
    ["Neurodiversity & Inclusion", "Helping organisations move from awareness towards genuinely neuroinclusive workplaces."],
    ["Leadership & People Development", "Developing managers and leaders to support people and performance effectively."],
    ["Teams & Culture", "Helping teams build healthier ways of communicating, collaborating and working together."],
  ];

  return (
    <PageShell>
      <main>
        <section className="hero hero-page"><div className="container">
          <div className="eyebrow">For Organisations</div>
          <h1>Building healthier, more inclusive and people-centred workplaces.</h1>
          <p className="hero-sub">Psychology-informed support for organisations, leaders and teams.</p>
        </div></section>

        <ScrollReveal>
<section className="section brand-section"><div className="container">
          <div className="eyebrow">How we can help</div><h2 className="section-title">People are at the heart of every organisation.</h2>
          <div className="four-grid">{pillars.map(([t,b])=><article className="card" key={t}><h3>{t}</h3><p>{b}</p></article>)}</div>
        </div></section>
</ScrollReveal>

        <ScrollReveal>
<section className="section"><div className="container">
          <div className="eyebrow">Ways we work</div><h2 className="section-title">From a focused workshop to longer-term development.</h2>
          <div className="four-grid">{["Training & Workshops","Coaching","Programmes","Strengths Assessment for Team Members"].map((t)=><article className="card" key={t}><h3>{t}</h3><p></p></article>)}</div>
        </div></section>
</ScrollReveal>

        <ScrollReveal>
<section className="section brand-section"><div className="container">
          <div className="eyebrow">Our approach</div><h2 className="section-title">Understand. Design. Deliver. Develop.</h2>
          <div className="four-grid">{[
            ["01","Understand","Start with your organisation, people and context."],
            ["02","Design","Build an approach suited to your needs."],
            ["03","Deliver","Training, workshops, coaching or consulting."],
            ["04","Develop","Build sustainable capability rather than a one-off intervention."]
          ].map(([n,t,b])=><article className="card" key={n}><div className="eyebrow">{n}</div><h3>{t}</h3><p>{b}</p></article>)}</div>
        </div></section>
</ScrollReveal>
      </main>
    </PageShell>
  );
}