import Image from "next/image";
import Link from "next/link";
import PageShell from "./components/PageShell";
import ScrollReveal from "./components/ScrollReveal";

const individualServices = [
  ["Wellbeing", "Support for stress, overwhelm, balance, boundaries and sustainable ways of living and working."],
  ["Life & Relationships", "Support when relationships, life circumstances, transitions or difficult decisions feel hard to navigate."],
  ["Career & Work", "Support with career direction, workplace challenges, confidence, transitions and professional development."],
  ["Neurodivergent Coaching", "Coaching to understand your strengths, working style, needs and strategies that work for you."],
];

const organisationServices = [
  ["Workplace Wellbeing", "Helping organisations create healthier and more sustainable working environments."],
  ["Neurodiversity & Inclusion", "Helping organisations move from awareness towards genuinely neuroinclusive workplaces."],
  ["Leadership & People Development", "Developing managers and leaders to support people and performance effectively."],
  ["Teams & Culture", "Helping teams build healthier ways of communicating, collaborating and working together."],
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Psychology-informed wellness consultancy</div>
              <h1>For people and workplaces.</h1>
              <p className="hero-sub">
                Supporting people navigate life, wellbeing and work — and organisations
                to create healthier, more inclusive workplaces.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-secondary" href="#individuals">For Individuals</Link>
                <Link className="btn btn-secondary" href="#organisations">For Organisations</Link>
              </div>
            </div>

            <div className="hero-visual image-frame">
              <Image
                src="/images/home-disha.jpg"
                alt="Disha portrait"
                width={800}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
              <div className="hero-note">
                Psychology-informed. Human-centred. Practical.
              </div>
            </div>
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
<section className="section" id="individuals">
          <div className="container">
            <div className="eyebrow">For individuals</div>
            <h2 className="section-title">Support for real life, work and everything in between.</h2>
            <div className="pathways">
              <div className="pathway individual">
                <div>
                  <h3>For Individuals</h3>
                  <p>Explore support for wellbeing, life & relationships, career & work, and neurodivergent coaching.</p>
                </div>
                <Link className="pill-link" href="/individuals">Explore Individuals</Link>
              </div>
              <div className="pathway organisation" id="organisations">
                <div>
                  <h3>For Organisations</h3>
                  <p>Explore support for workplace wellbeing, neurodiversity & inclusion, leadership and teams & culture.</p>
                </div>
                <Link className="pill-link" href="/organisations">Explore Organisations</Link>
              </div>
            </div>
          </div>
        </section>
</ScrollReveal>

        <ScrollReveal>
<section className="section brand-section">
          <div className="container">
            <div className="eyebrow">How we can help</div>
            <h2 className="section-title">Support designed around people, not labels.</h2>
            <div className="service-grid">
              {individualServices.map(([title, body]) => (
                <article className="service" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
              {organisationServices.map(([title, body]) => (
                <article className="service" key={title}>
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
            <div className="eyebrow">The That&apos;s Okay. approach</div>
            <h2 className="section-title">Understand. Discover. Develop. Thrive.</h2>
            <div className="four-grid">
              {[
                ["01", "Understand", "Start with where you are, your context and what matters to you."],
                ["02", "Discover", "Identify strengths, needs, patterns and possibilities."],
                ["03", "Develop", "Build practical tools and strategies that fit real life."],
                ["04", "Thrive", "Create sustainable ways of moving forward — without chasing perfection."],
              ].map(([number, title, body]) => (
                <article className="card" key={number}>
                  <div className="eyebrow">{number}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
</ScrollReveal>

        <ScrollReveal>
<section className="section about-strip about-orange" id="about">
          <div className="container about-grid">
            <div className="about-photo">
              <Image
                src="/images/home-disha-2.jpg"
                alt="Disha portrait"
                width={800}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
            <div>
              <div className="eyebrow">Meet Disha</div>
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
              <div style={{marginTop: 30}}>
                <Link className="pill-link" href="/about/disha">Meet Disha</Link>
              </div>
            </div>
          </div>
        </section>
</ScrollReveal>

        <ScrollReveal>
<section className="section resources" id="resources">
          <div className="container">
            <div className="eyebrow">Resources</div>
            <h2 className="section-title">Resources to help you navigate life, work and wellbeing.</h2>
            <p className="section-copy">
              Articles, guides, events and practical tools will grow here over time.
            </p>
            <div className="three-grid">
              {["Articles", "Events & Workshops"].map((title) => (
                <article className="resource-card" key={title}>
                  <div className={`resource-image ${title === "Articles" ? "resource-articles" : "resource-events"}`} />
                  <div className="resource-body">
                    <h3>{title}</h3>
                    <p>Coming soon.</p>
                  </div>
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