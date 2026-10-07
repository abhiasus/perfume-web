import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg perfume-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            ÉLAN <span>PERFUMES</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#perfumeNav"
            aria-controls="perfumeNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="perfumeNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;