
import React, {useState,useContext} from 'react';
import {UserContext} from "../../Context/usercontext";
import {Link} from "react-router-dom";
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress3 from '../../Images/ProgressBars/Progress3.png';
import { useFormData } from '../../Context/formdatacontext';
import propertyList from '../propertyList.js';
import CreateCalendarModal from "../Special/CreateCalendar";

const Page4 = ({onPrevious,onSubmit,error}) =>{
    const {formData,dispatch} = useFormData();
    const [selectedMethod,setSelectedMethod] = useState(formData.formData.contactMethod);
    const {user} = useContext(UserContext);
    const [isModalOpen, setModalOpen] = useState(false);
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
    /* For view availability button */
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
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

<div class="frame-19-HhL" id="I165:13952;165:8782">
<p class="availability-calendar-optional-pSN" id="I165:13952;165:8783">Availability Calendar (Optional)</p>
<p class="choose-when-you-give-a-tour-Lfc" id="I165:13952;165:8784">Select your availability to give a tour of your property.</p>
</div>
<div onClick={onSubmit} class="submit-UWv" id="I165:13952;165:8785">Complete
</div>
<div class="error">
{error && <p style={{color:'red'}}>{error}</p>}
</div>
<ArrowBackIosIcon onClick={onPrevious} class="group-49-kUS" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13952;165:8787"/>
<div class="frame-20-HUN" id="I165:13952;165:8253">


</div>
<button onClick={openModal}>
<div class="search-bar-ZcE" id="I165:13952;165:8811">
<p class="open-calendar-rLS" id="I165:13952;165:8814">Open Calendar</p>
<EventIcon class="vector-Zke" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13952;165:8817"/>
</div>
</button>
<CreateCalendarModal isOpen={isModalOpen} closeModal={closeModal} />
</div>
    );
};
export default Page4;