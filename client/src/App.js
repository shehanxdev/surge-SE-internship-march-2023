import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/api").then((result) => {
      setState(result.data.message);
    });
  }, []);
  return (
    <div className="App">
      <h1>{state}</h1>
    </div>
  );
}

export default App;
