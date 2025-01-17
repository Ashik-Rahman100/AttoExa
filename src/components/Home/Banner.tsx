export default function Banner() {
  return (
    <div
      className="hero h-[70vh] lg:h-[577px]"
      style={{
        backgroundImage: `url('/home/banner/hero.png')`,
      }}
    >
      <div className="hero-overlay  blur-2xl"></div>
      <div className="hero-content text-white text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="mb-5 text-7xl text-left ">Jade Reforestry</h1>
            <p className="text-4xl text-left">
              Vergroening in harmonie met natuur en landbouw
            </p>
          </div>
          <div>
            <p className="mb-5 text-lg text-left ">
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
                i
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
