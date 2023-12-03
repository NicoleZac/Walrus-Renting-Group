import React, { useContext, useState } from "react";
import "./RenterProfile.css";
import Messaging from "../Components/Messaging";
import { UserContext } from "../Context/usercontext";

const RenterProfile = ({ user }) => {
  const { user: currentUser } = useContext(UserContext);

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const email = user?.email;

  // State variable to manage overall edit mode
  const [editMode, setEditMode] = useState(false);

  // State variables to manage editable profile fields
  const [description, setDescription] = useState(
    "I am a short-term renter looking for a home with a nearby Pilates studio."
  );

  const [showMessaging, setShowMessaging] = useState(false);

  const[error, setError] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newAge, setNewAge] = useState("22");
  const [ageLabel] = useState("years old");

  // State variables for occupation and filters sections
  const [selectedStudentTags, setSelectedStudentTags] = useState([]);
  const [selectedOccupationTags, setSelectedOccupationTags] = useState([]);
  const [selectedAdditionalTags, setAdditionalTags] = useState([]);

  const studentTags = ["Student", "University of Calgary", "Mount Royal University", "SAIT", "University of Alberta"];
  const occupationTags = ["Part-time", "Full-time", "Teacher", "Software Engineer", "Accountant", "Bartender", "Server", "Retail Associate"];
  const additionalTags = ["Room to Rent", "Short-Term", "Long-Term", "Near University", "Access to Transit", "Ensuite Laundry", "Pet Owner"];

  
  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value);
  };
  
  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to toggle Messaging component
  const messages = () => {
    setShowMessaging(true); // Show Messaging component when Contact Landlord is clicked
  };

  const handleAgeChange = (e) => {
    const enteredAge = e.target.value;

    // Check if entered age is greater than 18
    if (!isNaN(enteredAge) && enteredAge > 18) {
      setNewAge(enteredAge.toString());
    } else {
      // Optionally, you can provide feedback to the user about the age requirement
      setError("Age must be greater than 18");
    }
  };

  // Function to handle the click event for student tags
  const handleStudentClick = (tag) => {
    setSelectedStudentTags((prevSelected) => {
      const isSelected = prevSelected.includes(tag);
      return isSelected
        ? prevSelected.filter((selectedOption) => selectedOption !== tag)
        : [...prevSelected, tag];
    });
  };

  // Function to handle the click event for job tags
  const handleJobsClick = (tag) => {
    setSelectedOccupationTags((prevSelected) => {
      const isSelected = prevSelected.includes(tag);
      return isSelected
        ? prevSelected.filter((selectedOption) => selectedOption !== tag)
        : [...prevSelected, tag];
    });
  };

  // Function to handle the click event for additional tags
  const handleAdditionalTagsClick = (tag) => {
    setAdditionalTags((prevSelected) => {
      const isSelected = prevSelected.includes(tag);
      return isSelected
        ? prevSelected.filter((selectedOption) => selectedOption !== tag)
        : [...prevSelected, tag];
    });
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
    if (currentUser.email === email) {
      setEditMode(!editMode);
    } else {
      setError("You are not authorized to edit this profile.");
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
            {currentUser && (
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
      {/* Common container class for "occupation" and "filters" */}
      <div className="profile-section">
        <div className="div-47">
          <div className="column-divide">
          <div className="occupation">
            <div className="employment">Employment</div>
            {editMode && (
              <div className="student-tags">
                {studentTags.map((tag, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedStudentTags.includes(tag) ? "tags" : "tags-selected"
                    }`}
                    onClick={() => handleStudentClick(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
            {!editMode && (
              <div className="selected-tags">
                {selectedStudentTags.map((tag, index) => (
                  <div key={index} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            )}
            {editMode && (
              <div className="job-tags">
                {occupationTags.map((tag, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedOccupationTags.includes(tag) ? "tags" : "tags-selected"
                    }`}
                    onClick={() => handleJobsClick(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
            {!editMode && (
              <div className="selected-tags">
                {selectedOccupationTags.map((tag, index) => (
                  <div key={index} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
          <div className="requirements-column">
            <div className="rent-tags">
              <div className="requirements">Looking for</div>
              {editMode && (
              <div className="additional-tags">
                {additionalTags.map((tag, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedAdditionalTags.includes(tag) ? "tags" : "tags-selected"
                    }`}
                    onClick={() => handleAdditionalTagsClick(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              )}
              {!editMode && (
                <div className="selected-tags2">
                  {selectedAdditionalTags.map((tag, index) => (
                    <div key={index} className="tags">
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterProfile;