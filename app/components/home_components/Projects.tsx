import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/app/lib/portfolio";

function ArchitectureDiagram() {
  const nodes = [
    { x: 14, y: 18, w: 108, h: 70, label: "Sources", sub: "Files · APIs · DBs", color: "rgba(94,234,212,0.10)" },
    { x: 157, y: 18, w: 108, h: 70, label: "Glue ETL", sub: "PySpark · Crawlers", color: "rgba(96,165,250,0.10)" },
    { x: 300, y: 18, w: 108, h: 70, label: "S3 Storage", sub: "Bronze → Gold", color: "rgba(94,234,212,0.10)" },
    { x: 443, y: 18, w: 108, h: 70, label: "Athena + ML", sub: "SQL · scikit-learn", color: "rgba(96,165,250,0.10)" },
    { x: 586, y: 18, w: 108, h: 70, label: "BI / Docs", sub: "Power BI · Reports", color: "rgba(94,234,212,0.10)" },
  ];

  const arrowY = 18 + 35;

  return (
    <div className="card overflow-hidden p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white">Pipeline pattern</div>
          <div className="mt-1 text-xs text-[var(--muted)]">
            How I architect data products: reliable flow, visible decisions, useful outputs.
          </div>
        </div>
        <span className="tag">Architecture</span>
      </div>

      <svg
        viewBox="0 0 712 220"
        role="img"
        aria-label="Data pipeline: Sources to Glue ETL to S3 Storage to Athena and ML to BI and Docs, with orchestration, validation, and infrastructure cross-cutting concerns"
        className="h-auto w-full"
      >
        <defs>
          <marker id="arch-arr" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0,0 L8,4 L0,8 Z" fill="#5eead4" />
          </marker>
        </defs>

        {/* Arrows between pipeline stages */}
        {nodes.slice(0, -1).map((node, index) => {
          const next = nodes[index + 1];
          return (
            <line
              key={`${node.label}-arrow`}
              x1={node.x + node.w + 8}
              y1={arrowY}
              x2={next.x - 12}
              y2={arrowY}
              stroke="#5eead4"
              strokeOpacity="0.75"
              strokeWidth="2"
              markerEnd="url(#arch-arr)"
            />
          );
        })}

        {/* Pipeline stage nodes */}
        {nodes.map((node) => (
          <g key={node.label}>
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8" fill={node.color} stroke="rgba(255,255,255,0.18)" />
            <text x={node.x + node.w / 2} y={node.y + 30} textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="700">
              {node.label}
            </text>
            <text x={node.x + node.w / 2} y={node.y + 50} textAnchor="middle" fill="#9aa4b2" fontSize="10">
              {node.sub}
            </text>
          </g>
        ))}

        {/* Cross-cutting concerns band */}
        <rect x="14" y="108" width="680" height="72" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <line x1="240" y1="108" x2="240" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="467" y1="108" x2="467" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* ORCHESTRATE */}
        <text x="127" y="126" textAnchor="middle" fill="#5eead4" fontSize="8" fontWeight="700" letterSpacing="0.12em">ORCHESTRATE</text>
        <text x="127" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Step Functions</text>
        <text x="127" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">EventBridge Scheduler</text>

        {/* VALIDATE */}
        <text x="353" y="126" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="700" letterSpacing="0.12em">VALIDATE</text>
        <text x="353" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Quality Checks</text>
        <text x="353" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">Logging · Monitoring</text>

        {/* INFRASTRUCTURE */}
        <text x="580" y="126" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="700" letterSpacing="0.12em">INFRASTRUCTURE</text>
        <text x="580" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Terraform · IAM</text>
        <text x="580" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">Policies · Secrets</text>
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="kicker">Case studies</div>
            <h2 className="section-title mt-5">Client work and projects, not just repository links.</h2>
            <p className="subhead mt-5">
              Each one says what the problem was, what I did and what changed. Open a case study for
              the full story.
            </p>
          </div>

          <Link href="/work" className="button-secondary w-full sm:w-auto">
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.slug} className="card flex flex-col p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">{item.label}</span>
                    <span className="tag">{item.kind}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white">{item.title}</h3>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${item.title} on GitHub`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[var(--muted)] transition hover:border-[var(--teal)] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <p className="copy mt-5 text-sm">{item.summary}</p>

              <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                What changed
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">{item.outcome[0]}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.slice(0, 6).map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>

              <Link href={`/work#${item.slug}`} className="mt-auto pt-7 text-sm font-bold text-[var(--teal)] hover:text-white">
                Read the case study
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-4">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
