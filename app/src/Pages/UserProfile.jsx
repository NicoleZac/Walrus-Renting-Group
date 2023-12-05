import React, { useContext} from "react";
import LandlordProfile from "../Components/LandlordProfile";
import RenterProfile from "../Components/RenterProfile";
import { UserContext } from "../Context/usercontext";
import { useParams } from 'react-router-dom';

function UserProfile ({openPopup}) {
  const { user } = useContext(UserContext);
  let userType = user?.userType;
  const { email } = useParams();
  const char = email[4];
  if( char ==='L'){
      userType="Landlord";
  }else if(char ==='R'){
    userType="Renter";
  }

  

  return (
    <div>
      {userType === "Landlord" ? (
        <LandlordProfile user={user} openPopup={openPopup}/>
      ) : (
        <RenterProfile user={user} />
      )}
    </div>
  );
}
export default UserProfile;