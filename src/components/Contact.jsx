import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="page-banner">
        <div className="container text-center" data-aos="fade-up">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <p className="gold-title">CONTACT ÉLAN</p>

              <h2>Let's Talk Fragrance</h2>

              <p>
                Have a question about our perfumes? We'd love
                to hear from you.
              </p>

              <div className="contact-info">
                <p>
                  <strong>Address:</strong>
                  <br />
                  Bangalore, Karnataka, India
                </p>

                <p>
                  <strong>Phone:</strong>
                  <br />
                  +91 98765 43210
                </p>

                <p>
                  <strong>Email:</strong>
                  <br />
                  hello@elanperfumes.com
                </p>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />

                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>

                <button
                  className="btn perfume-btn"
                  onClick={() => alert("Message sent successfully!")}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h3>ÉLAN PERFUMES</h3>
        <p>Luxury fragrances for unforgettable moments.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ÉLAN Perfumes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;