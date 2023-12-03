
import React, {useState,useContext,useRef,useEffect} from 'react';
import {UserContext} from "../../Context/usercontext";
import {Link} from "react-router-dom";
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress3 from '../../Images/ProgressBars/Progress3.png';
import { useFormData } from '../../Context/formdatacontext';
import propertyList from '../propertyList.js';
import ClearIcon from '@mui/icons-material/Clear';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
const Page4 = ({onPrevious,onSubmit,error}) =>{
    const errorRef = useRef(null);
    const {formData,dispatch} = useFormData();
    const [selectedMethod,setSelectedMethod] = useState(formData.formData.contactMethod);
    const {user} = useContext(UserContext);
    const [showDraftList,setShowDraftList] = useState(false);
    const [errorTitle,setErrorTitle] = useState(false);
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
    useEffect(()=>{
        if(errorTitle){
            errorRef.current.scrollIntoView({behavior:'smooth'});
        }
      },[errorTitle]);
    const handleSaveForm=()=>{
        setErrorTitle(false);
        dispatch({type:'SAVE_FORM'});
        if(formData.duplicateTitleError!==''){
            setErrorTitle(true);
        }
        if(formData.duplicateTitleError=== null ){
            toast.success('Draft has been saved',{
                position: 'bottom-center',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable:true,
                bodyClassName: 'center-content',
                
            });
        }
        
    };
    const handleViewDrafts =()=>{
        setShowDraftList(true);
    };
    const handleDraftClose =()=>{
        setShowDraftList(false);
    }
      const handleEditForm =(index)=>{
        dispatch({type:'PULL_SAVED_FORM',payload:index});
        setShowDraftList(false);
      }
      const handleRemoveForm = (index) =>{
        dispatch({type:'REMOVE_SAVED_FORM',payload:index});
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
<div  onClick={handleSaveForm} class="save-form-p4" id="I165:13949;165:8469">Save Draft</div>
        
        {formData.savedForms.length>0&& <div  onClick={handleViewDrafts} class="edit-form-p4" id="I165:13949;165:8469">View Drafts</div>}
        
        <div class="error">
{error && <p style={{color:'red'}}>{error}</p>}
{errorTitle && <p style={{color:'red'}} ref={errorRef} >{formData.duplicateTitleError}</p>}
</div>
        <Modal
        isOpen={showDraftList}
        onRequestClose={handleDraftClose}
        style={{
            overlay: {
             zIndex: 3,
            },
        }}
        >
        <ClearIcon onClick={handleDraftClose} class="modal-icon"></ClearIcon>
        <h2> Saved Drafts </h2>
        <ul>
            {formData.savedForms.map((form,index)=>(
                <li key={index}>
                    Draft {index+1}: 
                    <button class="draft-button" onClick={()=>handleEditForm(index)}> Edit Draft</button>
                    <button class="draft-button" onClick={()=>handleRemoveForm(index)}> Delete Draft</button>
                </li>
            ))}
            </ul>
        </Modal>
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
<Link to={`/Calendar/${userEmail}`}>
<div class="search-bar-ZcE" id="I165:13952;165:8811">
<p class="open-calendar-rLS" id="I165:13952;165:8814">Open Calendar</p>
<EventIcon class="vector-Zke" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13952;165:8817"/>
</div>
</Link>
</div>
    );
};
export default Page4;