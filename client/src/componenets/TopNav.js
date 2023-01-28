import React from "react";
import { AppBar } from "@mui/material";
import { useUser } from "@clerk/clerk-react";

function TopNav() {
  const { user } = useUser();
  return (
    <AppBar className="p-3 custom-app-bar " sx={{ backgroundColor: "#ff3841" }}>
      <div className="text-center">Hi {user.username}</div>
    </AppBar>
  );
}

export default TopNav;
