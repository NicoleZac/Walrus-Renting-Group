import React, {useState, useEffect} from 'react';
import "./PropertyCard.css";
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
function PropertyCard({property}){
   const [image,setImage] =useState(null);
   useEffect(()=>{
    import(`../Images/Properties/${property.image}`).then((imageModule)=>{
        setImage(imageModule.default);
    });
   },[property.image]);
    const cardStyle = {
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
return(
    <div class="property-card-P14" id="141:5987">
    <div class="frame-70-6gA" id="I141:5987;141:5709" style={cardStyle}>
    < div class="auto-group-z5tw-2Zp" id="N4EkpPYABDeLgunmSZZ5tW">
<p class="item-89900-Z3x" id="I141:5987;141:5708">${property.rent}</p>
    <FavoriteIcon class="vector-Ugi" style={{fill: 'red'}}/>
    </div>
    </div>
    <div class="frame-19-sir" id="I141:5987;141:5984">
    <p class="downtown-E3c" id="I141:5987;141:5712">{property.neighbourhood}</p>
    <div class= "bedrooms">
    <BedIcon />
        <p >{property.bedrooms}</p>
        </div>
    <div class="bathrooms">
    <BathroomIcon/>
        <p >{property.bathrooms}</p>
    </div>
    <p class="sq-ft-Mtv" id="I141:5987;141:5983">{property.size}</p>
    </div>
    </div>
 );
}
export default PropertyCard;