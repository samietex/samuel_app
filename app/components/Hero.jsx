"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";

import { headline, proofPoints } from "@/app/lib/portfolio";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:pt-36">
      <div className="container-max">
        <div className="grid min-h-[calc(100vh-9rem)] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="kicker">{headline}</div>

            <h1 className="display-title mt-6 max-w-5xl">
              Turning raw data into decisions people can trust.
            </h1>

            <p className="subhead mt-7 max-w-3xl">
              I own data work end to end: the pipeline, the KPI, the statistical
              test and the dashboard. Then I explain what it means, so technical
              and business teams can act on it.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/work" className="button-primary">
                View Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/articles" className="button-secondary">
                <FileText className="h-4 w-4" />
                Read Articles
              </Link>
              <Link href="/#resume" className="button-secondary">
                <Download className="h-4 w-4" />
                Download a Resume
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-l border-white/15 pl-4">
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-sm leading-5 text-[var(--muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/samuel_portrait.jpg"
                  alt="Samuel Shaibu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="card-muted p-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                  Current focus
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  Data analysis, data science and data engineering: SQL, Python,
                  Power BI, statistics, ML and AWS pipelines.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--amber)]">
                  Based in
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  Vilnius, Lithuania. Working across analytics, data science
                  and data engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
