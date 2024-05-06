import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
import chairPng from './images/chairPng.png';

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="bg-black text-white py-2 text-center my-0">
        Enjoy 30% off-Shop Now and Save Big !
      </p>

      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary justify-content-around">
        <div className="container">
          <a className="navbar-brand" href="#">
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
            <ul
              className="navbar-nav  me-auto mb-2 mb-lg-0 gap-3"
              style={{ marginLeft: 300 }}
            >
              <li className="nav-item ">
                <a
                  className="nav-link active text-decoration-underline"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav me-aut mb-2 mb-lg-0 gap-3"
              style={{ marginRight: 100 }}
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
      <section id="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-5">
              <div className="display-5 text-center pt-5 fw-bold">
                <p>
                  LuxuryFurn-<span className="text-white">Your Brand for</span>{" "}
                  <span className="pt-2">Stylish Luxury</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 ">
              <div className="h6 text-center text-white py-1">
                <p>Discover a fusion of modern and elegant design</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 ">
              <div className=" text-center py-5" style={{ marginBottom: 400 }}>
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-5"
                >
                  Shop Now <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 display-5 mb-5 fw-bold"
              style={{ marginTop: 150 }}
            >
              <p>Elevate Your Living Room</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5 g-0">
            {livingRoomProducts.map((a) => (
              <div className="col-lg-3 ">
                <div>
                  <div className="card shadow " style={{ width: 320 }}>
                    <img
                      src={a.image}
                      style={{ height: 270 }}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-text pb-2">
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                              <div className="ring bg-primary"></div>
                            </div>
                            <div>
                              <i className="bi bi-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title h5">{a.name}</h5>
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
      <section className="border border-danger bg-primary my-5" id="section3">
        <div className="container">
          <div className="row justify-content-around pt-5 mb-5 ">
            <div className="col-lg-3 ms-5 border">
              <div>
                <h3>Luxurious Bed</h3>
                <h6>
                  Dicover unparrallel comfort with our Luxurious Bed. Elegant
                  design, Plush comfort
                </h6>
                <p>$ 260</p>
                <div className="d-flex gap-3 pb-2">
                  <div className="ring overflow-hidden border border-2 border-success">
                    <img className="img-fluid" src={ring1} alt="" />
                  </div>
                  <div className="ring bg-primary">
                    {/* <img className="img-fluid" src={ring2} alt="" /> */}
                  </div>
                  <div className="ring overflow-hidden">
                    <img className="img-fluid" src={ring3} alt="" />
                  </div>
                </div>
                <button className="btn btn-success rounded-pill" type="button">
                  Buy Now <i className="bi bi-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
            <div className="col-lg-4 me-5">
              <div className="border position-relative border-success border-2">
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
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="col-lg-6 display-5 mb-5 fw-bold text-center">
              <p>All Products</p>
            </div>
          </div>
          <div className="row justify-content-center">
            {allProducts.map((a) => (
              <div className="col-lg-4 border ">
              <div>
                <div className="card shadow mb-4 " style={{ width: 350 }}>
                  <img
                    src={a.image}
                    style={{ height: 270 }}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-2">
                            <div className="ring bg-primary"></div>
                            <div className="ring bg-primary"></div>
                            <div className="ring bg-primary"></div>
                            <div className="ring bg-primary"></div>
                          </div>
                          <div>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title h5">{a.name}</h5>
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
      <section id="section5">
        <div className="container my-5">
<div className="row justify-content-around py-5">
  <div className="col-lg-5">
    <div>
      <div>
        <p>Really happy with my Office Chair</p>
      </div>
      <div>
        <h6>Randy Ortan</h6>
      </div>
      <div className="shadow py-3 d-flex justify-content-around" id="reviewCard">
        <div><img className="img-fluid border border-2 border-success" src={ap1} alt="" /></div>
        <div className="d-flex">
          <p className="h6">Stylish Chair</p>
          <p className="h6 ">$14.99</p>
          <p className="h6">wwww</p>
        </div>
      </div>

    </div>
  </div>
  <div className="col-lg-5">
    <img className="img-fluid" src={chairPng} alt="" />
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default App;
