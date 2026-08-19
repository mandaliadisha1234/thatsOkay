import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">That&apos;s Okay<span className="logo-dot">.</span></div>
            <p>Psychology-informed wellness consultancy for people and workplaces.</p>
          </div>
          <div>
            <h3>Individuals</h3>
            <Link href="/individuals">Wellbeing</Link>
            <Link href="/individuals">Life & Relationships</Link>
            <Link href="/individuals">Career & Work</Link>
            <Link href="/individuals">Neurodivergent Coaching</Link>
          </div>
          <div>
            <h3>Organisations</h3>
            <Link href="/organisations">Workplace Wellbeing</Link>
            <Link href="/organisations">Neurodiversity & Inclusion</Link>
            <Link href="/organisations">Leadership & People Development</Link>
            <Link href="/organisations">Teams & Culture</Link>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/lets-talk">Let&apos;s Talk</Link>
            <a href="mailto:connect@thatsokay.ie">connect@thatsokay.ie</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} All rights reserved Disha Collective (Trading as That&apos;s Okay.). Disha Collective is a sole trader business registered in Dublin, Ireland.</p>
        </div>
      </div>
    </footer>
  );
}
