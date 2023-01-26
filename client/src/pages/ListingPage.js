import React from "react";
import { useUser } from "@clerk/clerk-react";
function ListingPage() {
  const { user } = useUser();
  console.log(user.profileImageUrl);
  return (
    <div>
      <img src={user.profileImageUrl} alt="" />
    </div>
  );
}

export default ListingPage;
