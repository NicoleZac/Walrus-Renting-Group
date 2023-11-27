import React,{useState,useEffect} from 'react';
import "./Page2.css";
import Progress1 from '../../Images/ProgressBars/Progress1.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Modal  from 'react-modal';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormData } from '../../Context/formdatacontext';
import {useLocation} from 'react-router-dom';

Modal.setAppElement('#root');

const Page2 = ({onNext,onPrevious}) =>{
    const location = useLocation();
    const {formData,dispatch} = useFormData();
    const [tags,setTags] = useState(formData.formData.tags || []);
    const [newTag,setNewTag] = useState('');
    const[isModalOpen,setIsModalOpen] = useState(false);
    const[error,setError] = useState('');
    const handleTextInput = (inputName,value)=>{
        dispatch({type:'UPDATE_DATA',payload:{[inputName]:value}});
    }
    const handleTagChange = (e)=>{
        setNewTag(e.target.value);
    };
    const handleAddTag=()=>{
        if(newTag.trim()!=='' && !tags.includes(newTag.trim())){
            setTags([...tags,newTag.trim()]);
            dispatch({ type: 'UPDATE_DATA', payload: { tags: [...tags, newTag.trim()] } });
            setNewTag('');
            setError('');
        }
        else{
            setError('Tag must not be empty and not a duplicate');
        }
    };
    const handleRemoveTag = (index) => {
        setTags((prevTags) => {
          const updatedTags = [...prevTags];
          updatedTags.splice(index, 1);

          dispatch({ type: 'UPDATE_DATA', payload: { tags: updatedTags } });
      
          return updatedTags;
        });
      };
      useEffect(()=>{
        setIsModalOpen(false);

    },[location.pathname]);
    const openModal=()=>{
        setIsModalOpen(true);
    };
    const closeModal=()=>{
        setIsModalOpen(false);
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
<p class="neighborhood-description-xZQ" id="I165:13950;165:8668">Neighborhood Description</p>
<div onClick={onNext} class="submit-SzN" id="I165:13950;165:8544">Next Page</div>
<ArrowBackIosIcon onClick={onPrevious} class="group-49-v8r" id="I165:13950;165:8642"/>
<textarea placeholder="Address&#10;Enter Here" name="address" value={formData.formData.address} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-SN6" id="I165:13950;165:8539">
</textarea>
<textarea placeholder="City&#10;Enter Here" name="city" value={formData.formData.city} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-RtE" id="I165:13950;165:8646">
</textarea>
<textarea placeholder="Zip Code&#10;Enter Here" name="zip" value={formData.formData.zip} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-wNi" id="I165:13950;165:8661">
</textarea>
<textarea placeholder="Province / State&#10;Enter Here" name="province" value={formData.formData.province}onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-UQa" id="I165:13950;165:8651">
</textarea>
<textarea placeholder="Country&#10;Enter Here"name="country" value={formData.formData.country} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-Wka" id="I165:13950;165:8656">
</textarea>
<div class="frame-22-M8v" id="I165:13950;165:8670">

    <div onClick ={openModal} class="price-U74" id="I165:13950;165:8672">
<div class="frame-15-zr6" id="I165:13950;165:8672;141:4592">+</div>
</div>

    <Modal
    isOpen = {isModalOpen}
    onRequestClose={closeModal}
    style={{
        overlay: {
         zIndex: 998,
        },
    }}
    >
         <ClearIcon onClick={closeModal} class="modal-icon"></ClearIcon>

            <input type="text" value={newTag} onChange={handleTagChange} placeholder="Enter Tag" class="adding-input">
            </input>
            <button class= "adding-tag"onClick={handleAddTag} >
             Add
            </button>
            {error && <p style={{color:'red'}}>{error}</p>}

       
        <ul class="tag-container">
            {tags.map((tag,index)=>(
                <>
                <div class="price-UjL" id="I165:13950;165:8671" key={index}>
                <div class="frame-15-zhg" id="I165:13950;165:8671;141:4592">{tag}</div>
                </div>
                    <button class="remove-tag" onClick={()=>handleRemoveTag(index)}>
                        Remove
                    </button>
                    </>
            ))}
        </ul>
    </Modal>

</div>
</div>
);
};
export default Page2;