import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyListings.css';

const PropertyListings = ({properties}) =>{
    const renderCards =()=>{
        const rows = [];
        for(let i=0;i<properties.length;i+=3){
            rows.push(properties.slice(i,i+3));
        }
    return rows.map((row,index) =>(
       
        <div key={index} class="auto-group-8ukp-FQe" id="N4EkTu8JNLJQjMFWLi8uKp">
 
            {row.map((property,propertyIndex)=>(
                 <PropertyCard key={propertyIndex} property={property} />
            ))}
    
        </div>

     ));
    };
    return <div class="frame-19-ubg">{renderCards()}</div>
};
export default PropertyListings;