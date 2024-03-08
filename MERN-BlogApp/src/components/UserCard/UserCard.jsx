import React from 'react'

function UserCard() {
  return (
    <div className="sidebar">
        <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
          <img className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src="img/profile.jpg" alt="Image" />
          <h1 className="font-weight-bold">Kate Glover</h1>
          <p className="mb-4">
            Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
          </p>
          <div className="d-flex justify-content-center mb-5">
            <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <a href="" className="btn btn-lg btn-block btn-primary mt-auto">Hire Me</a>
        </div>
      </div>
  )
}

export default UserCard