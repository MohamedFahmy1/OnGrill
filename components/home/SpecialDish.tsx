import Image from "next/image";
import specialDish from "/images/specialDish.jpg";
import Link from "next/link";
import seperator from "/images/separator-9ea70961.svg";
import banner from "/images/banner.png";
import shape1 from "/images/shape1.png";
import shape2 from "/images/shape2.png";
const SpecialDish = () => {
  return (
    <article className="specialDish" id="specialDish">
      <Image src={specialDish} alt="specialDish" className="image" />
      <section className="content">
        <Image src={shape1} alt="pepper" className="shape1" />
        <Image src={shape2} alt="pepper" className="shape2" />
        <div className="heading">
          <Image src={banner} alt="banner" className="banner" />
          <p>SPECIAL DISH</p>
          <span>
            <Image src={seperator} alt="seprator" />
          </span>
          <h2>Lobster Tortellini</h2>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever
          since the when an unknown printer took a galley of type.
        </p>
        <span>
          $40.00 <span> $20.00</span>
        </span>
        <Link href="/menu" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </Link>
      </section>
    </article>
  );
};

export default SpecialDish;
