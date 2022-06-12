import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Form() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}
export default Form;
