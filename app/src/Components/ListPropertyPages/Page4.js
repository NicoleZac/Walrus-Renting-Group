
import React, {useState,useContext} from 'react';
import {UserContext} from "../../Context/usercontext";
import {Link} from "react-router-dom";
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress3 from '../../Images/ProgressBars/Progress3.png';
import { useFormData } from '../../Context/formdatacontext';
import propertyList from '../propertyList.js';
const Page4 = ({onPrevious,onSubmit,error}) =>{
    const {formData,dispatch} = useFormData();
    const [selectedMethod,setSelectedMethod] = useState(formData.formData.contactMethod);
    const {user} = useContext(UserContext);
    const userEmail = user?.email;
    const handleSelectMethod= (method) =>{
        const propertyIds = propertyList.map(property=>property.id);
        const maxPId = Math.max(...propertyIds);
 
         dispatch({type:'UPDATE_DATA',payload:{id:maxPId+1}});
        if(selectedMethod === method){
            setSelectedMethod(null);
            dispatch({type:'UPDATE_DATA',payload:{contactMethod:null}});
        }
        else{
            setSelectedMethod(method);
            dispatch({type:'UPDATE_DATA',payload:{contactMethod:method}});
            dispatch({type:'UPDATE_DATA',payload:{landlord:userEmail}});
        }
    };
    return(
<div class="create-a-property-9ES" id="165:13952">
    
<div class="rectangle-13-EFt" id="I165:13952;165:8767"></div>
<div class="line-8-MrJ" id="I165:13952;165:8768">
    
</div>
<p class="create-a-property-tbL" id="I165:13952;165:8769">Create a Property</p>
<div class="frame-15-aj4" id="I165:13952;165:8770">
<p class="progress-bar-v2E" id="I165:13952;165:8771">Progress Bar</p>
<p class="complete-YSv" id="I165:13952;165:8772">95% Complete</p>
</div>
<img class="group-17-qwp" src={Progress3} alt={Progress3} id="I165:13952;165:8773"/>
<div class="frame-19-NB4" id="I165:13952;165:8778">
<p class="preferred-contact-method-J4i" id="I165:13952;165:8779">Preferred Contact Method</p>
<p class="you-can-only-select-1-Cft" id="I165:13952;165:8780">You can only select 1.</p>
</div>
<div class="frame-19-HhL" id="I165:13952;165:8782">
<p class="availability-calendar-optional-pSN" id="I165:13952;165:8783">Availability Calendar (Optional)</p>
<p class="choose-when-you-give-a-tour-Lfc" id="I165:13952;165:8784">Choose when you give a tour.</p>
</div>
<div onClick={onSubmit} class="submit-UWv" id="I165:13952;165:8785">Complete
</div>
<div class="error">
{error && <p style={{color:'red'}}>{error}</p>}
</div>
<ArrowBackIosIcon onClick={onPrevious} class="group-49-kUS" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13952;165:8787"/>
<div class="frame-20-HUN" id="I165:13952;165:8253">
<div onClick={()=>handleSelectMethod('email')} style={{backgroundColor: selectedMethod ==='email' ? '#c9cba3':'#ffffff'}}class="price-CbL" id="I165:13952;165:8254">
<div class="frame-15-vXL" id="I165:13952;165:8254;141:4592">Email</div>
</div>
<div onClick={()=>handleSelectMethod('in-app')} style={{backgroundColor: selectedMethod ==='in-app' ? '#c9cba3':'#ffffff'}}class="price-xiv" id="I165:13952;165:8255">
<div class="frame-15-HWJ" id="I165:13952;165:8255;141:4592">In-App</div>
</div>
<div onClick={()=>handleSelectMethod('phone')} style={{backgroundColor: selectedMethod ==='phone' ? '#c9cba3':'#ffffff'}}class="price-Zyc" id="I165:13952;165:8256">
<div class="frame-15-u1t" id="I165:13952;165:8256;141:4592">Phone</div>
</div>
</div>
<div class="search-bar-ZcE" id="I165:13952;165:8811">
<p class="open-calendar-rLS" id="I165:13952;165:8814">Open Calendar</p>
<Link to={`/Calendar/${userEmail}`}>
<EventIcon class="vector-Zke" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13952;165:8817"/>
</Link>

</div>

</div>
    );
};
export default Page4;