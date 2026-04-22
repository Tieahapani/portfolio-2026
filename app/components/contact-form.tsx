"use client";

import { useState } from "react";
import { SendIcon } from "./icons";

const WEB3FORMS_KEY = "68999435-f764-4c16-84e3-a990cc7b379c";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent & { currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return submitted ? (
    <div className="rounded-2xl border border-accent/20 bg-accent-glow p-8 text-center">
      <p className="text-lg font-medium text-foreground">Thanks for reaching out!</p>
      <p className="mt-2 text-sm text-muted-foreground">I&apos;ll get back to you soon.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
      <input type="hidden" name="subject" value="New message from your portfolio" />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        required
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20 resize-none"
      />

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(139,69,19,0.2)] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
        <SendIcon className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
