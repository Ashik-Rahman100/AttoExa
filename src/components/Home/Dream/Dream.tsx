import Image from "next/image";

export default function Dream() {
  return (
    <div
      className="px-3 lg:px-32 mt-20"
      style={{
        backgroundImage: `url('/home/dream/dream-bg.png')`,
      }}
    >
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
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
