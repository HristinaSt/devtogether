import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div class="ui  grey stackable inverted  massive menu">
        <a class="active item" href="landing.html">
          <i class="home icon" /> Home
        </a>
        <a class="item" href="profiles.html">
          <i class="user icon" /> Developers
        </a>
        <div class="right menu">
          <a class="item" href="register.html">
            Sign up
          </a>
          <a class="item" href="login.html">
            Login in
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
