import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="hero h-[60vh] lg:h-[577px]"
      style={{
        backgroundImage: `url('/home/banner/hero.png')`,
      }}
    >
      <div className="hero-overlay  blur-2xl"></div>
      <div className="hero-content text-white text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl lg:text-7xl text-left ">
              Jade Reforestry
            </h1>
            <p className="text-3xl lg:text-4xl text-left">
              Vergroening in harmonie met natuur en landbouw
            </p>
          </div>
          <div>
            <p className="mb-5 text-lg text-left pt-4">
              Bij Jade Reforestry geloven we in een toekomst waar landbouw en
              natuur samen floreren. Met onze praktische groene oplossingen
              maken we dit werkelijkheid.
            </p>
            {/* <button className="btn btn-white flex justify-start w-[266px]">
             
            </button> */}

            <div className="join flex justify-start w-[266px]">
              <button className=" btn  bg-white border-none join-item">
                Doe met ons mee
              </button>
              <button className="btn bg-white border-none text-black join-item">
                <Image
                  height={7}
                  width={3.5}
                  src="/VectorArrow.png"
                  alt="vector"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
