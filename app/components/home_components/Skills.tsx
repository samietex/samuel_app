import { skillGroups } from "@/app/lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="kicker">Tech stack</div>
            <h2 className="section-title mt-5">Grouped by how the work gets done.</h2>
            <p className="subhead mt-5">
              No percentage bars. The stack is organised by the job it does: analysis,
              statistics, modelling, pipelines and writing.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="card p-6">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
