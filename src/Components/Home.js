import { Container } from "@mui/material";
import React from "react";
import Nav from "./Nav";

import JumboImage from "../assets/img/top-jumbo-bg.jpg";
import FeatureSectionImage from "../assets/img/feature-section-background.jpg";
import PlanImage1 from "../assets/img/pricing_images/pricing1.jpg";
import PlanImage2 from "../assets/img/pricing_images/pricing2.jpg";
import PlanImage3 from "../assets/img/pricing_images/pricing3.jpg";

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

        <div className="choose-plan-section flex-column">
          <span className="body-head">Choose Your Plan</span>
          <p className="text-dark choose-plan-text">
            Let's choose the package that is best for you and explore it happily
            and
            <br />
            cheerfully
          </p>

          <div className="plans flex-row">
            <div className="plan flex-column">
              <div className="flex-column" style={{ alignItems: "center" }}>
                <img src={PlanImage1} alt="" className="plan-image" />
                <br />
                <span className="plan-head">Free Plan</span>
              </div>
              <ul className="plan-items">
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
              </ul>

              <div className="flex-column" style={{ alignItems: "center" }}>
                <span className="jumbo-detail-value">Free</span>
                <br />
                <button className="rubik plan-button flex-row">Select</button>
              </div>
            </div>

            <div className="plan flex-column">
              <div className="flex-column" style={{ alignItems: "center" }}>
                <img src={PlanImage2} alt="" className="plan-image" />
                <br />
                <span className="plan-head">Standard Plan</span>
              </div>
              <ul className="plan-items">
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
              </ul>

              <div className="flex-column" style={{ alignItems: "center" }}>
                <span className="jumbo-detail-value">
                  $9{" "}
                  <span style={{ fontWeight: 400 }} className="text-dark">
                    {" "}
                    / mo
                  </span>
                </span>
                <br />
                <button className="rubik plan-button flex-row">Select</button>
              </div>
            </div>

            <div className="plan flex-column">
              <div className="flex-column" style={{ alignItems: "center" }}>
                <img src={PlanImage3} alt="" className="plan-image" />
                <br />
                <span className="plan-head">Premium Plan</span>
              </div>
              <ul className="plan-items">
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
                <li className="plan-item text-dark">Mauris sem neque</li>
              </ul>

              <div className="flex-column" style={{ alignItems: "center" }}>
                <span className="jumbo-detail-value">
                  $12{" "}
                  <span style={{ fontWeight: 400 }} className="text-dark">
                    {" "}
                    / mo
                  </span>
                </span>
                <br />
                <button className="rubik plan-button flex-row">Select</button>
              </div>
            </div>
          </div>
        </div>

        <div className="start-paddle-section flex-column">
          <span className="body-head start-paddle-head">
            Get Started With
            <br />
            Paddle Today
          </span>
          <p className="text-dark choose-plan-text">
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
            ante <br /> egestas ullamcorper
          </p>
          <button className="start-today rubik">Start Today</button>
        </div>
      </Container>
    </>
  );
}
