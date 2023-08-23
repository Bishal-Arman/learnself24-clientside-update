import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NavMenu.css";
import navlogo from "../../imges/navlogo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const NavMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  const navMenuStyle = ({ isActive }) => {
    return {
      // textDecoration: isActive ? "underline" : "none",
      color: isActive ? " #f94ca4" : "",
    };
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <div className="d-flex">
          <img className="navimg" src={navlogo} alt="" />
          <NavLink to="/home" className="logoName">
            LearnSelf <br /> <span className="text-danger">24</span>
          </NavLink>
        </div>
        <button
          className="navbar-toggler shadow-none border-0  "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start "
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header  border-bottom  ">
            <div className="d-flex justify-content-center align-items-center">
              <img className="navimg2" src={navlogo} alt="" />
              <NavLink to="/home" className="logoName">
                LearnSelf<span className="text-danger">24</span>
              </NavLink>
            </div>
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 canvasBg ">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
              <li className="nav-item mx-2 courses">
                <NavLink style={navMenuStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2 courses">
                <NavLink style={navMenuStyle} to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item mx-2 courses">
                <NavLink style={navMenuStyle} to="/career">
                  Career
                </NavLink>
              </li>
              <li className="nav-item mx-2 courses">
                <NavLink style={navMenuStyle} to="/about">
                  About us
                </NavLink>
              </li>
            </ul>

            <Nav className="d-flex justify-content-center align-items-center flex-column flex-lg-row btns-login">
              {user?.uid ? (
                <p>
                  <span className="me-3 user-name"> {user?.displayName}</span>
                  <Link onClick={handleLogout}>
                    <button className="login-btn">Logout</button>
                  </Link>
                </p>
              ) : (
                <>
                  <Link to="/login">
                    <button className="login-btn">Login</button>
                  </Link>

                  <Link to="/registration" className="mx-2">
                    <button className="signup-btn">Signup</button>
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
