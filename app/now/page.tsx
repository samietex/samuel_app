import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getRecap } from "@/app/lib/recap";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Tutorials moved from samietex into the all-about-data-and-more org, so label by repo name.
const TUTORIAL_REPOS = ["Python_Tutorial", "SQL_Tutorial", "Streamlit_Tutorial"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function repoLabel(repo: string) {
  const [, name] = repo.split("/");
  return TUTORIAL_REPOS.includes(name) ? "Tutorial" : "Project";
}

function buildSummaryLine(totalCommits: number, deLabCount: number, tutorialCount: number) {
  const parts: string[] = [];
  if (deLabCount > 0) {
    parts.push(`${deLabCount} project${deLabCount === 1 ? "" : "s"}`);
  }
  if (tutorialCount > 0) {
    parts.push(`${tutorialCount} tutorial repo${tutorialCount === 1 ? "" : "s"}`);
  }
  const scope = parts.length > 0 ? parts.join(" and ") : "active repos";
  return `${totalCommits} commit${totalCommits === 1 ? "" : "s"} across ${scope} this month.`;
}

export default function NowPage() {
  const recap = getRecap();

  const writingPosts = recap
    ? [
        ...recap.writing.substack.map((post) => ({ ...post, platform: "Substack" })),
        ...recap.writing.medium.map((post) => ({ ...post, platform: "Medium" })),
      ].sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    : [];

  const repoNames = recap
    ? Array.from(
        new Set([
          ...Object.keys(recap.building.commits_by_repo),
          ...recap.building.prs_opened.map((pr) => pr.repo),
        ])
      )
    : [];

  const repoEntries = repoNames
    .map((repo) => ({
      repo,
      count: recap?.building.commits_by_repo[repo]?.length ?? 0,
      label: repoLabel(repo),
      prs: recap?.building.prs_opened.filter((pr) => pr.repo === repo) ?? [],
    }))
    .sort((a, b) => b.count - a.count);

  const deLabCount = repoEntries.filter((entry) => entry.label === "Project").length;
  const tutorialCount = repoEntries.length - deLabCount;
  const totalCommits = recap?.building.total_commits ?? 0;

  const summaryLine =
    recap && repoEntries.length > 0
      ? buildSummaryLine(totalCommits, deLabCount, tutorialCount)
      : null;

  const periodLabel = recap
    ? `${formatDate(recap.period.since)} - ${formatDate(recap.period.until)}`
    : null;

  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Now</div>
            <h1 className="section-title mt-5 max-w-5xl">
              What I have been building and writing lately.
            </h1>
            <p className="subhead mt-6 max-w-3xl">
              {periodLabel
                ? `A rolling 30-day recap of public writing and GitHub activity, covering ${periodLabel}.`
                : "A rolling 30-day recap of public writing and GitHub activity."}
            </p>
          </div>
        </section>

        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Writing</div>
            <h2 className="section-title mt-5 text-3xl sm:text-4xl">Recent posts</h2>

            {writingPosts.length > 0 ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {writingPosts.map((post) => (
                  <article key={post.link} className="card p-6">
                    <span className="tag">{post.platform}</span>
                    <h3 className="mt-5 text-xl font-bold leading-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                      {formatDate(post.published)}
                    </p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-white"
                    >
                      Read
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="card-muted mt-8 p-6">
                <p className="text-sm leading-6 text-[var(--muted-strong)]">
                  {recap
                    ? "Nothing new on Substack or Medium in the last 30 days. The full archive is on the Writing page."
                    : "Recap data is not available yet. Check back soon."}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Building</div>
            <h2 className="section-title mt-5 text-3xl sm:text-4xl">Recent activity</h2>
            {summaryLine ? <p className="copy mt-4 text-base">{summaryLine}</p> : null}

            {repoEntries.length > 0 ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {repoEntries.map((entry) => (
                  <article key={entry.repo} className="card p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="tag">{entry.label}</span>
                        <h3 className="mt-4 text-lg font-bold text-white">
                          {entry.repo.split("/")[1]}
                        </h3>
                      </div>
                      <a
                        href={`https://github.com/${entry.repo}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${entry.repo} on GitHub`}
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[var(--muted)] transition hover:border-[var(--teal)] hover:text-white"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="copy mt-4 text-sm">
                      {entry.count} commit{entry.count === 1 ? "" : "s"}
                    </p>

                    {entry.prs.length > 0 ? (
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--blue)]">
                          PRs opened
                        </div>
                        <ul className="mt-3 space-y-2">
                          {entry.prs.map((pr) => (
                            <li key={pr.url}>
                              <a
                                href={pr.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-[var(--muted-strong)] transition hover:text-white"
                              >
                                #{pr.number} {pr.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <div className="card-muted mt-8 p-6">
                <p className="text-sm leading-6 text-[var(--muted-strong)]">
                  {recap
                    ? "No commits across project or tutorial repos in the last 30 days."
                    : "Recap data is not available yet. Check back soon."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
