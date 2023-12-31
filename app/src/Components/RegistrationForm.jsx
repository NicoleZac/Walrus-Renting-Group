import React, {useState} from 'react';
import "./RegistrationForm.css";
import {Link,useNavigate} from "react-router-dom";
import userList from '../Components/userList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function RegistrationForm(){
    const navigate = useNavigate();
    const[renterColor,setRenterColor]=useState('#c9cba3');
    const[landlordColor,setLandlordColor]=useState('#c9cba3');
    const[emailColor,setEmailColor]=useState('#c2c2c2');
    const[fNameColor,setFNameColor]=useState('#c2c2c2');
    const[lNameColor,setLNameColor]=useState('#c2c2c2');
    const[passwordColor,setPasswordColor]=useState('#c2c2c2');
    const[reEnterColor,setReEnterColor]=useState('#c2c2c2');
    const[phoneColor,setPhoneColor]=useState('#c2c2c2');
    const[selectColor,setSelectColor] = useState('#c2c2c2');
    const[error,setError] =useState('');
    const[formData,setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        reEnterPassword: '',
        phoneNumber: '',
    });
    const[isRenter,setIsRenter] = useState(true);
    const clearError=()=>{
        setError('');
        setEmailColor('#c2c2c2');
        setFNameColor('#c2c2c2');
        setLNameColor('#c2c2c2');
        setPasswordColor('#c2c2c2');
        setReEnterColor('#c2c2c2');
        setPhoneColor('#c2c2c2');
        setSelectColor('#c2c2c2');
    }
    const handleTextInput = (e)=>{
        clearError();
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleRenter=()=>{
        setIsRenter(true);
        setRenterColor('#303201');
        setLandlordColor('#c9cba3');
        clearError();
    }
    const handleLandlord=()=>{
        setIsRenter(false);
        setLandlordColor('#303201');
        setRenterColor('#c9cba3');
        clearError();
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.email.length ===0 || formData.firstName.length ===0 || formData.lastName.length ===0 || formData.password.length ===0 || formData.reEnterPassword.length ===0 || formData.phoneNumber.length ===0){
            
            setError('All fields must be filled');
            if(formData.email.length===0){
                setEmailColor('red');
            }
            if(formData.firstName.length===0){
                setFNameColor('red');
            }
            if(formData.lastName.length===0){
                setLNameColor('red');
            }
            if(formData.password.length===0){
                setPasswordColor('red');
            }
            if(formData.reEnterPassword.length===0){
                setReEnterColor('red');
            }
            if(formData.phoneNumber.length===0){
                setPhoneColor('red');
            }
        }
        else if(formData.password !== formData.reEnterPassword){
            setError('Passwords need to match');
            setPasswordColor('red');
            setReEnterColor('red');
        }
        else if(!/^[\w-.]+@([\w-]+.)+[\w-]+$/.test(formData.email)){
            setError('Email is not in a valid format');
            setEmailColor('red');
        }   
        else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phoneNumber)){
            setError('Phone number is not in a valid format');
            setPhoneColor('red');
        } 
        else{
            const user = userList.find((u)=> u.email === formData.email);
            if(user){
                setError('Email is already registered');
                setEmailColor('red');
            }
            else{
                const userInfo ={
                    email:formData.email,
                    firstName:formData.firstName,
                    lastName:formData.lastName,
                    password:formData.password,
                    userType: isRenter ? 'Renter': 'Landlord',
                };
                userList.push(userInfo);
                setError('');
                navigate('../Login');
            }
        }
    }
    return(
<div class="property-1register-5Fg" id="161:5477">
<Link to="../Login">
<ArrowBackIosIcon class="group-49-NEn"  id="165:6276"/>
</Link>
<p class="register-gFU" id="161:5492">Register</p>
<div class="frame-49-a5x" id="161:5479">

<div class ="search-bar-reg-1" style={{borderColor: fNameColor}}>
<p class=" email-address-MNa">First Name</p>
<input class="email-input" id="161:5512" name="firstName" placeholder=" First Name"value={formData.firstName} onChange={handleTextInput}></input>
</div>
<div class ="search-bar-reg-2" style={{borderColor: lNameColor}}>
<p class=" email-address-MNa">Last Name</p>
<input class="email-input" id="30:2361" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleTextInput}></input>
</div>

<div class ="search-bar-reg-3" style={{borderColor: emailColor}}>
<p class=" email-address-MNa">Email Address</p>

<input class="email-input" id="161:5484" name="email" placeholder="xxx@email.com"value={formData.email} onChange={handleTextInput}></input>
</div>

<div class ="search-bar-reg-4" style={{borderColor: passwordColor}}>
<p class=" email-address-MNa">Password</p>
<input type="password" class="email-input" id="30:2348" name="password" placeholder="Enter Here" value={formData.password} onChange={handleTextInput}></input>
</div>

<div class ="search-bar-reg-5" style={{borderColor: reEnterColor}}>
<p class=" email-address-MNa">Confirm Password</p>
<input type="password" class="email-input" id="30:2357" name="reEnterPassword" placeholder= "Enter Here" value={formData.reEnterPassword} onChange={handleTextInput}></input>
</div>

<div class ="search-bar-reg-5" style={{borderColor: phoneColor}}>
<p class=" email-address-MNa">Phone Number</p>
<input  class="email-input" id="30:2357" name="phoneNumber" placeholder= "XXX-XXX-XXXX" value={formData.phoneNumber} onChange={handleTextInput}></input>
</div>

</div>
<p class="select-account-type-9Xg" id="161:5490">Select Account Type</p>
<div class="frame-49-ejL" id="163:5557">

<button type ="submit"class="price-Mte" id="30:2368" style={{backgroundColor:renterColor,borderColor:selectColor}}checked={isRenter} onClick={handleRenter}>Renter</button>

<p class="or-Kyt" id="163:5556">or</p>

<button type ="submit"class="price-SYi" id="30:2369"  style={{backgroundColor:landlordColor,borderColor:selectColor}} checked={!isRenter} onClick={handleLandlord}>Landlord</button>

</div>
<p class="already-have-account-reg" id="161:5195">
<span class="already-have-account-reg">Already Have an Account?&#160;</span>
<Link to="../Login">
<span class="already-have-account-reg-1">Log in here.</span>
</Link>
</p>
<button type="submit" class="submit-cLi" id="30:2352" onClick={handleSubmit}>Create Account</button>
<span class="error-register">{error}</span>
</div>
    );
}
export default RegistrationForm;