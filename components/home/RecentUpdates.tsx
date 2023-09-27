import Image from "next/image";
import seperator from "/images/separator-9ea70961.svg";
import event1 from "/images/event1.jpg";
import event2 from "/images/event2.jpg";
import event3 from "/images/event3.jpg";
const RecentUpdates = () => {
  return (
    <article className="recentUpdates" id="recentUpdates">
      <div className="container">
        <section className="heading">
          <p>RECENT UPDATES</p>
          <span>
            <Image src={seperator} alt="seperator" />
          </span>
          <h2>Upcoming Events</h2>
        </section>
        <section className="content">
          <div
            className="box"
            style={{ backgroundImage: `url(${event1.src})` }}
          >
            <span>15/09/2023</span>
            <div className="text">
              <h3>FOOD, FLAVOUR</h3>
              <p>Flavour so good you`ll try to eat with your eyes.</p>
            </div>
          </div>
          <div
            className="box"
            style={{ backgroundImage: `url(${event2.src})` }}
          >
            <span>08/09/2023</span>
            <div className="text">
              <h3>HEALTHY FOOD</h3>
              <p>Flavour so good you`ll try to eat with your eyes.</p>
            </div>
          </div>
          <div
            className="box"
            style={{ backgroundImage: `url(${event3.src})` }}
          >
            <span>03/09/2023</span>
            <div className="text">
              <h3>RECIPIE</h3>
              <p>Flavour so good you`ll try to eat with your eyes.</p>
            </div>
          </div>
        </section>
        <button className="btn btn-primary">
          <span className="text text-1">VIEW OUR BLOG</span>
          <span className="text text-2" aria-hidden="true">
            VIEW OUR BLOG
          </span>
        </button>
      </div>
    </article>
  );
};

export default RecentUpdates;
