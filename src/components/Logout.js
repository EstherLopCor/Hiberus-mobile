import { useNavigate } from "react-router-dom";
function Logout(setToken) {
  const navigate = useNavigate();
  const close = (e) => {
    e.preventDefault();
    setToken("");
    navigate("/");
  };
  return (
    <button type="submit" className="btn btn-primary" onSubmit={close}>
      Sign out
    </button>
  );
}
export default Logout;
