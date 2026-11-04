import { Download, FileText } from "lucide-react";
import { resumes } from "@/app/lib/portfolio";

export default function Resumes() {
  return (
    <section id="resume" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="kicker">Resumes</div>
          <h2 className="section-title mt-5">Pick the resume for the role.</h2>
          <p className="subhead mt-5">
            Same person, same facts, ordered for the job you&apos;re hiring for. Each one is a
            two-page PDF.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {resumes.map((item) => (
            <article key={item.role} className="card flex flex-col p-6">
              <div className="inline-flex w-fit rounded-lg border border-white/10 bg-white/5 p-3 text-[var(--teal)]">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--muted-strong)]">{item.focus}</p>

              <ul className="mt-6 grid gap-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-[var(--teal)] pl-4 text-sm leading-6 text-[var(--muted)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <a href={item.file} download className="button-primary mt-8">
                <Download className="h-4 w-4" />
                Download {item.role} resume
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
