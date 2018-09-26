import React from 'react';
import { Link } from 'react-static';

const courses = [
  {
    title: 'Programming and Computer Science Foundation',
    subTitle: 'Level 1',
    tags: [
      'C Language',
      'Python',
      'SQL',
      'Command Line',
      'HTML',
      'CSS',
      'JavaScript',
      'CSS',
      'HTML',
    ],
    description:
      'You will learn how to think algorithmically and solve problems efficiently. You will go through topics like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering and web development. Languages you learn include C, Python, SQL, and JavaScript plus CSS and HTML',
    detailsLink: '/programming-and-computer-science-foundation',
  },
  {
    title: 'Advanced Algorithms and Problem Solving',
    subTitle: 'Level 2',
    tags: [''],
    description: 'Every serious programmer should know Data Structures and Algorithms. You will learn how to think algorithmically and solve problems efficiently.',
    detailsLink: '/advanced-algorithms-and-problem-solving',
  },
  // {
  //   title: '',
  //   subTitle: '',
  //   tags: [],
  //   description: '',
  //   detailsLink: '',
  // },
];

export default () => (
  <section className="section section-lg pt-lg-0 mt--200">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 pb-5 my-5">
          <h2 className="text-white text-center">Courses Offered</h2>
          <div className="row row-grid">
            {courses.map(
              ({ title, subTitle, tags, description, detailsLink }) => (
                <div className="col-lg-6 d-flex">
                  <div className="card shadow-lg--hover border-2">
                    <div className="card-body py-5">
                      <div>
                        <span className="badge badge-pill badge-primary">
                          <strong>{subTitle}</strong>
                        </span>
                      </div>
                      <h5 className="text-primary text-uppercase">{title}</h5>
                      <p className="description mt-3 font-weight-normal">
                        {description}
                      </p>
                      <div>
                        {tags.map(tag => (
                          <span className="badge badge-pill badge-primary mx-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to={detailsLink} className="btn btn-primary mt-4">
                        Learn more
                      </Link>
                      <a
                        href="https://coderhive.typeform.com/to/HswM5Q"
                        className="btn btn-danger mt-4"
                      >
                        Apply Now
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
