import type { Metadata } from "next";
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
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Shared by link only: not in the nav or footer, and kept out of search results.
export const metadata: Metadata = {
  title: "Birthday Wishlist | Samuel Shaibu",
  description: "A few ideas, in case you were wondering what to get me.",
  robots: { index: false, follow: false },
};

type Wish = { item: string; note?: string; icon: LucideIcon };

const wishes: Wish[] = [
  { item: "A gym bag", icon: Backpack },
  {
    item: "Fundamentals of Data Engineering",
    note: "The book by Joe Reis & Matt Housley",
    icon: BookOpen,
  },
  { item: "Any cat toy for Sapphy", note: "She will love you forever", icon: Cat },
  { item: "Reed diffuser", icon: Flower2 },
  { item: "Air fryer", icon: CookingPot },
  { item: "Running shoes", note: "Any pair, size 43/44 EUR", icon: Footprints },
  { item: "Running socks", icon: Footprints },
  { item: "Socks with cat patterns", icon: Cat },
  { item: "Mechanical keyboard", icon: Keyboard },
  { item: "Gift cards or vouchers", icon: Gift },
  { item: "Cash", icon: Banknote },
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
              {wishes.map(({ item, note, icon: Icon }) => (
                <li key={item} className="card flex items-start gap-4 p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[var(--teal)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-white">{item}</h3>
                    {note ? (
                      <p className="mt-2 text-sm text-[var(--muted)]">{note}</p>
                    ) : null}
                  </div>
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
