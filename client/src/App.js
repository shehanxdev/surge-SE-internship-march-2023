import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    axios.get(process.env.REACT_APP_API_URL).then((result) => {
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
