import React from "react";
import { Fade } from "react-slideshow-image";
import slide1Image from "./Static/img/slide-1.jpg";
import slide2Image from "./Static/img/slide-2.jpg";
import slide3Image from "./Static/img/slide-3.jpg";

const fadeImages = [
  {
    url: slide1Image,
    caption: "Doral, Florida",
    location: "Venda Road Five",
  },
  {
    url: slide2Image,
    caption: "Doral, Florida",
    location: "Roan Road One",
  },
  {
    url: slide3Image,
    caption: "Doral, Florida",
    location: "Olive Road Two",
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade
        duration={3000}
        controls={false}
        pauseOnHover={false}
        arrows={false}
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <div className="intro intro-carousel swiper position-relative">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide carousel-item-a intro-item bg-image"
                  style={{ backgroundImage: `url(${fadeImage.url})` }}
                >
                  <div className="overlay overlay-a"></div>
                  <div className="intro-content display-table">
                    <div className="table-cell">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="intro-body">
                              <p className="intro-title-top">
                                {fadeImage.caption}
                                <br />
                                78345
                              </p>
                              <h1 className="intro-title mb-4">
                                <span className="color-b">204 </span> Mount
                                <br /> {fadeImage.location}
                              </h1>
                              <p className="intro-subtitle intro-price">
                                <a href="#" style={{ textDecoration: "none" }}>
                                  <span className="price-a">
                                    rent | $ 12.000
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
