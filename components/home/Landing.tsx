"use client";
import Image from "next/image";
import landing1 from "../../images/landing1.jpg";
import bookTable from "../../images/bookTable.png";
import seperator from "/images/separator-9ea70961.svg";
import Link from "next/link";
const Landing = () => {
  return (
    <section
      className="landing"
      id="landing"
      style={{
        backgroundImage: `url("${landing1.src}")`,
      }}
    >
      <div className="container">
        <div className="heading">
          <p>AMAZING & DELICIOUS</p>
          <span>
            <Image src={seperator} alt="seprator" />
          </span>
        </div>
        <h1>
          For the love of
          <br /> delicious food
        </h1>
        <p>Come with family & feel the joy of mouthwatering food</p>
        <Link href="/menu" className="btn btn-primary">
          <span className="text text-1">View Our Menu</span>
          <span className="text text-2" aria-hidden="true">
            View Our Menu
          </span>
        </Link>
      </div>
      <Link href={"/contact"} className="box">
        <Image
          src={bookTable}
          alt="table"
          width={50}
          height={50}
          className="image"
        />
        <p>
          BOOK A <br /> TABLE
        </p>
      </Link>
    </section>
  );
};

export default Landing;
