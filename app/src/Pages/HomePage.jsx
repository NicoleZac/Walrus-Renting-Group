import React from 'react';
import PropertyListings from "../Components/PropertyListings";
import propertyList from '../Components/propertyList';

function HomePage(){
    return(
        <div>
            <PropertyListings properties={propertyList} />
        </div>

    );
}
export default HomePage;