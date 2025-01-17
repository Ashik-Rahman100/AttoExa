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
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Achternaam</span>
            </label>
            <input
              type="password"
              placeholder="password"
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">E-mailadres</span>
            </label>
            <input
              type="password"
              placeholder="password"
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
              type="email"
              placeholder="email"
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
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-md w-full "
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <div className="join  py-4">
            <button className=" btn  bg-[#77892B] text-white hover:bg-[#404d07] hover:text-white join-item">
              Verzenden
            </button>
            <button className="btn bg-[#77892B] hover:bg-[#404d07] hover:text-white text-white join-item">
              i
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
