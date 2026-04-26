export type Resource = {
  label: string;
  url: string;
};

export type CoverageItem = {
  topic: string;
  description: string;
  sprintIds: number[];
};

export type Sprint = {
  id: number;
  title: string;
  start: string;
  end: string;
  outcome: string;
  skills: string[];
  stack: string[];
  aiConcepts: string[];
  sources: Resource[];
  buildPlan: string[];
  qualityBar: string[];
  portfolioProof: string[];
};

export const START_DATE = "2026-04-27";
export const END_DATE = "2026-05-26";

export const coreSources: Resource[] = [
  { label: "OpenAI API docs", url: "https://platform.openai.com/docs" },
  { label: "OpenAI Structured Outputs", url: "https://openai.com/index/introducing-structured-outputs-in-the-api/" },
  { label: "Vercel AI SDK", url: "https://sdk.vercel.ai/docs" },
  { label: "Next.js docs", url: "https://nextjs.org/docs" },
  { label: "LangGraph docs", url: "https://docs.langchain.com/oss/python/langgraph" },
  { label: "Supabase AI & Vectors", url: "https://supabase.com/docs/guides/ai" },
  { label: "Supabase pgvector guide", url: "https://supabase.com/docs/guides/database/extensions/pgvector" },
  { label: "Hugging Face Transformers docs", url: "https://huggingface.co/docs/transformers" },
  { label: "LangSmith evaluation docs", url: "https://docs.smith.langchain.com/evaluation" },
  { label: "OWASP Top 10 for LLM Apps", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" }
];

export const coverageMap: CoverageItem[] = [
  {
    topic: "GenAI",
    description: "Practical product building across resume tailoring, document comparison, research, job hunting, release risk, and portfolio launch.",
    sprintIds: [1, 2, 3, 6, 7, 8, 9, 14, 15]
  },
  {
    topic: "LLMs",
    description: "Prompt design, structured outputs, extraction, summarization, generation, scoring, and evaluation patterns.",
    sprintIds: [1, 2, 3, 6, 7, 8, 9, 10, 11]
  },
  {
    topic: "Vector DB",
    description: "Embeddings, semantic search, vector indexes, and retrieval metadata using Supabase pgvector or equivalent stores.",
    sprintIds: [4, 5]
  },
  {
    topic: "Agentic AI",
    description: "Research loops, specialist agents, role-based agent workflows, orchestration, critique, and synthesis.",
    sprintIds: [7, 8, 9, 10]
  },
  {
    topic: "RAG",
    description: "Chunking, embeddings, retrieval, context assembly, source citations, and grounded answer generation.",
    sprintIds: [4, 5, 12]
  },
  {
    topic: "Pipelines",
    description: "Ingestion, parsing, chunking, embedding, retrieval, eval, reporting, deployment, and monitoring flows.",
    sprintIds: [4, 5, 9, 11, 12]
  },
  {
    topic: "Transformers",
    description: "Tokenization, embeddings, attention, decoder-only model intuition, and next-token prediction.",
    sprintIds: [13]
  },
  {
    topic: "AI System Design",
    description: "Enterprise GenAI architecture, guardrails, privacy, evals, observability, scalability, and tradeoffs.",
    sprintIds: [12]
  }
];

export const sprints: Sprint[] = [
  {
    id: 1,
    title: "AI Resume Tailor",
    start: "2026-04-27",
    end: "2026-04-28",
    outcome: "Upload or paste a resume and job description, then generate a tailored resume summary, keyword gap analysis, and recruiter-ready bullet rewrites.",
    skills: ["Prompt engineering", "Structured outputs", "Resume UX", "Document parsing"],
    stack: ["Next.js", "TypeScript", "OpenAI structured output", "PDF text extraction", "Tailwind"],
    aiConcepts: ["Schema-constrained extraction", "Rubric scoring", "Tone control", "Hallucination-resistant rewriting"],
    sources: [
      { label: "OpenAI Structured Outputs", url: "https://openai.com/index/introducing-structured-outputs-in-the-api/" },
      { label: "JSON Schema", url: "https://json-schema.org/learn/getting-started-step-by-step" },
      { label: "React Hook Form", url: "https://react-hook-form.com/" },
      { label: "PDF.js", url: "https://mozilla.github.io/pdf.js/" }
    ],
    buildPlan: ["Create resume and job-description panels", "Extract skills, responsibilities, tools, and keywords", "Score resume alignment against the job", "Generate revised bullets with evidence-first language", "Add before/after comparison and exportable markdown"],
    qualityBar: ["Every recommendation maps to a job requirement", "No invented work experience", "Clear recruiter-facing summary", "Handles empty or weak job descriptions gracefully"],
    portfolioProof: ["Demo with one frontend job and one AI engineer job", "Show JSON extraction schema", "Publish a short case study explaining constraints"]
  },
  {
    id: 2,
    title: "AI Tester for React + Node",
    start: "2026-04-29",
    end: "2026-04-30",
    outcome: "Paste a component, API route, or function and receive meaningful unit, integration, and edge-case test suggestions.",
    skills: ["Test generation", "React testing", "Node.js", "Code review thinking"],
    stack: ["Vitest", "React Testing Library", "Supertest", "OpenAI API", "Monaco editor"],
    aiConcepts: ["Code understanding", "Test case synthesis", "Boundary analysis", "Failure-mode enumeration"],
    sources: [
      { label: "Vitest docs", url: "https://vitest.dev/" },
      { label: "Testing Library docs", url: "https://testing-library.com/docs/" },
      { label: "Supertest", url: "https://github.com/ladjs/supertest" },
      { label: "Monaco Editor", url: "https://microsoft.github.io/monaco-editor/" }
    ],
    buildPlan: ["Accept source code and optional framework context", "Ask the model for behavior map, risks, and test cases", "Generate runnable test files", "Show confidence and missing-context warnings", "Add copy buttons for test blocks"],
    qualityBar: ["Tests assert behavior, not implementation details", "Includes negative and async cases", "Labels assumptions clearly", "Does not claim tests are guaranteed to pass"],
    portfolioProof: ["Use a small React form and Express endpoint as examples", "Include generated tests in GitHub", "Record a two-minute walkthrough"]
  },
  {
    id: 3,
    title: "Meeting Notes to Action Items",
    start: "2026-05-01",
    end: "2026-05-02",
    outcome: "Convert messy meeting notes into owners, tasks, deadlines, risks, decisions, and follow-up email drafts.",
    skills: ["Summarization", "Entity extraction", "Task workflows", "Information architecture"],
    stack: ["Next.js", "OpenAI structured output", "date-fns", "shadcn-style components"],
    aiConcepts: ["Action extraction", "Temporal parsing", "Decision detection", "Summary compression"],
    sources: [
      { label: "OpenAI API docs", url: "https://platform.openai.com/docs" },
      { label: "date-fns", url: "https://date-fns.org/" },
      { label: "Google Calendar event format", url: "https://developers.google.com/calendar/api/v3/reference/events" },
      { label: "Microsoft Graph To Do", url: "https://learn.microsoft.com/graph/api/resources/todo-overview" }
    ],
    buildPlan: ["Design schema for tasks, decisions, blockers, and unknowns", "Generate a concise executive summary", "Create action table with owner and due date", "Add risk and ambiguity flags", "Generate follow-up email draft"],
    qualityBar: ["Separates decisions from tasks", "Flags missing owners or dates", "Keeps original evidence snippets", "Works on rough bullet notes"],
    portfolioProof: ["Show raw notes beside extracted action table", "Share schema and example output", "Explain how this reduces meeting follow-up time"]
  },
  {
    id: 4,
    title: "HR Policy Chatbot (RAG)",
    start: "2026-05-03",
    end: "2026-05-04",
    outcome: "Ask HR policy questions and receive answers grounded in uploaded policy documents with cited snippets.",
    skills: ["RAG", "Embeddings", "Chunking", "Source citations"],
    stack: ["Supabase pgvector", "OpenAI embeddings", "Next.js API routes", "PDF parsing"],
    aiConcepts: ["Retrieval augmented generation", "Semantic search", "Chunk overlap", "Citation grounding"],
    sources: [
      { label: "Supabase AI & Vectors", url: "https://supabase.com/docs/guides/ai" },
      { label: "Supabase pgvector", url: "https://supabase.com/docs/guides/database/extensions/pgvector" },
      { label: "OpenAI embeddings guide", url: "https://platform.openai.com/docs/guides/embeddings" },
      { label: "OWASP LLM risks", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" }
    ],
    buildPlan: ["Prepare sample HR policy documents", "Chunk and embed sections", "Retrieve top matching passages", "Answer only from retrieved context", "Show citations and fallback when evidence is weak"],
    qualityBar: ["Citations are visible", "No answer when policy evidence is missing", "Chunk sizes are documented", "Prompt injection warnings are considered"],
    portfolioProof: ["Architecture diagram", "Example questions with cited answers", "Short write-up on retrieval tradeoffs"]
  },
  {
    id: 5,
    title: "Codebase Q&A Bot",
    start: "2026-05-05",
    end: "2026-05-06",
    outcome: "Index a small repo and let users ask architectural questions with file-aware answers.",
    skills: ["Code search", "Context retrieval", "Developer tooling", "Answer grounding"],
    stack: ["GitHub API", "tree-sitter or simple parsers", "Embeddings", "Supabase pgvector", "Next.js"],
    aiConcepts: ["Code-aware chunking", "Hybrid retrieval", "Context window budgeting", "File citation"],
    sources: [
      { label: "GitHub REST API", url: "https://docs.github.com/rest" },
      { label: "tree-sitter", url: "https://tree-sitter.github.io/tree-sitter/" },
      { label: "OpenAI embeddings", url: "https://platform.openai.com/docs/guides/embeddings" },
      { label: "Supabase vector docs", url: "https://supabase.com/docs/guides/database/extensions/pgvector" }
    ],
    buildPlan: ["Import repository file tree", "Chunk code by file and symbol boundaries", "Embed chunks with metadata", "Answer questions with file path citations", "Add suggested follow-up questions"],
    qualityBar: ["Never invents files", "Links every claim to a file path", "Handles large files with chunk summaries", "Explains uncertainty"],
    portfolioProof: ["Index your own project repo", "Ask architecture and onboarding questions", "Publish retrieval design notes"]
  },
  {
    id: 6,
    title: "Compare Two Documents AI",
    start: "2026-05-07",
    end: "2026-05-08",
    outcome: "Compare two contracts, policies, resumes, or specs and produce semantic differences, risks, and executive summary.",
    skills: ["Document comparison", "Risk extraction", "Semantic diffing", "Review UX"],
    stack: ["PDF/DOCX parsing", "OpenAI structured output", "diff-match-patch", "Next.js"],
    aiConcepts: ["Clause-level comparison", "Semantic equivalence", "Risk categorization", "Evidence snippets"],
    sources: [
      { label: "diff-match-patch", url: "https://github.com/google/diff-match-patch" },
      { label: "Mammoth DOCX parser", url: "https://github.com/mwilliamson/mammoth.js" },
      { label: "PDF.js", url: "https://mozilla.github.io/pdf.js/" },
      { label: "OpenAI Structured Outputs", url: "https://openai.com/index/introducing-structured-outputs-in-the-api/" }
    ],
    buildPlan: ["Extract text from both files", "Split by sections or clauses", "Run lexical and semantic comparison", "Classify changes as low, medium, high impact", "Render side-by-side review"],
    qualityBar: ["Shows exact evidence for differences", "Separates wording changes from meaning changes", "Avoids legal advice claims", "Supports pasted text fallback"],
    portfolioProof: ["Demo with two policy versions", "Show risk table and side-by-side diff", "Add disclaimer and evaluation examples"]
  },
  {
    id: 7,
    title: "AI Research Agent",
    start: "2026-05-09",
    end: "2026-05-10",
    outcome: "Research a topic, collect credible sources, synthesize findings, and produce a cited brief.",
    skills: ["Agent loops", "Research synthesis", "Source evaluation", "Citations"],
    stack: ["LangGraph or custom state machine", "Search API", "OpenAI API", "Markdown report renderer"],
    aiConcepts: ["Plan-act-reflect loop", "Source credibility scoring", "Citation extraction", "Claim verification"],
    sources: [
      { label: "LangGraph docs", url: "https://docs.langchain.com/oss/python/langgraph" },
      { label: "Tavily API", url: "https://docs.tavily.com/" },
      { label: "Exa API", url: "https://docs.exa.ai/" },
      { label: "Perplexity API", url: "https://docs.perplexity.ai/" }
    ],
    buildPlan: ["Take a research question and constraints", "Generate search plan", "Collect and rank sources", "Extract claims and citations", "Synthesize into an executive brief with open questions"],
    qualityBar: ["Source links are preserved", "Claims are not detached from evidence", "Separates facts from interpretation", "Avoids overconfident conclusions"],
    portfolioProof: ["Research a GenAI hiring trend", "Publish cited brief", "Explain agent loop and stopping conditions"]
  },
  {
    id: 8,
    title: "AI Job Hunt Agent",
    start: "2026-05-11",
    end: "2026-05-12",
    outcome: "Match target roles to your profile and generate tailored outreach, resume focus areas, and interview prep prompts.",
    skills: ["Job matching", "Personalization", "Workflow automation", "Candidate positioning"],
    stack: ["Next.js", "OpenAI structured output", "job post parser", "Notion/Airtable optional"],
    aiConcepts: ["Fit scoring", "Requirement extraction", "Personalized generation", "Ranking"],
    sources: [
      { label: "LinkedIn job search", url: "https://www.linkedin.com/jobs/" },
      { label: "O*NET skills database", url: "https://www.onetonline.org/" },
      { label: "OpenAI API docs", url: "https://platform.openai.com/docs" },
      { label: "Airtable API", url: "https://airtable.com/developers/web/api/introduction" }
    ],
    buildPlan: ["Paste job posts manually to avoid scraping complexity", "Extract must-have and nice-to-have requirements", "Score profile fit", "Generate outreach and prep checklist", "Track role strategy as static examples"],
    qualityBar: ["Does not fabricate experience", "Highlights skill gaps honestly", "Creates specific outreach, not generic templates", "Keeps role evidence visible"],
    portfolioProof: ["Show three job examples", "Include fit score reasoning", "Use as personal job-search operating system"]
  },
  {
    id: 9,
    title: "AI Release Risk Agent",
    start: "2026-05-13",
    end: "2026-05-14",
    outcome: "Analyze release notes, pull request summaries, and changed files to identify test risks before deployment.",
    skills: ["Risk scoring", "Release engineering", "QA strategy", "Change analysis"],
    stack: ["GitHub API", "OpenAI API", "risk matrix UI", "Playwright test recommendations"],
    aiConcepts: ["Impact analysis", "Risk taxonomy", "Test prioritization", "Confidence scoring"],
    sources: [
      { label: "GitHub Pulls API", url: "https://docs.github.com/rest/pulls" },
      { label: "Playwright docs", url: "https://playwright.dev/docs/intro" },
      { label: "OpenAI Structured Outputs", url: "https://openai.com/index/introducing-structured-outputs-in-the-api/" },
      { label: "Google SRE book", url: "https://sre.google/sre-book/table-of-contents/" }
    ],
    buildPlan: ["Accept release summary and changed-file list", "Classify impacted areas", "Generate risk matrix", "Recommend smoke, regression, and exploratory tests", "Produce go/no-go checklist"],
    qualityBar: ["Risks connect to actual changed areas", "Severity and likelihood are separate", "Testing suggestions are actionable", "No false certainty"],
    portfolioProof: ["Demo with a real GitHub PR", "Show risk matrix", "Explain why AI is useful for QA triage"]
  },
  {
    id: 10,
    title: "Multi-Agent Test Swarm",
    start: "2026-05-15",
    end: "2026-05-16",
    outcome: "Run multiple specialist testing agents that review a feature from accessibility, security, UX, and edge-case perspectives.",
    skills: ["Multi-agent design", "Test strategy", "Evaluation", "Workflow orchestration"],
    stack: ["LangGraph or custom orchestrator", "OpenAI API", "Playwright", "report dashboard"],
    aiConcepts: ["Role-specialized agents", "Coordinator pattern", "Critique loops", "Consensus summaries"],
    sources: [
      { label: "LangGraph overview", url: "https://docs.langchain.com/oss/python/langgraph" },
      { label: "Playwright accessibility testing", url: "https://playwright.dev/docs/accessibility-testing" },
      { label: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { label: "WAI accessibility fundamentals", url: "https://www.w3.org/WAI/fundamentals/" }
    ],
    buildPlan: ["Define specialist agent prompts", "Feed each agent the same feature brief", "Collect findings by category", "Deduplicate and rank issues", "Generate final test charter"],
    qualityBar: ["Each agent has a narrow job", "Findings include repro or evidence", "Coordinator removes duplicates", "Report is useful to a QA lead"],
    portfolioProof: ["Show agent roles visually", "Run against one of your earlier apps", "Include before/after issue prioritization"]
  },
  {
    id: 11,
    title: "LLM Evaluation Dashboard",
    start: "2026-05-17",
    end: "2026-05-18",
    outcome: "Create an eval dashboard for prompts, datasets, model outputs, human ratings, and pass/fail criteria.",
    skills: ["Evaluation", "Metrics", "Prompt iteration", "Dashboard design"],
    stack: ["Next.js", "Recharts", "LangSmith optional", "CSV/JSON datasets", "OpenAI API"],
    aiConcepts: ["Golden datasets", "LLM-as-judge", "Human review", "Regression testing"],
    sources: [
      { label: "OpenAI Evals", url: "https://github.com/openai/evals" },
      { label: "LangSmith evaluation", url: "https://docs.smith.langchain.com/evaluation" },
      { label: "Recharts", url: "https://recharts.org/" },
      { label: "Promptfoo", url: "https://www.promptfoo.dev/docs/intro/" }
    ],
    buildPlan: ["Define a small eval dataset", "Run outputs from one or more prompts", "Score accuracy, groundedness, format, and usefulness", "Visualize pass rate by version", "Add failure examples and next actions"],
    qualityBar: ["Metrics are defined in plain English", "Failures are visible", "Dataset is versioned", "Avoids judging only with vibes"],
    portfolioProof: ["Evaluate one previous sprint", "Show prompt improvement over versions", "Publish dataset and scoring rubric"]
  },
  {
    id: 12,
    title: "Enterprise GenAI System Design",
    start: "2026-05-19",
    end: "2026-05-20",
    outcome: "Design a serious enterprise GenAI architecture with ingestion, retrieval, guardrails, evals, observability, and deployment tradeoffs.",
    skills: ["Architecture", "Security", "Scalability", "Enterprise communication"],
    stack: ["Architecture diagrams", "Supabase or Postgres", "Queue design", "Observability tools", "Auth/RBAC concepts"],
    aiConcepts: ["RAG architecture", "Data governance", "Prompt injection defense", "Evaluation pipeline"],
    sources: [
      { label: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { label: "Microsoft Azure AI architecture center", url: "https://learn.microsoft.com/azure/architecture/ai-ml/" },
      { label: "Google Cloud AI architecture", url: "https://cloud.google.com/architecture/ai-ml" },
      { label: "Supabase AI & Vectors", url: "https://supabase.com/docs/guides/ai" }
    ],
    buildPlan: ["Choose an enterprise use case", "Draw data flow and trust boundaries", "Define ingestion and retrieval pipeline", "Add guardrails, evals, logging, and human review", "Create tradeoff memo"],
    qualityBar: ["Mentions security and privacy explicitly", "Includes failure modes", "Shows cost and latency considerations", "Readable by engineering leaders"],
    portfolioProof: ["Publish a polished architecture one-pager", "Include tradeoff table", "Use this as interview system-design material"]
  },
  {
    id: 13,
    title: "Transformers Deep Dive + Mini Demo",
    start: "2026-05-21",
    end: "2026-05-22",
    outcome: "Build an educational mini-demo explaining tokens, embeddings, attention, and next-token prediction.",
    skills: ["Transformer fundamentals", "Visualization", "Teaching complex ideas", "Model intuition"],
    stack: ["React visualizations", "D3 optional", "Hugging Face Transformers", "Canvas/SVG"],
    aiConcepts: ["Tokenization", "Embeddings", "Attention", "Decoder-only language models"],
    sources: [
      { label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
      { label: "Hugging Face Transformers docs", url: "https://huggingface.co/docs/transformers" },
      { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { label: "3Blue1Brown neural networks", url: "https://www.3blue1brown.com/topics/neural-networks" }
    ],
    buildPlan: ["Create tokenization visual", "Show embedding similarity intuition", "Animate attention weights", "Explain next-token prediction", "Connect concepts to real GenAI products"],
    qualityBar: ["Accurate without being academic sludge", "Visuals explain one concept at a time", "No misleading claims about model consciousness", "Useful for recruiters and learners"],
    portfolioProof: ["Record explanation video", "Publish interactive demo", "Use it to show depth beyond API usage"]
  },
  {
    id: 14,
    title: "Portfolio Builder",
    start: "2026-05-23",
    end: "2026-05-24",
    outcome: "Create a polished GenAI portfolio that presents projects as business problems, architectures, demos, and measurable outcomes.",
    skills: ["Portfolio UX", "Case studies", "Deployment", "Personal branding"],
    stack: ["Next.js", "MDX or static content", "Vercel", "Open Graph images", "analytics optional"],
    aiConcepts: ["Project storytelling", "Architecture communication", "Evaluation narrative", "Recruiter positioning"],
    sources: [
      { label: "Vercel deployment docs", url: "https://vercel.com/docs/deployments/overview" },
      { label: "Next.js metadata docs", url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata" },
      { label: "MDX", url: "https://mdxjs.com/" },
      { label: "Open Graph protocol", url: "https://ogp.me/" }
    ],
    buildPlan: ["Design homepage with clear positioning", "Create case-study template", "Add project cards for the best sprints", "Include architecture, demo, source, and learnings", "Optimize for mobile and sharing"],
    qualityBar: ["Looks senior, not like homework", "Every project has business value", "Demos are easy to find", "Case studies explain tradeoffs"],
    portfolioProof: ["Deploy to Vercel", "Add custom domain later", "Use as central link for LinkedIn and applications"]
  },
  {
    id: 15,
    title: "LinkedIn Launch + Final Polish",
    start: "2026-05-25",
    end: "2026-05-26",
    outcome: "Package the 30-day journey into a launch post, portfolio polish pass, recruiter talking points, and final project cleanup.",
    skills: ["Launch strategy", "Storytelling", "Recruiter communication", "Final QA"],
    stack: ["LinkedIn", "GitHub README polish", "Vercel analytics optional", "screen recording tool"],
    aiConcepts: ["Narrative synthesis", "Proof-of-work packaging", "Audience-aware summarization", "Career positioning"],
    sources: [
      { label: "GitHub profile README docs", url: "https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme" },
      { label: "Vercel docs", url: "https://vercel.com/docs" },
      { label: "LinkedIn creator tools", url: "https://www.linkedin.com/help/linkedin/answer/a524329" },
      { label: "Loom recording", url: "https://www.loom.com/" }
    ],
    buildPlan: ["Pick top 5 strongest projects", "Polish READMEs and demo links", "Write launch narrative", "Create recruiter talking points", "Do final mobile and link QA"],
    qualityBar: ["Clear before/after story", "Every link works", "No private keys or sensitive data", "Recruiter can understand your value in 30 seconds"],
    portfolioProof: ["Launch post", "Pinned portfolio link", "GitHub profile cleanup", "Short demo reel"]
  }
];

export function toDate(value: string) {
  return new Date(`${value}T12:00:00`);
}

export function formatRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric" });
  return `${formatter.format(toDate(start))}-${formatter.format(toDate(end))}`;
}

export function daysBetween(from: Date, to: Date) {
  const day = 1000 * 60 * 60 * 24;
  const cleanFrom = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const cleanTo = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.ceil((cleanTo.getTime() - cleanFrom.getTime()) / day);
}
