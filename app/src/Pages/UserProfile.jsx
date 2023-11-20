import React, { useContext} from "react";
import LandlordProfile from "../Components/LandlordProfile";
import RenterProfile from "../Components/RenterProfile";
import { UserContext } from "../Context/usercontext";
import "./UserProfile.css"

function UserProfile () {
  const { user } = useContext(UserContext);
  const userType = user?.userType;

  return (
    <div>
      {userType === "Landlord" ? (
        <LandlordProfile user={user}/>
      ) : (
        <RenterProfile user={user}/>
      )}
    </div>
  );
}
export default UserProfile;