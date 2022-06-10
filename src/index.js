import ReactDOM from "react-dom/client";
import Login from "./components/Login";

function App() {
  return (
    <div className="container">
      <Login />
    </div>
  );
}

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container);

root.render(<App />);
