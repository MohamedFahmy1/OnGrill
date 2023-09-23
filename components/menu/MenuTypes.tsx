import Image from "next/image";
import seperator from "/images/separator-9ea70961.svg";
import menuType1 from "/images/menuType1.jpg";
import menuType2 from "/images/menuType2.jpg";
import menuType3 from "/images/menuType3.jpg";
import shape3 from "/images/shape3.png";
import shape4 from "/images/shape4.png";
import shape7 from "/images/shape7.png";

const MenuTypes = () => {
  return (
    <article className="menuTypes" id="menuTypes">
      <Image src={shape3} alt="decoration of spieces" className="shape3" />
      <Image src={shape4} alt="decoration of spieces" className="shape4" />
      <Image src={shape7} alt="decoration of spieces" className="shape7" />
      <div className="container">
        <div className="heading">
          <p>FLAVORS FOR ROYALTY</p>
          <span>
            <Image src={seperator} alt="seperator" />
          </span>
          <h2>We Offer Top Notch</h2>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </p>
        <div className="content">
          <div className="card">
            <div className="image">
              <Image src={menuType1} alt="menuType" />
            </div>
            <h3>Breakfast</h3>
            <p>VIEW MENU</p>
          </div>
          <div className="card">
            <div className="image">
              <Image src={menuType2} alt="menuType" />
            </div>
            <h3>Appetizers</h3>
            <p>VIEW MENU</p>
          </div>
          <div className="card">
            <div className="image">
              <Image src={menuType3} alt="menuType" />
            </div>
            <h3>Drinks</h3>
            <p>VIEW MENU</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MenuTypes;
