"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import SideMenu from "./SideMenu";
import Cart from "./cart/Cart";
import { RootState } from "@/store/index";
import { useSelector } from "react-redux";
const MainNav = () => {
  const pathname = usePathname();
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [sideMenuActive, setSideMenuActive] = useState<boolean>(false);
  const [cartMenuActive, setCartMenuActive] = useState<boolean>(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const items = useSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  useEffect(() => {
    const scrollYHandler = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", scrollYHandler);
    return () => {
      window.removeEventListener("scroll", scrollYHandler);
    };
  }, []);
  const sideMenuHandler = () => {
    setSideMenuActive(true);
  };
  const closeSideMenuHandler = (status: boolean) => {
    setSideMenuActive(false);
  };
  const cartMenuActiveHandler = () => {
    setCartMenuActive(true);
  };
  const closeCartMenuHandler = (status: boolean) => {
    setCartMenuActive(false);
  };
  const buttonStyle = `${"btn btn-secondary"} ${isHighlighted ? "bump" : ""}`;
  return (
    <header className={scrollValue > 10 ? "sticky" : undefined}>
      <div className="logo">
        <Image src={logo} alt="logo"></Image>
      </div>
      <nav>
        <ul className="regMenu">
          <li>
            <Link
              className={pathname === "/" ? "active" : undefined}
              href={"/"}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/menu" ? "active" : undefined}
              href={"/menu"}
            >
              MENUS
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about" ? "active" : undefined}
              href={"/about"}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/contact" ? "active" : undefined}
              href={"/contact"}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu">
        <button className={buttonStyle} onClick={cartMenuActiveHandler}>
          <span className="text text-1">
            Food Cart <span className="totalCart">{totalQuantity}</span>
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
          </span>
          <span className="text text-2" aria-hidden="true">
            Food Cart <span className="totalCart">{totalQuantity}</span>
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
          </span>
        </button>
        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={sideMenuHandler}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <SideMenu
          sideMenuActive={sideMenuActive}
          closeSideMenu={closeSideMenuHandler}
        />
        <Cart
          cartMenuActive={cartMenuActive}
          closeCartMenu={closeCartMenuHandler}
        />
      </div>
    </header>
  );
};

export default MainNav;
