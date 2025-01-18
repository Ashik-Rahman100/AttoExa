import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="hidden lg:block z-50">
      <div
        className="h-28 flex justify-center items-center "
        style={{
          backgroundImage: `url('/navbar/bg.png')`,
        }}
      >
        <main className="flex  items-center space-x-16">
          <div className="join">
            <input
              type="text"
              placeholder="Zoeken"
              className="input input-bordered join-item lg:w-96 focus:outline-none outline-none"
            />
            <button className="btn bg-[#133216] text-white join-item">
              {" "}
              <Image
                height={32}
                width={32}
                src="/navbar/search.png"
                alt=""
              ></Image>
            </button>
          </div>
          <div>
            <ul className="menu menu-horizontal px-1 z-50">
              <li>
                <details>
                  <summary>Netherlands</summary>
                  <ul className="bg-base-100 rounded-none w-36 p-2 z-50">
                    <li>
                      <a>Germany</a>
                    </li>
                    <li>
                      <a>Poland</a>
                    </li>
                  </ul>
                </details>
              </li>
              {/* <Image
                className="w-fit"
                height={17}
                width={17}
                src="/navbar/user.png"
                alt=""
              ></Image> */}
              <li className="">
                <p>Inloggen</p>
              </li>
              <li>
                <a>
                  <Image
                    height={20}
                    width={20}
                    src="/navbar/bag.png"
                    alt=""
                  ></Image>
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
