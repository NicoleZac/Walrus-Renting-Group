import React,{useState} from 'react';
import "./Page3.css";
import {useSharedForm} from '../ListProperty';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress2 from '../../Images/ProgressBars/Progress2.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormData } from '../../Context/formdatacontext';
const Page3 = ({onNext,onPrevious}) =>{
    const {formData,dispatch} = useFormData();
    const [startDate,setStartDate] = useState(formData?.startDate);
    const [isDatePickerOpen,setIsDatePickerOpen] = useState(false);
    const [error,setError] = useState('');
    const handleTextInput = (inputName,value)=>{
        dispatch({type:'UPDATE_DATA',payload:{[inputName]:value}});
    }
    const handleDateChange=(date)=>{
        if(date && date <new Date()){
            setError('Select a Date after the current date')
        }
        else{
            setStartDate(date);
            dispatch({type:'UPDATE_DATA',payload:{startDate:date}});
            setIsDatePickerOpen(false);
            setError('');
        }
    };
    const openDatePicker=()=>{
        setIsDatePickerOpen(true);
    };
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
        {startDate &&(
        <p class="dd-mm-yyyy-FfY" id="I165:13951;165:8733">{startDate.toLocaleDateString()}</p>
        )}
        </div>

        <EventIcon onClick={openDatePicker} class="vector-k6W" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13951;165:8745"/>
        {error && <p style={{color:'red'}}>{error}</p>}
        {isDatePickerOpen &&(
            <DatePicker selected={startDate} onChange={handleDateChange} dateFormat="MMMM d,yyyy" isClearable placeholderText="Select a date"/>
        )}
        </div>
        <textarea placeholder="Lease Length&#10;ie: 1 year"  name="leaseLength" value={formData.leaseLength} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-ehg" id="I165:13951;165:8746">
        </textarea>
        <textarea placeholder="Monthly Rent&#10;$0.00" name="monthlyRent" value={formData.monthlyRent} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="price-J9x" id="I165:13951;165:8756">
        </textarea>
        <textarea placeholder="Security Deposit&#10;$0.00" name="securityDep" value={formData.securityDep} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="price-uJA" id="I165:13951;165:8761">
        </textarea>
        </div>
    );
};
export default Page3;