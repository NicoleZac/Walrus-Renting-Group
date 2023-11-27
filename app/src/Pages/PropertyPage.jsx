import React, { useState } from 'react';
import './PropertyPage.css';
import HousePic1 from '../Images/PropertyPics/HousePic1.png'
import HousePic2 from '../Images/PropertyPics/HousePic2.png'
import HousePic3 from '../Images/PropertyPics/HousePic3.png'
import Bed from '../Images/PropertyPics/Bed.png'
import Bath from '../Images/PropertyPics/Bath.png'
import House from '../Images/PropertyPics/House.png'
import Heart from '../Images/PropertyPics/heart.png'
import HeartFilled from '../Images/PropertyPics/filledheart.png'
import Calendar from '../Images/PropertyPics/calendar.png'
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";

export const PropertyPage = () => {
  const {id,property} = useParams();
  const propertyInfo = JSON.parse(decodeURIComponent(property));
  
  return (
    <div className="individual-property">
      <div className="frame-5">
        <div className="submit">
          <div className="text-wrapper-4">Contact Landlord</div>
        </div>
        <div className = "photos">
          <div className = "big-image">
            <img src={HousePic1} alt="Property" />
          </div>
          <div className = "small-image">
            <img src={HousePic2} alt="Property" />
            <img src={HousePic3} alt="Property" />
          </div>
        </div>
        <div className="group">
          <div className="text-wrapper-5">{propertyInfo.title}</div>
          <div className="text-wrapper-6">${propertyInfo.rent} / month</div>
          <div className="buttons">
            <button onClick={handleFavourite}>
              <img
                className="heart"
                alt="Heart"
                loading="lazy"
                src={Heart}
              />
            </button>
            <button onClick={handleCalendar}>
              <img
                className="calendar"
                alt="Calendar"
                loading="lazy"
                src={Calendar}
              />
            </button>
          </div>
        </div>
        <div className="frame-7">
          <div className="property-features">
            <div className = "frame-2">
              Available Now!
            </div>
            <div className = "frame-25">
              Utilities Included
            </div>
            <div className = "frame-26">
              Ensuite Laundry
            </div>
          </div>
          <div className="text-wrapper-25">
            Features
          </div>
          <div className="stuff">
            <div className="item1">
              <img className="beds" alt="Bath" src={Bed} />
              <div className="bed-text">
                <div className="bed-text-wrapper">{propertyInfo.bedrooms} Beds</div>
              </div>
            </div>
            <div className="item1">
              <img className="beds" alt="Bath" src={Bath} />
              <div className="bed-text">
                <div className="bed-text-wrapper">{propertyInfo.bathrooms} Baths</div>
              </div>
            </div>
            <div className="item1">
              <img className="beds" alt="Bath" src={House} />
              <div className="bed-text">
                <div className="bed-text-wrapper">House</div>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="text-wrapper-7">Description</div>
            <p className="our-mountain-home">
              Our mountain home boasts three cozy bedrooms, each with breathtaking views of the surrounding wilderness,
              ensuring a peaceful night&#39;s sleep. The open-concept living area features a stone fireplace, creating a
              warm and inviting atmosphere where you can unwind after a day of outdoor adventures.
              <br />
              <br />
              The fully-equipped kitchen beckons to the chef in your group, with granite countertops, stainless steel
              appliances, and all the essentials you need to prepare gourmet meals. Step outside onto the spacious deck,
              where you can savor your morning coffee while gazing at the sun-kissed mountains or grill up a feast for
              friends and family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;