import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench
} from "lucide-react";
import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import { END_DATE, START_DATE, coreSources, coverageMap, daysBetween, formatRange, sprints, toDate, type Sprint } from "@/lib/plan";
import { ThemeToggle } from "@/components/theme-toggle";

const sideHustleLinks = [
  { label: "ChatGPT", url: "https://chatgpt.com/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/" },
  { label: "GitHub", url: "https://github.com/" },
  { label: "Chess.com", url: "https://www.chess.com/" },
  { label: "YouTube", url: "https://www.youtube.com/" },
  { label: "Educative.io", url: "https://www.educative.io/" }
];

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function currentSprintId() {
  const now = new Date();
  const active = sprints.find((sprint) => toDate(sprint.start) <= now && now <= toDate(sprint.end));
  if (active) return active.id;
  if (now < toDate(START_DATE)) return 1;
  return 15;
}

function remainingDays() {
  const days = daysBetween(new Date(), toDate(END_DATE)) + 1;
  return Math.min(Math.max(days, 0), 30);
}

function calendarDays() {
  const days: Date[] = [];
  const cursor = new Date(2026, 3, 27);
  const end = new Date(2026, 4, 26);

  while (cursor <= end) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function Metric({ label, value, icon: Icon, accent }: { label: string; value: string; icon: ElementType; accent: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <span className={clsx("grid size-10 place-items-center rounded-xl", accent)}>
          <Icon className="size-5" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-black tracking-tight">{value}</p>
    </div>
  );
}

function PillList({ items, tone = "neutral" }: { items: string[]; tone?: "neutral" | "mint" | "gold" | "coral" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-bold",
            tone === "neutral" && "bg-black/5 text-slate-600 dark:bg-white/10 dark:text-slate-300",
            tone === "mint" && "bg-brand-mint/20 text-emerald-700 dark:text-emerald-200",
            tone === "gold" && "bg-brand-gold/20 text-amber-700 dark:text-amber-200",
            tone === "coral" && "bg-brand-coral/20 text-red-700 dark:text-red-200"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ResourceLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-lg bg-white/70 px-2.5 py-1.5 text-xs font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-white dark:bg-black/20 dark:text-sky-300"
    >
      {label}
      <ExternalLink className="size-3" />
    </a>
  );
}

function DetailBlock({ title, icon: Icon, children }: { title: string; icon: ElementType; children: ReactNode }) {
  return (
    <section className="rounded-2xl bg-black/5 p-4 dark:bg-white/10">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="size-4 text-brand-coral" />
        <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{title}</h4>
      </div>
      {children}
    </section>
  );
}

function CoverageMapping() {
  return (
    <section className="mt-6 glass rounded-3xl p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-coral">Coverage mapping</p>
          <h2 className="mt-1 text-2xl font-black tracking-tight">What this plan teaches</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          The roadmap balances practical GenAI shipping with deeper LLM, RAG, agent, evaluation, transformer, and system-design fundamentals.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {coverageMap.map((item) => (
          <article key={item.topic} className="rounded-2xl bg-black/5 p-4 dark:bg-white/10">
            <h3 className="text-lg font-black tracking-tight">{item.topic}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.sprintIds.map((id) => (
                <a
                  key={id}
                  href={`#sprint-${id}`}
                  className="rounded-full bg-white/75 px-2.5 py-1 text-xs font-black text-slate-700 transition hover:-translate-y-0.5 hover:text-brand-blue dark:bg-black/20 dark:text-slate-200"
                >
                  S{id}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SprintCard({ sprint, active }: { sprint: Sprint; active: boolean }) {
  return (
    <article
      id={`sprint-${sprint.id}`}
      className={clsx(
        "strong-panel scroll-mt-8 rounded-3xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
        active && "ring-2 ring-brand-coral"
      )}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-coral">Sprint {sprint.id} · {formatRange(sprint.start, sprint.end)}</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight">{sprint.title}</h3>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300">{sprint.outcome}</p>
        </div>
        <span className={clsx("w-fit rounded-full px-3 py-1 text-xs font-black", active ? "bg-brand-coral/20 text-red-700 dark:text-red-200" : "bg-black/5 text-slate-600 dark:bg-white/10 dark:text-slate-300")}>
          {active ? "Active sprint" : "2-day sprint"}
        </span>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <DetailBlock title="Skills" icon={Target}>
          <PillList items={sprint.skills} tone="mint" />
        </DetailBlock>
        <DetailBlock title="Tools and Technologies" icon={Wrench}>
          <PillList items={sprint.stack} tone="gold" />
        </DetailBlock>
        <DetailBlock title="AI Concepts" icon={Sparkles}>
          <PillList items={sprint.aiConcepts} tone="coral" />
        </DetailBlock>
        <DetailBlock title="Sources" icon={BookOpen}>
          <div className="flex flex-wrap gap-2">
            {sprint.sources.map((source) => (
              <ResourceLink key={source.url} {...source} />
            ))}
          </div>
        </DetailBlock>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <DetailBlock title="Build Plan" icon={Layers3}>
          <ol className="grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {sprint.buildPlan.map((item, index) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-black text-white dark:bg-white dark:text-ink">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </DetailBlock>
        <DetailBlock title="Quality Bar" icon={ShieldCheck}>
          <ul className="grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {sprint.qualityBar.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock title="Portfolio Proof" icon={Rocket}>
          <ul className="grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {sprint.portfolioProof.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>
      </div>
    </article>
  );
}

export function BuilderDashboard() {
  const activeSprintId = currentSprintId();
  const activeSprint = sprints.find((sprint) => sprint.id === activeSprintId) ?? sprints[0];
  const days = calendarDays();

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="glass overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-coral">30-Day GenAI Builder Plan</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Build 15 GenAI projects in 30 focused days.</h1>
              <div className="mt-6 max-w-3xl rounded-2xl bg-black/5 p-4 dark:bg-white/10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Daily links</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sideHustleLinks.map((link) => (
                    <ResourceLink key={link.url} {...link} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex justify-start lg:justify-end">
                <ThemeToggle />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Metric label="Roadmap length" value="30 days" icon={CalendarDays} accent="bg-brand-blue/10 text-brand-blue" />
                <Metric label="Total sprints" value="15" icon={Target} accent="bg-brand-mint/20 text-emerald-600" />
                <Metric label="Current sprint" value={`#${activeSprint.id}`} icon={Sparkles} accent="bg-brand-coral/20 text-red-500" />
                <Metric label="Days remaining" value={`${remainingDays()}`} icon={Rocket} accent="bg-brand-gold/20 text-amber-600" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 glass rounded-3xl p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-coral">Reference shelf</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight">Core sources for the full month</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Docs and references for planning, building, evaluating, and deploying the sprint projects.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {coreSources.map((source) => (
              <ResourceLink key={source.url} {...source} />
            ))}
          </div>
        </section>

        <CoverageMapping />

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-coral">Merged dashboard + calendar</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight">Roadmap timeline</h2>
              </div>
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">Apr 27-May 26</span>
            </div>
            <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {days.map((day) => {
                const key = dateKey(day);
                const sprint = sprints.find((item) => item.start <= key && key <= item.end);
                const active = sprint?.id === activeSprintId;

                return (
                  <a
                    key={key}
                    href={sprint ? `#sprint-${sprint.id}` : undefined}
                    className={clsx(
                      "min-h-24 rounded-2xl border p-3 transition hover:-translate-y-1 hover:shadow-soft",
                      active ? "border-brand-coral bg-brand-coral/20" : "border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/10"
                    )}
                  >
                    <p className="text-sm font-black">{day.toLocaleDateString("en", { month: "short", day: "numeric" })}</p>
                    {sprint && (
                      <>
                        <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">S{sprint.id}</p>
                        <p className="mt-1 line-clamp-2 text-xs font-bold leading-4">{sprint.title}</p>
                      </>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <aside className="glass rounded-3xl p-5">
            <h2 className="mt-1 text-2xl font-black tracking-tight">Sprint {activeSprint.id}: {activeSprint.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{activeSprint.outcome}</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl bg-black/5 p-4 dark:bg-white/10">
                <p className="text-sm font-black">Immediate learning stack</p>
                <div className="mt-3">
                  <PillList items={activeSprint.stack} tone="gold" />
                </div>
              </div>
              <div className="rounded-2xl bg-black/5 p-4 dark:bg-white/10">
                <p className="text-sm font-black">Best first sources</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSprint.sources.slice(0, 4).map((source) => (
                    <ResourceLink key={source.url} {...source} />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 grid gap-5">
          {sprints.map((sprint) => (
            <SprintCard key={sprint.id} sprint={sprint} active={sprint.id === activeSprintId} />
          ))}
        </section>
      </div>
    </main>
  );
}
