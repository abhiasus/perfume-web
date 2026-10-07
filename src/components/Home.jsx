import React from "react";

function Home() {
  const perfumes = [
    {
      name: "Velvet Rose",
      image: "/src/assets/images/perfume1.jpg",
      price: "₹2,499"
    },
    {
      name: "Golden Oud",
      image: "/src/assets/images/perfume2.jpg",
      price: "₹3,299"
    },
    {
      name: "Midnight Noir",
      image: "/src/assets/images/perfume3.jpg",
      price: "₹2,899"
    },
    {
      name: "Royal Bloom",
      image: "/src/assets/images/perfume4.jpg",
      price: "₹2,199"
    },
    {
      name: "Amber Mist",
      image: "/src/assets/images/perfume5.jpg",
      price: "₹2,699"
    },
    {
      name: "Pure Essence",
      image: "/src/assets/images/perfume6.jpg",
      price: "₹1,999"
    }
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

              <a href="/products" className="btn perfume-btn">
                Shop Perfumes
              </a>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="/src/assets/images/hero.jpg"
                className="hero-image"
                alt="Luxury perfume"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="top-perfumes py-5">
        <div className="container">
          <div className="section-heading text-center" data-aos="fade-up">
            <p>OUR COLLECTION</p>
            <h2>Top Perfumes</h2>
            <span>
              Explore our most loved fragrances
            </span>
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
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                  />

                  <div className="perfume-card-body">
                    <h3>{perfume.name}</h3>
                    <p>Luxury fragrance collection</p>
                    <h4>{perfume.price}</h4>

                    <a
                      href="/cart"
                      className="btn perfume-card-btn"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <div
            className="experience-box"
            data-aos="zoom-in"
          >
            <p>THE ÉLAN EXPERIENCE</p>
            <h2>Find A Fragrance That Feels Like You</h2>
            <span>
              From fresh floral notes to rich woody aromas,
              find your perfect signature scent.
            </span>

            <br />

            <a href="/about" className="btn perfume-btn mt-4">
              Explore Our Story
            </a>
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
            <p>
              Luxury fragrances crafted for unforgettable
              moments.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
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