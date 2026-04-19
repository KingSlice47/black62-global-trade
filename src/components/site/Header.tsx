import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/black62-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Commodities", href: "#commodities" },
  { label: "Logistics", href: "#logistics" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkHref = (h: string) => (isHome ? h : `/${h}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Black62 Commodities home">
          <img src={logo} alt="Black62 Commodities logo" className="h-12 w-auto" width={120} height={48} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={linkHref(l.href)}
              className="text-sm font-medium text-platinum/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={linkHref("#contact")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-teal"
          >
            Request a Quote
          </a>
        </nav>

        <button
          className="lg:hidden text-platinum p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container-x flex flex-col py-4 gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={linkHref(l.href)}
                onClick={() => setOpen(false)}
                className="py-3 text-platinum/90 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={linkHref("#contact")}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
