import React from "react";
import { Link } from "react-router-dom";
import property1 from "./../Static/img/post-1.jpg";
import property2 from "./../Static/img/post-2.jpg";
import property3 from "./../Static/img/post-3.jpg";
import property4 from "./../Static/img/post-4.jpg";
import property5 from "./../Static/img/post-5.jpg";
import property6 from "./../Static/img/post-6.jpg";
import property7 from "./../Static/img/post-7.jpg";

const propertyData = [
  {
    imageSrc: property1,
    title: "206 Mount Olive Road Two",
    date: "18 September 2023",
    category: "Travel",
  },
  {
    imageSrc: property2,
    title: "157 West Central Park",
    date: "18 September 2023",
    category: "Moon",
  },
  {
    imageSrc: property3,
    title: "245 Azabu Nishi Park let",
    date: "18 September 2023",
    category: "House",
  },
  {
    imageSrc: property4,
    title: "204 Montal South Bela Two",
    date: "18 September 2023",
    category: "Coming",
  },
  {
    imageSrc: property5,
    title: "204 Montal South Bela Two",
    date: "18 September 2023",
    category: "Travel",
  },
  {
    imageSrc: property6,
    title: "204 Montal South Bela Two",
    date: "18 September 2023",
    category: "Park",
  },
  {
    imageSrc: property7,
    title: "204 Montal South Bela Two",
    date: "18 September 2023",
    category: "Dubai",
  },
];

export const Blogs = () => {
  return (
    <>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Amazing Posts</h1>
                <span className="color-text-a">Grid News</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    News Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="news-grid grid">
        <div className="container">
          <div className="row">
            {propertyData.map((data, index) => (
              <div className="col-md-4" key={index}>
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img
                      src={data.imageSrc}
                      alt=""
                      className="img-b img-fluid"
                    />
                  </div>
                  <div className="card-overlay">
                    <div className="card-header-b">
                      <div className="card-category-b">
                        <a href="#" className="category-b">
                          {data.category}
                        </a>
                      </div>
                      <div className="card-title-b">
                        <h2 className="title-2">
                          <a href="blog-single.html">
                            {data.title}
                            <br /> new
                          </a>
                        </h2>
                      </div>
                      <div className="card-date">
                        <span className="date-b">{data.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
