import React, { useContext} from "react";
import "./RenterProfile.css"

const RenterProfile = ({ user }) => {
    const { firstName, lastName, email} = user;
    return (
      <div className="profile-card">
        <div className="profile-image">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cb6afc9-b144-491f-96d2-9fbbdfea796a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"className="profile-img"
            alt="Profile Image"
          />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
          <p className="profile-email">{`Email: ${email}`}</p>
          <div className="profile-age">22 years old</div>
          <div className="profile-description">
            I am a short term renter looking for a home with a nearby Pilates
            studio.
          </div>
      </div>
      <div className="Employment">
        <div className="column-3">
          <div className="div-37">
            <div className="div-38">Employment</div>
            <div className="div-39">
              <div className="div-40">Full Time Student</div>
              <div className="div-41">University of Calgary</div>
            </div>
            <div className="div-42">Engineering</div>
          </div>
        </div>
        <div className="column-4">
          <div className="div-43">
            <div className="div-44">Looking for</div>
            <div className="div-45">
              <div className="div-46">Room to Rent</div>
              <div className="div-47">Short Term</div>
              <div className="div-48">Near University</div>
            </div>
            <div className="div-49">
              <div className="div-50">Access to Transit</div>
              <div className="div-51">Ensuite Laundry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};
export default RenterProfile;