import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  Backpack,
  BookOpen,
  Cat,
  Flower2,
  CookingPot,
  Footprints,
  Gift,
  Keyboard,
  Banknote,
  Car,
  ExternalLink,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Shared by link only: not in the nav or footer, and kept out of search results.
export const metadata: Metadata = {
  title: "Birthday Wishlist | Samuel Shaibu",
  description: "A few ideas, in case you were wondering what to get me.",
  robots: { index: false, follow: false },
};

type Wish = {
  item: string;
  note?: string;
  icon: LucideIcon;
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
};

const wishes: Wish[] = [
  {
    item: "Fundamentals of Data Engineering",
    note: "The book by Joe Reis & Matt Housley",
    icon: BookOpen,
    image: {
      src: "/wishlist/fundamentals-of-data-engineering.png",
      alt: "Cover of Fundamentals of Data Engineering by Joe Reis and Matt Housley",
    },
    link: { href: "https://www.amazon.com/dp/1098108302", label: "View on Amazon" },
  },
  {
    item: "Mechanical keyboard",
    note: "Something like the AULA S99",
    icon: Keyboard,
    link: { href: "https://www.amazon.com/dp/B0DZ28ZGYL", label: "View on Amazon" },
  },
  {
    item: "Book vouchers",
    note: "A knygos.lt gift voucher",
    icon: Gift,
    link: {
      href: "https://www.knygos.lt/lt/dovanu-kuponai/knygos-lt-dovanu-kuponas-atsispausdink-pats/",
      label: "Get a voucher",
    },
  },
  { item: "A gym bag", icon: Backpack },
  { item: "Any cat toy for Sapphy", note: "She will love you forever", icon: Cat },
  { item: "Reed diffuser", icon: Flower2 },
  { item: "Air fryer", icon: CookingPot },
  { item: "Running shoes", note: "Any pair, size 43/44 EUR", icon: Footprints },
  { item: "Running socks", icon: Footprints },
  { item: "Socks with cat patterns", icon: Cat },
  { item: "Other gift cards or vouchers", icon: Gift },
  {
    item: "Cash",
    note: "Via Revolut",
    icon: Banknote,
    link: { href: "https://revolut.me/sshaibu", label: "revolut.me/sshaibu" },
  },
  { item: "A car", note: "Just kidding. Unless...", icon: Car },
];

export default function WishlistPage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Birthday</div>
            <h1 className="section-title mt-5 max-w-5xl">My birthday wishlist</h1>
            <p className="subhead mt-6 max-w-3xl">
              A few friends asked what I would like, so here are some ideas.
            </p>

            <div className="card-muted mt-8 flex max-w-3xl items-start gap-4 p-6">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[var(--amber)]" />
              <p className="text-sm leading-6 text-[var(--muted-strong)]">
                No pressure at all. You don&apos;t have to get anything on this list, or anything
                at all. Celebrating with you is the best part.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Ideas</div>
            <h2 className="section-title mt-5 text-3xl sm:text-4xl">The list</h2>

            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {wishes.map(({ item, note, icon: Icon, image, link }) => (
                <li key={item} className="card flex flex-col p-6">
                  {image ? (
                    <div className="mb-5 flex justify-center rounded-lg bg-white p-4">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={725}
                        height={962}
                        className="h-48 w-auto"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[var(--teal)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight text-white">{item}</h3>
                      {note ? (
                        <p className="mt-2 text-sm text-[var(--muted)]">{note}</p>
                      ) : null}
                    </div>
                  </div>

                  {link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[var(--teal)] transition hover:text-white"
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
