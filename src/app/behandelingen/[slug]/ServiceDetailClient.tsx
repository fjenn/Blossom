"use client";

import { useState } from "react";
import { services, Service } from "@/lib/services";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import MoroccanPattern from "@/components/MoroccanPattern";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ServiceDetailClientProps {
  baseService: Service;
  initialOption: { duration: string; price: number; slug: string };
  relatedServices: Service[];
}

export default function ServiceDetailClient({ 
  baseService, 
  initialOption, 
  relatedServices 
}: ServiceDetailClientProps) {
  const [selectedOption, setSelectedOption] = useState(initialOption);
  
  const bookingLink = `/boek?type=${selectedOption.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": baseService.name,
    "description": baseService.fullDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Massages by Els",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Van Schoonbekestraat 20, bus D4",
        "addressLocality": "Antwerpen",
        "postalCode": "2018",
        "addressCountry": "BE"
      }
    },
    "offers": baseService.options ? baseService.options.map(opt => ({
      "@type": "Offer",
      "price": opt.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://massagesbyels.com/behandelingen/${opt.slug}`
    })) : [{
      "@type": "Offer",
      "price": baseService.price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://massagesbyels.com/behandelingen/${baseService.slug}`
    }],
    "areaServed": {
      "@type": "City",
      "name": "Antwerpen"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pt-[72px] overflow-x-hidden w-full">
      {/* Service Header & Detail */}
      <section className="relative px-6 md:px-12 pt-2 md:pt-20 pb-20 md:pb-32 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-16 items-start">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
          <div className="relative p-2 md:p-6 max-w-[440px] mx-auto md:mx-0">
            <div className="absolute inset-0 bg-warm-sand/10 rounded-[2rem] md:rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
            <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl bg-transparent">
              <Image 
                src={baseService.image}
                alt={baseService.name} 
                fill
                className="object-cover"
                style={{ transform: `scale(${(baseService.imageScale || 1.1) + 0.3})` }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
          </div>
        
        <ScrollReveal stagger>
          <div className="mb-10 md:mb-12 pt-0 md:pt-8">
             <div className="inline-block mb-6">
               <span className="bg-white/60 text-terracotta text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-terracotta/20 shadow-sm">
                 Behandeling
               </span>
             </div>
             <h1 className="text-[clamp(36px,6vw,64px)] font-serif leading-[1.15] mb-6 text-dark-earth">{baseService.name}</h1>
             
             {baseService.options ? (
               <div className="flex flex-wrap gap-3 md:gap-4 mt-8">
                 {baseService.options.map((opt) => (
                   <button 
                     key={opt.slug} 
                     onClick={() => setSelectedOption(opt)}
                     className={clsx(
                       "flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 text-left focus:outline-none focus:ring-2 focus:ring-terracotta/20",
                       opt.slug === selectedOption.slug ? "bg-terracotta/5 border-terracotta/30 ring-1 ring-terracotta/10" : "bg-white/50 border-sandstone/20 opacity-60 hover:opacity-100"
                     )}
                   >
                      <p className="text-[20px] md:text-[24px] font-serif text-terracotta leading-none">
                        &euro;{opt.price}
                      </p>
                      <div className="w-[1px] h-6 bg-sandstone/30" />
                      <p className="text-clay uppercase tracking-widest text-[11px] md:text-[12px] font-medium">
                        {opt.duration}
                      </p>
                   </button>
                 ))}
               </div>
             ) : (
               <div className="flex items-center gap-5 md:gap-6 bg-white/50 p-4 rounded-2xl inline-flex border border-sandstone/20">
                  <p className="text-[20px] md:text-[24px] font-serif text-terracotta leading-none">
                    &euro;{baseService.price}
                  </p>
                  <div className="w-[1px] h-8 bg-sandstone/50" />
                  <p className="text-clay uppercase tracking-widest text-[12px] md:text-[13px] font-medium">
                    {baseService.duration}
                  </p>
               </div>
             )}
          </div>

          <div className="text-clay text-base md:text-[18px] leading-relaxed max-w-[520px] space-y-6 md:space-y-8 mb-12 md:mb-16">
            <p className="whitespace-pre-line leading-relaxed">{baseService.fullDescription}</p>
          </div>

          {baseService.secondaryImage && (
            <ScrollReveal delay={0.2} className="block md:hidden mb-16">
              <div className="relative p-2 max-w-[320px] mx-auto">
                <div className="absolute inset-0 bg-warm-sand/10 rounded-t-full rounded-b-[2rem] translate-x-3 translate-y-3 -z-10" />
                <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-xl border border-sandstone/10 bg-transparent">
                  <Image 
                    src={baseService.secondaryImage} 
                    alt={`${baseService.name} sfeerbeeld`} 
                    fill 
                    className="object-cover scale-[1.4] origin-center"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href={bookingLink} className="btn-primary inline-block">
              Boek deze sessie
            </Link>
            <Link
              href={`/behandelingen/${baseService.slug}/info`}
              className="text-clay/60 hover:text-terracotta text-[12px] tracking-wide transition-colors duration-300"
            >
              Meer info over deze massage
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-warm-sand relative overflow-hidden">
        <MoroccanPattern variant="background" opacity={3} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[clamp(30px,4vw,56px)] font-serif text-dark-earth mb-4">Andere behandelingen</h2>
              <p className="text-clay max-w-[500px] mx-auto italic text-sm md:text-base">Ontdek welke andere vormen van lichaamswerk ik aanbied.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relatedServices.map((s, index) => (
              <ScrollReveal key={s.id} delay={index * 0.1}>
                <Link 
                  href={`/behandelingen/${s.slug}`}
                  className="group flex flex-col h-full bg-white/80 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-sandstone/20 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image 
                      src={s.image} 
                      alt={s.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-[24px] font-serif text-dark-earth leading-tight max-w-[80%]">{s.name}</h3>
                       <div className="bg-warm-sand p-2 rounded-full text-terracotta transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                       </div>
                    </div>
                    
                    <p className="text-clay/60 text-[11px] uppercase tracking-widest mb-6 bg-sandstone/20 inline-block px-3 py-1 rounded-full self-start font-medium">
                      {s.duration} &middot; &euro;{s.price}
                    </p>
                    <p className="text-clay text-[15px] mb-8 flex-grow leading-relaxed">{s.description}</p>
                    <div className="text-terracotta text-[12px] font-medium uppercase tracking-[0.15em]">Ontdek sessie</div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA 
        title={`Klaar om de weldaad van de ${baseService.name.toLowerCase()} te ervaren?`}
        href={bookingLink} 
        showImage={true}
        imageVariant="circle"
      />
    </div>
    </>
  );
}
