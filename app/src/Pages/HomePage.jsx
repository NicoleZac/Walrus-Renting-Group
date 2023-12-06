import React, { useContext } from "react";
import PropertyListings from "../Components/PropertyListings";
import {getProperties} from "../Components/propertyList";
import { UserContext } from "../Context/usercontext";
import {Link} from "react-router-dom";
import "./HomePage.css";

function HomePage({ openPopup }) {
  const { user } = useContext(UserContext);

  const userType = user?.userType;
  return (
    <div>
      {userType === "Landlord" ? (
        <div>
          <div class="auto-group-n9aa-rLh" id="N4ErtTvWgvAsg2VNhXn9AA">
          <div class="frame-55-XVL" id="I195:7530;195:7167">
            <Link class="submit-qW2"to="../Dashboard" style={{textDecoration:'none',color:'inherit'}}>
            View Other Properties
            </Link>
            <div onClick={openPopup} class="submit-UJ6" id="I195:7530;195:6735">
              Create Property
            </div>
          </div>
          <div class="landlords-own-properties-LbC" id="I195:7530;195:7168">
            <div class="employment-Ega" id="I195:7530;195:7168;161:3104">
              My properties
            </div>
            <PropertyListings properties={getProperties()} type="Landlord" />
          </div>
          <div class="landlords-own-properties-LbC" id="I195:7530;195:7298">
            <div class="employment-Ega" id="I195:7530;195:7298;161:3104">
              Neighbouring Properties
            </div>
            <PropertyListings
              properties={getProperties()}
              type="OtherInNeighbourhood"
            />
          </div>
        </div>
        </div>
      ) : (
        <PropertyListings properties={getProperties()} />
      )}
    </div>
  );
}
export default HomePage;
