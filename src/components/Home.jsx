import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";
import perfume4 from "../assets/images/perfume4.jpg";
import perfume5 from "../assets/images/perfume5.jpg";
import perfume6 from "../assets/images/perfume6.jpg";

function Home() {
  const perfumes = [
    { name: "Velvet Rose", image: perfume1, price: "₹2,499" },
    { name: "Golden Oud", image: perfume2, price: "₹3,299" },
    { name: "Midnight Noir", image: perfume3, price: "₹2,899" },
    { name: "Royal Bloom", image: perfume4, price: "₹2,199" },
    { name: "Amber Mist", image: perfume5, price: "₹2,699" },
    { name: "Pure Essence", image: perfume6, price: "₹1,999" }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <p className="hero-small">DISCOVER YOUR SIGNATURE SCENT</p>

              <h1>
                Elegance
                <br />
                <span>In Every Drop</span>
              </h1>

              <p className="hero-text">
                Discover luxurious fragrances crafted to express your
                personality and leave a lasting impression.
              </p>

              <Link to="/products" className="btn perfume-btn">
                Shop Perfumes
              </Link>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <img src={hero} className="hero-image" alt="Luxury perfume" />
            </div>
          </div>
        </div>
      </section>

      <section className="top-perfumes py-5">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <p>OUR COLLECTION</p>
            <h2>Top Perfumes</h2>
            <span>Explore our most loved fragrances</span>
          </div>

          <div className="row g-4 mt-4">
            {perfumes.map((perfume, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="perfume-card">
                  <img src={perfume.image} alt={perfume.name} />

                  <div className="perfume-card-body">
                    <h3>{perfume.name}</h3>
                    <p>Luxury fragrance collection</p>
                    <h4>{perfume.price}</h4>

                    <Link to="/cart" className="btn perfume-card-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <div className="experience-box" data-aos="zoom-in">
            <p>THE ÉLAN EXPERIENCE</p>
            <h2>Find A Fragrance That Feels Like You</h2>
            <span>
              From fresh floral notes to rich woody aromas,
              find your perfect signature scent.
            </span>

            <br />

            <Link to="/about" className="btn perfume-btn mt-4">
              Explore Our Story
            </Link>
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
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h3>ÉLAN PERFUMES</h3>
            <p>Luxury fragrances crafted for unforgettable moments.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Contact</h4>
            <p>Bangalore, India</p>
            <p>+91 98765 43210</p>
            <p>hello@elanperfumes.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ÉLAN Perfumes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Home;