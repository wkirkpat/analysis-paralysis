import * as React from "react";
import { json, setAccessToken, User } from "../../utils/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC<ILoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container border border-dark shadow-lg p-2 rounded">
      <h4>Login</h4>
      <div className="form-group mt-3 border-top p-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group border-bottom p-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
      <Link to="/register">
        <button type="button" className="btn btn-link ml-3">
          Create Account
        </button>
      </Link>
    </div>
  );
};

interface ILoginProps {}

export default Login;
