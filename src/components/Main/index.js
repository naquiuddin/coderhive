import React from 'react';

export default () => (
  <main>
    <div className="position-relative">
      <section className="section section-lg section-hero section-shaped">
        <div className="shape shape-style-1 bg-gradient-violet">
          <span className="span-150" />
          <span className="span-50" />
          <span className="span-50" />
          <span className="span-75" />
          <span className="span-100" />
          <span className="span-75" />
          <span className="span-50" />
          <span className="span-100" />
          <span className="span-50" />
          <span className="span-100" />
        </div>
        <div className="container shape-container d-flex align-items-center py-md">
          <div className="col px-0">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 text-center">
                {/* <img alt="white" src={logoWhite} style={{ width: '400px' }} className="img-fluid" /> */}
                <p className="display-2 text-white">
                  Learn the most in demand skill of 21st century{' '}
                  <span className="d-inline" role="img" aria-label="Coding">
                    👨‍💻
                  </span>
                </p>
              </div>
              <div className="col-lg-10 text-center">
                <p className="display-4 text-white font-weight-light my-4">
                  CoderHive is a learning system that helps you do 3 things
                </p>
              </div>
              <div className="col-lg-12 my-1">
                <div className="row">
                  <div className="col-lg-4">
                    <h5 className="text-danger">
                      <span className="icon icon-shape icon-shape-danger bg-white">
                        1
                      </span>{' '}
                      Master Coding Skills
                    </h5>
                    <p className="text-white">
                      Doesn’t matter whether you are new to coding or you
                      already know the basics. The system is divided into 3
                      levels. Level 1 is for beginners. Level 2 is for students
                      who know the basics and want to advance their coding
                      skills. Level 3 prepares you for tough technical
                      interviews.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="text-danger">
                      <span className="icon icon-shape icon-shape-danger bg-white">
                        2
                      </span>{' '}
                      Crack coding interviews
                    </h5>
                    <p className="text-white">
                      The courses help you crack the tough technical rounds of
                      product based companies like Amazon, Microsoft, PayTM,
                      Flipkart, Google etc. You will walk through and practice
                      various problem solving methods to solve tough coding
                      problems.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="text-danger">
                      <span className="icon icon-shape icon-shape-danger bg-white">
                        3
                      </span>{' '}
                      Get Better Job Offers
                    </h5>
                    <p className="text-white">
                      Coding is a powerful skill. It opens lot of opportunities
                      in fields like Data Science, Machine Learning, Artificial
                      intelligence, Web Development, Mobile App Development etc.
                      We maintain high standards for our students and assist
                      them in getting better offers.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <div className="btn-wrapper mt-5">
                    {/* <a
                      href="https://www.creative-tim.com/product/argon-design-system"
                      className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0"
                    >
                      <span className="btn-inner--text">Learn More</span>
                    </a> */}
                    <a
                      href="https://coderhive.typeform.com/to/HswM5Q"
                      className="btn btn-lg btn-danger btn-icon mb-3 mb-sm-0"
                      role="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="btn-inner--text text-white">
                        Apply Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </div>
  </main>
);
