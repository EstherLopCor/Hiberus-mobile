import { useNavigate } from "react-router-dom";
function Logout(token) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (token) {
      navigate("/");
    }
  };
  return (
    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
      Sign out
    </button>
  );
}
export default Logout;
