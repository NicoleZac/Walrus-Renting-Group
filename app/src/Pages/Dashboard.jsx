import React from "react";
import PropertyListings from "../Components/PropertyListings";
import propertyList from "../Components/propertyList";
import "./Dashboard.css";

function Dashboard() {
    return(
        <PropertyListings properties={propertyList} />
    )
}
export default Dashboard;