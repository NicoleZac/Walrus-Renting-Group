import React,{useState,useEffect,useRef} from 'react';
import "./Page1.css";
import ClearIcon from '@mui/icons-material/Clear';
import ImageIcon from '@mui/icons-material/Image';
import Progress0 from '../../Images/ProgressBars/Progress0.png';
import { useFormData } from '../../Context/formdatacontext';
import {useLocation} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Page1 = ({onNext,requestClose}) =>{
    const location = useLocation();
    const errorRef = useRef(null);
    const {formData,dispatch} = useFormData();
    const [selectedType,setSelectedType] = useState(formData.formData.propertyType);
    const [selectedBeds,setSelectedBeds] = useState(formData.formData.numBeds);
    const [selectedBaths,setSelectedBaths] = useState(formData.formData.numBaths);
    const [selectedFilters,setSelectedFilters] = useState(formData.formData.additionalFilters || []);
    const [images,setImages] = useState(formData.formData.images || []);
    const [viewImages,setViewImages] = useState(images.length !== 0);
    const [previewImages,setPreviewImages]=useState([]);
    const [errorTitle,setErrorTitle] = useState(false);
    const [showDraftList,setShowDraftList] = useState(false);
    useEffect(()=>{
        setSelectedType(formData.formData.propertyType);
        setSelectedBeds(formData.formData.numBeds);
        setSelectedBaths(formData.formData.numBaths);
        setImages(formData.formData.images);
    },[formData])
    useEffect(()=>{
        const loadImage = async(imagePath)=>{
            const imageModule = await import(`../../Images/Properties/${imagePath}`);
            setPreviewImages((prevImages)=>{
                const isAdded = prevImages.some((img)=>img.name ===imagePath);
                if(!isAdded){
                    return [...prevImages,{name:imagePath,src:imageModule.default}];
                }
                return prevImages;
            });
        };
        images.forEach((image)=>{
            loadImage(image);
        })
        
    },[images,setPreviewImages]);
    
    const handleTextInput = (inputName,value)=>{
        if(inputName === "title"){
            setErrorTitle(false);
        }
        dispatch({type:'UPDATE_DATA',payload:{[inputName]:value}});
    }
    const handleSelectType = (type) =>{
        if(selectedType === type){
            setSelectedType(null);
            dispatch({type:'UPDATE_DATA',payload:{propertyType:null}});
        }
        else{
            setSelectedType(type);
            dispatch({type:'UPDATE_DATA',payload:{propertyType:type}});
        }
    };
    const handleSelectBeds = (num) =>{
        if(selectedBeds === num){
            setSelectedBeds(null);
            dispatch({type:'UPDATE_DATA',payload:{numBed:''}});
        }
        else{
            setSelectedBeds(num);
            dispatch({type:'UPDATE_DATA',payload:{numBeds:num}});
        }
    };
    const handleSelectBaths = (num) =>{
        if(selectedBaths === num){
            setSelectedBaths(null);
            dispatch({type:'UPDATE_DATA',payload:{numBaths:num}});
        }
        else{
            setSelectedBaths(num);
            dispatch({type:'UPDATE_DATA',payload:{numBaths:num}});
        }
    };
    const handleFilters = (filter) => {
        setSelectedFilters((prevFilter) => {
          const isFilter = prevFilter.includes(filter);
      
          if (isFilter) {
            return prevFilter.filter((selected) => selected !== filter);
          } else {
            return [...prevFilter, filter];
          }
        });
        dispatch({ type: 'UPDATE_DATA', payload: { additionalFilters: [...selectedFilters, filter] } });
      };
    const handleImages = (e) =>{
        const files = e.target.files;
        
        const fileNames = Array.from(files).map((file)=>file.name);
        setImages((prevImage)=>[...prevImage,...fileNames]);

        Array.from(files).forEach((file)=>{
                setImages([...images,...fileNames]);
        });
        dispatch({ type: 'UPDATE_DATA', payload: { images: [...images, ...fileNames] } });
    }
    const handleUpload = () =>{
       const fileInput = document.getElementById('imageFile');
       fileInput.value=null;
       fileInput.click();
    };
    const handleImageDelete = (imageFile) => {
        setImages((prevImages) => {
          const updatedImages = prevImages.filter((image) => image !== imageFile);
          setPreviewImages((prevImages)=>prevImages.filter((image)=>image.name !== imageFile));
          if (updatedImages.length === 0) {
            setViewImages(false);
          }

         setImages(images.filter((image)=>image !== imageFile));

          dispatch({ type: 'UPDATE_DATA', payload: { images: updatedImages } });
          return updatedImages;
        });
      };
    useEffect(()=>{
        setViewImages(false);
        setShowDraftList(false);
    },[location.pathname]);
    const handleViewImages = ()=>{
        setViewImages(true);
    };
    const handleImageClose = ()=>{
        setViewImages(false);
    };
    const handleSaveForm=()=>{
        setErrorTitle(false);
        dispatch({type:'SAVE_FORM'});
        if(formData.duplicateTitleError!==''){
            setErrorTitle(true);
        }
        if(formData.duplicateTitleError=== null){
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
    useEffect(()=>{
        if(errorTitle){
            errorRef.current.scrollIntoView({behavior:'smooth'});
        }
      },[errorTitle]);
      const handleEditForm =(index)=>{
        dispatch({type:'PULL_SAVED_FORM',payload:index});
        setShowDraftList(false);
      }
      const handleRemoveForm = (index) =>{
        dispatch({type:'REMOVE_SAVED_FORM',payload:index});
      };
    return(

        <div class="create-a-property-2ne" >
        <div class="rectangle-13-cXt" ></div>
        <div class="line-8-fFG" ></div>
        <ClearIcon onClick={requestClose} class="frame-17-m3Q" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." />
        <p class="create-a-property-Ehg" >Create a Property</p>
        <div class="frame-15-dzi" >
        <p class="progress-bar-JLA" >Progress Bar</p>
        <p class="complete-ZWz" >0% Complete</p>
        </div>
        <img class="group-17-qzJ" src={Progress0} alt={Progress0} />

        <div class="title-bar">
        <p class="title-label">
            Title
        </p>
        <input placeholder="Enter Here" class="title-input"type="text" name="title" value={formData.formData.title} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}/>
        </div>
        <div class="group-51-kbU" >
        <div class="frame-19-GZp" >
        <p class="type-of-home-CTU" >Type of Home</p>
        <p class="select-as-many-you-want-gtS">Select one!</p>
        </div>
        <div class="frame-20-aiv" >
        <div class="auto-group-xevv-umC">
        <div onClick={()=>handleSelectType('Room')} style={{backgroundColor: selectedType ==='Room' ? '#c9cba3':'#ffffff'}}class="price-EoU" >
        <div class="frame-15-gSW">Room</div>
        </div>
        <div onClick={()=>handleSelectType('House')} style={{backgroundColor: selectedType ==='House' ? '#c9cba3':'#ffffff'}}class="price-WAe" >
        <div class="frame-15-dWA" >House</div>
        </div>
        </div>
        <div class="auto-group-m8ww-hF8" >
        <div onClick={()=>handleSelectType('Apartment')} style={{backgroundColor: selectedType ==='Apartment' ? '#c9cba3':'#ffffff'}}class="price-EVx" >
        <div class="frame-15-wQN" >Apartment</div>
        </div>
        <div onClick={()=>handleSelectType('Basement')} style={{backgroundColor: selectedType ==='Basement' ? '#c9cba3':'#ffffff'}}class="price-ZAr">
        <div class="frame-15-3ri">Basement</div>
        </div>
        </div>
        <div onClick={()=>handleSelectType('Duplex')} style={{backgroundColor: selectedType ==='Duplex' ? '#c9cba3':'#ffffff'}}class="price-K3Y" >
        <div class="frame-15-Pp6" >Duplex</div>
        </div>
        </div>
        </div>
        <div class="frame-19-DYE">
        <p class="key-features-5KY">Key Features</p>
        <p class="what-makes-your-property-special-ZEi">What makes your property special?</p>
        </div>
        <textarea type="text" placeholder="Description (Max 600 characters)" name="description" value={formData.formData.description} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-eGA">

        </textarea>
        <div onClick={handleUpload} class="search-bar-3LE">
        <input id="imageFile" type="file" onChange={handleImages} style={{display:'none'}} multiple/>
        <p class="upload-photos-t5x" >Upload Photos</p>
        <ImageIcon class="group-52-MVL" />
        
        </div>
        {images.length > 0 && (
            <div>
               <div onClick={handleViewImages} class="uploads">
                <p class="view-photos">View Photos</p>
               </div>
                </div>
        )}
        <Modal
        isOpen={viewImages}
        onRequestClose={handleImageClose}
        style={{
            overlay: {
             zIndex: 3,
            },
        }}
        >
        <ClearIcon onClick={handleImageClose} class="modal-icon"></ClearIcon>
        <ul class="modal-list">
        {previewImages.map((image,index)=>(
            <li class="modal-image"key={index}>
            <p>{image.name} </p>
            <img src={image.src} alt={image.src} style={{maxWidth:'100%',maxHeight:'150px',height:'auto'}}/>
            <button onClick={()=>handleImageDelete(image.name)}class="modal-button">
                Delete
            </button>
            </li>
        ))}
        </ul>
        </Modal>
        <div class="group-53-1Zt" >
        <p class="of-beds-hxW" ># of Beds</p>
        <div class="frame-53-CeN" >
        <div class="auto-group-2g4a-8Y2" >
        <div onClick={()=>handleSelectBeds('1')} style={{backgroundColor: selectedBeds ==='1' ? '#c9cba3':'#ffffff'}}class="price-TaJ" >
        <div class="frame-15-NSN">1</div>
        </div>
        <div onClick={()=>handleSelectBeds('6')} style={{backgroundColor: selectedBeds ==='6' ? '#c9cba3':'#ffffff'}}class="price-DSz">
        <div class="frame-15-JUS" >6</div>
        </div>
        </div>
        <div class="auto-group-kkpi-8iN">
        <div onClick={()=>handleSelectBeds('2')} style={{backgroundColor: selectedBeds ==='2' ? '#c9cba3':'#ffffff'}}class="price-ewc" >
        <div class="frame-15-n2E">2</div>
        </div>
        <div onClick={()=>handleSelectBeds('7')} style={{backgroundColor: selectedBeds ==='7' ? '#c9cba3':'#ffffff'}}class="price-d2r" >
        <div class="frame-15-ktA" >7</div>
        </div>
        </div>
        <div class="auto-group-ofwa-Zqc">
        <div onClick={()=>handleSelectBeds('3')} style={{backgroundColor: selectedBeds ==='3' ? '#c9cba3':'#ffffff'}}class="price-6qY" >
        <div class="frame-15-1Si" >3</div>
        </div>
        <div onClick={()=>handleSelectBeds('8+')} style={{backgroundColor: selectedBeds ==='8+' ? '#c9cba3':'#ffffff'}}class="price-ry8" >
        <div class="frame-15-C1Q">8+</div>
        </div>
        </div>
        <div class="auto-group-yxyt-FkN" >
        <div onClick={()=>handleSelectBeds('4')} style={{backgroundColor: selectedBeds ==='4' ? '#c9cba3':'#ffffff'}}class="price-AcS" >
        <div class="frame-15-qCn" >4</div>
        </div>
        <div onClick={()=>handleSelectBeds('5')} style={{backgroundColor: selectedBeds ==='5' ? '#c9cba3':'#ffffff'}}class="price-s9U" >
        <div class="frame-15-yCW" >5</div>
        </div>
        </div>
        </div>
        </div>
        <div class="group-54-19C" >
        <p class="of-baths-Je6" ># of Baths</p>
        <div class="frame-53-xCr">
        <div class="auto-group-kr2w-5HU" >
        <div onClick={()=>handleSelectBaths('1')} style={{backgroundColor: selectedBaths ==='1' ? '#c9cba3':'#ffffff'}}class="price-oUN" >
        <div class="frame-15-5wg" >1</div>
        </div>
        <div onClick={()=>handleSelectBaths('6')} style={{backgroundColor: selectedBaths ==='6' ? '#c9cba3':'#ffffff'}}class="price-vBc" >
        <div class="frame-15-Sfk">6</div>
        </div>
        </div>
        <div class="auto-group-bltu-mjx">
        <div onClick={()=>handleSelectBaths('2')} style={{backgroundColor: selectedBaths ==='2' ? '#c9cba3':'#ffffff'}}class="price-Tsg" >
        <div class="frame-15-XsY" >2</div>
        </div>
        <div onClick={()=>handleSelectBaths('7')} style={{backgroundColor: selectedBaths ==='7' ? '#c9cba3':'#ffffff'}}class="price-dJJ" >
        <div class="frame-15-JfL" >7</div>
        </div>
        </div>
        <div class="auto-group-oedg-HGN">
        <div onClick={()=>handleSelectBaths('3')} style={{backgroundColor: selectedBaths ==='3' ? '#c9cba3':'#ffffff'}}class="price-ZUn" >
        <div class="frame-15-QVQ" >3</div>
        </div>
        <div onClick={()=>handleSelectBaths('8+')} style={{backgroundColor: selectedBaths ==='8+' ? '#c9cba3':'#ffffff'}} class="price-bZt" >
        <div class="frame-15-L1g" >8+</div>
        </div>
        </div>
        <div class="auto-group-f88s-n8a" >
        <div onClick={()=>handleSelectBaths('4')} style={{backgroundColor: selectedBaths ==='4' ? '#c9cba3':'#ffffff'}}class="price-iY2" >
        <div class="frame-15-qMk" >4</div>
        </div>
        <div onClick={()=>handleSelectBaths('5')} style={{backgroundColor: selectedBaths ==='5' ? '#c9cba3':'#ffffff'}}class="price-5Wz" >
        <div class="frame-15-QJN" >5</div>
        </div>
        </div>
        </div>
        </div>
    
        <div class="frame-19-rRG">
        <p class="additional-filters-n42">Additional Filters</p>
       
        <p class="utilities-more-HmU" >Utilities &amp; More!</p>
        </div>
        <div class="frame-21-b1U" >
        <div onClick={()=>handleFilters('Utilities')} style={{backgroundColor: selectedFilters.includes('Utilities') ? '#c9cba3':'#ffffff'}}class="price-6iv">
        <div class="frame-15-DoY" >Utilities</div>
        </div>
        <div onClick={()=>handleFilters('Pets Allowed')} style={{backgroundColor: selectedFilters.includes('Pets Allowed') ? '#c9cba3':'#ffffff'}}class="price-VWA" >
        <div class="frame-15-Qt2" >Pets Allowed</div>
        </div>
        <div onClick={()=>handleFilters('Smoking Allowed')} style={{backgroundColor: selectedFilters.includes('Smoking Allowed') ? '#c9cba3':'#ffffff'}}class="price-Ust">
        <div class="frame-15-1cv" >Smoking Allowed</div>
        </div>
        </div>
        <p class="sqft-label">Square Footage (e.g 500)</p>
        <textarea   name="propertySize" value={formData.formData.propertySize} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-HqL" >
 
        </textarea>
        <div onClick={onNext} class="submit-hXg" >Next Page</div>
        <div  onClick={handleSaveForm} class="save-form-p1" >Save Draft</div>
        
        {formData.savedForms.length>0&& <div  onClick={handleViewDrafts} class="edit-form-p1" >View Drafts</div>}
        
        {errorTitle && <p ref={errorRef} class="error-p1">{formData.duplicateTitleError}</p>}
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

);
    };
export default Page1;