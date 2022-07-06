import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Contact extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <div className="contact-area pd-top-108">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-center text-left">
                  <h2 className="title">Gardez le contact!</h2>
                  <p>
                    Avez-vous une inquiétude? Posez-nous la question et nous
                    vous répondrons le plus tôt possible
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="thumb">
                  <img src={publicUrl + "assets/img/others/11.png"} alt="img" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form className="tp-form-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Nom</span>
                        <input type="text" name="name" />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">
                          Nombre de téléphone
                        </span>
                        <input type="text" name="number" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Adresse mail</span>
                        <input type="text" name="email" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Message</span>
                        <textarea defaultValue={""} name="message" />
                      </label>
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        className="btn btn-yellow"
                        value="Envoyer le message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info-area pd-top-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 order-lg-12">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55137.3051325513!2d-97.76825118838518!3d30.263256963734733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1572085289886!5m2!1sen!2sbd"
                />
              </div>
              <div className="col-xl-3 col-lg-4 order-lg-1">
                <div className="contact-info bg-gray">
                  <p>
                    <i className="fa fa-map-marker" />
                    <span>
                      Siège E-Media, Derrière Radio Nana FM, Lomé-TOGO
                    </span>
                  </p>
                  <p>
                    <i className="fa fa-clock-o" />
                    <span>
                      Heure de travail 8:00 to 5:00 Samedi 8:00 to 2:00
                    </span>
                  </p>
                  <p>
                    <i className="fa fa-envelope" />
                    <span>
                      Email: <span>contact@youpigoo.com</span>
                    </span>
                  </p>
                  <p>
                    <i className="fa fa-phone" />
                    <span>
                      Téléphone 1: <span>(+228) 0172 570051</span> <br />
                      Téléphone 2: <span>(+228) 07 528 7584</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
