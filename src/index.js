import ReactDOM from "react-dom/client";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <List />
    </div>
  );
}

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container);

root.render(<App />);
