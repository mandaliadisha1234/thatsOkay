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
              <h1>The person behind That's Okay</h1>
              <p className="hero-sub">An Organisational & Wellness Coach supporting people and organisations navigate real-life and workplace challenges.</p>
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
                <h2 className="section-title">Oganisational Psychologist</h2>
                <p className="section-copy">
                  Disha is the Founder of That’s Okay, an Organisational Psychologist, Wellness Coach and Strengths Profile Practitioner. With over a decade of experience across psychology, people management, neurodiversity and organisational development, she has worked with individuals, SMEs and corporate organisations across India, the UK and Ireland.
                  Having lived and worked across these three countries, Disha brings a broad understanding of people, workplaces and the different challenges that come with navigating change and uncertainty. Through That’s Okay, her vision is to create a space where people feel supported, psychologically safe and empowered to start exactly where they are in life and their career — without judgement and without the pressure of having it all figured out.
                </p>

                <br/>
                <div>
                  <h2>Qualifications & Accreditations</h2>
                  <ul>
                    <li>MSc in Work and Organisational Psychology — University of Limerick, Ireland</li>
                    <li>Postgraduate Certificate in Psychiatry — Cardiff University, UK</li>
                    <li>Bachelor of Arts in Psychology — India</li>                    
                    <li>Strengths-Profile Practitioner</li>
                    <li>Health & Wellness Coaching Certification — Institute of Health Sciences</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}