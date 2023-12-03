import React, { useContext, useState } from "react";
import PropertyListings from "../Components/PropertyListings";
import {getProperties} from "../Components/propertyList";
import "./LandlordProfile.css";
import Messaging from "../Components/Messaging";
import { UserContext } from "../Context/usercontext";

const LandlordProfile = ({ openPopup }) => {
  const { user } = useContext(UserContext);
  // Check if user exists before destructuring its properties
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const email = user?.email;

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
    if (user.email === email) {
      setEditMode(!editMode);
    } else {
      console.error("You are not authorized to edit this profile.");
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
            <input
              type="text"
              value={newFirstName}
              onChange={handleFirstNameChange}
              className="first-name-input"
            />
          ) : (
            <h2 className="profile-name">{`${newFirstName} ${newLastName}`}</h2>
          )}
          {/* Editable last name */}
          {editMode ? (
            <input
              type="text"
              value={newLastName}
              onChange={handleLastNameChange}
              className="last-name-input"
            />
          ) : null}
          {editMode ? (
            <div className="profile-age">
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
            <textarea
              className="edit-description"
              value={description}
              onChange={handleDescriptionChange}
            />
          ) : (
            <div className="profile-description">
              {description}
            </div>
          )}

          {/* Button to toggle the overall edit mode or save changes */}
          <button onClick={editMode ? handleSave : toggleEditMode} className="edit-profile-button">
            <div className="edit-profile">
              {editMode ? "Save" : "Edit Profile Information"}
            </div>
          </button>

          {/* Error message */}
          {error && (
            <div className="error-message">
              Please fill in all required fields.
            </div>
          )}

          <div className="send-renter-message-container">
            {user && (
              <>
                <button className="send-renter-message" onClick={messages}>
                  View Messages
                </button>
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Property Section */}
      <div className="properties">
        <div className="text-wrapper">My Properties</div>
        {/* Call PropertyComponent to display the property listing */}
        <PropertyComponent openPopup={openPopup} />
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
      <div className="current-properties">
        <div className="landlords-own-properties" id="I195:7530;195:7168">
          <PropertyListings openPopup={openPopup} properties={getProperties()} type="Landlord" />
        </div>
      </div>
    </>
  );
}

export default LandlordProfile;
