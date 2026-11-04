import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { ArrowUpRight, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/samuel-shaibu/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/samietex",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://medium.com/@Samietex",
    label: "Medium",
    icon: FaMedium,
  },
  {
    href: "https://aaboutdata.substack.com/",
    label: "Substack",
    icon: BsSubstack,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="container-max px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="kicker">Contact</div>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Need someone who can build the data system and explain it clearly?
            </h2>
            <p className="copy mt-5 max-w-2xl text-base">
              I&apos;m open to data analyst, data scientist and data engineer
              roles where reliable data, sound statistics and clear
              communication all matter.
            </p>

            <a
              href="mailto:shaibu.samuel@yahoo.com"
              className="button-primary mt-8 w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              shaibu.samuel@yahoo.com
            </a>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-3 text-[var(--muted)]">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="tag transition hover:border-[var(--teal)] hover:text-white"
                  >
                    <Icon size={14} />
                    {item.label}
                  </a>
                );
              })}
            </div>

            <Link href="/contact" className="button-secondary w-full sm:w-auto">
              Contact details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.14em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/#work">Work</Link>
            <Link href="/work">Case studies</Link>
            <Link href="/#articles">Writing</Link>
            <Link href="/#skills">Stack</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/#resume">Resumes</Link>
            <Link href="/now">Now</Link>
          </div>

          <div>Copyright {new Date().getFullYear()} Samuel Shaibu</div>
        </div>
      </div>
    </footer>
  );
}
