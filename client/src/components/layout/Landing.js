import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developers Together </h1>
                <p className="lead">
                  {" "}
                  <br>Together we are strong</br>
                  Create a developer profile, share posts and get help from
                  other developers
                </p>
                <hr />
                <Link to="/register" className="ui button">
                  Sign Up
                </Link>
                <Link to="/login" className="ui button">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
