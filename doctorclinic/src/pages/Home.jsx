import React from "react";
import headerimg from "../assets/doctorhero.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>we providem all health care solution</h5>
            <h2>protect your health and take care to of your health</h2>
            <button>
              <a href="#">Read More</a>
            </button>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header-box">
              <img src={headerimg} />
              <FontAwesomeIcon icon={faSquare} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Home;
