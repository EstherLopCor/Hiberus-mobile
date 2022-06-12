import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import { Link } from "react-router-dom";
//import Signup from "./Signup";

function Login() {
  return (
    <form className="center">
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
            className="col-sm-2 col-form-label"
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
          />
        </div>
        <div className="form-group row ">
          <div className="col-sm-10 separate">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
        <p>
          Don´t have an account? Clik <Link to="/signup">here</Link> to sign up
        </p>
      </fieldset>
    </form>
  );
}
export default Login;
