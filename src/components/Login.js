import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Post } from "../services/Post";

function Login({ setToken }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };
    Post("http://51.38.51.187:5050/api/v1/auth/log-in", body, (data) => {
      setToken(data.accessToken);
    });
  };

  return (
    <form className="center" onSubmit={handleSubmit}>
      <fieldset>
        <h2 className="separate">Hiberus</h2>
        <p className="separate">Login to hiberus</p>
        <div className="form-group separate">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            className="col-sm-2 col-form-label"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group separate">
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="col-sm-2 col-form-label"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group row ">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
        <p>
          Don´t have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </fieldset>
    </form>
  );
}
export default Login;
