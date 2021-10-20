import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Nav.css";
import { motion } from "framer-motion";
export default function Nav() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [menuAnimate, setMenuAnimation] = useState("100vw");
  function openMenu() {
    console.log("Open");
    setMenuAnimation("-250px");
    setMenuActive(true);
  }
  function closeMenu() {
    console.log("Closed");
    setMenuAnimation("100vw");
    setMenuActive(false);
  }
  return (
    <>
      <span
        className={`${isMenuActive ? "close-menu" : "none"}`}
        onClick={closeMenu}
      >
        <i className="far fa-times"></i>
      </span>
      <span
        className={`${isMenuActive ? "none" : "open-menu"}`}
        onClick={openMenu}
      >
        <i className="fad fa-bars"></i>
      </span>
      <nav className="nav-container flex-row">
        <Link to="/" className="peddle-logo">
          PEDDLE
        </Link>
        <div className="nav-items flex-row">
          <Link className="nav-item rubik text-dark" to="/">
            About
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            FAQs
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            Pricing
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            Testimonials
          </Link>
        </div>
        <motion.div
          className="small-nav-items flex-row"
          initial={{
            x: "100vw",
          }}
          animate={{
            x: menuAnimate,
          }}
        >
          <Link className="nav-item rubik text-dark" to="/">
            About
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            FAQs
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            Pricing
          </Link>
          <Link className="nav-item rubik text-dark" to="/">
            Testimonials
          </Link>
        </motion.div>

        <div className="nav-actions flex-row">
          <Link className="rubik text-darker nav-action sign-in" to="/">
            Sign In
          </Link>
          <Link className="rubik nav-action sign-up" to="/">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
}
