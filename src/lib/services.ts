import integratieveImg from "../../public/images/products/Unknown-13.jpeg";
import crystalHealingImg from "../../public/images/products/Unknown-15.jpeg";
import holisticPulsingImg from "../../public/images/products/Unknown-16.jpeg";
import lomiLomiImg from "../../public/images/products/Unknown-18.jpeg";

import { StaticImageData } from "next/image";

export interface Service {
  id: string;
  name: string;
  slug: string;
  duration: string;
  price: number;
  description: string;
  fullDescription: string;
  infoParagraphs: string[];
  image: string | StaticImageData;
  secondaryImage?: string | StaticImageData;
  imageScale?: number;
  clothing?: string;
  benefits?: string[];
  featured?: boolean;
  options?: { duration: string; price: number; slug: string }[];
}

export const services: Service[] = [
  {
    id: "integratieve",
    name: "Integratieve Massage",
    slug: "integratieve-60",
    duration: "60 min",
    price: 75,
    image: integratieveImg,
    secondaryImage: integratieveImg,
    featured: true,
    description: "Een harmonieuze combinatie van holistic pulsing, intuïtieve massage en polariteitsmassage.",
    fullDescription: "Deze behandeling is Els haar signature blend. Het is een harmonieuze combinatie van drie krachtige massagevormen: holistic pulsing, intuïtieve massage met olie en polariteitsmassage. De polariteitsmassage werkt door handen op twee plaatsen op het lichaam te leggen om energiebanen te verbinden en de natuurlijke stroom van energie te herstellen.",
    infoParagraphs: [
      "De integratieve massage is geen standaard massage volgens één vast protocol — het is een sessie die zich aanpast aan wat jouw lichaam op dat moment nodig heeft. Els combineert drie technieken die elk op hun eigen manier werken: holistic pulsing brengt je lichaam in een zacht, wiegend ritme waardoor je zenuwstelsel tot rust komt. De intuïtieve oliemassage werkt dieper in op spieren en bindweefsel, op de plekken waar jij spanning vasthoudt. En de polariteitsmassage — waarbij handen op twee punten tegelijk worden gelegd — helpt de energiestroom in je lichaam weer in balans te brengen.",
      "Wat je concreet mag verwachten: je spieren worden losser, je ademhaling wordt dieper, en die constante ondertoon van stress in je lichaam zakt weg. Veel mensen beschrijven het als een gevoel van 'thuiskomen' — alsof je lichaam eindelijk weer de ruimte krijgt om te zijn zoals het bedoeld is. Dit is geen massage waar je even snel doorheen gaat. Het is een moment waarop je echt mag loslaten, en waar je lichaam de kans krijgt om zichzelf te herstellen. Ideaal als je merkt dat je vastzit — fysiek, mentaal, of allebei."
    ],
    options: [
      { duration: "60 min", price: 75, slug: "integratieve-60" },
      { duration: "80 min", price: 95, slug: "integratieve-80" }
    ]
  },
  {
    id: "crystal-healing",
    name: "Crystal Healing Massage",
    slug: "crystal-healing-massage",
    duration: "60 min",
    price: 85,
    image: crystalHealingImg,
    secondaryImage: crystalHealingImg,
    imageScale: 1.15,
    description: "Een warme oliemassage in combinatie met de energetische kracht van kristallen.",
    fullDescription: "Een ontspannende oliemassage waarbij warme kristallen worden gebruikt om zowel fysieke als energetische blokkades te verzachten. De combinatie van de warmte van de stenen en hun unieke energetische eigenschappen zorgt voor een diepe staat van ontspanning en herstel.",
    infoParagraphs: [
      "Bij een crystal healing massage worden kristallen niet zomaar op je lichaam gelegd als decoratie — ze worden heel bewust ingezet tijdens een volwaardige oliemassage. De stenen worden verwarmd en op specifieke punten geplaatst of meegenomen in de massagebewegingen. Die warmte dringt dieper door dan handen alleen kunnen, waardoor stijve spieren sneller loskomen en je bloedsomloop wordt gestimuleerd. Elk kristal heeft daarnaast zijn eigen energetische eigenschap: sommige kalmeren, andere helpen bij het loslaten van emotionele spanning die zich in je lichaam heeft genesteld.",
      "Dit is een massage voor als je het gevoel hebt dat er meer speelt dan alleen fysieke spanning. Misschien slaap je slecht, voel je je onrustig zonder duidelijke reden, of draag je iets met je mee dat je niet goed kunt benoemen. De combinatie van de warme stenen, de olie en de rustige aanraking brengt je in een diepe staat van ontspanning waarin je lichaam ruimte krijgt om spanning los te laten — niet alleen in je spieren, maar ook op een dieper, stiller niveau. Na afloop voel je je lichter, helderder, en meer aanwezig in je eigen lichaam."
    ],
  },
  {
    id: "holistic-pulsing",
    name: "Holistic Pulsing",
    slug: "holistic-pulsing",
    duration: "50 min",
    price: 60,
    image: holisticPulsingImg,
    secondaryImage: holisticPulsingImg,
    description: "Een zachte, ritmische massagevorm die met kleding aan wordt uitgevoerd.",
    fullDescription: "Holistic Pulsing is een uiterst zachte massagevorm waarbij het lichaam op een ritmische manier wordt gewiegd en gepulst. Deze methode is zeer toegankelijk omdat de massage met kleding aan wordt uitgevoerd. Het is ideaal voor mensen die nieuw zijn met massage of die op zoek zijn naar een diepe, zachte ontspanning zonder zich te hoeven ontkleedden.",
    infoParagraphs: [
      "Holistic pulsing is misschien wel de meest onderschatte vorm van lichaamswerk. Er wordt niet gekneed, niet gedrukt, niet gestrekt. In plaats daarvan wordt je lichaam zachtjes gewiegd en gepulst in een constant, rustig ritme — een beetje zoals je als kind in slaap werd gewiegd. Dat klinkt simpel, maar het effect is verrassend krachtig. Door dat ritmische bewegen schakelt je zenuwstelsel over van 'aan' naar 'uit'. Je spieren laten los zonder dat er druk op wordt gezet, en je hoofd wordt eindelijk stil.",
      "Wat deze massage bijzonder maakt: je houdt je kleren aan. Dat maakt het heel toegankelijk, zeker als je nog nooit een massage hebt gehad of als je je niet comfortabel voelt bij het idee om je uit te kleden. Maar ook als je wél ervaren bent met massage, is holistic pulsing een revelatie. Het werkt op een ander niveau — niet zozeer op de spieren zelf, maar op het zenuwstelsel dat ervoor zorgt dat die spieren gespannen zijn. Mensen die heel druk in hun hoofd zitten, slecht slapen, of het gevoel hebben dat ze niet meer kunnen ontspannen, voelen vaak na één sessie al een verschil. Je stapt naar buiten en de wereld voelt even iets zachter."
    ],
  },
  {
    id: "lomi-lomi",
    name: "Lomi Lomi Massage",
    slug: "lomi-lomi",
    duration: "80 min",
    price: 135,
    image: lomiLomiImg,
    secondaryImage: lomiLomiImg,
    imageScale: 1.15,
    description: "Een traditionele Hawaiiaanse massage met vloeiende, ritmische strijkingen.",
    fullDescription: "Lomi Lomi is een eeuwenoude Hawaiiaanse massagetechniek die bekend staat om zijn vloeiende, ritmische en dansante bewegingen over het hele lichaam. Met gebruik van de onderarmen en handen worden lange, continue strijkingen gemaakt die aanvoelen als de golven van de oceaan. Het is een diep koesterende ervaring die zowel lichaam als geest volledig tot rust brengt.",
    infoParagraphs: [
      "Lomi Lomi is een massage die je niet snel vergeet. Het komt oorspronkelijk uit Hawaï, waar het al eeuwenlang wordt beoefend als een vorm van healing — niet alleen voor het lichaam, maar voor de hele mens. In de praktijk betekent dat: lange, vloeiende bewegingen met de onderarmen en handen over je hele lichaam, zonder onderbreking. Er is geen 'eerst je rug, dan je benen' — alles vloeit in elkaar over, als golven. Dat ononderbroken contact zorgt ervoor dat je lichaam zich volledig kan overgeven. Je hoeft nergens op te wachten, nergens op voorbereid te zijn. Je wordt gedragen.",
      "Fysiek werkt Lomi Lomi diep in op je spieren en bindweefsel door de brede, krachtige strijkingen met de onderarmen. Maar het effect gaat verder dan dat. Door de continue, ritmische beweging en het volledige lichaamscontact ervaren veel mensen een emotionele release — spanning die je al lang met je meedraagt kan tijdens zo'n sessie eindelijk een uitweg vinden. Dit is de meest intensieve en koesterende massage die Els aanbiedt. Ze duurt 80 minuten, en dat is bewust: je lichaam heeft die tijd nodig om echt te landen, los te laten, en weer op te laden. Na afloop voel je je niet alleen ontspannen, maar echt vernieuwd."
    ],
  },
];
