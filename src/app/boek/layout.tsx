import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Boek een sessie — ${siteConfig.business.name}`,
  description: `Boek een massagebehandeling bij ${siteConfig.business.owner} in Antwerpen. Online afspraken voor integratieve massage, lomi lomi, crystal healing en holistic pulsing.`,
  openGraph: {
    title: `Boek een sessie — ${siteConfig.business.name}`,
    description: `Boek een massagebehandeling bij ${siteConfig.business.owner} in Antwerpen.`,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
