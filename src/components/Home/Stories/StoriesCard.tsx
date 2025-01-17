export default function StoriesCard() {
  return (
    <div
      className="object-cover"
      style={{
        backgroundImage: `url('/home/stories/image-1.png')`,
        height: "388px",
        color: "white",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="card-body mt-[40%] text-wrap">
        <div className="border-l-4 border-[#77892B] pl-3">
          <h2 className="card-title ">Boerderij De Groene Hoop</h2>
          <p className="mr-16">
            De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en
            biodiversiteit bevorderen. Met onze hulp hebben ze parken en.....
          </p>
        </div>
      </div>
    </div>
  );
}
