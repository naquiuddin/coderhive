import React from 'react';
import { Link } from 'react-static';
import ShortId from 'shortid';
import courses from './data';

export default () => (
  <section className="section section-lg pt-lg-0 mt--200">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 pb-5 my-5">
          <h2 className="text-white text-center">Courses Offered</h2>
          <div className="row row-grid">
            {courses.map(
              ({
                title,
                subTitle,
                tags,
                description,
                detailsLink,
                isBlurred,
              }) => (
                <div key={ShortId.generate()}className="col-lg-6 d-flex">
                  <div className="card shadow-lg--hover border-2 mb-4">
                    <div className="card-body py-5">
                      <div>
                        <span className={`badge badge-pill badge-primary`}>
                          <strong>{subTitle}</strong>
                        </span>
                      </div>
                      <h5 className={`text-primary text-uppercase`}>{title}</h5>
                      <p
                        className={`description mt-3 font-weight-normal ${
                          isBlurred ? 'blur-card' : ''
                        }`}
                      >
                        {description}
                      </p>
                      <div>
                        {tags.map(tag => (
                          <span key={ShortId.generate()}
                            className={`badge badge-pill badge-primary mx-1 ${
                              isBlurred ? 'blur-card' : ''
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={detailsLink}
                        className={`btn btn-primary mt-4 ${
                          isBlurred ? 'blur-card' : ''
                        }`}
                      >
                        Learn more
                      </Link>
                      <a
                        href="https://coderhive.typeform.com/to/HswM5Q"
                        className={`btn btn-danger mt-4`}
                      >
                        {isBlurred ? 'Coming Soon' : 'Apply Now'}
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
