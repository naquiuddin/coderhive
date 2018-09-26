import React from 'react';
import { Link } from 'react-static';
import logoOriginal from '../../images/original-wide.png';
import logoWhite from '../../images/white-logo.png';
import logoOrange from '../../images/orange-logo.png';
import Headroom from 'react-headroom';

export default () => (
  <header className="header-global">
    <Headroom
      style={{
        webkitTransition: 'all .5s ease-in-out',
        mozTransition: 'all .5s ease-in-out',
        oTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out',
      }}
    >
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light"
      >
        <div className="container">
          <Link className="navbar-brand mr-lg-5" to="/">
            <img src={logoWhite} alt="CoderHive" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar_global"
            aria-controls="navbar_global"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src={logoWhite} alt="CoderHive" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <i className="ni ni-ui-04 d-lg-none" />
                  <span className="nav-link-inner--text">Courses</span>
                </a>
                <div className="dropdown-menu dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <a href="" className="media d-flex align-items-center">
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        L1
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          CS and Programming Foundation
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use Argon compiling Scss, change brand
                          colors and more.
                        </p>
                      </div>
                    </a>
                    <a
                      href="./docs/foundation/colors.html"
                      className="media d-flex align-items-center"
                    >
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        L2
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="heading text-success mb-md-1">
                          Advanced Algorithms & Problem Solving
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn more about colors, typography, icons and the
                          grid system we used for Argon.
                        </p>
                      </div>
                    </a>
                    <a
                      href="./docs/components/alerts.html"
                      className="media d-flex align-items-center"
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        L3
                      </div>
                      <div className="media-body ml-3">
                        <h5 className="heading text-warning mb-md-1">
                          Cracking Coding Interviews
                        </h5>
                        <p className="description d-none d-md-inline-block mb-0">
                          Browse our 50 beautiful handcrafted components offered
                          in the Free version.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <span className="nav-link-inner--text">FAQs</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/about"
                  className="nav-link"
                  data-toggle="dropdown"
                  role="button"
                >
                  <span className="nav-link-inner--text">About</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="dropdown"
                  role="button"
                >
                  <i className="ni ni-collection d-lg-none" />
                  <span className="nav-link-inner--text">Contact</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.facebook.com/creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.instagram.com/creativetimofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://twitter.com/creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Twitter
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://github.com/creativetimofficial/argon-design-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Star us on Github"
                >
                  <i className="fa fa-github" />
                  <span className="nav-link-inner--text d-lg-none">Github</span>
                </a>
              </li>
              <li className="nav-item d-none d-lg-block ml-lg-4">
                <a
                  href="https://www.creative-tim.com/product/argon-design-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger btn-icon"
                >
                  <span className="nav-link-inner--text">Apply Now</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  </header>
);
