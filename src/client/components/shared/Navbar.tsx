import * as React from "react";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <>
      <div
        className="d-flex container-fluid justify-content-between bg-navbar"
        style={{ height: "3rem" }}
      >
        <div className="mt-2" style={{ width: "2rem", height: "2rem" }}>
          <img src="/assets/images/menu.png" alt="" className="img-fluid" />
        </div>
        <img
          src="/assets/images/logo-sharp.png"
          alt=""
          className="align-self-center h-75 w-25"
        />
        <div className="mt-2" style={{ width: "2rem", height: "2rem" }}>
          <img src="/assets/images/search.png" alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

interface INavbarProps {}

export default Navbar;
