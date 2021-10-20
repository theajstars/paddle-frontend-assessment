import { Container } from "@mui/material";
import React from "react";
import Nav from "./Nav";

import JumboImage from "../assets/img/top-jumbo-bg.jpg";
import FeatureSectionImage from "../assets/img/feature-section-background.jpg";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Nav />
        <div className="jumbotron flex-row">
          <div className="jumbo-left flex-column">
            <span className="jumbo-head rubik text-darker">
              We Are Everything We Aspire To BE
            </span>
            <p className="jumbo-text text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              orci condimentum lectus efficitur tempor vel eu massa. Sed
              molestie turpis eget ipsum malesuada dignissim
            </p>
            <button className="rubik jumbo-get-started">Get Started</button>
          </div>

          <img className="jumbo-right" src={JumboImage} alt="" />
        </div>

        <div className="jumbo-details flex-row">
          <div className="jumbo-detail flex-row">
            <span className="jumbo-icon">
              <i className="fas fa-user"></i>
            </span>
            <span className="jumbo-inside flex-column">
              <span className="jumbo-detail-value text-darker">90+</span>
              <span className="jumbo-detail-criteria text-dark">Users</span>
            </span>
          </div>
          <div className="jumbo-detail flex-row">
            <span className="jumbo-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="jumbo-inside flex-column">
              <span className="jumbo-detail-value text-darker">30+</span>
              <span className="jumbo-detail-criteria text-dark">Locations</span>
            </span>
          </div>
          <div className="jumbo-detail flex-row">
            <span className="jumbo-icon">
              <i className="fas fa-server"></i>
            </span>
            <span className="jumbo-inside flex-column">
              <span className="jumbo-detail-value text-darker">50+</span>
              <span className="jumbo-detail-criteria text-dark">Users</span>
            </span>
          </div>
        </div>

        <div className="feature-section flex-row">
          <img className="feature-left" src={FeatureSectionImage} alt="" />
          <div className="feature-right flex-column">
            <span className="rubik text-darker body-head">
              Features We Provide
              <br />
              For You
            </span>
            <p className="text-dark rubik feature-text">
              Curabitur tempor justo non turpis malesuada cursus.
              <br />
              Mauris ac libero eu sem finibus lacinia nec pulvinar
            </p>

            <ul>
              <li className="feature-item text-dark">Curabitur tempor justo</li>
              <li className="feature-item text-dark">Curabitur tempor justo</li>
              <li className="feature-item text-dark">Curabitur tempor justo</li>
              <li className="feature-item text-dark">Curabitur tempor justo</li>
            </ul>
          </div>
        </div>

        <div className="choose-plan-section">
          <span className="body-head">Choose Your Plan</span>
          <p className="text-dark choose-plan-text">
            Let's choose the package that is best for you and explore it happily
            and
            <br />
            cheerfully
          </p>
        </div>
      </Container>
    </>
  );
}
