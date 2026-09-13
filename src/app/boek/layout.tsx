import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Boek een sessie — ${siteConfig.business.name}`,
  description: `Boek een massagebehandeling bij ${siteConfig.business.name} in Antwerpen.`,
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
