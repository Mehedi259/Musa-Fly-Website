import { VisaDetailsPage } from "@/sections/VisaDetailsPage";
import { visaServices } from "@/data/visa";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface VisaPageProps {
  params: Promise<{
    country: string;
  }>;
  searchParams: Promise<{
    type?: string;
  }>;
}

export async function generateMetadata({ params }: VisaPageProps): Promise<Metadata> {
  const { country } = await params;
  const visaService = visaServices.find((v) => v.id === country);

  if (!visaService) {
    return {
      title: "Visa Not Found",
    };
  }

  return {
    title: `${visaService.country} ${visaService.type} - MusaFly`,
    description: `Apply for ${visaService.country} ${visaService.type}. Processing time: ${visaService.processingTime}. Starting from $${visaService.startingPrice}.`,
  };
}

export default async function VisaPage({ params, searchParams }: VisaPageProps) {
  const { country } = await params;
  const { type } = await searchParams;

  const visaService = visaServices.find((v) => v.id === country);

  if (!visaService) {
    notFound();
  }

  return <VisaDetailsPage visa={visaService} selectedType={type} />;
}

export async function generateStaticParams() {
  return visaServices.map((visa) => ({
    country: visa.id,
  }));
}
