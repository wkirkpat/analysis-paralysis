import * as React from "react";
import { Link } from "react-router-dom";

const LoginButton: React.FC<LoginButton> = () => {
  return (
    <>
      <Link to={"/login"}>
        <h5 className="text-light login-button d-none d-md-flex">Login</h5>
      </Link>
    </>
  );
};

interface LoginButton {}

export default LoginButton;
