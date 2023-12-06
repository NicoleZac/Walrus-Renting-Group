import React,{useState,useEffect,useRef} from 'react';
import "./Page2.css";
import Progress1 from '../../Images/ProgressBars/Progress1.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useFormData } from '../../Context/formdatacontext';
import ClearIcon from '@mui/icons-material/Clear';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const Page2 = ({onNext,onPrevious}) =>{
    const [tagColor,setTagColor] =useState('#c2c2c2');
    const errorRef = useRef(null);
    const {formData,dispatch} = useFormData();
    const [tags,setTags] = useState(formData.formData.tags || []);
    const [newTag,setNewTag] = useState('');
    const[error,setError] = useState('');
    const [showDraftList,setShowDraftList] = useState(false);
    useEffect(()=>{
        setTags(formData.formData.tags);
    },[formData])
    const handleTextInput = (inputName,value)=>{

        dispatch({type:'UPDATE_DATA',payload:{[inputName]:value}});
    }
    const handleTagChange = (e)=>{
        setNewTag(e.target.value);
    };
    const handleAddTag=()=>{
        setTagColor('#c2c2c2');
        if(newTag.trim()!=='' && !tags.includes(newTag.trim())){
            setTags([...tags,newTag.trim()]);
            dispatch({ type: 'UPDATE_DATA', payload: { tags: [...tags, newTag.trim()] } });
            setNewTag('');
            setError('');
        }
        else{
            setTagColor('red');
            setError('Tag must not be empty and not a duplicate');
        }
    };
    const handleRemoveTag = (index) => {
        setTagColor('#c2c2c2');
        setTags((prevTags) => {
          const updatedTags = [...prevTags];
          updatedTags.splice(index, 1);

          dispatch({ type: 'UPDATE_DATA', payload: { tags: updatedTags } });
      
          return updatedTags;
        });
      };
      useEffect(()=>{
        if(error !== ''){
            errorRef.current.scrollIntoView({behavior:'smooth'});
        }
      },[error]);
    const handleSaveForm=()=>{
        if(formData.formData.title === ''){
            formData.duplicateTitleError ='Must have a title for a saved form';
            setError('Must have a title for a saved form');
        }
        else{
        dispatch({type:'SAVE_FORM'});
        if(formData.duplicateTitleError=== null){
            setError('');
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
<p class="neighborhood-description-xZQ" id="I165:13950;165:8668">Tags</p>

<ArrowBackIosIcon onClick={onPrevious} class="group-49-v8r" id="I165:13950;165:8642"/>
<span class="address-label">Address</span>
<textarea placeholder="Enter Here" name="address" value={formData.formData.address} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-SN6" id="I165:13950;165:8539">
</textarea>
<span class="address-label">City</span>
<textarea placeholder="Enter Here" name="province" value={formData.formData.province} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-RtE" id="I165:13950;165:8646">
</textarea>
<span class="address-label">Zip Code</span>
<textarea placeholder="Enter Here" name="country" value={formData.formData.country} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-wNi" id="I165:13950;165:8661">
</textarea>
<span class="address-label">Province / State</span>
<textarea placeholder="Enter Here" name="zip" value={formData.formData.zip}onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-UQa" id="I165:13950;165:8651">
</textarea>
<span class="address-label">Neighbourhood</span>
<textarea placeholder="Enter Here"name="city" value={formData.formData.city} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-Wka" id="I165:13950;165:8656">
</textarea>
<span class="country-label">Country</span>
<textarea placeholder="Enter Here"name="neighbourhood" value={formData.formData.neighbourhood} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="neighbourhood-bar" >
</textarea>
<div class="frame-22-M8v" id="I165:13950;165:8670">

            <input style={{borderColor: tagColor}}type="text" value={newTag} onChange={handleTagChange} placeholder="Enter Tag" class="adding-input">
            </input>
            <button class= "adding-tag"onClick={handleAddTag} >
             Add
            </button>
            

    

</div>
<div class="tag-div" >
       
            {tags.map((tag,index)=>(
                <ul key={index}class="tag-container">
                <div class="remove-input" key={index}>{tag}
                </div>
                    <button class="remove-tag" onClick={()=>handleRemoveTag(index)}>
                        Remove
                    </button>
                    </ul>
            ))}
            <div onClick={onNext} class="submit-SzN" id="I165:13950;165:8544">Next Page</div>
<div  onClick={handleSaveForm} class="save-form-p2" id="I165:13949;165:8469">Save Draft</div>
        
        {formData.savedForms.length>0&& <div  onClick={handleViewDrafts} class="edit-form-p2" id="I165:13949;165:8469">View Drafts</div>}
        
        {error && <p ref={errorRef} class="error-p2" style={{color:'red'}}>{error}</p>}
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
</div>
</div>
);
};
export default Page2;