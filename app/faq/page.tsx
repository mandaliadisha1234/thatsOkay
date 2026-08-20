import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about That’s Okay. services and support.",
};

const faqs = [
  ["Who is That’s Okay. for?", "That’s Okay. supports people and organisations with psychology-informed wellbeing, development and workplace support."],
  ["What can I get support with?", "Support includes wellbeing, life & relationships, career & work, and neurodivergent coaching."],
  ["What services are available for individuals?", "Individual support includes 1-to-1 coaching and Strength Profile Assessment, alongside support across wellbeing, life, relationships, career and work."],
  ["What is Strength Profile Assessment?", "Strength Profile Assessment helps you understand your natural strengths and how they influence the way you think, work, communicate and relate to others."],
  ["Do you work with organisations?", "Yes. Support for organisations includes workplace wellbeing, neurodiversity & inclusion, leadership & people development, and teams & culture."],
  ["How do I get started?", "You can get in touch through the Let’s Talk page to start a conversation about what you’re looking for and where support could help."],
];

export default function FAQ() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container">
            <div className="eyebrow">Frequently asked questions</div>
            <h1>Questions, answered.</h1>
            <p className="hero-sub">A few things you might want to know before getting started.</p>
          </div>
        </section>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container faq-list">
              {faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}
