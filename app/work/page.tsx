import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { caseStudies } from "@/app/lib/portfolio";

export const metadata: Metadata = {
  title: "Case studies | Samuel Shaibu",
  description:
    "Detailed case studies of Samuel Shaibu's data analysis, data science and data engineering work: what the problem was, what he did and what changed.",
};

export default function WorkPage() {
  const groups = ["Client work", "Personal project"] as const;

  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Case studies</div>
            <h1 className="section-title mt-5 max-w-5xl">
              The work behind the resume, in more detail.
            </h1>
            <p className="subhead mt-6 max-w-3xl">
              What the problem was, what I did, what changed and what I learned.
            </p>

            <nav className="mt-10 flex flex-wrap gap-2" aria-label="Case studies">
              {caseStudies.map((item) => (
                <a key={item.slug} href={`#${item.slug}`} className="tag transition hover:border-[var(--teal)] hover:text-white">
                  {item.label}: {item.title.split(":")[0]}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {groups.map((group) => (
          <section key={group} className="section-pad border-b border-white/10">
            <div className="container-max px-4 sm:px-6">
              <div className="kicker">{group === "Client work" ? "Client work" : "Personal projects"}</div>

              <div className="mt-8 space-y-6">
                {caseStudies
                  .filter((item) => item.kind === group)
                  .map((item) => (
                    <article key={item.slug} id={item.slug} className="card scroll-mt-32 p-6 sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="tag">{item.label}</span>
                          <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                            {item.title}
                          </h2>
                          <p className="subhead mt-4 max-w-3xl">{item.summary}</p>
                        </div>

                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="button-secondary w-full shrink-0 sm:w-auto"
                          >
                            View on GitHub
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>

                      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--rose)]">
                            The situation
                          </div>
                          <p className="copy mt-3 text-sm">{item.context}</p>

                          <div className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                            What changed
                          </div>
                          <ul className="mt-3 grid gap-3">
                            {item.outcome.map((line) => (
                              <li key={line} className="border-l-2 border-[var(--teal)] pl-4 text-sm leading-7 text-[var(--muted-strong)]">
                                {line}
                              </li>
                            ))}
                          </ul>

                          {item.learned ? (
                            <>
                              <div className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-[var(--amber)]">
                                What I took from it
                              </div>
                              <p className="mt-3 text-sm italic leading-7 text-[var(--muted-strong)]">{item.learned}</p>
                            </>
                          ) : null}
                        </div>

                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--blue)]">
                            What I did
                          </div>
                          <ul className="mt-3 grid gap-3">
                            {item.did.map((line) => (
                              <li key={line} className="card-muted p-4 text-sm leading-7 text-[var(--muted-strong)]">
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {item.stack.map((tool) => (
                          <span key={tool} className="tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
