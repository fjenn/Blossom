"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const serviceIcons: Record<string, React.ReactNode> = {
  integratieve: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  ),
  "crystal-healing": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  "holistic-pulsing": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l3-9 4 18 3-9h6" />
    </svg>
  ),
  "lomi-lomi": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 11.5c-.5 2.5-2 4.5-4 6.5" />
      <path d="M14.5 4c.5 1.5.5 3 .5 4.5" />
    </svg>
  ),
};

function ServiceSelector({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div className="pt-[72px]">
      <section className="relative px-6 md:px-12 pt-4 md:pt-24 pb-16 md:pb-24 max-w-[1000px] mx-auto text-center overflow-x-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <ScrollReveal stagger>
          <div className="inline-block mb-6">
            <span className="bg-white/60 text-terracotta text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-terracotta/20 shadow-sm">
              Afspraak inplannen
            </span>
          </div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-serif mb-6 text-dark-earth">Kies je behandeling</h1>
          <p className="text-clay text-base md:text-[18px] max-w-[600px] mx-auto mb-8 md:mb-16 leading-relaxed italic">
            Selecteer de massage die bij je past, en kies daarna een moment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[800px] mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1} className="h-full">
              <div
                onClick={() => onSelect(service.slug)}
                className="w-full h-full flex flex-col text-left bg-white/60 backdrop-blur-md border border-sandstone/30 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-md hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full aspect-video rounded-[1rem] overflow-hidden mb-6 ring-1 ring-sandstone/20">
                  <Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" placeholder="blur" />
                </div>
                <div className="flex justify-between items-start gap-2 mb-2">
                   <h3 className="font-serif text-[20px] md:text-[22px] text-dark-earth leading-tight">{service.name}</h3>
                   <div className="text-terracotta opacity-70 group-hover:opacity-100 transition-opacity mt-1">
                     {serviceIcons[service.id]}
                   </div>
                </div>
                <p className="text-clay text-[14px] leading-relaxed mb-4">{service.description}</p>
                {service.options ? (
                  <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    {service.options.map((opt) => (
                      <button
                        key={opt.slug}
                        onClick={(e) => { e.stopPropagation(); onSelect(opt.slug); }}
                        className="text-[13px] px-3 py-1.5 rounded-full border border-sandstone/40 bg-white/60 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors cursor-pointer"
                      >
                        <span className="font-medium">{opt.duration}</span>
                        <span className="opacity-60 mx-1.5">·</span>
                        <span>€{opt.price}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[13px] mt-auto">
                    <span className="text-terracotta font-medium">{service.duration}</span>
                    <span className="text-sandstone">·</span>
                    <span className="text-clay">€{service.price}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-[600px] mx-auto mt-12 md:mt-16 bg-white/50 backdrop-blur-md border border-sandstone/20 rounded-[1.5rem] p-6 md:p-8 text-left space-y-4">
            <h3 className="font-serif text-[18px] text-dark-earth">Hoe werkt betalen?</h3>
            <ul className="text-clay text-[14px] leading-relaxed space-y-2">
              <li className="flex gap-2">
                <span className="text-terracotta mt-0.5 shrink-0">•</span>
                <span>Bij het boeken betaal je online een <strong className="text-dark-earth">aanbetaling van €25</strong>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta mt-0.5 shrink-0">•</span>
                <span>Het restbedrag betaal je <strong className="text-dark-earth">ter plaatse</strong> — cash of via overschrijving.</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-sandstone/15">
              <p className="text-clay/70 text-[13px] leading-relaxed">
                <strong className="text-clay">Annuleringsbeleid:</strong> Bij annulering minstens 2 dagen op voorhand wordt je aanbetaling van €25 automatisch terugbetaald.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function BookingEmbedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceType = searchParams.get("type");

  // Validate slug exists in services or their options
  const isValidSlug = (slug: string) =>
    services.some(s => s.slug === slug || s.options?.some(o => o.slug === slug));

  const initialSlug = serviceType && isValidSlug(serviceType) ? serviceType : null;
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug);
  const [calError, setCalError] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const { calUsername, calEmbedOrigin, calJsUrl } = siteConfig.business;
  const calLink = selectedSlug
    ? `${calUsername}/${selectedSlug}`
    : calUsername;

  const namespace = selectedSlug || "default";

  useEffect(() => {
    if (!selectedSlug) return;
    let isMounted = true;
    (async function () {
      try {
        const cal = await getCalApi({ namespace, embedJsUrl: calJsUrl });
        if (!isMounted) return;
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            if (isMounted) setBookingConfirmed(true);
          },
        });
        setCalError(false);
      } catch (error) {
        console.error("Failed to load Cal.com:", error);
        if (isMounted) setCalError(true);
      }
    })();
    return () => { isMounted = false; };
  }, [namespace, selectedSlug, calJsUrl]);

  if (!selectedSlug) {
    return (
      <ServiceSelector
        onSelect={(slug) => {
          setSelectedSlug(slug);
          router.replace(`/boek?type=${slug}`, { scroll: true });
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  // Find the exact service or option being booked
  const parentService = services.find(
    (s) => s.slug === selectedSlug || s.options?.some((o) => o.slug === selectedSlug)
  );

  const selectedOption = parentService?.options?.find(o => o.slug === selectedSlug);
  const displayName = parentService?.name || "";
  const displayDuration = selectedOption?.duration || parentService?.duration || "";
  const displayPrice = selectedOption?.price || parentService?.price || 0;
  const remainingAmount = Number(displayPrice) - 25;

  if (bookingConfirmed) {
    return (
      <div className="pt-[72px] overflow-x-hidden w-full">
        <section className="relative px-6 md:px-12 pt-8 md:pt-32 pb-24 md:pb-32 max-w-[700px] mx-auto text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <ScrollReveal stagger>
            <div className="inline-block mb-6">
              <span className="bg-terracotta/10 text-terracotta text-[11px] font-medium uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-terracotta/20">
                Bevestigd
              </span>
            </div>

            <h1 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-4">
              Je afspraak is geboekt!
            </h1>
            <p className="text-clay text-base md:text-[18px] max-w-[500px] mx-auto mb-10 leading-relaxed italic">
              Je ontvangt een bevestigingsmail met alle details.
            </p>

            <div className="bg-white/60 backdrop-blur-md border border-sandstone/20 rounded-[2rem] p-8 md:p-10 text-left max-w-[500px] mx-auto space-y-6">
              <div>
                <h2 className="font-serif text-[22px] md:text-[26px] text-dark-earth mb-1">{displayName}</h2>
                <p className="text-clay text-[14px]">{displayDuration} · €{displayPrice}</p>
              </div>

              <div className="border-t border-sandstone/20 pt-6 space-y-3">
                <div className="flex justify-between text-[14px]">
                  <span className="text-clay">Aanbetaling (online betaald)</span>
                  <span className="text-dark-earth font-medium">€25</span>
                </div>
                <div className="flex justify-between text-[16px]">
                  <span className="text-dark-earth font-medium">Nog te betalen ter plaatse</span>
                  <span className="text-terracotta font-serif text-[20px]">€{remainingAmount}</span>
                </div>
              </div>

              <div className="bg-warm-sand/30 rounded-xl p-4">
                <p className="text-clay text-[13px] leading-relaxed">
                  Je betaalt het restbedrag ter plaatse — cash of via overschrijving.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-sandstone/10 max-w-[500px] mx-auto">
              <p className="text-clay/60 text-[13px] leading-relaxed">
                <strong className="text-clay/80">Annuleringsbeleid:</strong> Bij annulering minstens 2 dagen op voorhand wordt je aanbetaling van €25 automatisch terugbetaald.
              </p>
            </div>

            <div className="mt-10">
              <a href="/" className="btn-primary inline-block">
                Terug naar de homepage
              </a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-[72px] overflow-x-hidden w-full">
      <section className="relative px-6 md:px-12 pt-8 pb-8 max-w-[1000px] mx-auto overflow-x-hidden">
        <button
          onClick={() => {
            setSelectedSlug(null);
            router.replace("/boek", { scroll: false });
          }}
          className="inline-flex items-center gap-2 text-clay hover:text-terracotta text-[14px] transition-all focus:outline-none focus:ring-2 focus:ring-terracotta/20 rounded-lg px-2 -ml-2 mb-8 cursor-pointer"
          aria-label="Terug naar behandeling selectie"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Andere behandeling kiezen
        </button>

        {parentService && (
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden mb-5 shadow-sm border-2 border-white ring-1 ring-sandstone/20">
              <Image src={parentService.image} alt={displayName} fill className="object-cover" placeholder="blur" />
            </div>
            <h1 className="text-[clamp(32px,4vw,48px)] font-serif text-dark-earth mb-2">{displayName}</h1>
            <p className="text-clay text-[16px] italic">{displayDuration} · €{displayPrice}</p>
            <p className="text-clay/70 text-[13px] mt-2">
              Aanbetaling van <strong className="text-dark-earth">€25</strong> bij boeking — restbedrag (€{remainingAmount}) betaal je ter plaatse
            </p>
          </div>
        )}
      </section>

      {calError ? (
        <div className="max-w-[600px] mx-auto text-center py-20 px-6">
          <div className="bg-terracotta/5 border border-terracotta/20 rounded-[2rem] p-10">
            <h2 className="text-[24px] font-serif text-dark-earth mb-4">De agenda kon niet worden geladen</h2>
            <p className="text-clay mb-8">Onze excuses voor het ongemak. Je kunt ook direct via e-mail een afspraak aanvragen.</p>
            <a href={`mailto:${siteConfig.business.email}`} className="btn-primary inline-block">
              Stuur een e-mail
            </a>
            <button
              onClick={() => window.location.reload()}
              className="block w-full text-[13px] text-clay/60 hover:text-clay mt-6 underline transition-colors"
            >
              Probeer opnieuw
            </button>
          </div>
        </div>
      ) : (
        <Cal
          key={calLink}
          namespace={namespace}
          calLink={calLink}
          calOrigin={calEmbedOrigin}
          embedJsUrl={calJsUrl}
          style={{ width: "100%", minHeight: "720px", height: "calc(100vh - 260px)", maxHeight: "900px", overflow: "auto" }}
          config={{
            layout: "month_view",
          }}
        />
      )}
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <p className="text-clay mb-6 text-[18px] font-serif italic">De agenda wordt geladen...</p>
        <div className="w-10 h-10 border-2 border-terracotta border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookingEmbedContent />
    </Suspense>
  );
}
