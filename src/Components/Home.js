import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import JumboImage from "../assets/img/top-jumbo-bg.jpg";
import FeatureSectionImage from "../assets/img/feature-section-background.jpg";

import PlanImage1 from "../assets/img/pricing_images/pricing1.jpg";
import PlanImage2 from "../assets/img/pricing_images/pricing2.jpg";
import PlanImage3 from "../assets/img/pricing_images/pricing3.jpg";

import BrandNetflix from "../assets/img/brands/netflix.png";
import BrandReddit from "../assets/img/brands/reddit.png";
import BrandAmazon from "../assets/img/brands/amazon1.png";
import BrandDiscord from "../assets/img/brands/discord.png";
import BrandSpotify from "../assets/img/brands/spotify.png";

import Customer1 from "../assets/img/customers/customer1.png";
import Customer2 from "../assets/img/customers/customer2.png";
import Customer3 from "../assets/img/customers/customer3.png";
import Footer from "./Footer";

export default function Home() {
  const [numberOfSlides, updateNumberOfSlides] = useState(3);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  //Initialize keen slider
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: numberOfSlides,
    mode: "free",
    spacing: 15,
    autoAdjustSlidesPerView: 2,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  //Get screen width on component mount
  //This will determine the number of slides to show per frame
  useEffect(() => {
    if (window.innerWidth < 1000 && window.innerWidth > 600) {
      updateNumberOfSlides(2);
    } else if (window.innerWidth <= 600) {
      updateNumberOfSlides(1);
    }
  }, []);
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
            <br />
            <br />
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
          <button className="start-today rubik flex-row">Start Today</button>
        </div>

        <div className="brands flex-row">
          <div className="brands-1 flex-row">
            <img src={BrandNetflix} alt="" className="brand" />
            <img src={BrandReddit} alt="" className="brand" />
            <img src={BrandAmazon} alt="" className="brand" />
          </div>
          <div className="brands-1 flex-row">
            <img src={BrandSpotify} alt="" className="brand" />
            <img src={BrandDiscord} alt="" className="brand" />
          </div>
        </div>

        <div className="customers flex-column">
          <div className="body-head customers-head">
            Trusted by Thousands of <br /> Happy Customers
          </div>
          <br />
          <p className="text-dark choose-plan-text">
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse
            et <br /> suscipit est, nec laoreet mi. Nunc pellentesque imperdiet
            ultricies.
          </p>

          <div ref={sliderRef} className="feedbacks">
            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer1} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Viezh Robert
                    </span>
                    <span className="feedbacker-location text-dark">
                      Warsaw, Poland
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>

            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer2} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Yessica Christy
                    </span>
                    <span className="feedbacker-location text-dark">
                      Shanxi, China
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>

            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer3} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Kim Young Jou
                    </span>
                    <span className="feedbacker-location text-dark">
                      Seoul, South Korea
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>
            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer1} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Viezh Robert
                    </span>
                    <span className="feedbacker-location text-dark">
                      Warsaw, Poland
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>

            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer2} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Yessica Christy
                    </span>
                    <span className="feedbacker-location text-dark">
                      Shanxi, China
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>

            <div className="keen-slider__slide feedback flex-column">
              <div className="feedback-top-row flex-row">
                <div className="flex-row" style={{ alignItems: "center" }}>
                  <img src={Customer3} alt="" className="feedbacker-image" />
                  <div className="flex-column">
                    <span className="text-darker feedbacker-name">
                      Kim Young Jou
                    </span>
                    <span className="feedbacker-location text-dark">
                      Seoul, South Korea
                    </span>
                  </div>
                </div>
                <span className="text-darker feedbacker-rating flex-row">
                  4.5
                  <i
                    className="fas fa-star"
                    style={{
                      color: "#FEA250",
                      marginLeft: "6px",
                      fontSize: "15px",
                    }}
                  ></i>
                </span>
              </div>
              <p className="feedback-text">
                “Mauris sem neque, ultrices nec sapien id, consequat laoreet
                dolor. Ut rhoncus sollicitudin metus, ac lobortis felis
                dignissim et. Fusce arcu ex”
              </p>
            </div>
          </div>

          <div className="flex-row slider-controls">
            {slider && (
              <>
                <span
                  className={`slider-action ${
                    currentSlide === 0 ? "slider-action-disabled" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation() || slider.prev();
                  }}
                  disabled={currentSlide === 0}
                >
                  <i className="far fa-long-arrow-left"></i>
                </span>
                <span
                  className={`slider-action ${
                    currentSlide === 3 ? "slider-action-disabled" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation() || slider.next();
                  }}
                  disabled={currentSlide === slider.details().size - 1}
                >
                  <i className="far fa-long-arrow-right"></i>
                </span>
              </>
            )}
          </div>
        </div>

        <center>
          <div className="subscribe-section flex-row">
            <div className="flex-column">
              <span className="body-head sub-head">
                Subscribe Now for <br /> Get Special Features!
              </span>
              <br />
              <p className="text-dark rubik feature-text sub-text">
                Praesent mollis lobortis nisl nec laoreet.
              </p>
            </div>
            <button className="subscribe-btn rubik">Subscribe Now</button>
          </div>
        </center>

        <Footer />
      </Container>
    </>
  );
}
