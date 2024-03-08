import React from 'react'

function Nav() {
  return (
    <div className="container p-0">
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
            <a href="" className="navbar-brand d-block d-lg-none">Navigation</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav m-auto">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
  )
}

export default Nav