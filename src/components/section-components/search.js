import React, { Component } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";

class Searach extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imagealt = "image";

    return (
      <div className="search-area tp-main-search-area viaje-go-top">
        <div className="container">
          <div className="tp-main-search">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="tp-search-single-wrap">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Bangladesh,Dhaka"
                  />
                  <i className="ti-location-pin" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="tp-search-single-wrap">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Lieu de départ?"
                  />
                  <i className="fa fa-dot-circle-o" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 order-lg-9">
                <div className="tp-search-single-wrap float-left w-100">
                  <select className="select w-100">
                    <option value={1}>Type de voyage</option>
                    <option value={2}>Voyage d'évènement</option>
                    <option value={3}>Weekend Break</option>
                    <option value={4}>Package Holiday</option>
                    <option value={5}>Voyage de Business</option>
                  </select>
                  <i className="fa fa-plus-circle" />
                </div>
              </div>
              <div className="col-lg-3 col-md-8 order-lg-6">
                <div className="tp-search-single-wrap float-left">
                  <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
                    <input
                      type="text"
                      className="departing-date"
                      placeholder="Départ"
                    />
                    <i className="fa fa-calendar-minus-o" />
                  </div>
                  <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
                    <input
                      type="text"
                      className="returning-date"
                      placeholder="Retour"
                    />
                    <img
                      src={publicUrl + "assets/img/icons/2.png"}
                      alt="icons1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 order-12">
                <Link className="btn btn-yellow" to="/tour-list">
                  <i className="ti-search" /> Recherche
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searach;
