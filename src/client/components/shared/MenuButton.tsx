import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const MenuButton = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="bg-navbar">
          <img
            src="/assets/images/menu.png"
            className="d-md-none align-self-center img-fluid"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link to="/">
            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
          </Link>
          <Link to="/login">
            <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
          </Link>
          <Link to="/boardgames">
            <Dropdown.Item href="#/action-3">Board Games</Dropdown.Item>
          </Link>
          <Link to="/videogames">
            <Dropdown.Item href="#/action-4">Video Games</Dropdown.Item>
          </Link>
          <Link to="/about">
            <Dropdown.Item href="#/action-5">About Us</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MenuButton;
