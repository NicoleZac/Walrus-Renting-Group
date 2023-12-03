import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import Page1 from './ListPropertyPages/Page1';
import Page2 from './ListPropertyPages/Page2';
import Page3 from './ListPropertyPages/Page3';
import Page4 from './ListPropertyPages/Page4';
import {useFormData} from '../Context/formdatacontext.js';
import propertyList from "../Components/propertyList";


const ListProperty =({isOpen,requestClose})=>{


    const{formData,dispatch} = useFormData();
    const [currentPage,setPage] = useState('p1');
    const[error,setError] =useState('');
    const pages=['p1','p2','p3','p4'];

    const currentIndex = pages.indexOf(currentPage);
    const handleSubmit = ()=>{

        const ids=[...propertyList];
        const largestId = ids.reduce((maxId,item)=>(item.id>maxId ? item.id:maxId),0);
        const maxId = largestId+1;
        
       const checkEmptyFields = () =>{
       for(const val in formData.formData){
        if(Object.hasOwnProperty.call(formData.formData,val)){
            if(formData.formData[val]===''){
                return true;
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
            setPage('p1');
            dispatch({type: 'SUBMIT'});
            requestClose();
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
                return <Page1 onNext={handleNext}  requestClose={requestClose} />;
            case 'p2': 
                return <Page2 onNext={handleNext} onPrevious={handlePrevious} />;    
            case 'p3':
                return <Page3 onNext={handleNext} onPrevious={handlePrevious}/>;
            case 'p4':
                return <Page4 onPrevious={handlePrevious} onSubmit={handleSubmit} error={error} />;
            default:
                return <Page1 onNext={handleNext}  requestClose={requestClose}/>;
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
      isOpen={isOpen}
      onRequestClose={requestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        },
        content: {
          width: '35%', // Adjust the width as needed
          height: '85%', // Adjust the height as needed
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto', // Enable scrolling
        },
      }}
    >
    {getPageContent()}
</Modal>

    );
};

export default ListProperty;