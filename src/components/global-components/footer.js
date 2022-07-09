import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imgattr = "Footer logo";

    return (
      <footer
        className="footer-area"
        style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/2.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget widget">
                <div className="about_us_widget">
                  <Link to="/" className="footer-logo">
                    <img
                      src={publicUrl + "assets/img/logo.png"}
                      alt="footer logo"
                    />
                  </Link>
                  <p>
                    Nous croyons que l'interaction avec la marque est la clé de
                    la communication. De vraies innovations et une expérience
                    client positive sont au cœur d'une communication réussie.
                  </p>
                  <ul className="social-icon">
                    <li>
                      <a
                        className="facebook"
                        href="https://www.facebook.com/codingeek.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook  " />
                      </a>
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="https://twitter.com/codingeeknet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter  " />
                      </a>
                    </li>
                    <li>
                      <a
                        className="pinterest"
                        href="https://www.instagram.com/codingeeknet/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget ">
                <div className="widget-contact">
                  <h4 className="widget-title">Contactez-nous</h4>
                  <p>
                    <i className="fa fa-map-marker" />
                    <span>
                      Siège E-media, Derrière radio Nana FM, Lomé, Togo
                    </span>
                  </p>
                  <p className="location">
                    <i className="fa fa-envelope-o" />
                    <span>contact@youpigoo.com</span>
                  </p>
                  <p className="telephone">
                    <i className="fa fa-phone base-color" />
                    <span>+228 012121240</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget widget">
                <h4 className="widget-title">Liens rapides</h4>
                <ul className="widget_nav_menu  viaje-go-top">
                  <li>
                    <Link to="/home-v2">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/about">A propos de nous</Link>
                  </li>
                  <li>
                    <Link to="/destination-list">Destinations</Link>
                  </li>
                  <li>
                    <Link to="/tour-details">Trjets</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget">
                <h4 className="widget-title">Galerie Instagram</h4>
                <ul className="widget-instagram-feed">
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/1.png"}
                        alt="img1"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/2.png"}
                        alt="img2"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/3.png"}
                        alt="img3"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/4.png"}
                        alt="img4"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/5.png"}
                        alt="img5"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img
                        src={publicUrl + "assets/img/instagram/6.png"}
                        alt="img6"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-inner">
          <div className="copyright-text">
            © Youpigoo 2022 Tous droits réservés. Développé par{" "}
            <a
              href="https://e-media.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-heart" />
              <span>E-Media.</span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer_v1;
