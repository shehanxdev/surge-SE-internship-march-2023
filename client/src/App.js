import { BrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
//STYLESHEETS
//STYLESHEETS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  // const [state, setState] = useState("");
  // console.log("inside the app with a state of " + state);
  // useEffect(() => {
  //   console.log("inside useeffect");
  //   axios
  //     .get("https://surge-internship-assignment-server.onrender.com/api")
  //     .then((result) => {
  //       console.log(result.data);
  //       setState(result.data.message);
  //     });
  // }, []);
  return (
    <div className="App h-100">
      <AuthenticationPage />
    </div>
  );
}

export default App;
