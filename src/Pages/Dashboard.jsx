import React from "react";
import PropertyListings from "../Components/PropertyListings";
import {getProperties} from "../Components/propertyList";
import "./Dashboard.css";

function Dashboard() {
    return(
        <PropertyListings properties={getProperties()} />
    )
}
export default Dashboard;