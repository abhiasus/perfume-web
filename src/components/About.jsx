import React from "react";
import { Link } from "react-router-dom";

import perfume4 from "../assets/images/perfume4.jpg";

function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container text-center" data-aos="fade-up">
          <p>OUR STORY</p>
          <h1>About ÉLAN</h1>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src={perfume4}
                className="about-image"
                alt="Perfume collection"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <p className="gold-title">WHO WE ARE</p>

              <h2>Fragrance With Character</h2>

              <p>
                ÉLAN Perfumes brings together modern design and
                timeless fragrance traditions.
              </p>

              <p>
                Every fragrance is carefully created to offer
                a beautiful experience from the first spray to
                the final note.
              </p>

              <p>
                Our collection is designed for people who want
                their fragrance to become part of their identity.
              </p>
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
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h3>ÉLAN PERFUMES</h3>
            <p>Luxury fragrances for every personality.</p>

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
        </div>
      </div>
    </footer>
  );
}

export default About;