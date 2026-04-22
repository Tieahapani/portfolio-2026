import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon, BriefcaseIcon, AwardIcon } from "./components/icons";
import ContactForm from "./components/contact-form";

/* ═══════════════════════════════════════════
   EDIT YOUR CONTENT BELOW
   ═══════════════════════════════════════════ */

const projects = [
  {
    title: "ASGo",
    description:
      "Built for Associated Students at SFSU to solve one problem: travelers have nowhere to see their trip spending or store their receipts. ASGo lets travelers view their active, upcoming, and completed trips, scan receipts, and see exactly where expenses are being made and under which trip. Everything syncs to Notion, the main platform for storing traveler records. Admins can also create and view trips from an analytics dashboard. Currently building and launching a beta version to test it out.",
    bullets: [],
    tags: ["Flutter", "Python Flask", "Azure OCR", "Gemini", "Notion API", "SQLAlchemy"],
    liveUrl: "#",
    githubUrl: "#",
    highlight: true,
  },
  {
    title: "TrustKey",
    description:
      "4th place at SF Hacks 2026. A full-stack tenant screening platform that automates comprehensive background checks on rental applicants by integrating six live CRS Sandbox API data sources, then auto-scores each applicant 0 to 100 with color-coded risk tiers.",
    bullets: [
      "Integrated TransUnion credit, criminal records, eviction history, fraud risk, LexisNexis identity verification, and FBI Most Wanted into a single scoring pipeline with MongoDB caching for instant repeat lookups.",
      "Built a generative UI powered by Tambo AI where renters explore listings through a context-aware conversational interface, plus an AI property chatbot using Gemini 2.0 Flash with ElevenLabs text-to-speech.",
    ],
    tags: ["React 19", "TypeScript", "Node.js", "MongoDB", "Firebase", "Vite"],
    liveUrl: "https://trustkey-two.vercel.app/",
    githubUrl: "https://github.com/Tieahapani/TrustKey-Hackthaon-2026",
    highlight: false,
  },
  {
    title: "AskLangChain",
    description:
      "A smart Q&A assistant for LangChain documentation. Instead of digging through 100+ pages of docs, ask a question in plain English and get an accurate, source-linked answer.",
    bullets: [
      "Supports 5 retrieval strategies (similarity, score threshold, MMR, hybrid, hybrid + reranking) so users can compare results and pick the best approach per question.",
      "Built a COT + self-reflection mode using LangGraph that filters irrelevant chunks, reasons step-by-step, self-checks answers against the docs, and auto-retries with rewritten queries if quality is insufficient.",
      "Full end-to-end tracing via LangSmith with an automated evaluation pipeline across 15 test questions scoring correctness and faithfulness per strategy.",
    ],
    tags: ["Python", "LangChain", "LangGraph", "LangSmith", "Streamlit", "Gemini"],
    liveUrl: "https://asklangchain-beo4m5dnjb6qrtah4kterp.streamlit.app/",
    githubUrl: "https://github.com/Tieahapani/AskLangchain",
    highlight: false,
  },
  {
    title: "RAGMeeting",
    description:
      "An AI-powered meeting assistant that records, transcribes, summarizes, and lets you ask questions about your meetings using Retrieval-Augmented Generation (RAG).",
    bullets: [
      "Built an adaptive multi-strategy RAG pipeline where a LangGraph router classifies each question into naive, multi-query, or compression strategies, with hybrid retrieval combining PGVector semantic search and BM25 keyword search via Reciprocal Rank Fusion. Combined with speaker-aware chunking, this improved context precision by ~40% in the evaluation pipeline.",
      "Implemented a two-tier query cache (exact text match + cosine similarity at 0.85 threshold) and streaming responses over SSE, with a background processing pipeline that saves each step independently so failed meetings can be retried without re-recording.",
    ],
    tags: ["React 19", "FastAPI", "LangGraph", "PGVector", "Whisper", "Gemini"],
    liveUrl: "https://rag-meeting-afwu.vercel.app/",
    githubUrl: "https://github.com/Tieahapani/RagMeeting",
    highlight: false,
  },
];

const experience = [
  {
    role: "Senior Office Assistant",
    company: "Associated Students, San Francisco State University",
    period: "Aug 2024 — Present",
    points: [
      "Manage day-to-day office operations including scheduling, document processing, data entry, and cross-department coordination for a student government serving 100+ students.",
      "Built end-to-end automation pipelines using Make.com, Zapier, and Azure OCR for receipt data extraction, cutting manual processing time by 40% and increasing audit accuracy.",
      "Architected a Notion ecosystem tracking document approvals and lifecycle logic across 10 departments, replacing fragmented spreadsheet workflows.",
      "Currently leading the development of ASGo, an internal travel expense management app to replace manual receipt tracking and spending visibility gaps across the organization.",
    ],
  },
  {
    role: "Volunteer Workflow Automation Assistant",
    company: "Mercy Clinic",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Automated quarterly medicine credit reconciliation using Make.com and Zapier, cutting manual Excel comparisons by 60% and increasing data reliability.",
      "Collaborated with clinic staff to identify bottlenecks in administrative workflows and delivered automation solutions that reduced repetitive manual tasks.",
    ],
  },
];

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "Dart", "Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "C++"],
  },
  {
    name: "AI/ML",
    skills: ["Gemini AI", "Google ADK", "Claude Code", "Cursor", "Prompt Engineering", "Azure OCR", "Multi-Agent Systems", "Vertex AI Memory", "Generative AI", "NLP", "Recommendation Systems", "Vector Search", "Vector Databases", "RAG"],
  },
  {
    name: "Frameworks",
    skills: ["Flutter", "Flask", "React", "Node.js", "Express", "Firebase", "PyTorch", "Pandas", "TensorFlow", "NumPy", "LangChain", "LangGraph", "Pydantic"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase Firestore", "Isar", "SQLite", "Pinecone", "FAISS", "ChromaDB"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "Render", "Vercel", "n8n", "Low-code", "Apple Speech Framework", "Make.com", "Zapier", "Google Cloud", "Azure", "GCP", "LangSmith"],
  },
];

const certifications = [
  {
    title: "RAG Bootcamp",
    issuer: "Udemy",
    date: "Apr 2026",
    description:
      "Completed the Ultimate RAG Bootcamp by Krish Naik (31.5 hours) covering traditional, advanced, multimodal, and agentic RAG pipelines using LangChain, LangGraph, and LangSmith. Gained hands-on experience with vector databases (FAISS, Pinecone, Chroma), hybrid search, multi-agent orchestration, and RAG workflow optimization.",
  },
  {
    title: "Build an AI Agent",
    issuer: "IBM",
    date: "Dec 2025",
    description:
      "Covers the fundamentals of designing and building AI agents using large language models, including tool use, memory, planning, and multi-agent architectures. Topics include frameworks like LangChain and CrewAI, prompt engineering for agentic workflows, and deploying agents that can reason and take actions autonomously.",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    description:
      "Validates foundational knowledge of AI and machine learning concepts, including deep learning, generative AI, and large language models. Covers Oracle Cloud Infrastructure services for AI workloads such as OCI AI Services, Data Science, and the infrastructure used to build and deploy ML models.",
  },
  {
    title: "Machine Learning Crash Course",
    issuer: "Google Developers",
    date: "Aug 2024",
    description:
      "Covers core machine learning concepts including supervised learning, linear regression, classification, neural networks, and embeddings. Emphasizes practical skills with TensorFlow and real-world data, along with topics like feature engineering, regularization, and fairness in ML systems.",
  },
];

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: MailIcon, href: "mailto:hello@example.com", label: "Email" },
];

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Gradient orb background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in-up text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                Tiea
              </span>
              <span className="text-accent">.</span>
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:200ms]">
              CS junior at SFSU building AI systems — multi-agent workflows,
              RAG pipelines, and intelligent automation. Currently a Senior
              Office Assistant at Associated Students, SFSU.
            </p>
            <div className="animate-fade-in-up mt-10 flex flex-wrap gap-4 [animation-delay:400ms]">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(139,69,19,0.2)]"
              >
                View Projects
                <ArrowUpRightIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-accent/40 hover:text-foreground hover:bg-accent/[0.04]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 [animation-delay:1s]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[3px] text-muted">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>About Me</SectionLabel>
          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A bit about myself
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Tiea Hapani, an international student and Computer
                  Science junior at San Francisco State University. I&apos;m
                  passionate about building AI systems that solve real problems,
                  from multi-agent workflows to RAG pipelines and automation
                  tools that save people hours of manual work.
                </p>
                <p>
                  I love turning complex AI concepts into working solutions and
                  building tools that save people hours of manual work.
                </p>
                <p>
                  Outside of code, I spend my time journaling, exploring new
                  cities, and diving into books that challenge how I think. My
                  favourite book is{" "}
                  <span className="text-accent font-medium italic">
                    The Almanack of Naval Ravikant
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-start lg:col-span-2 lg:justify-end">
              <div className="w-full max-w-xs rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted">
                  Quick facts
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Location</span>
                    <span className="text-foreground">San Francisco, CA</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Focus</span>
                    <span className="text-foreground">AI/ML Engineering</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Education</span>
                    <span className="text-foreground">SFSU — CS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Currently</span>
                    <span className="text-accent">Building ASGo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 max-w-lg text-[15px] text-muted-foreground">
            A selection of projects I&apos;ve worked on. Each one taught me
            something new.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  project.highlight
                    ? "border-accent/25 bg-accent/[0.03] hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(139,69,19,0.08)]"
                    : "border-border bg-card hover:border-accent/40 hover:bg-card-hover hover:shadow-[0_8px_40px_rgba(139,69,19,0.06)]"
                }`}
              >
                {/* Header: title + links */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.highlight && (
                      <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        In Development
                      </span>
                    )}
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        Live <ArrowUpRightIcon />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      GitHub <ArrowUpRightIcon />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-light px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="mt-4 flex flex-col gap-3">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h2>

          <div className="relative mt-14">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-[9px]" />

            <div className="flex flex-col gap-12">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-10 md:pl-12">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 md:h-5 md:w-5 ${
                      i === 0
                        ? "border-accent bg-accent/20 shadow-[0_0_12px_rgba(139,69,19,0.25)]"
                        : "border-border bg-surface"
                    }`}
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold">{job.role}</h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-accent">
                        <BriefcaseIcon className="h-3.5 w-3.5" />
                        {job.company}
                      </p>
                    </div>
                    <span className="mt-1 text-xs font-mono text-muted sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tech I work with
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Credentials & courses
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {certifications.map((cert) => (
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
                      <span className="text-muted">·</span>
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
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel center>Contact</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Have a project in mind or just want to chat? Drop me a message and
              I&apos;ll get back to you.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-lg">
            <ContactForm />

            <div className="mt-10 flex items-center justify-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Tiea. All rights reserved.
          </span>
          <span className="text-xs text-muted">
            Designed & built by Tiea
          </span>
        </div>
      </footer>
    </>
  );
}

/* ── Shared components ── */

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span
      className={`inline-block text-sm font-semibold uppercase tracking-[3px] text-accent ${center ? "mx-auto block text-center" : ""}`}
    >
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
