import { Link } from "react-router-dom";
function Signup() {
  return (
    <form className="">
      <h3>Login:</h3>
      <fieldset>
        <p className="form-group">
          <input type="email" name="email" id="email" placeholder="Email:" />
        </p>
        <p className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password:"
          />
        </p>{" "}
        <p className="form-group">
          <input type="name" name="name" id="name" placeholder="Name:" />
        </p>
        <p className="form-group">
          <input
            type="suername"
            name="suername"
            id="suername"
            placeholder="Surname:"
          />
        </p>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <p>
          Click <Link to="/">here</Link> to register
        </p>
      </fieldset>
    </form>
  );
}
export default Signup;
