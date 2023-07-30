import Image from "next/image";
import React from "react";
import seperator from "/images/separator-9ea70961.svg";
import shape5 from "/images/shape5.png";
import shape6 from "/images/shape6.png";
import menu1 from "/public/menu1.png";
import menu2 from "/public/menu2.png";
import menu3 from "/public/menu3.png";
import menu4 from "/public/menu4.png";
import menu5 from "/public/menu5.png";
import menu6 from "/public/menu6.png";
import MenuItem from "./MenuItem";
const DUMMY_ITEMS: {
  id: string;
  price: number;
  name: string;
  imageSrc: string;
  description: string;
  label?: string;
}[] = [
  {
    id: "Greek Salad",
    price: 25.5,
    name: "Greek Salad",
    imageSrc: menu1.src,
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    label: "NEW",
  },
  {
    id: "Olivas Rellenas",
    price: 25,
    name: "Olivas Rellenas",
    imageSrc: menu2.src,
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
  },
  {
    id: "Tokusen Wagyu",
    price: 39,
    name: "Tokusen Wagyu",
    imageSrc: menu3.src,
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
  },
  {
    id: "Butternut Pumpkin",
    price: 10,
    name: "Butternut Pumpkin",
    imageSrc: menu4.src,
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
  },
  {
    id: "Lasagne",
    price: 40,
    name: "Lasagne",
    imageSrc: menu5.src,
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
  },
  {
    id: "Opu Fish",
    price: 49,
    name: "Opu Fish",
    imageSrc: menu6.src,
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    label: "SEASONAL",
  },
];
const DetailedMenu = () => {
  return (
    <section className="detailedMenu" id="detailedMenu">
      <Image src={shape5} alt="shape decoration" className="shape5" />
      <Image src={shape6} alt="shape decoration" className="shape6" />
      <div className="container">
        <div className="heading">
          <p>SPECIAL SELECTION</p>
          <span>
            <Image src={seperator} alt="seperator" />
          </span>
          <h2>Delicious Menu</h2>
        </div>
        <div className="content">
          {DUMMY_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              description={item.description}
              name={item.name}
              imageSrc={item.imageSrc}
              price={item.price}
              label={item.label!}
            />
          ))}
        </div>
        <p>
          During winter daily from <span> 7:00 pm</span> to <span>9:00 pm</span>
        </p>
        <button className="btn btn-primary">
          <span className="text text-1">VIEW ALL MENU</span>
          <span className="text text-2">VIEW ALL MENU</span>
        </button>
      </div>
    </section>
  );
};

export default DetailedMenu;
