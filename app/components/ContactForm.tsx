"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your message.");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" required maxLength={320} autoComplete="email" />
        </label>
        <label>
          <span>I'm getting in touch about</span>
          <select name="type" defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Individual support">Individual support</option>
            <option value="Organisation support">Organisation support</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label>
          <span>Organisation <small>(optional)</small></span>
          <input name="organisation" maxLength={200} autoComplete="organization" />
        </label>
        <label>
          <span>Phone <small>(optional)</small></span>
          <input name="phone" maxLength={80} autoComplete="tel" />
        </label>
      </div>
      <label>
        <span>How can we help? *</span>
        <textarea name="message" required maxLength={5000} rows={7} placeholder="Tell us a little about what you're looking for..." />
      </label>
      
      <input name="consent" type="checkbox"/>
      <span style={{fontFamily:"sans-serif", fontSize:"14px"}}>I consent to receive emails from That's Okay.</span>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "success" && <p className="form-success" role="status">Thank you — your message has been sent. We&apos;ll be in touch.</p>}
        {status === "error" && <p className="form-error" role="alert">{error}</p>}
      </div>
    </form>
  );
}
