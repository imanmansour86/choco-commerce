import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  return (
    <div>
      <nav className="navbar navbar-dark ">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">
              LaRoche Chocolate
            </a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={`/`}>
                  <span className="glyphicon glyphicon-home"></span> Home{" "}
                </Link>
              </li>
              <li>
                <Link to={`/cart`}>
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                  <span className="badge"></span>
                </Link>
              </li>

              <li>
                <Link to={`/signup`}>
                  <span className="glyphicon glyphicon-log-out"></span> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavTabs;
