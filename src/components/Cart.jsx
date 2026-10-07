import React from "react";

function Cart() {
  return (
    <>
      <section className="page-banner">
        <div className="container text-center" data-aos="fade-up">
          <p>YOUR SHOPPING BAG</p>
          <h1>Shopping Cart</h1>
        </div>
      </section>

      <section className="cart-section py-5">
        <div className="container">
          <div
            className="cart-box"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-md-3">
                <img
                  src="/src/assets/images/perfume1.jpg"
                  className="cart-image"
                  alt="Velvet Rose"
                />
              </div>

              <div className="col-md-5">
                <h3>Velvet Rose</h3>
                <p>Premium Eau De Parfum</p>
              </div>

              <div className="col-md-2">
                <h4>₹2,499</h4>
              </div>

              <div className="col-md-2">
                <button
                  className="btn remove-btn"
                  onClick={() =>
                    console.log("Product removed")
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div
            className="cart-total"
            data-aos="fade-up"
          >
            <h3>Total: ₹2,499</h3>

            <button
              className="btn perfume-btn"
              onClick={() => alert("Order placed successfully!")}
            >
              Checkout
            </button>
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

export default Cart;