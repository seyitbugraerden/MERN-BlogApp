import React from 'react';

function BlogList() {
  return (
    <div className="container bg-white pt-5">
      <div className="row blog-item px-3 pb-5">
        <div className="col-md-5">
          <img className="img-fluid mb-4 mb-md-0" src="img/blog-1.jpg" alt="Blog Image 1" />
        </div>
        <div className="col-md-7">
          <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
          <div className="d-flex mb-3">
            <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
          </p>
          <a className="btn btn-link p-0" href="/">Read More <i className="fa fa-angle-right"></i></a>
        </div>
      </div>
      <div className="row blog-item px-3 pb-5">
        <div className="col-md-5">
          <img className="img-fluid mb-4 mb-md-0" src="img/blog-1.jpg" alt="Blog Image 1" />
        </div>
        <div className="col-md-7">
          <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
          <div className="d-flex mb-3">
            <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
            <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
          </p>
          <a className="btn btn-link p-0" href="/">Read More <i className="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
