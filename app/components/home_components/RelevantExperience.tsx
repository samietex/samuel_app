import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/app/lib/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="kicker">Experience</div>
            <h2 className="section-title mt-5">A career built around data work that ships.</h2>
          </div>

          <Link href="/experience" className="button-secondary w-full sm:w-auto">
            Full experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[180px_1fr]"
            >
              <div className="text-sm font-bold text-[var(--teal)]">{item.period}</div>
              <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                </div>
                <p className="copy text-sm">{item.bullets[0]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
