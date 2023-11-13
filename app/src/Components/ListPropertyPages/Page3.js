import React from 'react';
import "./Page3.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
const Page3 = ({onNext,onPrevious}) =>{
    return(
        <div class="create-a-property-Frr" id="165:9323">
        <div class="line-8-3ni" id="165:8688"></div>
        <div class="auto-group-61gw-VHL" id="N4FqY62qiUg7ZhxvAC61GW">
        <ArrowBackIosIcon onClick={onPrevious} class="group-49-b5U" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8706"/>
        <p class="create-a-property-taN" id="165:8689">Create a Property</p>
        </div>
        <div class="frame-15-BpN" id="165:8690">
        <p class="progress-bar-ukN" id="165:8691">Progress Bar</p>
        <p class="complete-eT4" id="165:8692">70% Complete</p>
        </div>
        <img class="group-17-yES" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8693"/>
        <div class="frame-19-u86" id="165:8698">
        <p class="availability-2iW" id="165:8699">Availability</p>
        <p class="now-or-never-jcv" id="165:8700">Now or Never</p>
        </div>
        <div class="frame-19-GMx" id="165:8753">
        <p class="cost-n5Q" id="165:8754">Cost</p>
        <p class="approximate-uQv" id="165:8755">Approximate</p>
        </div>
        <div onClick={onNext} class="submit-Sfk" id="165:8704">Next Page</div>
        <div class="search-bar-ga6" id="165:8729">
        <div class="frame-17-mrS" id="165:8731">
        <p class="earlest-start-darte-hk6" id="165:8732">Earlest Start Darte</p>
        <p class="dd-mm-yyyy-EV8" id="165:8733">dd-mm-yyyy</p>
        </div>
        <EventIcon class="vector-Ata" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8745"/>
        </div>
        <div class="search-bar-5Vk" id="165:8746">
        <div class="frame-17-BYn" id="165:8748">
        <p class="lease-length-iHp" id="165:8749">Lease Length</p>
        <p class="ie-1-year-EX4" id="165:8750">ie: 1 year</p>
        </div>
        </div>
        <div class="auto-group-oxvk-XFG" id="N4FqfVz9yKRsNT6TKcoXVk">
        <div class="price-RbY" id="165:8756">
        <div class="frame-15-7zA" id="I165:8756;141:4592">
        <p class="min-price-sCe" id="I165:8756;141:4593">Monthly Rent</p>
        <p class="item-000-MtW" id="I165:8756;141:4594">$0.00</p>
        </div>
        </div>
        <div class="price-DQv" id="165:8761">
        <div class="frame-15-ju4" id="I165:8761;141:4592">
        <p class="min-price-haz" id="I165:8761;141:4593">Security Deposit</p>
        <p class="item-000-bRU" id="I165:8761;141:4594">$0.00</p>
        </div>
        </div>
        </div>
        </div>
    );
};
export default Page3;