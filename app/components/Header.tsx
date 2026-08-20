"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" onClick={close}>That&apos;s Okay<span className="logo-dot">.</span></Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <div className="nav-services">
            <button className="nav-services-trigger" type="button" aria-haspopup="true">About <span aria-hidden="true"><b>⌵</b></span></button>
            <div className="nav-dropdown" role="menu">
              <Link href="/about" role="menuitem">About That&apos;s Okay</Link>
              <Link href="/about/disha" role="menuitem">About Disha</Link>
              <Link href="/faq" role="menuitem">FAQ</Link>
            </div>
          </div>
          <div className="nav-services">
            <button className="nav-services-trigger" type="button" aria-haspopup="true">Services <span aria-hidden="true"><b>⌵</b></span></button>
            <div className="nav-dropdown" role="menu">
              <Link href="/individuals" role="menuitem">Individuals</Link>
              <Link href="/organisations" role="menuitem">Organisations</Link>
            </div>
          </div>
          <Link href="/resources">Resources</Link>
          <Link href="/lets-talk" className="nav-cta">Let&apos;s Talk <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <Link href="/" onClick={close}>Home</Link>
        <div className="mobile-menu-group"><span>About</span><Link href="/about" onClick={close}>About That&apos;s Okay</Link><Link href="/about/disha" onClick={close}>About Disha</Link><Link href="/faq" onClick={close}>FAQ</Link></div>
        <div className="mobile-menu-group"><span>Services</span><Link href="/individuals" onClick={close}>Individuals</Link><Link href="/organisations" onClick={close}>Organisations</Link></div>
        <Link href="/resources" onClick={close}>Resources</Link>
        <Link href="/lets-talk" className="mobile-menu-cta" onClick={close}>Let&apos;s Talk ↗</Link>
      </div>
    </header>
  );
}
