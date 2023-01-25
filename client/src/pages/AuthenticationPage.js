//PACKAGES
import React, { useRef, useState } from "react";
import ReCaptcha from "react-google-recaptcha";
//CUSTOM COMPONENETS
import LoginBanner from "./../componenets/LoginBanner";
import LoginSignUpForm from "./../componenets/LoginSignUpForm";
//MUI COMPONENETS
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";

function AuthenticationPage() {
  const [open, setOpen] = useState(true);
  const handleCaptcha = (value) => {
    if (value) {
      setOpen(!open);
    }
  };
  return (
    <div className="row h-100">
      <Modal open={open}>
        <ModalDialog layout="center">
          <span>
            <b>
              {" "}
              Please verify you are human. Robots are not welcome &#40; Sorry
              Robots&#41;
            </b>
          </span>
          <ReCaptcha
            sitekey={process.env.REACT_APP_SITE_KEY}
            classNamem="m-auto w-100"
            onChange={handleCaptcha}
          />
        </ModalDialog>
      </Modal>
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
