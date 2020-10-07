import * as React from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import LoginButton from "../admin/LoginButton";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <>
      <nav className="navbar-div navbar navbar-expand-md navbar-dark bg-navbar sticky-top">
        <div
          className="d-flex container-fluid justify-content-between justify-content-md-start bg-navbar p-2"
          style={{ height: "4rem" }}
        >
          <div
            className="mt-2 d-md-none"
            style={{ width: "3rem", height: "3rem" }}
          >
            <MenuButton />
          </div>
          <div className="h-100">
            <Link to="/">
              <img
                src="/assets/images/logo4m.png"
                alt=""
                className="align-self-center img-fluid h-100"
              />
            </Link>
          </div>
          <div className="mt-2" style={{ width: "2rem", height: "2rem" }}>
            <img
              src="/assets/images/search.png"
              alt=""
              className="img-fluid align-self-center d-md-none"
            />
          </div>
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item d-none d-md-inline text-light ml-2 ">
                Home
              </li>
            </Link>
            <Link to="/boardgames">
              <li className="nav-item d-none d-md-inline text-light ml-2">
                Board Games
              </li>
            </Link>
            <Link to="/videogames">
              <li className="nav-item d-none d-md-inline text-light ml-2">
                Video Games
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-item d-none d-md-inline text-light ml-2">
                About Us
              </li>
            </Link>
            <li className="nav-item d-none d-md-flex text-light ml-2 login-button"></li>
          </ul>
        </div>
        <LoginButton />
      </nav>
    </>
  );
};

interface INavbarProps {}

export default Navbar;
