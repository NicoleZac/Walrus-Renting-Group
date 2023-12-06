import React, { useContext, useState } from "react";
import PropertyListings from "../Components/PropertyListings";
import {getProperties} from "../Components/propertyList";
import "./LandlordProfile.css";
import Messaging from "../Components/Messaging";
import { UserContext } from "../Context/usercontext";
import { useParams } from 'react-router-dom';
import userList from "./userList";

const LandlordProfile = ({ openPopup }) => {
  const { email } = useParams();
  const user1 = userList.find((u)=>u.email === email);
  const { user } = useContext(UserContext);
  const cemail = user?.email;
  // const [myprofile, setmyprofile] = useState(false);
  const firstName = user1?.firstName;
  const lastName = user1?.lastName;


  const handleMyProfile = () => {
    if(cemail === email){
      return true;
    }
    else{
      return false;
    }
  };
  // State variable to manage overall edit mode
  const [editMode, setEditMode] = useState(false);

  // State variables to manage editable profile fields
  const [description, setDescription] = useState(
    "I’ve got a nice property for you to stay at. Looking for renters."
  );

  const [showMessaging, setShowMessaging] = useState(false);
  const[error, setError] = useState(false);

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newAge, setNewAge] = useState("65");
  const [ageLabel] = useState("years old");

   // Function to toggle Messaging component
   const messages = () => {
    setShowMessaging(true); // Show Messaging component when Contact Landlord is clicked
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value);
  };


  const handleAgeChange = (e) => {
    const enteredAge = e.target.value;

    // Check if entered age is greater than 18
    if (!isNaN(enteredAge) && enteredAge > 18) {
      setNewAge(enteredAge.toString());
    } else {
      // Optionally, you can provide feedback to the user about the age requirement
      console.error("Age must be greater than 18");
    }
  };

  // Function to handle the click event for saving changes
  const handleSave = () => {
    // Perform save logic here

    // check if the required fields are filled
    if (newFirstName === '' || newLastName === '' || description === '') {
      setError(true);
      return; // Do not proceed with saving if there is an error
    }

    // If the save logic is successful, you can reset the error state
    setError(false);
    // Toggle edit mode after saving (optional)
    toggleEditMode();
  };
  
  // Function to toggle overall edit mode
  const toggleEditMode = () => {
    // Only allow edit mode if the current user matches the profile owner
    if (cemail === email) {
      setEditMode(!editMode);
    } else {
      setError("You are not authorized to edit this profile.");
    }
  };

  return (
    <>
      {/* Landlord Profile Section */}
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
          {/* Editable first name */}
          {editMode ? (
            <div>
            <span className="name-input-titles">First Name</span>
            <input
              value={newFirstName}
              onChange={handleFirstNameChange}
              className="first-name-input"
            />
            <span className="name-input-titles">Last Name</span>
            <input
              value={newLastName}
              onChange={handleLastNameChange}
              className="last-name-input"
            />
            </div>
          ) : (
            <h2 className="profile-name">{`${newFirstName} ${newLastName}`}</h2>
          )}
          {editMode ? (
            <div >
              <span className="age-input-title">Age</span>
              <input
                type="number"
                value={newAge}
                onChange={handleAgeChange}
                className="profile-age-input"
              />
            </div>
          ) : (
            <div className="profile-age">{`${newAge} ${ageLabel}`}</div>
          )}
          <p className="profile-email">{`${email || ""}`}</p>
          {/* Toggle between displaying text and input field for description */}
          {editMode ? (
            <div >
              <span className="bio-input-title">User Bio</span>
              <textarea
                className="edit-description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          ) : (
            <div className="profile-description">
              {description}
            </div>
          )}

          {/* Button to toggle the overall edit mode or save changes */}
          {handleMyProfile()? (
          <button onClick={editMode ? handleSave : toggleEditMode} className="edit-profile-button">
            <div className="edit-profile">
              {editMode ? "Save" : "Edit Profile Information"}
            </div>
          </button> ) : (null) }

          {/* Error message */}
          {error && (
            <div className="error-message">
              Please fill in all required fields.
            </div>
          )}

          <div className="send-renter-message-container">
          {handleMyProfile()? (
              <>
                <button className="send-renter-message" onClick={messages}>
                  View Messages
                </button>
                </>
            ):(<>
              <button className="send-renter-message" onClick={messages}>
                Send Message
              </button>
              </>)}
                <span className="icon">
                  {showMessaging && (
                    <Messaging
                      isOpen={showMessaging}
                      onClose={() => setShowMessaging(false)}
                    />
                  )}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/248ce8f4-51d8-4320-a68c-8957a496b0bd?"
                    className="message"
                  />
                </span>
          </div>
        </div>
      </div>

      {/* Property Section */}
      <div className="properties">
        <div className="text-wrapper">My Properties</div>
        {/* Call PropertyComponent to display the property listing */}
        {handleMyProfile()? (<PropertyComponent openPopup={openPopup} />):(null)}
        <div className="current-properties">
          <div className="landlords-own-properties" id="I195:7530;195:7168">
            <PropertyListings openPopup={openPopup} properties={getProperties()} type="Renter" email={email} />
          </div>
        </div>
      </div>
    </>
  );
};

function PropertyComponent({ openPopup }) {
  return (
    <>
      <div className="main-container">
        <span className="create-property">
          <div onClick={openPopup} class="button" id="I195:7530;195:6735">
            Create Property
          </div>
        </span>
      </div>
      
    </>
  );
}

export default LandlordProfile;
