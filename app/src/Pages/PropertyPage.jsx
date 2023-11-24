import React from 'react';
import './PropertyPage.css';
import HousePic1 from '../Images/PropertyPics/HousePic1.png'
import HousePic2 from '../Images/PropertyPics/HousePic2.png'
import HousePic3 from '../Images/PropertyPics/HousePic3.png'
import Bed from '../Images/PropertyPics/Bed.png'
import Bath from '../Images/PropertyPics/Bath.png'
import House from '../Images/PropertyPics/House.png'

export const PropertyPage = () => {
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
          <div className="text-wrapper-5">Outdoor Retreat</div>
          <div className="text-wrapper-6">$1541.00 / month</div>
          <img className="frame-6" alt="Frame" src="frame-50.svg" />
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