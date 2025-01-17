import Image from "next/image";
import Link from "next/link";

export default function HeroCard() {
  return (
    <div className="card card-compact bg-base-100 rounded-none shadow-xl">
      {/* <figure> */}
      <div className="p-2">
        <Image
          src="/home/heroCard/image-1.png"
          height={206}
          width={360}
          alt="project images"
        />
      </div>
      {/* </figure> */}
      <div className="card-body">
        <p className="text-[16px]">
          We integreren bomen en gewassen voor een duurzamer landbouwsysteem.
          Dit verbetert de bodemkwaliteit, verhoogt de biodiversiteit en zorgt
          voor een gezondere oogst.
        </p>

        <p className="text-[#77892B] mt-10">
          <Link href="#">Meer over ons Assortiment</Link>
        </p>
      </div>
    </div>
  );
}
