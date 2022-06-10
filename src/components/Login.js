import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
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
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          Click <a href="">here</a> to register
        </p>
      </fieldset>
    </form>
  );
}
export default Login;
