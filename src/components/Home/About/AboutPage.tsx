import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mt-20 px-3 lg:px-32">
      <h4 className="text-[#77892B] text-2xl">WAT WE DOEN</h4>
      <h5 className="text-4xl mt-4">
        Passie voor duurzame <br /> landbouw en natuur
      </h5>

      {/* dive two section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <section className="mt-10">
          <Image
            src={"/home/about/image-1.png"}
            height={580}
            width={580}
            alt="about image"
          ></Image>
        </section>
        <section className="mt-10">
          <p className="text-[18px]">
            Met meer dan 15 jaar ervaring in de sector hebben we bij Jade
            Reforestry een hands-on aanpak ontwikkeld voor duurzame landbouw en
            natuurbeheer. We begrijpen de ecologische uitdagingen en bieden
            oplossingen die zowel de natuur als de productiviteit ten goede
            komen. We helpen jou aan slimme beplantingsplannen en zorgen dat de
            juiste bomen op de juiste plek staan, zodat je kunt profiteren van
            verbeterde bodemkwaliteit, verhoogde biodiversiteit en hogere
            opbrengsten.
          </p>
          <div className="join pt-8 pb-6">
            <button className=" btn  bg-[#77892B] text-white hover:bg-[#404d07] hover:text-white join-item">
              Meer over ons
            </button>
            <button className="btn bg-[#77892B] hover:bg-[#404d07] hover:text-white text-white join-item">
              <Image
                height={7}
                width={3.5}
                src="/VectorWhite.png"
                alt="vector"
              ></Image>
            </button>
          </div>
          <Image
            src={"/home/about/image-2.png"}
            height={412}
            width={580}
            alt="about image"
          ></Image>
        </section>
      </main>
    </div>
  );
}
