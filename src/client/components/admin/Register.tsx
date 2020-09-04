import * as React from "react";
import { useState } from "react";
import { json, setAccessToken } from "../../utils/api";
import { RouteComponentProps } from "react-router";

const Register: React.FC<IRegisterProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json("/auth/register", "POST", {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      if (result) {
        setAccessToken(result.token, {
          userid: result.userid,
          role: result.role,
        });
      }
    } catch (e) {
      throw e;
    } finally {
      props.history.replace("/");
    }
  };

  return (
    <>
      <div className="form-group container border border-dark shadow-lg p-2">
        <h4>Register New User</h4>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
        </div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Create Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Create Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

interface IRegisterProps extends RouteComponentProps {}

export default Register;
