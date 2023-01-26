import React from "react";
import { useUser } from "@clerk/clerk-react";
import ListingSection from "../componenets/ListingSection";
import ProfileDrawer from "../componenets/ProfileDrawer";
function ListingPage() {
  const { user } = useUser();

  return (
    <div className="row h-100 justify-content-center  text-center">
      <div className="col md-2 pt-5">LOGO</div>
      <div className="col-md-6 pt-5 ">
        <ListingSection />
      </div>

      <div className="col md-4">
        <ProfileDrawer />
      </div>
    </div>
  );
}

export default ListingPage;
