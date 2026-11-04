import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { Download } from "lucide-react";
import { navLinks } from "@/app/lib/navigation";

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

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-max px-4 pt-4 sm:px-6">
        <div className="nav-shell">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <Link href="/#home" className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white text-sm font-black text-black">
                SS
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-white sm:text-base">
                  Samuel Shaibu
                </div>
                <div className="hidden whitespace-nowrap text-xs text-[var(--muted)] sm:block">
                  Data Analyst | Data Scientist | Data Engineer
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-5 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3 text-[var(--muted)]">
              <Link
                href="/#resume"
                aria-label="Download a resume"
                className="hidden items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-bold text-white transition hover:border-[var(--teal)] hover:bg-white/5 sm:inline-flex"
              >
                <Download className="h-4 w-4" />
                Resumes
              </Link>

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="transition hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
