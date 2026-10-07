import React from "react";

function Product() {
  const products = [
    {
      name: "Velvet Rose",
      price: "₹2,499",
      image: "/src/assets/images/perfume1.jpg"
    },
    {
      name: "Golden Oud",
      price: "₹3,299",
      image: "/src/assets/images/perfume2.jpg"
    },
    {
      name: "Midnight Noir",
      price: "₹2,899",
      image: "/src/assets/images/perfume3.jpg"
    },
    {
      name: "Royal Bloom",
      price: "₹2,199",
      image: "/src/assets/images/perfume4.jpg"
    },
    {
      name: "Amber Mist",
      price: "₹2,699",
      image: "/src/assets/images/perfume5.jpg"
    },
    {
      name: "Pure Essence",
      price: "₹1,999",
      image: "/src/assets/images/perfume6.jpg"
    }
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
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="perfume-card-body">
                    <h3>{product.name}</h3>
                    <p>Premium Eau De Parfum</p>
                    <h4>{product.price}</h4>

                    <button
                      className="btn perfume-card-btn"
                      onClick={() =>
                        console.log(
                          product.name + " added to cart"
                        )
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ÉLAN Perfumes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Product;