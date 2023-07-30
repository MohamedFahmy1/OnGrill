import Image from "next/image";
import seperator from "/images/separator-9ea70961.svg";
import about1 from "/images/about.jpg";
import about2 from "/images/about2.jpg";
import rotatingImage from "/images/rotatingImage.png";
import shape8 from "/images/shape8.png";
const About = () => {
  return (
    <section className="about" id="about">
      <Image src={shape8} alt="shape8" className="shape8" />
      <div className="container">
        <div className="left">
          <div className="heading">
            <p>OUR STORY</p>
            <span>
              <Image src={seperator} alt="seperator" />
            </span>
            <h2>Every Flavor Tells a Story</h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book It has survived not only
            five centuries, but also the leap into.
          </p>
          <span>Book Through Call</span>
          <p className="tel">+80 (400) 123 4567</p>
          <button className="btn btn-primary">
            <span className="text text-1">READ MORE</span>
            <span className="text text-2">READ MORE</span>
          </button>
        </div>
        <figure className="right">
          <Image src={about1} alt="about1" className="about1" />
          <div className="sideImage">
            <Image src={about2} alt="about2" className="about2" />
          </div>
          <div className="rotatingImage">
            <Image
              src={rotatingImage}
              alt="rotatingImage"
              className="rotatingImage"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default About;
