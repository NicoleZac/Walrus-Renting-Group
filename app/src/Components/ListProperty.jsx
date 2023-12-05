import React,{useState,useContext,useEffect} from 'react';
import Modal from 'react-modal';
import Page1 from './ListPropertyPages/Page1';
import Page2 from './ListPropertyPages/Page2';
import Page3 from './ListPropertyPages/Page3';
import Page4 from './ListPropertyPages/Page4';
import {useFormData} from '../Context/formdatacontext.js';
import propertyList from "../Components/propertyList";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ListProperty =({isOpen,requestClose,setShowToast, setSubmitted})=>{

    const{formData,dispatch} = useFormData();
    const [currentPage,setPage] = useState('p1');
    // const [submitted, submitForm] = useState(false);
    const[error,setError] =useState('');
    const pages=['p1','p2','p3','p4'];

    const currentIndex = pages.indexOf(currentPage);
    const handleSubmit = ()=>{

        const ids=[...propertyList];
        const largestId = ids.reduce((maxId,item)=>(item.id>maxId ? item.id:maxId),0);
        const maxId = largestId+1;
        
        const checkEmptyFields = () =>{
            for(let val in formData.formData){
                    if(Object.hasOwnProperty.call(formData.formData,val)){
                        if(formData.formData[val]===''){
                            return false;
                        }
                    }
                }
            return false;
        }
        const isEmpty = checkEmptyFields();
          
        if(isEmpty){
            setError('Please fill out all fields');
            setPage('p4');
        }
        else{
           const newId = String(maxId);;
           if(formData.formData.id === ''){
                formData.formData.id= newId;
           }
           const index = propertyList.findIndex(prop=>prop.id ===formData.formData.id);
        if(index!=-1){ //for editing properties
            propertyList[index] = formData.formData;
        }
        else{
            propertyList.push(formData.formData);
        }
            
            setError('');
            // dispatch({type: 'SUBMIT'});
            setPage('p1');
            setShowToast(false);
            setSubmitted(true);
            requestClose();
            toast.success('Property has been listed',{
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

    const handleNext=()=>{
        const nextIndex = currentIndex+1;
        if(nextIndex <pages.length){
            setPage(pages[nextIndex]);
        }
    };
    const handlePrevious=()=>{
        const previousIndex = currentIndex-1;
        if(previousIndex >=0){
            setPage(pages[previousIndex]);
        }
    }
    const getPageContent = ()=>{
        switch(currentPage){
            case 'p1':
                return <Page1 onNext={handleNext}  requestClose={()=>requestClose()} />;
            case 'p2': 
                return <Page2 onNext={handleNext} onPrevious={handlePrevious} />;    
            case 'p3':
                return <Page3 onNext={handleNext} onPrevious={handlePrevious}/>;
            case 'p4':
                return <Page4 onPrevious={handlePrevious} onSubmit={handleSubmit} error={error} />;
            default:
                return <Page1 onNext={handleNext}  requestClose={()=>requestClose()}/>;
        }
    }
useEffect(()=>{
    if(isOpen){
        document.body.style.overflow='hidden'
    }
    else{
        document.body.style.overflow='auto';
    }
    return()=>{
        document.body.overflow='auto';
    }
},[isOpen]);
    return(
<Modal
        isOpen = {isOpen}
        onRequestClose ={()=>requestClose()}
        style={{
 
           overlay: {
        
            backgroundColor: 'rgba(0,0,0,0.5)',
            display:isOpen ? 'block' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right:0,
            bottom: 0,
            zIndex: 2,
           },
           content:{
            display:isOpen ? 'block' : 'none',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '100%',
            width: '26%',
            backgroundColor: 'white',
            overflow:'auto',

           }
        }}
        contentLabel="Example Modal"
>
    <div id="modal-content">
{getPageContent()}
</div>

</Modal>

    );
};

export default ListProperty;