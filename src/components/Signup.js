import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Post } from "../services/Post";
function Signup() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name,
      surname,
      email,
      password,
    };
    Post("http://51.38.51.187:5050/api/v1/auth/sign-up", body, (b) => {
      console.log(b);
    });
  }

  return (
    <form className="center" onSubmit={handleSubmit}>
      <h3 className="separate">Register:</h3>
      <fieldset>
        <div className="form-group separate">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email:"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group separate">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password:"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group separate">
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            placeholder="Name:"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group separate">
          <input
            type="surname"
            name="surname"
            id="surname"
            value={surname}
            placeholder="Surname:"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </div>
        <div className="form-group row ">
          <div className="col-sm-10 separate">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
        <p className="separate">
          Already have an account? <Link to="/"> Sign in now</Link>
        </p>
      </fieldset>
    </form>
  );
}
export default Signup;
