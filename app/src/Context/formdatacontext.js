import React,{createContext,useReducer,useContext} from 'react';
const FormDataContext= createContext();
const initialState={
    formData:{
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
        landlord: '',
        id:'',
    },
};
const formReducer = (state,action)=>{
    switch(action.type){
        case 'UPDATE_DATA':
            return {...state,formData:{...state.formData,...action.payload}};
        case 'LOGOUT':
            return initialState;
        case 'SUBMIT':
            return initialState;
        default:
            return state;
    }
};
const  FormDataProvider =({children}) =>{
    const[formData,dispatch]= useReducer(formReducer,initialState);

    return(
        <FormDataContext.Provider value={{formData,dispatch}}>
        {children}
        </FormDataContext.Provider>
    );
};
const useFormData=()=>{
    const context= useContext(FormDataContext);
    return context;
};
export{FormDataProvider,useFormData};