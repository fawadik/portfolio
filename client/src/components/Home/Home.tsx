import React from "react";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home-container">
      <div className="home-parent">
        <div className="home-details">
          <div className="columns">
            <a href="https://www.facebook.com/fowad.latif">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/fawadik">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/fowad-latif/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/fawadik99">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          <div className="home-details-name">
            <span className="primary-text">
              {" "}
              Hey, I am <span className="highlighted-text">Fowad</span>
            </span>
          </div>
          <div className="home-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
