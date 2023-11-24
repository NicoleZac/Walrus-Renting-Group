import React from 'react';
import './PropertyPage.css';
import HousePic1 from '../Images/PropertyPics/HousePic1.png'
import HousePic2 from '../Images/PropertyPics/HousePic2.png'
import HousePic3 from '../Images/PropertyPics/HousePic3.png'

const PropertyPage = () => {
  return (
    <div className="property-profile">
      <div className="photos">
        <img src={HousePic1} alt="Property" />
        <img src={HousePic2} alt="Property" />
        <img src={HousePic3} alt="Property" />
      </div>
      <div className="property-details">
        <div className="title-price">
          <h1>Property Title</h1>
        </div>
        <div className = "price">
            <p>Price Per Month</p>
        </div>
        <div className = "buttons">
          <button className="heart-btn">❤</button>
          <button className="calendar-btn">📅</button>
        </div>
        <div className="property-info">
          <div className="features">
            <h2>Property Features</h2>
            <div className="icon-container">
              <div className="bed-icon">
                <span>Bedrooms</span>
                <span>3</span>
              </div>
              <div className="toilet-icon">
                <span>Baths</span>
                <span>2</span>
              </div>
              <div className="house-icon">
                <span>Square Footage</span>
                <span>1500 sqft</span>
              </div>
            </div>
            <div className="tags">
              <span>No Parking</span>
              <span>Utilities Included</span>
              {/* Add more tags as needed */}
            </div>
          </div>
          <div className="description">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus ante ac arcu convallis, ut consequat quam bibendum.
              {/* Add property description here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
