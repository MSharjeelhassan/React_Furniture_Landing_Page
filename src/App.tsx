import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// https://dribbble.com/shots/23312539-FurniLux-Furniture-Landing-Page-Design
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import luxuryBed from "./images/luxuryBed.jpg";
import ring1 from "./images/ring1.jpg";
import ring2 from "./images/ring2.jpg";
import ring3 from "./images/ring3.jpg";
import ap1 from "./images/ap1.jpg";
import ap2 from "./images/ap2.jpg";
import ap3 from "./images/ap3.jpg";
import ap4 from "./images/ap4.jpg";
import ap5 from "./images/ap5.jpg";
import ap6 from "./images/ap6.jpg";
import ap7 from "./images/ap7.jpg";
import ap8 from "./images/ap8.jpg";
import ap9 from "./images/ap9.jpg";
import chairPng from "./images/chairPng.jpg";
import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/blog3.jpg";

let livingRoomProducts = [
  {
    name: "Elegant Side Table Lamp",
    image: card1,
    price: "$ 80.5",
  },
  {
    name: "Ceramic Pot",
    image: card2,
    price: "$ 25.5",
  },
  {
    name: "Classy Padded Chair",
    image: card3,
    price: "$ 30.5",
  },
];
let allProducts = [
  {
    name: "Elegant Side Table Lamp",
    image: ap1,
    price: "$ 80.5",
  },
  {
    name: "Chair",
    image: ap2,
    price: "$ 40",
  },
  {
    name: "Wooden Classical Chair",
    image: ap3,
    price: "$ 100.5",
  },
  {
    name: "Dining Chair",
    image: ap4,
    price: "$ 30.5",
  },
  {
    name: "Wooden Shelf",
    image: ap5,
    price: "$ 90.5",
  },
  {
    name: "Vertical Wooden Shelf",
    image: ap6,
    price: "$ 25.5",
  },
  {
    name: "Grand Sofa",
    image: ap7,
    price: "$ 180.5",
  },
  {
    name: "Luxury Sofa",
    image: ap8,
    price: "$ 80.5",
  },
  {
    name: "Drawing Room Set",
    image: ap9,
    price: "$ 580.5",
  },
];

let blog = [
  {
    image: blog1,
    title: "Outdoor Wild Sofa",
    des: "lorem dasfffgdfgsdfgdf sfdgsfgsdfg asfgsdfgfdsfdg",
  },
  {
    image: blog2,
    title: "Wild Sofa",
    des: "lorem dasfffgdfgsdfgdf sfdgsfgsdfg asfgsdfgfdsfdg dsdsddfsdffffffffffffffffffffffffffff",
  },
  {
    image: blog3,
    title: "Outdoor Wild Sofa on Beach",
    des: "lorem dasfffgdfgsdfgdf sfdgsfgsdfg ",
  },
];

let hero = [
  {
    title: "Sofa",
    image: ap1,
  },
  { title: "Bed", image: ap2 },
  { title: "Dresser", image: ap3 },
  { title: "Lamp", image: ap4 },
  { title: "Chair", image: ap5 },
  { title: "Decor", image: ap6 },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="bg-black text-white py-2 text-center my-0">
        Enjoy 30% off-Shop Now and Save Big !
      </p>

      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container ">
          <a className="navbar-brand" href="#hero">
            LuxuryFurn
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fw-bold"
            id="navbarSupportedContent"
          >
            {" "}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 " id="navLi1">
              <li className="nav-item ">
                <a
                  className="nav-link active text-decoration-underline"
                  aria-current="page"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section4">
                  Categories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#section6">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#pages">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav  mb-2 mb-lg-0 gap-3  "
             
            >
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="" id="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-5 ">
              <div className="display-5 text-center pt-5 fw-bold pe-5">
                <p id="heroP">
                  LuxuryFurn-Your Brand for{" "}
                  <span className="pt-2">Stylish Luxury</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="h6 h2-lg text-center py-1 ">
                <p className="">
                  Discover a fusion of modern and elegant design
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 ">
              <div id="heroDiv" className=" text-center py-5 ">
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-5 "
                >
                  Shop Now <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="row d-lg-flex d-none justify-content-center " id="pages"
            style={{ paddingTop: 500 }}
          >
            <div className="col-lg-5 position-relative" >
              <div
                className="position-absolute  d-flex gap-5 justify-content-center"
                style={{ top: -30, right: -200 }}
              >
                {hero.map((a) => (
                  <div id="pageDiv"
                    className="d-none d-lg-flex gap-3 align-items-center border rounded p-2 "
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <div style={{ width: 50, height: 50 }}>
                      <img className="w-100 h-100" src={a.image} alt="" />
                    </div>
                    <div>{a.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="container mt-5 py-5">
          <div className="row justify-content-center">
            <div
              className=" text-center col-lg-12 col-md-12 col-12 col-sm-10 display-5 mb-5 fw-bold"
              /*style={{ marginTop: 150 }}*/
            >
              <p>Elevate Your Living Room</p>
            </div>
          </div>
          <div className="row justify-content-center gy-3">
            {livingRoomProducts.map((a) => (
              <div className="col-lg-4 col-md-4 col-12 col-sm-10 text-start ">
                <div className="">
                  <div className="card shadow  ">
                    <img
                      id=""
                      src={a.image}
                      style={{ height: 300 }}
                      className="card-img-top img-fluid allImages"
                    />
                    <div className="card-body  ">
                      <div className="card-text pb-2">
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title h5 text-truncate">{a.name}</h5>
                      <div className="card-text">
                        <div>
                          <h6 className="h6">{a.price}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="  my-5" id="section3">
        <div className="container">
          <div className="row justify-content-between align-items-center pt-5 mb-5 gy-5 text-center text-lg-start ">
            <div className="col-lg-3 px-5 px-lg-0 ">
              <div>
                <h3>Luxurious Bed</h3>
                <h6>
                  Dicover unparrallel comfort with our Luxurious Bed. Elegant
                  design, Plush comfort
                </h6>
                <p>$ 260</p>
                <div>
                  <div className="d-flex gap-3 pb-2 justify-content-center justify-content-lg-start ">
                    <div className="ring overflow-hidden border border-2 border-success">
                      <img className="w-100 h-100" src={ring1} alt="" />
                    </div>
                    <div className="ring bg-primary"></div>
                    <div className="ring overflow-hidden">
                      <img className="w-100 h-100" src={ring3} alt="" />
                    </div>
                  </div>
                </div>
                <button className="btn btn-success rounded-pill" type="button">
                  Buy Now <i className="bi bi-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className=" position-relative pb-5">
                <p id="pz" className=" ">
                  SALE <span className="fw-bold">30</span>
                  <sup>%</sup> OFF
                </p>
                <img
                  id="luxuryBed"
                  className="img-fluid "
                  src={luxuryBed}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="d-flex justify-content-center align-item-center">
          <div className="container">
            <div className="row pt-5 justify-content-center ">
              <div className="col-lg-6 display-5 mb-5 fw-bold text-center">
                <p>All Products</p>
              </div>
            </div>
            <div className="row justify-content-center row-cols-2 gy-3 ">
              {allProducts.map((a) => (
                <div className="col-lg-4 col-md-4 col-12 col-sm-10  ">
                  <div className="w-100">
                    <div className="card shadow ">
                      <img
                        src={a.image}
                        style={{ height: 300 }}
                        className="card-img-top img-fluid allImages "
                      />
                      <div className="card-body">
                        <div className="card-text pb-2">
                          <div>
                            <div className="d-flex justify-content-between align-item-top">
                              <div className="d-flex gap-2">
                                <div className="ring bg-primary"></div>
                                <div className="ring bg-primary"></div>
                                <div className="ring bg-primary"></div>
                                <div className="ring bg-primary"></div>
                              </div>
                              <div>
                                <i className="bi bi-cart-check fs-2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5 className="card-title- text-truncate h5">
                          {a.name}
                        </h5>
                        <div className="card-text">
                          <div>
                            <h6 className="h6">{a.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="section5">
        <div className="container mt-5">
          <div className="row justify-content-around align-items-center py-5 gy-3">
            <div className="col-lg-4 text-lg-start text-center justify-content-center">
              <div>
                <div>
                  <p className="lead">
                    Really happy with my Office Chair Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facere perferendis, est
                    temporibus ut .
                  </p>
                </div>
                <div>
                  <h6>Randy Ortan</h6>
                </div>
                <div
                  className="shadow px-3 d-flex justify-content-lg-start gap-5 align-items-center justify-content-center"
                  id="reviewCard"
                >
                  <div>
                    <img
                      className="img-fluid"
                      src={ap1}
                      alt=""
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <div className="d-flex flex-column  justify-content-end ">
                    <p className="h6 my-0 ">Stylish Chair</p>
                    <p className="h6 my-0  ">$14.99</p>
                    <p className="h6 my-0 ">
                      <i
                        className="bi bi-star-fill pe-1 "
                        style={{ color: "yellow" }}
                      ></i>
                      <i
                        className="bi bi-star-fill pe-1 "
                        style={{ color: "yellow" }}
                      ></i>
                      <i
                        className="bi bi-star-fill pe-1 "
                        style={{ color: "yellow" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img className="img-fluid" src={chairPng} alt="" />
            </div>
          </div>
          <div className="row py-2 justify-content-center">
            <div className="col-lg-2 col-12 text-center">
              <div>
                <i className="bi bi-circle"></i>{" "}
                <i className="bi bi-circle"></i>{" "}
                <i className="bi bi-circle-fill"> </i>
                <i className="bi bi-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section6">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
              <div className="display-5 fw-bold">Blogs and Insights</div>
              <p className="Muted pt-2">
                Explore our blogs for design Inspirations and Useful Tips
              </p>
            </div>
          </div>
          <div className="row justify-content-center gy-5 ">
            {blog.map((a) => (
              <div className="col-lg-4 position-relative ">
                <div>
                  <img
                    src={a.image}
                    className="w-100"
                    alt=""
                    style={{ height: 500 }}
                  />
                </div>
                <div
                  id="blogDiv"
                  className="bg-white shadow w-75 ps-3 pe-3 pt-2 pb-5 rounded "
                >
                  <p className="fw-bold ">{a.title}</p>
                  <p>{a.des}</p>
                  <p className="fw-bold h6 text-primary">Read More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-body-secondary mt-5" id="contactUs">
        <div className="container ">
          <div className="row gy-3 justify-content-center py-3">
            <div className="col-lg-3 col-md-3">
              <div className="text-center text-lg-start">
                <p className="h4">FurniLux</p>
                <p className="h6">Designing Dreams, Creating comforts</p>
                <p className="h6">
                  <span className="me-2">
                    <i className="bi bi-telephone"></i>
                  </span>
                  0202202
                </p>
                <p className="h6">
                  <span className="me-2">
                    <i className="bi bi-envelope"></i>
                  </span>
                  sdsd@gmail
                </p>
                <p className="h6">
                  <span className="me-2">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="text-center text-lg-start">
                <p className="h4">About Us</p>
                <ul className="footerUl list-group">
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">About Us</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Blog</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Contact Us</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Popular Question</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="text-center text-lg-start">
                <p className="h4">What's Popular</p>
                <ul className="footerUl list-group">
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">King Size Beds</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Blog</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Sofas</a>
                  </li>
                  <li className="">
                    <i
                      className="me-2  bi bi-arrow-up-right"
                      style={{ fontSize: 12 }}
                    ></i>
                    <a href="">Popular Question</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <p className="h4 text-center text-lg-start">Get 15% off your first order</p>
                <p className="h6 text-center text-lg-start">
                  Subscribe our news letter and get discount for your first
                  order! Also recieve update and more
                </p>
                <div className=" px-1 py-1 border border-success rounded-pill d-flex align-items-center justify-content-between gap-2">
                  <div className="d-flex align-items-center flex-grow-1">
                    <i className="px-2 bi bi-envelope"></i>{" "}
                    <input 
                      className=" form-control  bg-transparent outline-none border-0 "
                      placeholder="Email Address"
                      type="text"
                    />{" "}
                  </div>
                  <div>
                    <button className=" btn rounded-pill text-white bg-success border-success">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
