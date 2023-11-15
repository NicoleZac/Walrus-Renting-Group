import React,{useContext} from 'react';
import PropertyCard from './PropertyCard';
import './PropertyListings.css';
import {UserContext} from "../Context/usercontext";

const PropertyListings = ({properties,other}) =>{
        const {user} = useContext(UserContext);
        const userEmail = user?.email;
    const userType = user?.userType;
    const renderCards =(userType)=>{
       
        const rows = [];
        if(userType === "Landlord"){

            const ownedProperties =properties.filter(property => property.landlord ===userEmail);
            if(other){
                const neighbourhoods = new Set(ownedProperties.map(property=>property.neighbourhood));
                const filteredOther = properties.filter(property=> neighbourhoods.has(property.neighbourhood)&& property.landlord !== userEmail);
                for(let i=0;i<filteredOther.length;i+=3){
                    rows.push(filteredOther.slice(i,i+3));
                }
            }
            else{
                for(let i=0;i<ownedProperties.length;i+=3){
                    rows.push(ownedProperties.slice(i,i+3));
                }
            }   
        }
        else{
            for(let i=0;i<properties.length;i+=3){
                rows.push(properties.slice(i,i+3));
            }
        }
       
    return rows.map((row,index) =>(
       
        <div key={index} class="auto-group-8ukp-FQe" id="N4EkTu8JNLJQjMFWLi8uKp">
 
            {row.map((property,propertyIndex)=>(
                 <PropertyCard key={propertyIndex} property={property} />
            ))}
    
        </div>

     ));
    };
    return(
    <div class="frame-19-ubg">
        {userType === "Landlord" ? (
       renderCards(userType)
        ):(
        renderCards(userType)
        )}
        </div>
   
    );
};
export default PropertyListings;