import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imagealt = 'image'
    return (
      <div className="blog-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/1.png"}
                        alt="blogi"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Why You Shouldn Elephants France.
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/2.png"}
                        alt="blogim"
                      />
                      <Link className="tag" to="/blog-v2">
                        Asia
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Aliquam faucibus, nec commodo
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/3.png"}
                        alt="blogima"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Why You Shouldn Elephants France.
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/4.png"}
                        alt="blogimag"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Duis pretium gravida enim, vel maximus
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/5.png"}
                        alt="blogimage"
                      />
                      <Link className="tag" to="/blog-v2">
                        Island{" "}
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Duis pretium gravida enim
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/6.png"}
                        alt="blogimages"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Why You Shouldn Elephants France.
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/7.png"}
                        alt="blog-image1"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Etiam convallis elementum sapien
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/8.png"}
                        alt="blog-images2"
                      />
                      <Link className="tag" to="/blog-v2">
                        Europe
                      </Link>
                    </div>
                    <div className="single-blog-details">
                      <p className="date">19 September 2019</p>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Duis porta, ligula rhoncus euismod
                        </Link>
                      </h4>
                      <p className="content">
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                        sollicitudin libero, vel malesuada
                      </p>
                      <Link className="btn-read-more" to="/blog-details">
                        <span>
                          Lire plus
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12  text-md-center text-left">
                  <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                    <ul>
                      <li>
                        <Link className="prev page-numbers" href="/#">
                          <i className="la la-long-arrow-left" />
                        </Link>
                      </li>
                      <li>
                        <span className="page-numbers">1</span>
                      </li>
                      <li>
                        <span className="page-numbers current">2</span>
                      </li>
                      <li>
                        <Link className="page-numbers" href="/#">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link className="page-numbers" href="/#">
                          4
                        </Link>
                      </li>
                      <li>
                        <Link className="next page-numbers" href="/#">
                          <i className="la la-long-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
