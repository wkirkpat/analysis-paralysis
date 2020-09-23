import * as React from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-navbar sticky-top">
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
            <li className="nav-item d-none d-md-inline">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-md-inline">
              <a className="nav-link" href="#">
                Board Games
              </a>
            </li>
            <li className="nav-item d-none d-md-inline">
              <a className="nav-link" href="#">
                Video Games
              </a>
            </li>
            <li className="nav-item d-none d-md-inline">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

interface INavbarProps {}

export default Navbar;
