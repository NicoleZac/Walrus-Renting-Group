import React, { useState } from "react";
import "./RenterProfile.css";
import { Link } from "react-router-dom";

const RenterProfile = ({ user }) => {
  const { firstName, lastName, email } = user;

  // State variable to manage overall edit mode
  const [editMode, setEditMode] = useState(false);

  // State variables to manage editable profile fields
  const [description, setDescription] = useState(
    "I am a short-term renter looking for a home with a nearby Pilates studio."
  );

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newAge, setNewAge] = useState("22");
  const [ageLabel] = useState("years old");

  // State variables for occupation and filters sections
  const [editOccupation, setEditOccupation] = useState(false);
  const [editFilters, setEditFilters] = useState(false);

  const [student, setStudent] = useState("Full-Time Student");
  const [university, setUniversity] = useState("University of Calgary");
  const [faculty, setFaculty] = useState("Engineering");

  const [room, setRoom] = useState("Room to Rent");
  const [length, setLength] = useState("Short Term");
  const [location, setLocation] = useState("Near University");
  const [transit, setTransit] = useState("Access to Transit");
  const [laundry, setLaundry] = useState("Ensuite Laundry");

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
          {/* Button to toggle the overall edit mode */}
          <button onClick={toggleEditMode} className="edit-profile-button">
            <div className="edit-profile">
              {editMode ? "Save" : "Edit Profile Information"}
            </div>
          </button>
          {/* Send Message button (conditionally rendered) */}
          {!editMode && (
            <button className="send-renter-message">
              Send Message
              <span className="link">
                <Link to={`/UserProfile/${email}`}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/248ce8f4-51d8-4320-a68c-8957a496b0bd?"
                    className="message"
                  />
                </Link>
              </span>
            </button>
          )}
        </div>
      </div>
      {/* Common container class for "occupation" and "filters" */}
      <div className="profile-section">
        <div className="div-47">
          <div className="column-divide">
            <div className="occupation">
              <div className="employment">Employment</div>
              <div className="tags">
                <div className="student-column">
                  <div className="student">Full Time Student</div>
                  <div className="faculty">Engineering</div>
                </div>
                <div className="university-tag">
                  <div className="university">University of Calgary</div>
                </div>
              </div>
            </div>
          </div>
          <div className="requirements-column">
            <div className="rent-tags">
              <div className="requirements">Looking for</div>
              <div className="information">
                <div className="room">Room to Rent</div>
                <div className="length">Short Term</div>
                <div className="location">Near University</div>
              </div>
              <div className="other">
                <div className="transit">Access to Transit</div>
                <div className="laundry">Ensuite Laundry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterProfile;
