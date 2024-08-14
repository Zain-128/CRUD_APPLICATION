import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Home from "./pages/Home";
import Router from "./router";
function App() {
  const [count, setCount] = useState(0);

  return <Router />;
}

export default App;
