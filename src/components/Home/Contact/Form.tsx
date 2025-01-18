import Image from "next/image";

export default function Form() {
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <form className="card-body">
        <h2 className="text-[22px] text-[#454C4F]">
          Natuurlijk horen we graag van je. <br />
          Laten we contact opnemen.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Voornaam</span>
            </label>
            <input
              type="text"
              placeholder="Voornaam"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Achternaam</span>
            </label>
            <input
              type="text"
              placeholder="Achternaam"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">E-mailadres</span>
            </label>
            <input
              type="email"
              placeholder="E-mailadres"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Telefoonnummer</span>
            </label>
            <input
              type="text"
              placeholder="Telefoonnummer"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1  gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Onderwerp</span>
            </label>
            <input
              type="text"
              placeholder="Onderwerp"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1  gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bericht</span>
            </label>
            <input
              placeholder="Bericht"
              className="textarea textarea-bordered textarea-lg w-full "
              type="text"
            ></input>
          </div>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <div className="join">
            <button className=" btn  bg-[#77892B] text-white hover:bg-[#404d07] hover:text-white join-item">
              Verzenden
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
        </div>
      </form>
    </div>
  );
}
