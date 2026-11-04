import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const strengths = [
  "I find out why a number looks wrong before it reaches anyone, and I'd rather report an honest 67% than a flattering 82%.",
  "I test whether a change is real before anyone acts on it: significance tests, confidence intervals and careful comparisons.",
  "I build the whole path myself, from the pipeline to the dashboard, so I know exactly where every number comes from.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
              <div>
                <div className="card overflow-hidden">
                  <Image
                    src="/samuel_pic3.jpg"
                    alt="Samuel Shaibu portrait"
                    width={420}
                    height={540}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="copy mt-4 text-sm">
                  Samuel Shaibu. Data analyst, data scientist and data engineer based in Vilnius,
                  Lithuania.
                </p>
              </div>

              <div>
                <div className="kicker">About</div>
                <h1 className="section-title mt-5">
                  I turn raw data into decisions, and I explain the reasoning behind them.
                </h1>

                <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted-strong)]">
                  <p>
                    I&apos;m a data scientist at Syno International, where I&apos;ve worked since 2024,
                    first as a data analyst. My work runs end to end: I build the pipelines that
                    bring survey data in, define the KPIs, test whether changes are real, and
                    build the Power BI dashboards that international clients use to make decisions
                    about their brands, prices and advertising.
                  </p>

                  <p>
                    My route into data wasn&apos;t a straight line. I studied mechanical engineering
                    at the University of Ibadan and wrote my thesis on machine learning for energy
                    grids, which later became a co-authored review paper in Renewable and
                    Sustainable Energy Reviews. I&apos;ve done freelance BI and data science work since
                    2020 for clients in energy and edtech.
                  </p>

                  <p>
                    I&apos;ve also spent a lot of time explaining data to people who don&apos;t build it. I
                    taught more than 40 students in Lagos, wrote over 18 peer-reviewed tutorials for
                    DataCamp, and I write about SQL, Python and data engineering on Medium and
                    Substack, including a free SQL course for people starting out.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {strengths.map((strength) => (
                    <div key={strength} className="card-muted p-5">
                      <p className="text-sm leading-6 text-[var(--muted-strong)]">{strength}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/work" className="button-primary">
                    Read the case studies
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/#resume" className="button-secondary">
                    Download a resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
