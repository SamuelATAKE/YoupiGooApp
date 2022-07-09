import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from 'html-react-parser';

class UpcomingWorld extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="upcomming-world pd-top-108 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title">
                <h2 className="title">Explore the World for Yourself</h2>
                <p>
                  Nulla eleifend pulvinar purus, molestie euismod odio imperdiet
                  ac. Ut sit amet erat nec nibh rhoncus varius in non lorem.
                  Donec interdum, lectus in convallis pulvinar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="upcomming-card-slider upcomming-card-slider-1 tp-common-slider-style">
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/1.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/1.png"} alt="flag1" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/26.png"} alt="flag2" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Africa</Link>
              </h3>
              <p>
                The Africa is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/2.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/2.png"} alt="flag3" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/21.png"} alt="flag4" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Australia</Link>
              </h3>
              <p>
                Australia is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/3.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/3.png"} alt="flag5" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/25.png"} alt="flag6" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Greece</Link>
              </h3>
              <p>
                Greece is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/4.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/4.png"} alt="flag7" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/23.png"} alt="flag8" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Singapur</Link>
              </h3>
              <p>
                Singapur is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/5.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/5.png"} alt="flag9" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/24.png"} alt="flag10" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Maldives</Link>
              </h3>
              <p>
                Maldives is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
          <div className="single-upconing-card">
            <div
              className="shadow"
              style={{
                backgroundImage: "url(" + publicUrl + "assets/img/tour/6.png)",
              }}
            >
              <img src={publicUrl + "assets/img/tour/6.png"} alt="flag11" />
            </div>
            <div className="flag">
              <img src={publicUrl + "assets/img/icons/22.png"} alt="flag12" />
            </div>
            <div className="content text-center">
              <h3 className="title">
                <Link to="/destination-details">Greece</Link>
              </h3>
              <p>
                Greece is a country in southeastern Europe with thousands of
                islands throughout the Aegean
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingWorld;
