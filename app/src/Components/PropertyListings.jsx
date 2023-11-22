import React, { useContext, useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import "./PropertyListings.css";
import { UserContext } from "../Context/usercontext";
import { useFilter } from "../Context/filtercontext";

const PropertyListings = ({ properties, type }) => {
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
              <PropertyCard key={cellIndex} property={cell} />
            ))}
          </div>
        ))}
    </div>
  );
};
export default PropertyListings;
