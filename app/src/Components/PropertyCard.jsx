import React, { useState, useEffect,useContext} from "react";
import "./PropertyCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PageContext } from "../Context/pagecontext";
import userList from "./userList";
import {UserContext} from '../Context/usercontext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormData } from '../Context/formdatacontext';
import {Link,useNavigate} from 'react-router-dom';
import {removeProperty} from './propertyList';
import { toast } from "react-toastify";

function PropertyCard({ openPopup,property }) {
  const navigate = useNavigate();
  const {formData,dispatch} = useFormData();
  const { pageStates} = useContext(PageContext);
  const [users,setUsers]= useState(userList);
  const {user}= useContext(UserContext);
  const [image, setImage] = useState(null);
  const [isHovered,setHovered] = useState(false);
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
  const saveData=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    console.log(property.propertyType)
    dispatch({type:'UPDATE_DATA',payload:{propertyType:property?.propertyType}});
    dispatch({type:'UPDATE_DATA',payload:{description:property?.description}});
    dispatch({type:'UPDATE_DATA',payload:{propertyType:property?.propertyType}});
    dispatch({type:'UPDATE_DATA',payload:{title:property?.title}});
    dispatch({type:'UPDATE_DATA',payload:{neighbourhood:property?.neighbourhood}});
    dispatch({type:'UPDATE_DATA',payload:{numBeds:property?.numBeds}});
    dispatch({type:'UPDATE_DATA',payload:{numBaths:property?.numBaths}});
    dispatch({type:'UPDATE_DATA',payload:{propertySize:property?.propertySize}});
    dispatch({type:'UPDATE_DATA',payload:{address:property?.address}});
    dispatch({type:'UPDATE_DATA',payload:{country:property?.country}});
    dispatch({type:'UPDATE_DATA',payload:{city:property?.city}});
    dispatch({type:'UPDATE_DATA',payload:{zip:property?.propertyType}});
    dispatch({type:'UPDATE_DATA',payload:{startDate:property?.startDate}});
    dispatch({type:'UPDATE_DATA',payload:{leaseLength:property?.leaseLength}});
    dispatch({type:'UPDATE_DATA',payload:{monthlyRent:property?.monthlyRent}});
    dispatch({type:'UPDATE_DATA',payload:{securityDep:property?.securityDep}});
    dispatch({type:'UPDATE_DATA',payload:{contactMethod:property?.contactMethod}});
    dispatch({type:'UPDATE_DATA',payload:{landlord:property?.landlord}});
    dispatch({type:'UPDATE_DATA',payload:{id:property?.id}});
    openPopup();
  
  }
  const deleteData= async(event)=>{
    event.preventDefault();
    toast.dismiss();
    toast.info(
      <div>
      <p> Are you sure you want to delete this property?</p>
      <button onClick={()=>handleDelete()}>Yes </button>
      <button onClick={()=>handleCancel()}>No </button>
    </div>,{
      position:'top-center',
      autoClose: false,
      hideProgressBar:true,
      closeOnClick:false,
      pauseOnHover:true,
      draggable: true,
      closeButton: false,
      className:'confirmation-toast',
    })
    
  }
  const handleDelete =async()=>{

    await removeProperty(propertyId,user.email);
    toast.dismiss();
    navigate('../');
  }
  const handleCancel = ()=>{
    toast.dismiss();
  }

  useEffect(() => {
    const importImages = async()=>{
      if(Array.isArray(property.images)&& property.images.length>0){
        const importedImages = await Promise.all(
          property.images.map((imagePath)=>import(`../Images/Properties/${imagePath}`))
        )
        setImage(importedImages[0].default);
      }
      else if(property.image){
        const imageModule = await import(`../Images/Properties/${property.image}`);
        setImage(imageModule.default);
      }
    };
    importImages();
    
  }, [property.image,property.images]);
  const cardStyle = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div class="property-card-P14" id="141:5987">
      <div class="frame-70-6gA" id="I141:5987;141:5709" style={cardStyle} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      {(isHovered&&pageStates.UserProfilePage) &&(
          <div class="icon-container">
          <EditIcon onClick={(event)=>saveData(event)} style={{fill:  'white',fontSize:'80px'} }/>
  <Link to='../' onClick={(event)=>deleteData(event)}>
          <DeleteIcon  style={{ fill:  'white',fontSize:'80px'} }/>
          </Link>
          </div>
        )}
        <div class="auto-group-z5tw-2Zp" id="N4EkpPYABDeLgunmSZZ5tW">
          <p class="item-89900-Z3x" id="I141:5987;141:5708">
            ${property.rent || property.monthlyRent} /month
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
          {property.bedrooms || property.numBeds} Bedrooms</p>
        </div>
        <div class="bathrooms">
          <p>
        <img style={{marginRight:'10px'}}
              loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af350dc6-a591-468c-baa3-e3642d76bc54?"
            />
          {property.bathrooms||property.numBaths} Bathrooms</p>
        </div>
        <p class="sq-ft-Mtv" id="I141:5987;141:5983">
          {property.size||property.propertySize} sqft
        </p>
      </div>
    </div>
  );
}
export default PropertyCard;