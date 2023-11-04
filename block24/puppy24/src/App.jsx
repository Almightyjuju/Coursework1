import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(puppyList);
}

export default App;
