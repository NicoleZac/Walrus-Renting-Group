import React from 'react';
import "./Page3.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress2 from '../../Images/ProgressBars/Progress2.png';
const Page3 = ({onNext,onPrevious}) =>{
    return(
        <div class="create-a-property-vkS" id="165:13951">
        <div class="rectangle-13-2Hg" id="I165:13951;165:8687"></div>
        <div class="line-8-kUa" id="I165:13951;165:8688"></div>
        <p class="create-a-property-HUW" id="I165:13951;165:8689">Create a Property</p>
        <div class="frame-15-PXY" id="I165:13951;165:8690">
        <p class="progress-bar-WcA" id="I165:13951;165:8691">Progress Bar</p>
        <p class="complete-2qQ" id="I165:13951;165:8692">70% Complete</p>
        </div>
        <img class="group-17-Y34" src={Progress2} alt={Progress2} id="I165:13951;165:8693"/>
        <div class="frame-19-Tvi" id="I165:13951;165:8698">
        <p class="availability-zQr" id="I165:13951;165:8699">Availability</p>
        <p class="now-or-never-7Ea" id="I165:13951;165:8700">Now or Never</p>
        </div>
        <div class="frame-19-cSE" id="I165:13951;165:8753">
        <p class="cost-7dt" id="I165:13951;165:8754">Cost</p>
        <p class="approximate-2F4" id="I165:13951;165:8755">Approximate</p>
        </div>
        <div onClick={onNext} class="submit-jQN" id="I165:13951;165:8704">Next Page</div>
        <ArrowBackIosIcon onClick={onPrevious} class="group-49-ndY" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13951;165:8706"/>
        <div class="search-bar-uiA" id="I165:13951;165:8729">
        <div class="frame-17-bqt" id="I165:13951;165:8731">
        <p class="earlest-start-darte-Ym8" id="I165:13951;165:8732">Earlest Start Date</p>
        <p class="dd-mm-yyyy-FfY" id="I165:13951;165:8733">dd-mm-yyyy</p>
        </div>

        <EventIcon class="vector-k6W" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13951;165:8745"/>
        </div>
        <div class="search-bar-ehg" id="I165:13951;165:8746">
        <div class="frame-17-xiN" id="I165:13951;165:8748">
        <p class="lease-length-WE6" id="I165:13951;165:8749">Lease Length</p>
        <p class="ie-1-year-d3p" id="I165:13951;165:8750">ie: 1 year</p>
        </div>
        </div>
        <div class="price-J9x" id="I165:13951;165:8756">
        <div class="frame-15-ber" id="I165:13951;165:8756;141:4592">
        <p class="min-price-wii" id="I165:13951;165:8756;141:4593">Monthly Rent</p>
        <p class="item-000-f8v" id="I165:13951;165:8756;141:4594">$0.00</p>
        </div>
        </div>
        <div class="price-uJA" id="I165:13951;165:8761">
        <div class="frame-15-Qki" id="I165:13951;165:8761;141:4592">
        <p class="min-price-AE6" id="I165:13951;165:8761;141:4593">Security Deposit</p>
        <p class="item-000-gCS" id="I165:13951;165:8761;141:4594">$0.00</p>
        </div>
        </div>
        </div>
    );
};
export default Page3;