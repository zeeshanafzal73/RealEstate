import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//  [
//   {
//     imageSrc: property1,
//     title: "206 Mount Olive Road Two",
//     date: "18 September 2023",
//     category: "Travel",
//   }
// ];

export const Blogs = () => {
  const [propertyData, setPropertyData]=useState([])
  
  useEffect(()=>{
    const fetchNews = async()=>{
      try{
        const res= await axios.get("http://127.0.0.1:8000/news/")
        setPropertyData(res.data)
      }catch(err){
        console.log(err)
      }   
    }
    fetchNews();
  },[])

  return (
    <>
      <section className="intro-single" style={{marginTop:'-6rem'}}>
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
            {propertyData.map((data) => (
              <div className="col-md-4" key={data.id}>
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
                        <Link to={`/SingleNews/${data.id}`}>
                            {data.title}
                            <br /> new
                          </Link>
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
