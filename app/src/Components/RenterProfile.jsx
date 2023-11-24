import React from "react";
import { Link } from "react-router-dom";
import "./RenterProfile.css";

const RenterProfile = ({ user }) => {
  const { firstName, lastName, email } = user;

  return (
    <div>
      <div className="profile-card">
        <div className="profile-image">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
            className="profile-img"
            alt="Profile Image"
          />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
          <div className="profile-age">22 years old</div>
          <p className="profile-email">{`${email}`}</p>
          <div className="profile-description">
            I am a short-term renter looking for a home with a nearby Pilates
            studio.
          </div>
          <div className="send-message">Send Message
            <span className="link"> 
              <Link to={`/UserProfile/${email}`}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/248ce8f4-51d8-4320-a68c-8957a496b0bd?"
                      className="message"
                    />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="occupation">
        <div className="div-37">
          <div className="employment">Employment</div>
          <div className="div-39">
            <div className="student">Full-Time Student</div>
            <div className="university">University of Calgary</div>
            <div className="faculty">Engineering</div>
          </div>
        </div>
      </div>
      <div className="filters">
        <div className="div-43">
          <div className="requirements">Looking for</div>
          <div className="div-45">
            <div className="room">Room to Rent</div>
            <div className="length">Short Term</div>
            <div className="location">Near University</div>
            <div className="transit">Access to Transit</div>
            <div className="laundry">Ensuite Laundry</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterProfile;
