import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="mt-16"></div>
      <div className="navbar bg-[#133216] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#133216] text-white  z-[1] mt-3 w-full p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Over Ons</a>
              </li>
              <li>
                <a>Agroforestry</a>
              </li>
              <li>
                <a>De Kwekerij</a>
              </li>
              <li>
                <a>Projecten & Fotso’s</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="absolute -mt-20">
            <Image
              src="/navbar/logo.png"
              height={157}
              width={350}
              alt="Logo"
            ></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Over Ons</a>
            </li>
            <li>
              <a>Agroforestry</a>
            </li>
            <li>
              <a>De Kwekerij</a>
            </li>
            <li>
              <a>Projecten & Fotso’s</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
