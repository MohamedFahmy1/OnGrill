import Image from "next/image";
import React from "react";
import seperator from "/images/separator-9ea70961.svg";
import choose1 from "/images/choose1.png";
import choose2 from "/images/choose2.png";
import choose3 from "/images/choose3.png";
import choose4 from "/images/choose4.png";
import shape9 from "/images/shape9.png";

const ChooseUs = () => {
  return (
    <article className="chooseUs" id="chooseUs">
      <Image src={shape9} alt="shape9" className="shape9" />
      <div className="container">
        <section className="heading">
          <p>WHY CHOOSE US</p>
          <span>
            <Image src={seperator} alt="seprator" />
          </span>
          <h2>Our Strength</h2>
        </section>
        <section className="content">
          <div className="box">
            <Image src={choose1} alt="choose" className="image" />
            <h3>Hygienic Food</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
          <div className="box">
            <Image src={choose2} alt="choose" className="image" />
            <h3>Fresh Environment</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
          <div className="box">
            <Image src={choose3} alt="choose" className="image" />
            <h3>Skilled Chefs</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
          <div className="box">
            <Image src={choose4} alt="choose" className="image" />
            <h3>Event & Party</h3>
            <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ChooseUs;
