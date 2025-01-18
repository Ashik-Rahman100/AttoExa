import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative -z-1">
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
              className="menu menu-sm dropdown-content bg-[#133216] text-white  z-[1] mt-3 w-72 lg:w-full p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#over-ons">Over Ons</Link>
              </li>
              <li>
                <Link href="#agroforestry">Agroforestry</Link>
              </li>
              <li>
                <Link href="#de-kwekerij">De Kwekerij</Link>
              </li>
              <li>
                <Link href="#projecten-fotso’s">Projecten & Fotso’s</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* className="absolute w-32 lg:w-80 ml-[20%] lg:ml-0 -mt-5  lg:-mt-24 -z-5" */}
          <Link
            href="/"
            className="absolute w-32 lg:w-80 ml-[50%] lg:ml-0 -mt-2  lg:-mt-20 -z-5"
          >
            <Image
              src="/navbar/logo.png"
              height={157}
              width={350}
              alt="Logo"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#over-ons">Over Ons</Link>
            </li>
            <li>
              <Link href="#agroforestry">Agroforestry</Link>
            </li>
            <li>
              <Link href="#de-kwekerij">De Kwekerij</Link>
            </li>
            <li>
              <Link href="#projecten-fotso">Projecten & Fotso’s</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
