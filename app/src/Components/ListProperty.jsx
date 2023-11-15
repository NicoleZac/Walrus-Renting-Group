import React,{useState} from 'react';
import Modal from 'react-modal';
import Page1 from './ListPropertyPages/Page1';
import Page2 from './ListPropertyPages/Page2';
import Page3 from './ListPropertyPages/Page3';
import Page4 from './ListPropertyPages/Page4';
import propertyList from './propertyList.js';
import {useFormData} from '../Context/formdatacontext.js';


const ListProperty =({isOpen,requestClose})=>{
    const{formData,dispatch} = useFormData();
    const [currentPage,setPage] = useState('p1');
    const[error,setError] =useState('');
    const pages=['p1','p2','p3','p4'];
    const currentIndex = pages.indexOf(currentPage);
    const handleSubmit = ()=>{
        console.log(formData);
        const isValueEmpty = (value) => {
            if (Array.isArray(value)) {
              return value.length === 0;
            }
            if (typeof value === 'object' && value !== null) {
              return isObjectEmpty(value);
            }
            return value === '' || value === null || value === undefined;
          };
          
          const isObjectEmpty = (obj) => {
            for (const key in obj) {
              if (!isValueEmpty(obj[key])) {
                return false;
              }
            }
            return true;
          };
          
          const isEmpty = isObjectEmpty(formData);
          
        if(isEmpty){
            setError('Please fill out all fields');
            setPage('p4');
        }
        else{
            //propertyList.push(formData);
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
                return <Page1 onNext={handleNext}  requestClose={requestClose}/>;
            case 'p2':
                return <Page2 onNext={handleNext} onPrevious={handlePrevious}/>;    
            case 'p3':
                return <Page3 onNext={handleNext} onPrevious={handlePrevious} />;
            case 'p4':
                return <Page4 onPrevious={handlePrevious} onSubmit={handleSubmit} error={error}/>;
            default:
                return <Page1 onNext={handleNext}  requestClose={requestClose}/>;
        }
    }
    return(
<Modal
        isOpen = {isOpen}
        onRequestClose ={requestClose}
        style={{
           overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right:0,
            bottom: 0,
           },
           content:{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '100%',
            backgroundColor: 'white',

           }
        }}
>
<div style={{width: '100%'}}>
{getPageContent()}
</div>
</Modal>

    );
};

export const useSharedForm = () =>{
    const[formData,setFormData] = useState({
        propertyType: '',
        description: '',
        images: [],
        numBeds: '',
        numBaths: '',
        additionalFilters: [],
        propertySize: '',
        address: '',
        country: '',
        province: '',
        city:'',
        zip: '',
        tags: [],
        startDate: '',
        leaseLength: '',
        monthlyRent:'',
        securityDep:'',
        contactMethod:'',
    });
    const updateSharedForm = (value) =>{
        setFormData(value);
    };
    return [formData,updateSharedForm];
};
export default ListProperty;