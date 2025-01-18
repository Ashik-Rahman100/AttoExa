import { StaticImageData } from "next/image";
import HeroCard from "./HeroCard";

interface IHeroCard {
  title: string;
  description: string;
  btnText: string;
  image: string | StaticImageData;
}

async function getData() {
  const res = await fetch(
    `https://expensetracker-five-alpha.vercel.app/api/hero`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function HeroPage() {
  const heroData: IHeroCard[] = await getData();
  return (
    <div className="-mt-2 lg:-mt-36">
      <h2 className="text-[26px] text-center font-bold opacity-0.1 py-6 text-[#ffffff] z-10">
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
