"use client";

import { useState } from "react";
import { AwardIcon } from "./icons";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export default function CertificationsGrid({ certifications }: { certifications: Certification[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 4);

  return (
    <>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {visible.map((cert) => (
          <div
            key={cert.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card-hover hover:shadow-[0_8px_40px_rgba(139,69,19,0.06)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <AwardIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-accent">
                  {cert.issuer}
                  <span className="text-muted">&middot;</span>
                  <span className="font-mono text-xs text-muted">
                    {cert.date}
                  </span>
                </p>
                {cert.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-accent/40 hover:text-foreground hover:bg-accent/[0.04]"
          >
            {showAll ? "Show Less" : `Show All (${certifications.length})`}
            <svg
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
