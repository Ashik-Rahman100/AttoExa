import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface IHeroCard {
  title: string;
  description: string;
  btnText: string;
  image: string | StaticImageData;
}

export default function HeroCard({ hero }: { hero: IHeroCard }) {
  return (
    <div className="card card-compact bg-base-100 rounded-none shadow-xl">
      {/* <figure> */}
      <div className="p-2 ">
        <Image
          src={hero.image}
          height={206}
          width={500}
          className="image-full relative"
          alt={hero.title}
        />
        <h2 className="absolute top-[30%] left-[30%] text-2xl text-white">
          {hero.title}
        </h2>
      </div>
      {/* </figure> */}
      <div className="card-body">
        <p className="text-[16px]">{hero.description}</p>

        <p className="text-[#77892B] mt-10">
          <Link href="#">{hero.btnText}</Link>
        </p>
      </div>
    </div>
  );
}
