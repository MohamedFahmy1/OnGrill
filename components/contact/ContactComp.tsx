import Image from "next/image";
import avatar from "/images/avatar.jpg";
const ContactComp = () => {
  return (
    <article className="contact">
      <div className="testimonials">
        <div className="container">
          <h1>
            &quot; I wanted to thank you for inviting me down for that amazing
            dinner the other night. The food was extraordinary. &quot;
          </h1>
          <div className="wrapper">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
          <div className="avatar">
            <Image src={avatar} alt="avatar" />
          </div>
          <p>John Smith</p>
        </div>
      </div>
      <div className="contactForm">
        <div className="container">
          <div className="box">
            <div className="left">
              <h2>Online Reservation</h2>
              <p>
                Booking request <span>+88-123-123456</span> or fill out the
                order form
              </p>
              <form action="">
                <div className="inputBox">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="tel" name="tel" placeholder="Phone Number" />
                </div>
                <div className="inputBox col3">
                  <select name="person">
                    <option value="1person">1 Person</option>
                    <option value="2person">2 Person</option>
                    <option value="3person">3 Person</option>
                    <option value="4person">4 Person</option>
                    <option value="5person">5 Person</option>
                    <option value="6person">6 Person</option>
                  </select>
                  <input type="date" name="date" />
                  <input type="time" name="time" />
                </div>
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">BOOK A TABLE</span>
                  <span className="text text-2">BOOK A TABLE</span>
                </button>
              </form>
            </div>
            <div className="right">
              <h2>Contact Us</h2>
              <h3>Booking Request</h3>
              <span>+88-123-123456</span>
              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>
              <h3>Location</h3>
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <h3>Lunch Time</h3>
              <p>
                Monday to Sunday <br />
                11.00 am - 2.30pm
              </p>
              <h3>Dinner Time</h3>
              <p>
                Monday to Sunday <br />
                05.00 pm - 10.00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactComp;
