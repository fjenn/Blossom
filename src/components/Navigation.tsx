"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/lib/config";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { business } = siteConfig;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top on page change if there's no hash
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const navLinks = [
    { name: "Behandelingen", href: "/#behandelingen" },
    { name: "Over Els", href: "/over-els" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full h-[72px] z-[100] transition-all duration-300 flex items-center px-6 md:px-12",
        isScrolled || isMenuOpen
          ? "bg-plaster/92 backdrop-blur-md shadow-sm border-b border-sandstone/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 group z-[110]"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-12 shrink-0">
            <Image src="/favicon.svg" alt={`${business.name} Logo`} fill className="object-contain" />
          </div>
          <span className="font-serif text-[18px] md:text-[22px] text-dark-earth leading-none whitespace-nowrap">
            {business.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[12px] font-medium uppercase tracking-[0.15em] text-clay hover:text-dark-earth transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/boek" className="btn-primary py-2 px-6 normal-case text-[12px]">
            Boek nu
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-clay z-[110] p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={clsx(
              "absolute left-0 block w-full h-0.5 bg-current transition-all duration-300",
              isMenuOpen ? "top-3 rotate-45" : "top-1"
            )} />
            <span className={clsx(
              "absolute left-0 top-3 block w-full h-0.5 bg-current transition-opacity duration-300",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={clsx(
              "absolute left-0 block w-full h-0.5 bg-current transition-all duration-300",
              isMenuOpen ? "top-3 -rotate-45" : "top-5"
            )} />
          </div>
        </button>

        {/* Mobile Menu Backdrop */}
        <div
          className={clsx(
            "fixed inset-0 top-[72px] md:hidden z-[104] bg-plaster/90 backdrop-blur-[40px] backdrop-saturate-150 transition-opacity duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className={clsx(
          "fixed left-0 right-0 top-[72px] md:hidden z-[105] transition-all duration-300 ease-out origin-top",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}>
          <div className="bg-plaster/95 backdrop-blur-[40px] backdrop-saturate-150 border-b border-sandstone/20 shadow-[0_8px_24px_-12px_rgba(44,36,23,0.15)]">
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-3 border-b border-sandstone/20 last:border-b-0 text-[15px] font-medium text-dark-earth hover:text-terracotta transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/boek"
                className="btn-primary mt-4 py-3 text-[12px] w-full flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Boek nu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
