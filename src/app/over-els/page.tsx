import type { Metadata } from "next";
import ArchImage from "@/components/ArchImage";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import MoroccanPattern from "@/components/MoroccanPattern";
import Image from "next/image";
import elsMainImg from "../../../public/images/els/Els-main picture.jpg.avif";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Over Els — ${siteConfig.business.name}`,
  description: `Maak kennis met ${siteConfig.business.owner}, ervaren massagetherapeut in Antwerpen. Gespecialiseerd in integratieve massage, holistic pulsing, lomi lomi en crystal healing.`,
  openGraph: {
    title: `Over ${siteConfig.business.owner} — ${siteConfig.business.name}`,
    description: `Maak kennis met ${siteConfig.business.owner}, ervaren massagetherapeut in Antwerpen.`,
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-[72px] overflow-x-hidden w-full">
      {/* Header */}
      <section className="px-6 md:px-12 pt-2 md:pt-8 pb-20 md:pb-32 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-16 lg:gap-24 items-center">
        <div className="hidden md:block relative max-w-[440px] mx-auto md:mx-0">
          {/* Simple elegant frame instead of the pointed arch */}
          <div className="relative w-full aspect-[3/4] rounded-t-full md:rounded-t-[10rem] rounded-b-2xl overflow-hidden shadow-xl bg-transparent">
            <Image 
              src={elsMainImg} 
              alt="Els Vrints" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        <ScrollReveal stagger>
          {/* Mobile Profile Image */}
          <div className="md:hidden mb-8 flex justify-start">
             <div className="relative p-1">
                <div className="absolute inset-0 bg-terracotta/10 translate-x-1 translate-y-1 rounded-full -z-10" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-terracotta/20 shadow-md">
                  <Image 
                    src={elsMainImg} 
                    alt="Els" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
             </div>
          </div>
          <h1 className="text-[clamp(44px,8vw,80px)] font-serif leading-none mb-6 text-dark-earth">Els Vrints</h1>
          <div className="w-16 h-[2px] bg-terracotta mb-8" />
          <p className="font-serif italic text-[clamp(22px,3vw,32px)] leading-snug text-terracotta mb-8">
            &ldquo;Mijn handen luisteren naar wat je lichaam te vertellen heeft.&rdquo;
          </p>
          <div className="text-clay text-base md:text-[18px] leading-relaxed max-w-[520px] space-y-6">
            <p>
              Mijn reis in de wereld van massage begon vanuit een diep verlangen naar vertraging. In een wereld die altijd &apos;aan&apos; staat, zag ik hoe we het contact met ons eigen lichaam langzaam verliezen.
            </p>
            <p>
              Doorheen de jaren heb ik me verdiept in integratieve massage, holistic pulsing, lomi lomi, crystal healing en polariteitsmassage. Wat begon als een persoonlijke zoektocht naar rust, groeide uit tot een passie om anderen te begeleiden naar diezelfde plek van verstilling.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-sand/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <MoroccanPattern variant="background" opacity={3} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[clamp(32px,5vw,56px)] font-serif text-dark-earth mb-4">Mijn Filosofie</h2>
              <p className="text-clay max-w-[500px] mx-auto italic text-sm md:text-base">Drie kernwaarden die de basis vormen van elke behandeling.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/80 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-sandstone/20">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mb-6">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <h3 className="font-serif text-[24px] md:text-[28px] text-dark-earth mb-4">Aandacht</h3>
                <p className="text-clay text-sm md:text-base leading-relaxed">
                  Elke aanraking gebeurt met volle aandacht en respect voor jouw grenzen. Ik creëer een ruimte waar niets moet en alles mag zijn.
                </p>
              </div>
              <div className="bg-white/80 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-sandstone/20">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mb-6">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 className="font-serif text-[24px] md:text-[28px] text-dark-earth mb-4">Holistisch</h3>
                <p className="text-clay text-sm md:text-base leading-relaxed">
                  Ik kijk niet alleen naar de fysieke spanning, maar naar de mens als geheel. Lichaam en geest zijn onlosmakelijk verbonden.
                </p>
              </div>
              <div className="bg-white/80 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-sandstone/20">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mb-6">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <h3 className="font-serif text-[24px] md:text-[28px] text-dark-earth mb-4">Integratie</h3>
                <p className="text-clay text-sm md:text-base leading-relaxed">
                  Door verschillende technieken te combineren, bied ik een behandeling die precies aansluit bij wat jij op dat moment nodig hebt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingCTA 
        title="Klaar om de rust in jezelf te herontdekken?" 
        buttonText="Boek een moment voor jezelf" 
        showImage={true}
        imageVariant="circle"
      />
    </div>
  );
}
