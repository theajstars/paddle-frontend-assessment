import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Nav.css";
import { motion } from "framer-motion";
export default function Nav() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [menuAnimate, setMenuAnimation] = useState("100vw");
  function openMenu() {
    setMenuAnimation("-250px");
    setMenuActive(true);
  }
  function closeMenu() {
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
        <Link to="/homepage" className="peddle-logo">
          PEDDLE
        </Link>
        <div className="nav-items flex-row">
          <Link className="nav-item rubik text-dark" to="/homepage">
            About
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
            FAQs
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
            Pricing
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
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
          <Link className="nav-item rubik text-dark" to="/homepage">
            About
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
            FAQs
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
            Pricing
          </Link>
          <Link className="nav-item rubik text-dark" to="/homepage">
            Testimonials
          </Link>
        </motion.div>

        <div className="nav-actions flex-row">
          <Link className="rubik text-darker nav-action sign-in" to="/homepage">
            Sign In
          </Link>
          <Link className="rubik nav-action sign-up" to="/homepage">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
}
