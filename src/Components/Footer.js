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
            <Link to="/" className="text-darker footer-head">
              Product
            </Link>
            <Link to="/" className="footer-item text-dark">
              Praesent
            </Link>
            <Link to="/" className="footer-item text-dark">
              Laoreet
            </Link>
            <Link to="/" className="footer-item text-dark">
              Laoreet
            </Link>
            <Link to="/" className="footer-item text-dark">
              Server
            </Link>
          </div>

          <div className="footer-column flex-column">
            <Link to="/" className="text-darker footer-head">
              Engage
            </Link>
            <Link to="/" className="footer-item text-dark">
              Mauris
            </Link>
            <Link to="/" className="footer-item text-dark">
              Aenean
            </Link>
            <Link to="/" className="footer-item text-dark">
              Linsean
            </Link>
            <Link to="/" className="footer-item text-dark">
              Lingula
            </Link>
          </div>

          <div className="footer-column flex-column">
            <Link to="/" className="text-darker footer-head">
              Earn money
            </Link>
            <Link to="/" className="footer-item text-dark">
              Ultrices
            </Link>
            <Link to="/" className="footer-item text-dark">
              Fusce
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
