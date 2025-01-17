import Image from "next/image";
import Form from "./Form";

export default function Contact() {
  return (
    <div
      className="px-3 lg:px-32 mt-20"
      style={{
        backgroundImage: `url('/home/dream/dream-bg.png')`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  py-20">
        <section>
          <h2 className="text-[#022205] text-4xl">
            Samen maken we het verschil
          </h2>
          <p className="text-[#454C4F] text-[18px] pt-2">
            Wij geloven dat elke stap richting een groenere toekomst telt. Neem
            contact met ons op om te ontdekken hoe we jou kunnen helpen te
            vergroenen en versterken. Samen maken we het verschil.
          </p>
          <Image
            className="pt-8"
            src="/home/contact/image.png"
            height={363}
            width={550}
            alt="Contact image"
          ></Image>
        </section>
        <section>
          <Form></Form>
        </section>
      </div>
    </div>
  );
}
