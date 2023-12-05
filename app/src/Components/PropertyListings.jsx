import React, { useContext, useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import "./PropertyListings.css";
import { UserContext } from "../Context/usercontext";
import { useFilter } from "../Context/filtercontext";
import { Link } from "react-router-dom";

const PropertyListings = ({ openPopup,properties, type}) => {
  const { user } = useContext(UserContext);
  const { state } = useFilter();
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    runFilter();
  }, [state]);

  const runFilter = () => {
    let tempProperties = properties;

    if (type === "Landlord" && user?.email !== "") {
      tempProperties = tempProperties.filter(
        (prop) => prop.landlord === user?.email
      );
    }
    if (type === "Favourites" && user?.email !== "") {
      if(!user?.favourites){
        tempProperties =[];
      }
      else{
      tempProperties = tempProperties.filter(
        (prop) => user?.favourites.includes(prop.id)
      );
      }
  
    }


    if (type === "OtherInNeighbourhood" && user?.email !== "") {
      tempProperties = tempProperties.filter(
        (prop) =>
          prop.landlord !== user?.email &&
          tempProperties
            .filter((prop) => prop.landlord === user?.email)
            .map((prop) => prop.neighbourhood)
            .includes(prop.neighbourhood)
      );
    }

    if (state.filters.location !== "") {
      tempProperties = tempProperties.filter((prop) =>
        prop.neighbourhood
          .toLowerCase()
          .includes(state.filters.location.toLowerCase())
      );
    }

    const homeType = state.filters.homeType;
    if (homeType.length !== 0) {
      tempProperties = tempProperties.filter((prop) =>
        homeType.includes(prop.type)
      );
    }

    const acceptedAdditionalFilters = state.filters.additionalFilters;
    console.log(acceptedAdditionalFilters);
    if (acceptedAdditionalFilters.length !== 0) {
      tempProperties = tempProperties.filter(
        (prop) =>
          Array.isArray(prop.additionalFilters) &&
          acceptedAdditionalFilters.every((type) =>
            prop.additionalFilters.includes(type)
          )
      );
    }

    if (state.filters.bath !== undefined && state.filters.bath !== 0) {
      tempProperties = tempProperties.filter(
        (prop) => prop.bathrooms >= state.filters.bath
      );
    }

    if (state.filters.bed !== undefined && state.filters.bed !== 0) {
      tempProperties = tempProperties.filter(
        (prop) => prop.bedrooms >= state.filters.bed
      );
    }

    if (state.filters.minPrice !== undefined && state.filters.minPrice !== 0) {
      tempProperties = tempProperties.filter(
        (prop) => prop.rent >= state.filters.minPrice
      );
    }

    if (state.filters.maxPrice !== undefined && state.filters.maxPrice !== 0) {
      tempProperties = tempProperties.filter(
        (prop) => prop.rent <= state.filters.maxPrice
      );
    }

    setFilteredProperties(tempProperties);
  };

  return (
    <div className="mainProp">
      {filteredProperties == 0 ? (
        <div className="additionalChild">No Properties Found</div>
      ) : (
        ""
      )}

      <div className="table">
        {filteredProperties
          .reduce(
            (rows, cell, index) =>
              (index % 3 === 0
                ? rows.push([cell])
                : rows[rows.length - 1].push(cell)) && rows,
            []
          )
          .map((row, rowIndex) => (
            <div className="tableRow" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Link
                  to={`/PropertyPage/${encodeURIComponent(
                    cell.id
                  )}/${encodeURIComponent(JSON.stringify(cell))}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <PropertyCard openPopup={openPopup} key={cellIndex} property={cell} />
                </Link>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default PropertyListings;
