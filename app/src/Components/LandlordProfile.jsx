import React, { useContext } from "react";
import PropertyListings from "../Components/PropertyListings";
import propertyList from "../Components/propertyList";
import "./LandlordProfile.css"

const LandlordProfile = ({ user, openPopup }) => {
  const { firstName, lastName, email } = user;

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78272d46-c19e-4e04-a919-07976ce0bb4f?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
          className="profile-img"
          alt="Profile Image"
        />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
        <p className="profile-age">65 years old</p>
        <p className="profile-email">{`${email}`}</p>
        <p className="profile-description">
          I’ve got a nice property for you to stay at. Looking for renters.
        </p>
      </div>

      {/* Call PropertyComponent to display the property listing */}
      {PropertyComponent(openPopup)}
    </div>
  );
};

function PropertyComponent(openPopup) {
  return (
    <header className="main-container">
      <h2 className="title">My properties</h2>
      <span className="create-property">
        <div 
          onClick={openPopup}
          className="button"
          id="I195:7530;195:6735"
        >
          Create Property
        </div>
      </span>
      <div className="current-properties">
        <div className="landlords-own-properties-LbC" id="I195:7530;195:7168">
          <div className="employment-Ega" id="I195:7530;195:7168;161:3104">
            My properties
          </div>
          <PropertyListings properties={propertyList} />
        </div>
      </div>
    </header>
  );
}

export default LandlordProfile;
