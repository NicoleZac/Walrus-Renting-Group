import React from "react";
import './PropertyPage.css';
import {useParams} from 'react-router-dom';

function PropertyPage(){
    const {id,property} = useParams();
    const propertyInfo = JSON.parse(decodeURIComponent(property));
    return(
        <>
        </>
    );
}
export default PropertyPage;