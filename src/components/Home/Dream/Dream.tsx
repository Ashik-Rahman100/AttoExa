import Image from "next/image";

export default function Dream() {
  const discription = [
    { description: "Slimme groene landbouw" },
    { description: "Een groen netwerk door heel Europa" },
    { description: "Harmonie tussen natuur en landbouw" },
    { description: "Vrij bewegende wilde dieren" },
    { description: "Een aaneengesloten weelderig bladerdak" },
    { description: "Veilige groene havens" },
  ];
  return (
    <div
      className="px-3 lg:px-32 mt-20"
      id="de-kwekerij"
      style={{
        backgroundImage: `url('/home/dream/dream-bg.png')`,
      }}
    >
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
        <section className="pt-16">
          <h2 className="text-4xl">Onze droom</h2>
          <p className="py-6 text-[18px]">
            We streven ernaar landbouw op een slimme manier te vergroenen,
            zonder in te boeten op productie. Stel je een groene dooradering
            voor die Europa doorkruist, waar natuur en landbouw harmonieus
            samenkomen. Een plek waar een hert van Polen naar Portugal kan
            lopen, onder een weelderig bladerdak, door bossen en velden, zonder
            ooit het gevoel te hebben de veilige groene haven van de natuur te
            verlaten.
          </p>
          <div className="pt-5">
            {discription.map((des, index) => (
              <p key={index} className="flex items-center space-x-2 py-1">
                {" "}
                <Image
                  height={12}
                  width={19}
                  src="/Vector.png"
                  alt=""
                ></Image>{" "}
                <span>{des.description}</span>
              </p>
            ))}
          </div>
        </section>
        <section>
          <Image
            src={"/home/dream/dream.png"}
            height={600}
            width={532}
            alt="dream image"
          ></Image>
        </section>
      </main>
    </div>
  );
}
