import * as React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <>
      <div
        className="d-flex container-fluid justify-content-between bg-navbar p-2"
        style={{ height: "4rem" }}
      >
        <div className="mt-2" style={{ width: "2rem", height: "2rem" }}>
          <img
            src="/assets/images/menu.png"
            alt=""
            className=" align-self-center img-fluid"
          />
        </div>
        <div className="align-self-center h-100">
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
            className="img-fluid align-self-center"
          />
        </div>
      </div>
    </>
  );
};

interface INavbarProps {}

export default Navbar;
