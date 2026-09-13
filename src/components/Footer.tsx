import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

const Footer = () => {
  const { business } = siteConfig;
  
  return (
    <footer className="bg-night-earth text-linen py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-8 h-8">
              <Image src="/favicon.svg" alt={`${business.name} Logo`} fill className="object-contain" />
            </div>
            <h2 className="font-serif text-[28px] md:text-[32px] !text-plaster tracking-tight leading-tight">{business.name}</h2>
          </div>
          <p className="max-w-[280px] opacity-80 text-[15px] leading-relaxed">
            Een plek voor diepe rust en verbinding in het hart van Antwerpen.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] mb-8 opacity-60">
            Navigatie
          </h3>
          <div className="flex flex-col gap-4 text-[15px]">
            <Link href="/#behandelingen" className="hover:text-terracotta transition-colors">Behandelingen</Link>
            <Link href="/over-els" className="hover:text-terracotta transition-colors">Over Els</Link>
            <Link href="/boek" className="hover:text-terracotta transition-colors">Boek een sessie</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] mb-8 opacity-60">
            Contact & Adres
          </h3>
          <div className="flex flex-col gap-6 text-[15px]">
            <div>
              <p>{business.address}</p>
              <p>{business.city}</p>
            </div>
            <div>
              <p className="opacity-60 mb-2">Contact:</p>
              <a href={`mailto:${business.email}`} className="hover:text-terracotta transition-colors">{business.email}</a>
              <a href={`tel:${business.phoneTel}`} className="block hover:text-terracotta transition-colors">{business.phone}</a>
            </div>
            <div>
              <p className="opacity-60 mb-2">Beschikbaarheid:</p>
              {business.hours.map((h, i) => (
                <p key={i}>
                  {h.day}: {h.morning}{h.afternoon ? ` & ${h.afternoon}` : ""}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-24 pt-8 border-t border-linen/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] opacity-40">
        <p>© {new Date().getFullYear()} {business.name} Antwerpen</p>
        <p className="hover:opacity-100 transition-opacity duration-300">
          Built by <a href="mailto:finn.jennen@gmail.com" className="underline underline-offset-4 decoration-linen/20 hover:text-terracotta hover:decoration-terracotta transition-colors">finn.jennen@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
