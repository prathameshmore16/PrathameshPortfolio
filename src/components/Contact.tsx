import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Moreprathamesh1610@gmail.com" data-cursor="disable">
                Moreprathamesh1610@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:9168689291" data-cursor="disable">
                9168689291
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/prathameshmore16"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/prathamesh-more-792483167"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Developed <br /> by <span>Prathamesh More</span>
            </h2>
            <h5>2025</h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;