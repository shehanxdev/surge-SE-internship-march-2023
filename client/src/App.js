import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("inside useeffect");
    axios
      .get("https://surge-internship-assignment-server.onrender.com/api")
      .then((result) => {
        console.log(result.data);
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
