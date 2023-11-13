import React from 'react';
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
const Page4 = ({onPrevious,onSubmit}) =>{
    return(
<div class="create-a-property-MHt" id="165:9324">
<div class="rectangle-13-NCz" id="165:8767"></div>
<div class="line-8-3pv" id="165:8768"></div>
<p class="create-a-property-ZoG" id="165:8769">Create a Property</p>
<div class="frame-15-dYE" id="165:8770">
<p class="progress-bar-YQJ" id="165:8771">Progress Bar</p>
<p class="complete-fUv" id="165:8772">95% Complete</p>
</div>
<img class="group-17-o5L" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8773"/>
<div class="frame-19-JGz" id="165:8778">
<p class="preferred-contact-method-pm8" id="165:8779">Preferred Contact Method</p>
<p class="you-can-only-select-1-LzN" id="165:8780">You can only select 1.</p>
</div>
<div class="frame-19-Tp6" id="165:8782">
<p class="availability-calendar-optional-o7G" id="165:8783">Availability Calendar (Optional)</p>
<p class="choose-when-you-give-a-tour-66N" id="165:8784">Choose when you give a tour.</p>
</div>
<div onClick={onSubmit}class="submit-R8e" id="165:8785">Complete</div>
<ArrowBackIosIcon onClick={onPrevious} class="group-49-HRk" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8787"/>
<div class="frame-20-1sY" id="165:8253">
<div class="price-vjc" id="165:8254">
<div class="frame-15-3pE" id="I165:8254;141:4592">Email</div>
</div>
<div class="price-t4A" id="165:8255">
<div class="frame-15-cVx" id="I165:8255;141:4592">In-App</div>
</div>
<div class="price-tTU" id="165:8256">
<div class="frame-15-ceN" id="I165:8256;141:4592">Phone</div>
</div>
</div>
<div class="search-bar-5Xx" id="165:8811">
<p class="open-calendar-ApJ" id="165:8814">Open Calendar</p>
<EventIcon class="vector-gGr" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="165:8817"/>
</div>
</div>
    );
};
export default Page4;