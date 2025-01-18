import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#77892B] text-white p-10">
      <footer className="footer ">
        <aside>
          <Image
            src="/home/Logo.png"
            width={265}
            height={118}
            alt="Footer logo"
          ></Image>
          <p>
            De beste tijd om een boom te planten was 20 jaar <br /> geleden. De
            op één na beste tijd is nu.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="#over-ons" className="link link-hover">
            Over Ons
          </Link>
          <Link href="#agroforestry" className="link link-hover">
            Agroforestry
          </Link>
          <Link href="#projecten-fotso" className="link link-hover">
            Projecten & Fotso’s
          </Link>
          <Link href="#contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Socials</h6>
          <Link href="https://www.linkedin.com" className="link link-hover">
            Linkedin
          </Link>
          <Link href={"https://www.linkedin.com"} className="link link-hover">
            Facebook
          </Link>
          <Link href={"https://www.linkedin.com"} className="link link-hover">
            Twitter
          </Link>
          <Link href={"https://www.linkedin.com"} className="link link-hover">
            Youtube
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">NEEM CONTACT OP</h6>
          <a className="link link-hover">Boxtelseweg 27B, 5481VE Schijndel</a>
          <a className="link link-hover">info@jadereforestry.com</a>
          <a className="link link-hover">+31 6 128 464 80</a>
          <a className="link link-hover">BTW-ID NL003147799B90</a>
          <a className="link link-hover">KVK 77106903</a>
          <a className="link link-hover">IBAN NL11 RABO 0352 2704 89</a>
        </nav>
      </footer>
      <aside className="text-center pt-8">
        <p>
          © Jade Reforestry | {new Date().getFullYear()} | jadereforestry.nl |
          Web Design by Online Marketing Bakery
        </p>
      </aside>
    </div>
  );
}
