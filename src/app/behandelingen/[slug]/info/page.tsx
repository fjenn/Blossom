import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug || s.options?.some(opt => opt.slug === slug));

  if (!service) {
    return { title: `Behandeling niet gevonden | ${siteConfig.business.name}` };
  }

  return {
    title: `Over ${service.name} | ${siteConfig.business.name}`,
    description: service.infoParagraphs[0].slice(0, 160),
  };
}

export default async function ServiceInfoPage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug || s.options?.some(opt => opt.slug === slug));

  if (!service) {
    notFound();
  }

  const bookingSlug = service.options ? service.options[0].slug : service.slug;
  const bookingLink = `/boek?type=${bookingSlug}`;

  return (
    <div className="pt-[72px] overflow-x-hidden w-full">
      <section className="relative px-6 md:px-12 pt-8 md:pt-24 pb-20 md:pb-32 max-w-[720px] mx-auto">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <ScrollReveal stagger>
          <Link
            href={`/behandelingen/${slug}`}
            className="inline-flex items-center gap-2 text-clay hover:text-terracotta text-[14px] transition-all mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Terug naar {service.name.toLowerCase()}
          </Link>

          <div className="inline-block mb-6">
            <span className="bg-white/60 text-terracotta text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-terracotta/20 shadow-sm">
              Over deze behandeling
            </span>
          </div>

          <h1 className="text-[clamp(32px,5vw,56px)] font-serif leading-[1.15] mb-10 md:mb-14 text-dark-earth">
            {service.name}
          </h1>

          <div className="space-y-6 md:space-y-8 text-clay text-base md:text-[18px] leading-relaxed mb-14 md:mb-20">
            {service.infoParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href={bookingLink} className="btn-primary inline-block">
              Boek {service.name.toLowerCase()}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
