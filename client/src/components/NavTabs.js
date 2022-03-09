import React from "react";

const NavTabs = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark navbar-fixed-top"
        // style="background-color:#2874f0;"
      >
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
                <a href="">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                  <span className="badge"></span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-cog"></span> Settings
                </a>
              </li>
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-log-out"></span> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavTabs;