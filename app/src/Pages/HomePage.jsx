import React, { useContext } from "react";
import PropertyListings from "../Components/PropertyListings";
import propertyList from "../Components/propertyList";
import { UserContext } from "../Context/usercontext";
import "./HomePage.css";

function HomePage({ openPopup }) {
  const { user } = useContext(UserContext);

  const userType = user?.userType;
  const other = true;
  return (
    <div>
      {userType === "Landlord" ? (
        <div>
          <div class="auto-group-n9aa-rLh" id="N4ErtTvWgvAsg2VNhXn9AA">
          <div class="frame-55-XVL" id="I195:7530;195:7167">
            <div class="submit-qW2" id="I195:7530;195:7165">
              View Messages
            </div>
            <div onClick={openPopup} class="submit-UJ6" id="I195:7530;195:6735">
              Create Property
            </div>
          </div>
          <div class="landlords-own-properties-LbC" id="I195:7530;195:7168">
            <div class="employment-Ega" id="I195:7530;195:7168;161:3104">
              My properties
            </div>
            <PropertyListings properties={propertyList} type="Landlord" />
          </div>
          <div class="landlords-own-properties-LbC" id="I195:7530;195:7298">
            <div class="employment-Ega" id="I195:7530;195:7298;161:3104">
              Neighbouring Properties
            </div>
            <PropertyListings
              properties={propertyList}
              type="OtherInNeighbourhood"
            />
          </div>
        </div>
        </div>
      ) : (
        <PropertyListings properties={propertyList} />
      )}
    </div>
  );
}
export default HomePage;
