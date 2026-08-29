import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon, BriefcaseIcon } from "./components/icons";
import CertificationsGrid from "./components/certifications-grid";
import ContactForm from "./components/contact-form";
import Reveal from "./components/reveal";

/* ═══════════════════════════════════════════
   EDIT YOUR CONTENT BELOW
   ═══════════════════════════════════════════ */

const projects = [
  {
    title: "Portfolio Coach",
    description:
      "Analyzes your GitHub profile against real job market demand and tells you exactly what to build next — then tracks whether you actually build it. Reads your public repos, compares them against live job postings for your target role, recommends specific gap-filling projects, and watches your commits once you accept one.",
    bullets: [
      "Built a function-calling Progress Coach agent (Gemini 2.5 Flash) that inspects your repo — file tree, README, commit history — in a capped tool-use loop and gives an honest assessment with your next three commits. It remembers its last assessment and reports what actually changed.",
      "Peer matching via vector search: user profiles are embedded (OpenAI text-embedding-3-small) and stored in ChromaDB, with similar and complementary modes plus a concrete collaboration project idea.",
      "No webhooks — a 30-minute background loop auto-detects new repos, commit activity (active / stalled / completed), and collaborators, so pages load instantly from SQLite. GitHub OAuth + signed JWT sessions with rate-limited AI endpoints.",
    ],
    tags: ["Python", "FastAPI", "Gemini 2.5 Flash", "ChromaDB", "SQLite", "GitHub OAuth"],
    liveUrl: "http://portfolio-coach.duckdns.org",
    githubUrl: "https://github.com/Tieahapani/Portfolio-Coach",
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
  },
];

const experience = [
  {
    role: "Production Engineering Fellow",
    company: "Meta via MLH Fellowship",
    period: "Jun 2026 — Aug 2026",
    points: [
      "Built Redis caching and Prometheus/Grafana monitoring pipelines, maintaining 99.9%+ uptime.",
      "Provisioned and managed Linux VPS environments, debugging service failures and production deployments — containerized a Flask portfolio site with Docker Compose behind an nginx reverse proxy with HTTPS via certbot.",
      "Implemented integration tests validating homepage rendering, image assets, and critical application functionality, wired into a CI/CD deploy workflow with a test gate, Discord notifications, and failure alerts.",
    ],
  },
  {
    role: "Senior Office Assistant",
    company: "Associated Students, San Francisco State University",
    period: "Aug 2024 — Present",
    points: [
      "Eliminated 40% of admin processing time deploying Make.com and Zapier automation, saving 10+ hours/week.",
      "Compressed audit prep from 2 weeks to 3 days by automating receipt review with Azure OCR.",
      "Architected a Notion-based document lifecycle system adopted across 4 departments.",
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
    name: "Languages",
    skills: ["Python", "Dart", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    name: "AI/ML",
    skills: ["LangChain", "LangGraph", "RAG", "Multi-Agent Systems", "Gemini AI", "Google ADK", "Claude", "Vertex AI", "Prompt Engineering", "NLP", "Vector Search", "LangSmith"],
  },
  {
    name: "Frameworks",
    skills: ["Flutter", "Flask", "FastAPI", "React", "Node.js", "Express", "PyTorch", "Pandas", "NumPy"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase Firestore", "FAISS", "PGVector", "SQLite", "Isar"],
  },
  {
    name: "DevOps & Infra",
    skills: ["Git", "Docker", "Linux", "Bash", "Render", "Vercel", "GCP", "Azure", "Streamlit"],
  },
  {
    name: "Automation",
    skills: ["Make.com", "Zapier", "Notion"],
  },
];

const certifications = [
  {
    title: "Memory for AI Applications with MongoDB",
    issuer: "MongoDB",
    date: "Aug 2026",
    description:
      "Covers building memory systems for AI applications using MongoDB, including persisting conversational and agent state, vector databases for semantic retrieval, and designing AI agents that recall and reason over prior context.",
  },
  {
    title: "MongoDB AI Agents with LangChain",
    issuer: "MongoDB",
    date: "Aug 2026",
    description:
      "Covers building AI agents with LangChain and MongoDB, including agent architectures, tool use, MongoDB Atlas Vector Search for retrieval, and integrating persistent storage into agentic workflows.",
  },
  {
    title: "RAG for Production with LangChain & LlamaIndex",
    issuer: "Activeloop / Towards AI / Intel",
    date: "May 2026",
    description:
      "Covers building production-ready RAG systems using LangChain and LlamaIndex, including advanced retrieval methods, RAG agents, evaluation metrics, observability, and reducing hallucinations. Includes 40+ lessons and 7 hands-on projects spanning legal, financial, and biomedical domains.",
  },
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

const heroSkills = [
  "Python",
  "LangChain",
  "LangGraph",
  "RAG",
  "FastAPI",
  "Flutter",
  "React",
  "MongoDB",
  "Docker",
  "GCP",
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
        {/* Subtle paper texture line */}
        <div className="pointer-events-none absolute inset-y-0 right-[12%] hidden w-px bg-border lg:block" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-32 text-center">
          <p className="animate-hero-word font-mono text-xs uppercase tracking-[4px] text-muted-foreground">
            From Concept to Production
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[1.02] tracking-tight">
            <span className="animate-hero-word inline-block [animation-delay:120ms]">
              Tiea Hapani
            </span>
          </h1>

          <p className="animate-hero-word mt-5 font-mono text-sm tracking-wide text-muted-foreground [animation-delay:280ms] sm:text-base">
            AI/ML Engineer <span className="text-accent">/</span> Builder{" "}
            <span className="text-accent">/</span> CS @ SFSU
          </p>

          <p className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:440ms] sm:text-xl">
            I build{" "}
            <span className="font-semibold text-accent">production-grade AI systems</span>{" "}
            and study why agentic AI fails in production — then engineer around it.
          </p>

          <div className="mt-10">
            <div className="animate-fade-in-up flex flex-wrap justify-center gap-4 [animation-delay:600ms]">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent"
              >
                View Projects
                <ArrowUpRightIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Skills marquee */}
          <div
            className="animate-fade-in marquee-mask mt-20 overflow-hidden border-y border-border py-4 [animation-delay:900ms]"
            aria-label="Core technologies"
          >
            <div className="marquee-track flex w-max items-center gap-3">
              {[...heroSkills, ...heroSkills].map((skill, i) => (
                <span
                  key={i}
                  aria-hidden={i >= heroSkills.length}
                  className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[2px] text-muted-foreground"
                >
                  {skill}
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 [animation-delay:1.2s]">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-muted">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <SectionLabel>01 — About</SectionLabel>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
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
                  <span className="font-display italic text-accent">
                    The Almanack of Naval Ravikant
                  </span>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-3">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-mono text-xs uppercase tracking-[3px] text-muted">
                  Quick facts
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">Location</span>
                    <span className="text-foreground">San Francisco, CA</span>
                  </li>
                  <li>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">Focus</span>
                    <span className="text-foreground">AI/ML Engineering</span>
                  </li>
                  <li>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">Education</span>
                    <span className="text-foreground">SFSU — CS</span>
                  </li>
                  <li>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">Currently</span>
                    <span className="text-accent">Seeking AI/ML internships</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>02 — Projects</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Things I&apos;ve built
            </h2>
          </Reveal>

          {/* Projects: alternating asymmetric rows */}
          <div className="mt-14 flex flex-col">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <article className="group grid gap-8 border-t border-border py-12 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <span className="font-mono text-xs text-muted">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-5">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center gap-1.5 pb-0.5 text-sm font-medium text-accent"
                        >
                          Live demo <ArrowUpRightIcon />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 pb-0.5 text-sm font-medium text-muted-foreground"
                      >
                        GitHub <ArrowUpRightIcon />
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>03 — Experience</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Where I&apos;ve worked
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-[9px]" />

            <div className="flex flex-col gap-12">
              {experience.map((job, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="relative pl-10 md:pl-12">
                    <div
                      className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 md:h-5 md:w-5 ${
                        i === 0
                          ? "border-accent bg-accent/20"
                          : "border-border bg-surface"
                      }`}
                    />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-accent">
                          <BriefcaseIcon className="h-3.5 w-3.5" />
                          {job.company}
                        </p>
                      </div>
                      <span className="mt-1 font-mono text-xs text-muted sm:mt-0">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>04 — Skills</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Tech I work with
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {skillCategories.map((category, i) => (
              <Reveal key={category.name} delay={i * 60}>
                <div className="grid gap-4 border-t border-border pt-8 lg:grid-cols-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[2px] text-accent">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 lg:col-span-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>05 — Certifications</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Credentials & courses
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <CertificationsGrid certifications={certifications} />
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-border py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel center>06 — Contact</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                Let&apos;s work{" "}
                <span className="italic text-accent">together.</span>
              </h2>
              <p className="mt-5 text-[15px] text-muted-foreground">
                Have a project in mind or just want to chat? Drop me a message and
                I&apos;ll get back to you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-12 max-w-lg">
              <ContactForm />

              <div className="mt-10 flex items-center justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 pb-0.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} Tiea. All rights reserved.
          </span>
          <span className="font-mono text-xs text-muted">
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
      className={`inline-block font-mono text-xs font-semibold uppercase tracking-[3px] text-accent ${center ? "mx-auto block text-center" : ""}`}
    >
      {children}
    </span>
  );
}
