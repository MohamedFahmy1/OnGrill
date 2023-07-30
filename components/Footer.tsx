import Link from "next/link";
import footer from "/images/footer.jpg";
import footerContent from "/images/footerContent.png";
import Image from "next/image";
import logo from "/images/logo.png";
import footerSeperator from "/images/footerSeperator.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footer.src})` }}>
      <div className="container">
        <ul className="links">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/menu"}>MENUS</Link>
          </li>
          <li>
            <Link href={"/about"}>ABOUT US</Link>
          </li>
          <li>
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
        <div
          className="content"
          style={{ backgroundImage: `url(${footerContent.src})` }}
        >
          <Image
            src={footerSeperator}
            alt="footerSeperator"
            className="right"
          />
          <Image
            src={footerSeperator}
            alt="footerSeperator"
            className="left
            "
          />
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
          <div className="info">
            <p>Restaurant St, Delicious City, London 9578, UK</p>
            <p>booking@ongrill.com</p>
            <p>Booking Request : +88-123-123456</p>
            <p>Open: 09:00 am - 01:00 pm</p>
          </div>
          <div className="wrapper">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
          <div className="offers">
            <h3>Get News & Offers</h3>
            <p>
              Subscribe us & Get <span>25% Off.</span>
            </p>
          </div>
          <div className="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <button className="btn btn-secondary">
              <span className="text text-1">SUBSCRIBE</span>
              <span className="text text-2" aria-hidden="true">
                SUBSCRIBE
              </span>
            </button>
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#">FACEBOOK</a>
          </li>
          <li>
            <a href="#">INSTAGRAM</a>
          </li>
          <li>
            <a href="#">TWITTER</a>
          </li>
          <li>
            <a href="#">YOUTUBE</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="copyWrite">
          © 2023 OnGrill. All Rights Reserved | Designed by{" "}
          <a
            href="https://github.com/MohamedFahmy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohamed Fahmy
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
