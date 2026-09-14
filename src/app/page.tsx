import Link from "next/link";
import ArchImage from "@/components/ArchImage";
import ScrollReveal from "@/components/ScrollReveal";
import MoroccanPattern from "@/components/MoroccanPattern";
import ArrowLink from "@/components/ArrowLink";
import BookingCTA from "@/components/BookingCTA";
import { services } from "@/lib/services";
import Image from "next/image";
import elsInActieImg from "../../public/images/els/Els-in-actie.jpeg";
import elsMainImg from "../../public/images/els/Els-main picture.jpg.avif";

import { siteConfig } from "@/lib/config";

export default function Home() {
  const { business } = siteConfig;

  return (
    <div className="pt-[72px] overflow-x-hidden w-full">
      {/* Mobile Hero — editorial image with overlay */}
      <section className="md:hidden relative isolate mx-4 mt-4 rounded-[2.5rem] overflow-hidden min-h-[560px] flex items-end">
        <Image
          src={elsInActieImg}
          alt={`${business.owner} in actie tijdens een massagebehandeling`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-earth via-dark-earth/70 to-dark-earth/10" />
        <ScrollReveal stagger className="relative z-10 w-full text-center px-6 pb-10 pt-36">
          <div className="inline-block mb-5">
            <span className="bg-plaster/90 text-terracotta text-[10px] font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
              Massagetherapie Antwerpen
            </span>
          </div>
          <h1 className="text-[36px] leading-[1.15] tracking-[-0.01em] mb-5 font-serif !text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Lichaamswerk dat<br />
            diep doorwerkt.
          </h1>
          <p className="text-plaster/95 text-[15px] leading-relaxed mb-8 max-w-[340px] mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
            In het hart van Antwerpen creëer ik een veilige haven waar we de tijd nemen.
          </p>
          <Link href="/boek" className="btn-primary inline-block">
            Boek je moment van rust
          </Link>
        </ScrollReveal>
      </section>

      {/* Mobile scroll indicator */}
      <div className="md:hidden flex justify-center pt-6 pb-2">
        <div className="flex flex-col items-center gap-2 text-clay animate-scroll-hint">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Desktop Hero */}
      <section className="hidden md:grid relative px-12 pt-10 pb-32 max-w-[1200px] mx-auto grid-cols-[55%_45%] gap-8 lg:gap-20 items-center">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <ScrollReveal stagger className="relative z-10">
          <div className="inline-block mb-6">
             <span className="bg-white/60 text-terracotta text-[11px] font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-terracotta/20 shadow-sm">
               Massagetherapie Antwerpen
             </span>
          </div>
          <h1 className="text-[clamp(36px,5.5vw,72px)] leading-[1.15] tracking-[-0.01em] mb-8 font-serif text-dark-earth max-w-[600px]">
            Lichaamswerk dat<br />
            diep doorwerkt.
          </h1>
          <p className="text-clay text-[18px] max-w-[440px] leading-relaxed mb-10">
            In het hart van Antwerpen creëer ik een veilige haven waar we de tijd nemen. Persoonlijke massagebehandelingen om de verbinding met je lichaam te herstellen.
          </p>
          <Link href="/boek" className="btn-primary inline-block">
            Boek je moment van rust
          </Link>
        </ScrollReveal>

        <ScrollReveal className="relative">
          <div className="absolute inset-0 bg-terracotta/5 translate-x-4 translate-y-4 rounded-t-full rounded-b-md -z-10" />
          <ArchImage
            src={elsInActieImg}
            alt={`${business.owner} in actie tijdens een massagebehandeling`}
            priority
          />
        </ScrollReveal>
      </section>

      {/* Moroccan Divider */}
      <MoroccanPattern variant="divider" opacity={12} className="hidden md:block" />

      {/* Philosophy Quote */}
      <section className="py-20 md:py-24 px-6 md:px-12 text-center max-w-[1000px] mx-auto relative">
        <ScrollReveal>
          <p className="font-serif text-[clamp(24px,4vw,44px)] leading-relaxed text-dark-earth">
            &ldquo;Lichaamswerk is voor mij de kortste weg naar huis, een zachte uitnodiging om werkelijk weer aanwezig te zijn in jezelf.&rdquo;
          </p>
          <p className="mt-8 text-terracotta font-medium tracking-widest uppercase text-[12px]">— {business.owner}</p>
        </ScrollReveal>
      </section>

      {/* Services Overview */}
      <section id="behandelingen" className="py-24 md:py-32 px-6 md:px-12 bg-white/50 relative">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-warm-sand/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
             <div className="text-center mb-12 md:mb-20">
               <h2 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-4">Behandelingen</h2>
               <p className="text-clay max-w-[500px] mx-auto italic">Kies de behandeling die op dit moment het beste bij je past.</p>
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link
                  href={`/behandelingen/${service.slug}`}
                  className="group flex flex-col h-full bg-plaster rounded-[2rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-sandstone/30 relative overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/20 via-transparent to-transparent" />
                    {service.featured && (
                      <span className="absolute top-4 left-4 bg-terracotta text-plaster text-[10px] font-medium uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full shadow-sm">
                        Favoriet
                      </span>
                    )}
                  </div>
                  <div className="relative z-10 flex flex-col flex-1 p-8">
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-[24px] font-serif text-dark-earth leading-tight">{service.name}</h3>
                       <div className="bg-white/80 p-2 rounded-full shadow-sm text-terracotta transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                       </div>
                    </div>
                    
                    <p className="text-clay text-[15px] mb-8 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-6 border-t border-sandstone/40">
                      {service.options ? (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-clay/60">Vanaf</span>
                            <span className="text-[18px] font-serif text-terracotta">&euro;{service.price}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.options.map(opt => (
                              <span key={opt.slug} className="text-[10px] font-medium uppercase tracking-[0.1em] text-clay/80 bg-white/50 px-2.5 py-1 rounded-full border border-sandstone/20 shadow-sm">
                                {opt.duration}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-clay/80 bg-white/50 px-2.5 py-1 rounded-full border border-sandstone/20 shadow-sm">
                            {service.duration}
                          </span>
                          <span className="text-[18px] font-serif text-terracotta">&euro;{service.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-warm-sand relative overflow-hidden">
        <MoroccanPattern variant="background" opacity={3} />
        <div className="px-6 md:px-12 max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
               <h2 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-4">De Ruimte</h2>
               <p className="text-clay max-w-[500px] mx-auto italic">Een plek van rust in de stad.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             <ScrollReveal delay={0.1}>
               <div className="aspect-[4/5] bg-sandstone/30 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-sm translate-y-4 md:translate-y-0">
                 <Image src="/images/room/Unknown-17.jpeg" alt="Sfeerbeeld praktijkruimte" fill className="object-cover scale-110 transition-transform duration-1000 hover:scale-[1.15]" sizes="(max-width: 768px) 50vw, 25vw" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.2}>
               <div className="aspect-[4/5] bg-sandstone/30 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative translate-y-8 md:translate-y-12 shadow-sm">
                 <Image src="/images/room/Unknown-10.jpeg" alt="Sfeerbeeld praktijkruimte" fill className="object-cover scale-110 transition-transform duration-1000 hover:scale-[1.15]" sizes="(max-width: 768px) 50vw, 25vw" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.3}>
               <div className="aspect-[4/5] bg-sandstone/30 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-sm translate-y-4 md:translate-y-0">
                 <Image src="/images/room/Unknown-18.jpeg" alt="Sfeerbeeld praktijkruimte" fill className="object-cover scale-110 transition-transform duration-1000 hover:scale-[1.15]" sizes="(max-width: 768px) 50vw, 25vw" />
               </div>
             </ScrollReveal>
             <ScrollReveal delay={0.4}>
               <div className="aspect-[4/5] bg-sandstone/30 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative translate-y-8 md:translate-y-12 shadow-sm">
                 <Image src="/images/room/Unknown-15.jpeg" alt="Sfeerbeeld praktijkruimte" fill className="object-cover scale-110 transition-transform duration-1000 hover:scale-[1.15]" sizes="(max-width: 768px) 50vw, 25vw" />
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-4">Wat klanten zeggen</h2>
              <p className="text-clay max-w-[500px] mx-auto italic">Ervaringen van mensen die de tijd namen voor zichzelf.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Ik ging naar Els met chronische schouderpijn. Na drie sessies voelt mijn lichaam lichter dan in jaren. Haar rust werkt aanstekelijk.",
                name: "Gert De ceuster",
                location: "Antwerpen",
                color: "bg-clay",
              },
              {
                quote: "De eerste massage waar ik écht heb kunnen loslaten. Els voelt meteen aan waar het vastzit en neemt alle tijd voor je.",
                name: "Maia Elien",
                location: "Berchem",
                color: "bg-terracotta",
              },
              {
                quote: "Na een burn-out ben ik bij Els terechtgekomen. De holistic pulsing-sessies hebben me geholpen om weer in mijn lichaam te landen.",
                name: "Bo debisschop",
                location: "Antwerpen",
                color: "bg-burnt-sienna",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <figure className="h-full flex flex-col bg-white/70 rounded-[2rem] p-8 md:p-10 border border-sandstone/20 shadow-sm">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-terracotta/60 mb-5 shrink-0" aria-hidden="true">
                    <path d="M7 7h4v4H7v3a3 3 0 0 0 3 3h1v2h-1a5 5 0 0 1-5-5V9a2 2 0 0 1 2-2Zm10 0h4v4h-4v3a3 3 0 0 0 3 3h1v2h-1a5 5 0 0 1-5-5V9a2 2 0 0 1 2-2Z" fill="currentColor" />
                  </svg>
                  <blockquote className="font-serif text-[20px] md:text-[22px] leading-snug text-dark-earth mb-8 flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="pt-6 border-t border-sandstone/30 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${t.color}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-dark-earth">{t.name}</p>
                      <p className="text-[12px] uppercase tracking-[0.15em] text-clay/70 mt-1">{t.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl bg-transparent max-w-[440px] mx-auto md:mx-0">
                <Image 
                  src={elsMainImg} 
                  alt={business.owner} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  placeholder="blur"
                />
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <h2 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-6">Wie je aanraakt, maakt een verschil</h2>
            <p className="text-clay text-base md:text-[18px] leading-relaxed max-w-[500px] mb-10">
              Hallo, ik ben {business.owner}. Mijn passie ligt in het creëren van een veilige, oordeelvrije ruimte waar je volledig tot rust kunt komen. Met de juiste aandacht help ik je graag weer contact te maken met de wijsheid van je eigen lichaam.
            </p>
            <ArrowLink href="/over-els" label="Ontdek mijn achtergrond" />
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-white/50 relative overflow-hidden scroll-mt-24">
        <div className="max-w-[1200px] mx-auto bg-warm-sand rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-sm">
           <MoroccanPattern variant="background" opacity={4} className="absolute inset-0" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
              <ScrollReveal stagger>
                <h2 className="text-[clamp(32px,4vw,48px)] font-serif text-dark-earth mb-8 md:mb-10">Contact & Bereikbaarheid</h2>
                <div className="space-y-10 md:space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                    <div className="group">
                      <p className="font-serif text-[22px] md:text-[24px] text-terracotta mb-3 md:mb-4">Adres</p>
                      <p className="text-[16px] md:text-[17px] text-clay leading-relaxed">{business.address}<br/>{business.city}</p>
                    </div>
                    <div>
                      <p className="font-serif text-[22px] md:text-[24px] text-terracotta mb-3 md:mb-4">Contact</p>
                      <a 
                        href={`mailto:${business.email}`} 
                        className="block text-[16px] md:text-[17px] text-clay leading-relaxed hover:text-terracotta transition-colors underline underline-offset-4 decoration-terracotta/30"
                      >
                        {business.email}
                      </a>
                      <a
                        href={`tel:${business.phoneTel}`}
                        className="block text-[16px] md:text-[17px] text-clay leading-relaxed hover:text-terracotta transition-colors underline underline-offset-4 decoration-terracotta/30 mt-2"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-serif text-[22px] md:text-[24px] text-terracotta mb-4 md:mb-6">Praktijkuren</p>
                    <div className="grid grid-cols-1 gap-3 md:gap-4 text-[15px] md:text-[16px]">
                      {business.hours.map((h, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-sandstone/30 pb-3">
                          <span className="font-medium text-dark-earth">{h.day}</span>
                          <div className="text-clay flex flex-col items-end text-right">
                            <span>{h.morning}</span>
                            {h.afternoon && <span>{h.afternoon}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/boek" className="btn-primary inline-block">
                      Boek een sessie
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="h-full min-h-[300px] md:min-h-[400px] bg-white/40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-inner border border-white/60">
                   <iframe
                     src="https://maps.google.com/maps?q=Van+Schoonbekestraat+20,+2018+Antwerpen&hl=nl&z=16&output=embed"
                     width="100%"
                     height="100%" 
                     title={`Locatie van ${business.name} in Antwerpen`}
                     style={{ border: 0 }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                   ></iframe>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      <BookingCTA showImage={true} imageVariant="circle" />
    </div>
  );
}
