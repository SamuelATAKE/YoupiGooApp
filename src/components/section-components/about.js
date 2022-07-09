import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";

class About extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imagealt = "image";

    return (
      <div className="about-section pd-top-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2 className="title">
                  Voyagez <br /> avec nous
                </h2>
                <p>
                  Gagnez en temps et faites des prévisions en réservant vos
                  tickets et vos lieux de séjour à chaque voyage.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="thumb about-section-right-thumb">
                <img src={publicUrl + "assets/img/others/9.png"} alt="img" />
                <img
                  className="about-absolute-thumb"
                  src={publicUrl + "assets/img/others/10.png"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
