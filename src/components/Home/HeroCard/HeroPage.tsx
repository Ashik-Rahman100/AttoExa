import { StaticImageData } from "next/image";
import HeroCard from "./HeroCard";

interface IHeroCard {
  title: string;
  description: string;
  btnText: string;
  image: string | StaticImageData;
}

export default function HeroPage() {
  const heroData: IHeroCard[] = [
    {
      title: "Agroforestry",
      description:
        "We integreren bomen en gewassen voor een duurzamer landbouwsysteem. Dit verbetert de bodemkwaliteit, verhoogt de biodiversiteit en zorgt voor een gezondere oogst.",
      btnText: "Meer over Agroforestry",
      image: "/home/heroCard/image-1.png",
    },
    {
      title: "Kwekerij",
      description:
        "Onze kwekerij biedt een ruim assortiment aan bomen en planten, zorgvuldig geselecteerd voor maximale groei en duurzaamheid. Bezoek onze shop voor advies en aankoop van de beste soorten.",
      btnText: "Meer over ons Assortiment",
      image: "/home/heroCard/image-2.png",
    },
    {
      title: "Boomverzorging",
      description:
        "Boomverzorgers zorgen ervoor dat jouw bomen gezond en sterk blijven. Van aanplanting tot onderhoud en snoeien tot vellen. Wij staan klaar met deskundig advies en service.",
      btnText: "Meer over Boomverzorging",
      image: "/home/heroCard/image-3.png",
    },
  ];
  return (
    <div className="-mt-10 lg:-mt-24">
      <h2 className="text-[26px] text-center text-[#ffff]">
        Praktische groene oplossingen
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4  px-3 lg:px-32">
        {heroData.map((hero, index) => (
          <HeroCard hero={hero} key={index}></HeroCard>
        ))}
      </div>
    </div>
  );
}
