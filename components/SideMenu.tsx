import Image from "next/image";
import logo from "/images/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideMenu: React.FC<{
  sideMenuActive: boolean;
  closeSideMenu: (status: boolean) => void;
}> = ({ sideMenuActive, closeSideMenu }) => {
  const pathname = usePathname();
  const closeSideMenuHandler = () => {
    closeSideMenu(false);
  };
  return (
    <aside className={sideMenuActive ? "sideMenu active" : "sideMenu"}>
      <div className="overlay"></div>
      <button className="close" onClick={closeSideMenuHandler}>
        x
      </button>
      <div className="logo">
        <Image src={logo} alt="logo"></Image>
      </div>
      <nav>
        <ul className="sideMenuLinks">
          <li>
            <Link
              className={pathname === "/" ? "active" : undefined}
              onClick={closeSideMenuHandler}
              href={"/"}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/menu" ? "active" : undefined}
              onClick={closeSideMenuHandler}
              href={"/menu"}
            >
              MENUS
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about" ? "active" : undefined}
              onClick={closeSideMenuHandler}
              href={"/about"}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/contact" ? "active" : undefined}
              onClick={closeSideMenuHandler}
              href={"/contact"}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="info">
        <h2>Visit Us</h2>
        <p>
          Restaurant St, Delicious City,
          <br /> London 9578, UK
        </p>
        <p>Open: 9.30 am - 2.30pm</p>
        <p>booking@ongrill.com</p>
      </div>
      <div className="wrapper">
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
      </div>
      <h3>Booking Request</h3>
      <span>+88-123-123456</span>
    </aside>
  );
};

export default SideMenu;
