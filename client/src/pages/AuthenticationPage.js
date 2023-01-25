import React from "react";
import LoginBanner from "./../componenets/LoginBanner";
import LoginSignUpForm from "./../componenets/LoginSignUpForm";

function AuthenticationPage() {
  return (
    <div className="row h-100">
      <div className="col-md-6 row h-100 justify-content-center align-items-center custom-login">
        <LoginSignUpForm />
      </div>
      <div className="col-md-6 row flex-column h-100 justify-content-center custom-banner gy-2  text-center">
        <LoginBanner />
      </div>
    </div>
  );
}

export default AuthenticationPage;
