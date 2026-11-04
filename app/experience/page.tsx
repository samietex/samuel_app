import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { certifications, education, experiences, publication, resumes } from "@/app/lib/portfolio";

export const metadata: Metadata = {
  title: "Experience | Samuel Shaibu",
  description:
    "Samuel Shaibu's experience as a data scientist and data analyst at Syno International, technical writer at DataCamp, instructor at GOMYCODE and freelance BI specialist.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Experience</div>
            <h1 className="section-title mt-5 max-w-5xl">
              Data work across analysis, statistics, engineering and teaching.
            </h1>
            <p className="subhead mt-6 max-w-3xl">
              Every role, with more detail than fits on a two-page resume. For the stories behind
              the bullets, see the case studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {resumes.map((item) => (
                <a key={item.role} href={item.file} download className="button-secondary">
                  <Download className="h-4 w-4" />
                  {item.role} resume
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="space-y-4">
              {experiences.map((item) => (
                <article key={`${item.company}-${item.role}`} className="card p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{item.role}</h2>
                      <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                        {item.company} | {item.context}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-[var(--teal)]">{item.period}</span>
                  </div>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="border-l-2 border-[var(--teal)] pl-4 text-sm leading-7 text-[var(--muted-strong)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="container-max grid gap-10 px-4 sm:px-6 lg:grid-cols-3">
            <div>
              <div className="kicker">Education</div>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <article key={item.school} className="card-muted p-5">
                    <h3 className="text-lg font-bold text-white">{item.school}</h3>
                    <p className="mt-1 text-sm text-[var(--muted-strong)]">{item.detail}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--teal)]">{item.period}</p>
                    {item.note ? <p className="copy mt-3 text-sm">{item.note}</p> : null}
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker">Certifications</div>
              <div className="mt-6 space-y-4">
                {certifications.map((item) => (
                  <article key={item.title} className="card-muted p-5">
                    <p className="text-sm leading-6 text-[var(--muted-strong)]">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--teal)] hover:text-white"
                      >
                        View certificate
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="kicker">Publication</div>
              <article className="card-muted mt-6 p-5">
                <p className="text-sm font-semibold leading-6 text-white">{publication.title}</p>
                <p className="copy mt-2 text-sm">{publication.venue}</p>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--teal)] hover:text-white"
                >
                  View publication
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
