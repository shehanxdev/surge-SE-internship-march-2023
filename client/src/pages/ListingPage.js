import React from "react";
import { useUser } from "@clerk/clerk-react";
import ListingSection from "../componenets/ListingSection";
import ProfileDrawer from "../componenets/ProfileDrawer";
import SideNavBar from "../componenets/SideNavBar";
function ListingPage() {
  const { user } = useUser();

  return (
    <div className="row h-100 justify-content-center  text-center">
      <div className="col md-2 ">
        <SideNavBar />
      </div>
      <div className="col-md-6 pt-5 ">
        <ListingSection />
      </div>

      <div className="col mt-4 position-relative">
        <ProfileDrawer />
      </div>
    </div>
  );
}

export default ListingPage;
