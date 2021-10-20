import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content flex-row">
        <div className="footer-left flex-column">
          <Link to="/" className="peddle-logo">
            PEDDLE
          </Link>
          <p className="footer-left-text text-dark">
            Praesent mollis lobortis nisl nec laoreet. Duis <br /> euismod nisl
            nec ante egestas ullamcorper. <br /> Duis id mauris consequat,
            ultrices ligula at, <br /> laoreet mag.
          </p>
          <br />
          <br />

          <span className="copyright">©2020PADDLE</span>
        </div>
        <div className="footer-sections flex-row">
          <div className="footer-column flex-column">
            <span className="text-darker footer-head">Product</span>
            <span className="footer-item text-dark">Praesent</span>
            <span className="footer-item text-dark">Laoreet</span>
            <span className="footer-item text-dark">Laoreet</span>
            <span className="footer-item text-dark">Server</span>
          </div>

          <div className="footer-column flex-column">
            <span className="text-darker footer-head">Engage</span>
            <span className="footer-item text-dark">Mauris</span>
            <span className="footer-item text-dark">Aenean</span>
            <span className="footer-item text-dark">Linsean</span>
            <span className="footer-item text-dark">Lingula</span>
          </div>

          <div className="footer-column flex-column">
            <span className="text-darker footer-head">Earn money</span>
            <span className="footer-item text-dark">Ultrices</span>
            <span className="footer-item text-dark">Fusce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
