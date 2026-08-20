import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Support for Individuals",
  description:
    "Psychology-informed wellbeing, life, career and neurodivergent coaching support.",
};

export default function Individuals() {
  const pillars = [
    [
      "Wellbeing",
      "Support for stress, overwhelm, boundaries, resilience, balance and sustainable ways of living and working.",
    ],
    [
      "Life & Relationships",
      "Support when relationships, life circumstances, transitions or decisions feel difficult to navigate.",
    ],
    [
      "Career & Work",
      "Support with career direction, workplace challenges, confidence, transitions and professional development.",
    ],
    [
      "Neurodivergent Coaching",
      "Coaching to understand your strengths, working style, needs and strategies that work for you.",
    ],
  ];

  const services = [
    [
      "01",
      "1-to-1 Coaching",
      "A confidential, personalised space to explore your goals, navigate challenges and create meaningful change with the right tools.",
      [
        "Career and work challenges",
        "Confidence and self-development",
        "Life transitions",
        "Wellbeing and balance",
        "Understanding yourself and your patterns",
      ],
      "Explore 1-to-1 Coaching",
    ],
    [
      "02",
      "Strength Profile Assessment",
      "Discover your natural strengths and understand how they show up in the way you think, work, communicate and relate to others.",
      [
        "Understanding your strengths",
        "Career development",
        "Building confidence",
        "Personal development",
        "Team and workplace development",
      ],
      "Explore Strengths Assessment",
    ],
  ];

  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container">
            <div className="eyebrow">For Individuals</div>
            <h1>Support to navigate life, well-being and work.</h1>
            <p className="hero-sub">
              Psychology-informed wellness and development coaching to help you
              understand yourself, work through challenges and build a life and
              career that works for you.
            </p>
          </div>
        </section>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container">
              <div className="eyebrow">You might be here because...</div>
              <h2 className="section-title">
                You don&apos;t have to have it all figured out.
              </h2>

              <div className="four-grid">
                {[
                  "Feeling stuck or unsure what's next.",
                  "Navigating a career or life change.",
                  "Trying to build confidence or better boundaries.",
                  "Looking for a way of working that fits you better.",
                ].map((item) => (
                  <article className="card" key={item}>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section">
            <div className="container">
              <div className="eyebrow">Ways we can work together</div>
              <h2 className="section-title">
                Support that fits what you need.
              </h2>

              <p className="section-copy">
                Whether you&apos;re looking for ongoing 1-to-1 coaching or want
                to better understand your natural strengths, we can start with
                where you are and build from there.
              </p>

              <div className="two-grid service-grid">
                {services.map(
                  ([number, title, body, benefits, cta]) => (
                    <article className="card service-card">
                      <div className="eyebrow">{number}</div>

                      <h3>{title}</h3>

                      <p>{body}</p>

                      {/* <div className="service-card-label">
                        This could help if you&apos;re looking to:
                      </div> */}

                      {/* <ul className="service-list">
                        {(benefits as string[]).map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul> */}

                      <a className="text-link" href="/lets-talk">
                        {cta} <span aria-hidden="true">→</span>
                      </a>
                    </article>
                  )
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container">
              <div className="eyebrow">How we can help</div>
              <h2 className="section-title">Support that starts with you.</h2>

              <div className="four-grid">
                {pillars.map(([title, body]) => (
                  <article className="card" key={title}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">
                Simple, practical and collaborative.
              </h2>

              <div className="four-grid">
                {[
                  [
                    "01",
                    "Let's talk",
                    "Tell me what's going on and what you're looking for.",
                  ],
                  [
                    "02",
                    "Find your direction",
                    "Identify what matters and where support could help.",
                  ],
                  [
                    "03",
                    "Build practical tools",
                    "Turn insight into strategies you can actually use.",
                  ],
                  [
                    "04",
                    "Keep moving forward",
                    "Focus on sustainable progress, not perfection.",
                  ],
                ].map(([n, t, b]) => (
                  <article className="card" key={n}>
                    <div className="eyebrow">{n}</div>
                    <h3>{t}</h3>
                    <p>{b}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}

