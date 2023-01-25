//IMPORTING MODULES
import { BrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
//STYLESHEETS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        <div className="App h-100">
          <AuthenticationPage />
        </div>
      </SignedOut>
      <SignedIn>Hello</SignedIn>
    </ClerkProvider>
  );
}

export default App;
