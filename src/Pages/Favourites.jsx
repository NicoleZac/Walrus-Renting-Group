import React from "react";
import "./Favourites.css";
import PropertyListings from "../Components/PropertyListings";
import propertyList from "../Components/propertyList";


export const Favourites = () => {


  return (
    <>
     <div class="favourite-properties">
            <div class="favourite-properties-list">
              Favourited Properties
            </div>
            <PropertyListings properties={propertyList} type="Favourites" />
          </div>
    </>
  );
}
export default Favourites;