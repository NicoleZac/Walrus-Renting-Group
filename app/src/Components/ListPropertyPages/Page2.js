import React from 'react';
import "./Page2.css";
import Progress1 from '../../Images/ProgressBars/Progress1.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Page2 = ({onNext,onPrevious}) =>{
    return(
<div class="create-a-property-CMx" id="165:13950">
<div class="rectangle-13-tka" id="I165:13950;165:8472"></div>
<div class="line-8-1qC" id="I165:13950;165:8473"></div>
<p class="create-a-property-LsU" id="I165:13950;165:8476">Create a Property</p>
<div class="frame-15-dra" id="I165:13950;165:8477">
<p class="progress-bar-ALi" id="I165:13950;165:8478">Progress Bar</p>
<p class="complete-ELa" id="I165:13950;165:8479">40% Complete</p>
</div>
<img class="group-17-Ksp"  src={Progress1} alt={Progress1} id="I165:13950;165:8480"/>
<div class="frame-19-Ejt" id="I165:13950;165:8485">
<p class="location-kTL" id="I165:13950;165:8486">Location</p>
<p class="describe-where-it-is-s2A" id="I165:13950;165:8487">Describe where it is!</p>
</div>
<p class="neighborhood-description-xZQ" id="I165:13950;165:8668">Neighborhood Description</p>
<div onClick={onNext} class="submit-SzN" id="I165:13950;165:8544">Next Page</div>
<ArrowBackIosIcon onClick={onPrevious} class="group-49-v8r" id="I165:13950;165:8642"/>
<div class="search-bar-SN6" id="I165:13950;165:8539">
<div class="frame-17-YAE" id="I165:13950;165:8541">
<p class="address-GM8" id="I165:13950;165:8542">Address</p>
<p class="enter-here-N9G" id="I165:13950;165:8543">Enter Here</p>
</div>
</div>
<div class="search-bar-RtE" id="I165:13950;165:8646">
<div class="frame-17-Wen" id="I165:13950;165:8648">
<p class="city-rCr" id="I165:13950;165:8649">City</p>
<p class="enter-here-7uU" id="I165:13950;165:8650">Enter Here</p>
</div>
</div>
<div class="search-bar-wNi" id="I165:13950;165:8661">
<div class="frame-17-yqC" id="I165:13950;165:8663">
<p class="zip-code-iGz" id="I165:13950;165:8664">Zip Code</p>
<p class="enter-here-Chx" id="I165:13950;165:8665">Enter Here</p>
</div>
</div>
<div class="search-bar-UQa" id="I165:13950;165:8651">
<div class="frame-17-nAN" id="I165:13950;165:8653">
<p class="province-state-vXU" id="I165:13950;165:8654">Province / State</p>
<p class="enter-here-qeS" id="I165:13950;165:8655">Enter Here</p>
</div>
</div>
<div class="search-bar-Wka" id="I165:13950;165:8656">
<div class="frame-17-D9C" id="I165:13950;165:8658">
<p class="country-xMg" id="I165:13950;165:8659">Country</p>
<p class="enter-here-sjY" id="I165:13950;165:8660">Enter Here</p>
</div>
</div>
<div class="frame-22-M8v" id="I165:13950;165:8670">
<div class="price-UjL" id="I165:13950;165:8671">
<div class="frame-15-zhg" id="I165:13950;165:8671;141:4592">Close to Gym</div>
</div>
<div class="price-U74" id="I165:13950;165:8672">
<div class="frame-15-zr6" id="I165:13950;165:8672;141:4592">+</div>
</div>
</div>
</div>
);
};
export default Page2;