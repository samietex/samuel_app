import { BarChart3, BrainCircuit, DatabaseZap, PenLine } from "lucide-react";
import { pillars } from "@/app/lib/portfolio";

const icons = { chart: BarChart3, brain: BrainCircuit, database: DatabaseZap, pen: PenLine };

export default function About() {
  return (
    <section id="work" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="kicker">What I do</div>
          <h2 className="section-title mt-5">From raw data to the decision.</h2>
          <p className="subhead mt-5">
            I own the whole path: build the pipeline, define the KPI, test whether a change is
            real, put it in a dashboard people can use, and explain what it means.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.icon as keyof typeof icons];

            return (
              <article key={pillar.title} className="card p-6">
                <div className={`mb-8 inline-flex rounded-lg border border-white/10 bg-white/5 p-3 ${pillar.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="copy mt-4 text-sm">{pillar.summary}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
