import React, { useState, useEffect,useContext} from "react";
import "./PropertyCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PageContext } from "../Context/pagecontext";
import userList from "./userList";
import {UserContext} from '../Context/usercontext';
function PropertyCard({ property }) {
  const [users,setUsers]= useState(userList);
  const {user}= useContext(UserContext);
  const [image, setImage] = useState(null);
  const propertyId = property.id;
  const isPropertyInFavourites = ()=>{
    const uL = userList.find((u)=>u.email ===user?.email);
    return uL && uL.favourites && uL.favourites.includes(propertyId);
  }

  const handleLike = (event,propertyId) =>{
    event.preventDefault();
    event.stopPropagation();
  
    if(isPropertyInFavourites()){
      setUsers((prev)=>{
        return prev.map((u)=>{
          if(u.email === user?.email&&u.favourites){
            u.favourites=u.favourites.filter((id)=>id!==propertyId);
          }
          return u;
        })
      })


    }
    else{
      setUsers((prev)=>{
        return prev.map((u)=>{
          if(u.email === user?.email){
            if(!u.favourites){
              u.favourites =[propertyId];
            }
            else if(!u.favourites.includes(propertyId)){
              u.favourites.push(propertyId);
            }
          }
          return u;
        })
      })
    
      
    }
  
  
  }
  useEffect(() => {
    import(`../Images/Properties/${property.image}`).then((imageModule) => {
      setImage(imageModule.default);
    });
  }, [property.image]);
  const cardStyle = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div class="property-card-P14" id="141:5987">
      <div class="frame-70-6gA" id="I141:5987;141:5709" style={cardStyle}>
        <div class="auto-group-z5tw-2Zp" id="N4EkpPYABDeLgunmSZZ5tW">
          <p class="item-89900-Z3x" id="I141:5987;141:5708">
            ${property.rent} /month
          </p>
          {user && (
          <FavoriteIcon class="vector-Ugi" style={{ fill: isPropertyInFavourites()  ? 'red':'white'} } onClick={(event)=>handleLike(event,propertyId)}/>
          )}
        </div>
      </div>
      <div class="frame-19-sir" id="I141:5987;141:5984">
        <p class="downtown-E3c" id="I141:5987;141:5712">
          {property.neighbourhood}
        </p>
        <div class="type">
          <p>
          <img style={{marginRight:'10px'}}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20030d52-a1b5-4a6f-8d6d-9cfc36645ab6?apiKey=b5d446799a5e4e7ab3e01b97a5ff1ee2&"
          />
          {property.propertyType}
          </p>
        </div>
        <div class="bedrooms">
        <p >
        <img style={{marginRight:'10px'}}
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2377dc-9136-4549-84c6-158a8f299819?"
                      />
          {property.bedrooms} Bedrooms</p>
        </div>
        <div class="bathrooms">
          <p>
        <img style={{marginRight:'10px'}}
              loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af350dc6-a591-468c-baa3-e3642d76bc54?"
            />
          {property.bathrooms} Bathrooms</p>
        </div>
        <p class="sq-ft-Mtv" id="I141:5987;141:5983">
          {property.size} sqft
        </p>
      </div>
    </div>
  );
}
export default PropertyCard;
