import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Let’s Talk",
  description: "Start a conversation about individual support or organisational wellbeing and development.",
};

export default function LetsTalk() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-page">
          <div className="container">
            <div className="eyebrow">Let&apos;s Talk</div>
            <h1>You don&apos;t need to have everything figured out before reaching out.</h1>
            <p className="hero-sub">Whether you&apos;re looking for support for yourself or exploring how we could support your organisation, start with a conversation.</p>
          </div>
        </section>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container pathways">
              <div className="pathway individual">
                <div><p style={{fontSize:"40px", color:"black", fontFamily:"sans-serif"}}><b>Seeking support for myself</b></p><p>Wellbeing, life &amp; relationships, career &amp; work, or neurodivergent coaching.</p></div><br/>
                <a className="btn btn-primary" href="#contact-form">Book an exploratory call</a>
              </div>
              <div className="pathway organisation">
                <div><p style={{fontSize:"40px", color:"black", fontFamily:"sans-serif"}}><b>Seeking support for my organisation</b></p><p>Workplace wellbeing, neurodiversity &amp; inclusion, leadership, teams &amp; culture, training or consulting.</p></div><br/>
                <a className="btn btn-primary" href="#contact-form">Book an introductory call</a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section" id="contact-form">
            <div className="container contact-layout">
              <div>
                <div className="eyebrow">Get in touch</div>
                <h2 className="section-title">How can we help?</h2>
                <p className="section-copy">You can share as much or as little as feels useful. We&apos;ll use your message to understand what you&apos;re looking for and suggest the most appropriate next step.</p>
                <p className="section-copy">📧 <a href="mailto:connect@thatsokay.ie">connect@thatsokay.ie</a></p>
                <p className="section-copy">📞 <a href="mailto:connect@thatsokay.ie">+353 89 977 6431</a></p>
              </div>
              <ContactForm />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section brand-section">
            <div className="container">
              <h2 className="section-title">Hear from people we&apos;ve worked with.</h2>
              <hr/>
              <Link className="btn btn-secondary" href="/testimonials">View testimonials</Link>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </PageShell>
  );
}
 