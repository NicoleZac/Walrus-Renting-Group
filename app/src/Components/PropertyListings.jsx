import React, { useContext, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import "./PropertyListings.css";
import { UserContext } from "../Context/usercontext";
import { useFilter } from "../Context/filtercontext";

const PropertyListings = ({ properties, other }) => {
  const { user } = useContext(UserContext);
  const { state } = useFilter();

  const userEmail = user?.email;
  const userType = user?.userType;

  useEffect(() => {
    console.log("Filter state changed:", state);
  }, [state]);

  const renderCards = (userType) => {
    const rows = [];
    if (userType === "Landlord") {
      const ownedProperties = properties.filter(
        (property) => property.landlord === userEmail
      );
      if (other) {
        const filteredOther = properties.filter(
          (property) =>
            property.landlord !== userEmail
        );
        for (let i = 0; i < filteredOther.length; i += 3) {
          rows.push(filteredOther.slice(i, i + 3));
        }
      } else {
        for (let i = 0; i < ownedProperties.length; i += 3) {
          rows.push(ownedProperties.slice(i, i + 3));
        }
      }
    } else {
      for (let i = 0; i < properties.length; i += 3) {
        rows.push(properties.slice(i, i + 3));
      }
    }

    // Filtering based on search
    return rows.map((row, index) => {
      let filteredProperties = row;
      const desiredCategories = {
        neighbourhood: state.filters.location,
        bedrooms: state.filters.bed,
        bathrooms: state.filters.bath,
      };
      Object.keys(desiredCategories).forEach((categoryKey) => {
        const desiredCategory = desiredCategories[categoryKey];
        if (desiredCategory != "" && typeof desiredCategory === "string") {
          filteredProperties = filteredProperties.filter((property) =>
            String(property[categoryKey])
              .toLowerCase()
              .includes(String(desiredCategory).toLowerCase())
          );
        } else if (
          desiredCategory != 0 &&
          typeof desiredCategory === "number"
        ) {
          filteredProperties = filteredProperties.filter(
            (property) => String(property[categoryKey]) == desiredCategory
          );
        }
      });

      return (
        <div
          key={index}
          class="auto-group-8ukp-FQe"
          id="N4EkTu8JNLJQjMFWLi8uKp"
        >
          {filteredProperties.map((filteredProperty, propertyIndex) => (
            <PropertyCard key={propertyIndex} property={filteredProperty} />
          ))}
        </div>
      );
    });
  };
  return (
    <div class="frame-19-ubg">
      {userType === "Landlord" ? renderCards(userType) : renderCards(userType)}
    </div>
  );
};
export default PropertyListings;
