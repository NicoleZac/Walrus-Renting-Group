
import React, {useState,useContext,useRef,useEffect} from 'react';
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventIcon from '@mui/icons-material/Event';
import Progress3 from '../../Images/ProgressBars/Progress3.png';
import { useFormData } from '../../Context/formdatacontext';
import CreateCalendarModal from "../Special/CreateCalendar";
import ClearIcon from '@mui/icons-material/Clear';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const Page4 = ({onPrevious,onSubmit,error}) =>{
    const errorRef = useRef(null);
    const {formData,dispatch} = useFormData();
    const [isModalOpen, setModalOpen] = useState(false);
    const [showDraftList,setShowDraftList] = useState(false);
    const [errorTitle,setErrorTitle] = useState(false);
  
    /* For view availability button */
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(()=>{
        if(errorTitle){
            errorRef.current.scrollIntoView({behavior:'smooth'});
        }
      },[errorTitle]);
      const handleSaveForm=()=>{
        if(formData.formData.title === ''){
            formData.duplicateTitleError ='Must have a title for a saved form';
            setErrorTitle(true);
        }
        else{
        dispatch({type:'SAVE_FORM'});
        if(formData.duplicateTitleError=== null){
            setErrorTitle(false);
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

<div class="frame-19-HhL" id="I165:13952;165:8782">
<p class="availability-calendar-optional-pSN" id="I165:13952;165:8783">Availability Calendar (Optional)</p>
<p class="choose-when-you-give-a-tour-Lfc" id="I165:13952;165:8784">Select your availability to give a tour of your property.</p>
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