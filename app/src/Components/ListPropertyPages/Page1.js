import React,{useState,useEffect} from 'react';
import "./Page1.css";
import ClearIcon from '@mui/icons-material/Clear';
import ImageIcon from '@mui/icons-material/Image';
import Progress0 from '../../Images/ProgressBars/Progress0.png';
import { useFormData } from '../../Context/formdatacontext';
import {useLocation} from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Page1 = ({onNext,requestClose}) =>{
    const location = useLocation();
    const {formData,dispatch} = useFormData();
    const [selectedType,setSelectedType] = useState(formData.formData.propertyType);
    const [selectedBeds,setSelectedBeds] = useState(formData.formData.numBeds);
    const [selectedBaths,setSelectedBaths] = useState(formData.formData.numBaths);
    const [selectedFilters,setSelectedFilters] = useState(formData.formData.additionalFilters || []);
    const [images,setImages] = useState(formData.formData.images || []);
    const [viewImages,setViewImages] = useState(images.length !== 0);
    const [previewImages,setPreviewImages]=useState([]);
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

    },[location.pathname]);
    const handleViewImages = ()=>{
        setViewImages(true);
    };
    const handleImageClose = ()=>{
        setViewImages(false);
    };

    return(

        <div class="create-a-property-2ne" id="165:13949">
        <div class="rectangle-13-cXt" id="I165:13949;165:8209"></div>
        <div class="line-8-fFG" id="I165:13949;165:8210"></div>
        <ClearIcon onClick={requestClose} class="frame-17-m3Q" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13949;165:8211"/>
        <p class="create-a-property-Ehg" id="I165:13949;165:8213">Create a Property</p>
        <div class="frame-15-dzi" id="I165:13949;165:8214">
        <p class="progress-bar-JLA" id="I165:13949;165:8215">Progress Bar</p>
        <p class="complete-ZWz" id="I165:13949;165:8216">0% Complete</p>
        </div>
        <img class="group-17-qzJ" src={Progress0} alt={Progress0} id="I165:13949;165:8223"/>
        <div class="group-51-kbU" id="I165:13949;165:8331">
        <div class="frame-19-GZp" id="I165:13949;165:8302">
        <p class="type-of-home-CTU" id="I165:13949;165:8303">Type of Home</p>
        <p class="select-as-many-you-want-gtS" id="I165:13949;165:8304">Select as many you want!</p>
        </div>
        <div class="frame-20-aiv" id="I165:13949;165:8305">
        <div class="auto-group-xevv-umC" id="N4HMgtUxtZDWE54AJ5XEvv">
        <div onClick={()=>handleSelectType('room')} style={{backgroundColor: selectedType ==='room' ? '#c9cba3':'#ffffff'}}class="price-EoU" id="I165:13949;165:8306">
        <div class="frame-15-gSW" id="I165:13949;165:8306;141:4592">Room</div>
        </div>
        <div onClick={()=>handleSelectType('house')} style={{backgroundColor: selectedType ==='house' ? '#c9cba3':'#ffffff'}}class="price-WAe" id="I165:13949;165:8309">
        <div class="frame-15-dWA" id="I165:13949;165:8309;141:4592">House</div>
        </div>
        </div>
        <div class="auto-group-m8ww-hF8" id="N4HMsJMHMv7qPgDSh6M8WW">
        <div onClick={()=>handleSelectType('apartment')} style={{backgroundColor: selectedType ==='apartment' ? '#c9cba3':'#ffffff'}}class="price-EVx" id="I165:13949;165:8307">
        <div class="frame-15-wQN" id="I165:13949;165:8307;141:4592">Apartment</div>
        </div>
        <div onClick={()=>handleSelectType('basement')} style={{backgroundColor: selectedType ==='basement' ? '#c9cba3':'#ffffff'}}class="price-ZAr" id="I165:13949;165:8310">
        <div class="frame-15-3ri" id="I165:13949;165:8310;141:4592">Basement</div>
        </div>
        </div>
        <div onClick={()=>handleSelectType('duplex')} style={{backgroundColor: selectedType ==='duplex' ? '#c9cba3':'#ffffff'}}class="price-K3Y" id="I165:13949;165:8308">
        <div class="frame-15-Pp6" id="I165:13949;165:8308;141:4592">Duplex</div>
        </div>
        </div>
        </div>
        <div class="frame-19-DYE" id="I165:13949;165:8220">
        <p class="key-features-5KY" id="I165:13949;165:8221">Key Features</p>
        <p class="what-makes-your-property-special-ZEi" id="I165:13949;165:8222">What makes your property special?</p>
        </div>
        <textarea type="text" placeholder="Description (Max 600 characters)&#10;Enter Here" name="description" value={formData.formData.description} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-eGA" id="I165:13949;165:8335">

        </textarea>
        <div onClick={handleUpload} class="search-bar-3LE" id="I165:13949;165:8340">
        <input id="imageFile" type="file" onChange={handleImages} style={{display:'none'}} multiple/>
        <p class="upload-photos-t5x" id="I165:13949;165:8343">Upload Photos</p>
        <ImageIcon class="group-52-MVL" src="/api/prod-us-east-2-first-cluster/projects/LZTNXrW..." id="I165:13949;165:8347"/>
        
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
        <div class="group-53-1Zt" id="I165:13949;165:8400">
        <p class="of-beds-hxW" id="I165:13949;165:8357"># of Beds</p>
        <div class="frame-53-CeN" id="I165:13949;165:8369">
        <div class="auto-group-2g4a-8Y2" id="N4HNcCHUWExPxJ2y8K2g4A">
        <div onClick={()=>handleSelectBeds('1')} style={{backgroundColor: selectedBeds ==='1' ? '#c9cba3':'#ffffff'}}class="price-TaJ" id="I165:13949;165:8359">
        <div class="frame-15-NSN" id="I165:13949;165:8359;141:4592">1</div>
        </div>
        <div onClick={()=>handleSelectBeds('6')} style={{backgroundColor: selectedBeds ==='6' ? '#c9cba3':'#ffffff'}}class="price-DSz" id="I165:13949;165:8385">
        <div class="frame-15-JUS" id="I165:13949;165:8385;141:4592">6</div>
        </div>
        </div>
        <div class="auto-group-kkpi-8iN" id="N4HNoGoMFGnBsCkrugKkpi">
        <div onClick={()=>handleSelectBeds('2')} style={{backgroundColor: selectedBeds ==='2' ? '#c9cba3':'#ffffff'}}class="price-ewc" id="I165:13949;165:8364">
        <div class="frame-15-n2E" id="I165:13949;165:8364;141:4592">2</div>
        </div>
        <div onClick={()=>handleSelectBeds('7')} style={{backgroundColor: selectedBeds ==='7' ? '#c9cba3':'#ffffff'}}class="price-d2r" id="I165:13949;165:8390">
        <div class="frame-15-ktA" id="I165:13949;165:8390;141:4592">7</div>
        </div>
        </div>
        <div class="auto-group-ofwa-Zqc" id="N4HNyBgW1szRULFBmRoFWa">
        <div onClick={()=>handleSelectBeds('3')} style={{backgroundColor: selectedBeds ==='3' ? '#c9cba3':'#ffffff'}}class="price-6qY" id="I165:13949;165:8370">
        <div class="frame-15-1Si" id="I165:13949;165:8370;141:4592">3</div>
        </div>
        <div onClick={()=>handleSelectBeds('8+')} style={{backgroundColor: selectedBeds ==='8+' ? '#c9cba3':'#ffffff'}}class="price-ry8" id="I165:13949;165:8395">
        <div class="frame-15-C1Q" id="I165:13949;165:8395;141:4592">8+</div>
        </div>
        </div>
        <div class="auto-group-yxyt-FkN" id="N4HPA6XzBzarCR5RhhyXyt">
        <div onClick={()=>handleSelectBeds('4')} style={{backgroundColor: selectedBeds ==='4' ? '#c9cba3':'#ffffff'}}class="price-AcS" id="I165:13949;165:8375">
        <div class="frame-15-qCn" id="I165:13949;165:8375;141:4592">4</div>
        </div>
        <div onClick={()=>handleSelectBeds('5')} style={{backgroundColor: selectedBeds ==='5' ? '#c9cba3':'#ffffff'}}class="price-s9U" id="I165:13949;165:8380">
        <div class="frame-15-yCW" id="I165:13949;165:8380;141:4592">5</div>
        </div>
        </div>
        </div>
        </div>
        <div class="group-54-19C" id="I165:13949;165:8401">
        <p class="of-baths-Je6" id="I165:13949;165:8403"># of Baths</p>
        <div class="frame-53-xCr" id="I165:13949;165:8404">
        <div class="auto-group-kr2w-5HU" id="N4HPx5DNqJBfiJsXJ4Kr2W">
        <div onClick={()=>handleSelectBaths('1')} style={{backgroundColor: selectedBaths ==='1' ? '#c9cba3':'#ffffff'}}class="price-oUN" id="I165:13949;165:8405">
        <div class="frame-15-5wg" id="I165:13949;165:8405;141:4592">1</div>
        </div>
        <div onClick={()=>handleSelectBaths('6')} style={{backgroundColor: selectedBaths ==='6' ? '#c9cba3':'#ffffff'}}class="price-vBc" id="I165:13949;165:8410">
        <div class="frame-15-Sfk" id="I165:13949;165:8410;141:4592">6</div>
        </div>
        </div>
        <div class="auto-group-bltu-mjx" id="N4HQ8QFW2CUKHW5ymXbLTU">
        <div onClick={()=>handleSelectBaths('2')} style={{backgroundColor: selectedBaths ==='2' ? '#c9cba3':'#ffffff'}}class="price-Tsg" id="I165:13949;165:8406">
        <div class="frame-15-XsY" id="I165:13949;165:8406;141:4592">2</div>
        </div>
        <div onClick={()=>handleSelectBaths('7')} style={{backgroundColor: selectedBaths ==='7' ? '#c9cba3':'#ffffff'}}class="price-dJJ" id="I165:13949;165:8411">
        <div class="frame-15-JfL" id="I165:13949;165:8411;141:4592">7</div>
        </div>
        </div>
        <div class="auto-group-oedg-HGN" id="N4HQHEL86qggBGHZdCoeDG">
        <div onClick={()=>handleSelectBaths('3')} style={{backgroundColor: selectedBaths ==='3' ? '#c9cba3':'#ffffff'}}class="price-ZUn" id="I165:13949;165:8407">
        <div class="frame-15-QVQ" id="I165:13949;165:8407;141:4592">3</div>
        </div>
        <div onClick={()=>handleSelectBaths('8+')} style={{backgroundColor: selectedBaths ==='8+' ? '#c9cba3':'#ffffff'}} class="price-bZt" id="I165:13949;165:8412">
        <div class="frame-15-L1g" id="I165:13949;165:8412;141:4592">8+</div>
        </div>
        </div>
        <div class="auto-group-f88s-n8a" id="N4HQUPgC8L89gaxHL7f88S">
        <div onClick={()=>handleSelectBaths('4')} style={{backgroundColor: selectedBaths ==='4' ? '#c9cba3':'#ffffff'}}class="price-iY2" id="I165:13949;165:8408">
        <div class="frame-15-qMk" id="I165:13949;165:8408;141:4592">4</div>
        </div>
        <div onClick={()=>handleSelectBaths('5')} style={{backgroundColor: selectedBaths ==='5' ? '#c9cba3':'#ffffff'}}class="price-5Wz" id="I165:13949;165:8409">
        <div class="frame-15-QJN" id="I165:13949;165:8409;141:4592">5</div>
        </div>
        </div>
        </div>
        </div>
        <div class="frame-19-rRG" id="I165:13949;165:8445">
        <p class="additional-filters-n42" id="I165:13949;165:8446">Additional Filters</p>
        <p class="utilities-more-HmU" id="I165:13949;165:8447">Utilities &amp; More!</p>
        </div>
        <div class="frame-21-b1U" id="I165:13949;165:8448">
        <div onClick={()=>handleFilters('Utilities')} style={{backgroundColor: selectedFilters.includes('Utilities') ? '#c9cba3':'#ffffff'}}class="price-6iv" id="I165:13949;165:8449">
        <div class="frame-15-DoY" id="I165:13949;165:8449;141:4592">Utilities</div>
        </div>
        <div onClick={()=>handleFilters('Pets Allowed')} style={{backgroundColor: selectedFilters.includes('Pets Allowed') ? '#c9cba3':'#ffffff'}}class="price-VWA" id="I165:13949;165:8450">
        <div class="frame-15-Qt2" id="I165:13949;165:8450;141:4592">Pets Allowed</div>
        </div>
        <div onClick={()=>handleFilters('Smoking Allowed')} style={{backgroundColor: selectedFilters.includes('Smoking Allowed') ? '#c9cba3':'#ffffff'}}class="price-Ust" id="I165:13949;165:8451">
        <div class="frame-15-1cv" id="I165:13949;165:8451;141:4592">Smoking Allowed</div>
        </div>
        </div>
        <textarea placeholder="Square Footage&#10;500sqft"  name="propertySize" value={formData.formData.propertySize} onChange={(e)=>handleTextInput(e.target.name,e.target.value)}class="search-bar-HqL" id="I165:13949;165:8464">
 
        </textarea>
        <div onClick={onNext} class="submit-hXg" id="I165:13949;165:8469">Next Page</div>
        </div>

);
    };
export default Page1;