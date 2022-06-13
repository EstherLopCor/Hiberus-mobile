import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStotage";
import Login from "./Login";
import Signup from "./Signup";

function Form() {
  const [token, setToken] = useLocalStorage("", "token");
  console.log(token);
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login setToken={setToken} />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}
export default Form;
