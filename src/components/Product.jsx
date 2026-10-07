import React from "react";
import { Link } from "react-router-dom";

import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";
import perfume4 from "../assets/images/perfume4.jpg";
import perfume5 from "../assets/images/perfume5.jpg";
import perfume6 from "../assets/images/perfume6.jpg";

function Product() {
  const products = [
    { name: "Velvet Rose", price: "₹2,499", image: perfume1 },
    { name: "Golden Oud", price: "₹3,299", image: perfume2 },
    { name: "Midnight Noir", price: "₹2,899", image: perfume3 },
    { name: "Royal Bloom", price: "₹2,199", image: perfume4 },
    { name: "Amber Mist", price: "₹2,699", image: perfume5 },
    { name: "Pure Essence", price: "₹1,999", image: perfume6 }
  ];

  return (
    <>
      <section className="page-banner">
        <div className="container text-center" data-aos="fade-up">
          <p>OUR COLLECTION</p>
          <h1>Luxury Perfumes</h1>
        </div>
      </section>

      <section className="products-section py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="perfume-card">
                  <img src={product.image} alt={product.name} />

                  <div className="perfume-card-body">
                    <h3>{product.name}</h3>
                    <p>Premium Eau De Parfum</p>
                    <h4>{product.price}</h4>

                    <button
                      className="btn perfume-card-btn"
                      onClick={() =>
                        console.log(product.name + " added to cart")
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

export default Product;