import React, { useState } from "react";
import "./Navbar/Navbar.css";
import { Carousel } from "react-bootstrap";
import property1 from "./Static/img/post-1.jpg";
import property2 from "./Static/img/post-2.jpg";
import property3 from "./Static/img/post-3.jpg";
import property4 from "./Static/img/post-4.jpg";
import property5 from "./Static/img/post-5.jpg";
import property6 from "./Static/img/post-6.jpg";
import property7 from "./Static/img/post-7.jpg";

const propertyData = [
  {
    imageSrc: property1,
    title: "206 Mount Olive Road Two",
    date: "18 september.2023",
    catogory: "Travel",
  },
  {
    imageSrc: property2,
    title: "157 West Central Park",
    date: "18 september.2023",
    catogory: "Moon",
  },
  {
    imageSrc: property3,
    title: "245 Azabu Nishi Park let",
    date: "18 september.2023",
    catogory: "House",
  },
  {
    imageSrc: property4,
    title: "204 Montal South Bela Two",
    date: "18 september.2023",
    catogory: "Coming",
  },
  {
    imageSrc: property5,
    title: "204 Montal South Bela Two",
    date: "18 september.2023",
    catogory: "Travel",
  },
  {
    imageSrc: property6,
    title: "204 Montal South Bela Two",
    date: "18 september.2023",
    catogory: "Park",
  },
  {
    imageSrc: property7,
    title: "204 Montal South Bela Two",
    date: "18 september.2023",
    catogory: "Dubai",
  },
];

export const LatestNews = () => {
  const itemsPerSlide = 3; // Number of items per slide

  // Split property data into groups of itemsPerSlide
  const groupedPropertyData = [];
  for (let i = 0; i < propertyData.length; i += itemsPerSlide) {
    groupedPropertyData.push(propertyData.slice(i, i + itemsPerSlide));
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Optional content */}
      <Carousel
        id="property-carousel"
        className="mx-auto"
        style={{
          marginTop: "8rem",
          marginBottom: "2rem",
          width: "1300px", // Set your desired width
          textAlign: "center",
        }}
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        pause = {false}
      
      >
        {groupedPropertyData.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="row">
              {group.map((property, propertyIndex) => (
                <div className="col-md-4" key={propertyIndex}>
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img
                        src={property.imageSrc}
                        alt=""
                        className="img-a img-fluid"
                        //   style={{ width: "30px", height: "auto" }}
                      />
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <div className="price-box d-flex">
                            <span className="price-a">{property.catogory}</span>
                          </div>
                          <h2 className="card-title-a">
                            <a href="property-single.html">{property.title}</a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="card-date">
                            <span className="date-b text-white">
                              {property.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
