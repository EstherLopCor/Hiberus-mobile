import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStotage";
import Login from "./Login";
import Signup from "./Signup";
import Users from "./Users";
function Form() {
  const [token, setToken] = useLocalStorage("", "token");
  console.log(token);
  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </main>
  );
}
export default Form;
