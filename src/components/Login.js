import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Post } from "../services/Post";

function Login({ token, setToken }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    Post("http://51.38.51.187:5050/api/v1/auth/log-in", body, (data) => {
      setToken(data.accessToken);
    });
    if (token) {
      navigate("/users");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <form className="center " onSubmit={handleSubmit}>
        <fieldset className="cen">
          <h1 className="separate">Hiberus</h1>
          <h3 className="separate">Login:</h3>
          <div className=" form-group separate">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group row ">
            <div className="col-sm-10 separate">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
          <p className="separate">
            Don´t have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </fieldset>
      </form>
    </>
  );
}
export default Login;
