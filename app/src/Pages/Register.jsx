import React, {useState} from 'react';
import "./Register.css";
import {Link,useNavigate} from "react-router-dom";
import userList from '../Components/userList';
function Register(){
    const navigate = useNavigate();
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
    const handleTextInput = (e)=>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleRenter=()=>{
        setIsRenter(true);
    }
    const handleLandlord=()=>{
        setIsRenter(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.email.length ===0 || formData.firstName.length ===0 || formData.lastName.length ===0 || formData.password.length ===0 || formData.reEnterPassword.length ===0 || formData.phoneNumber.length ===0){
            setError('All fields must be filled');
        }
        else if(formData.password !== formData.reEnterPassword){
            setError('Passwords need to match');
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]+$/.test(formData.email)){
            setError('Email is not in a valid format');
        }   
        else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phoneNumber)){
            setError('Phone number is not in a valid');
        }   
        else{
            const user = userList.find((u)=> u.email === formData.email);
            if(user){
                setError('Email is already registered');
            }
            else{
                const userInfo ={
                    email:formData.email,
                    firstName:formData.firstName,
                    lastName:formData.lastName,
                    password:formData.password,
                    phoneNumber:formData.phoneNumber,
                    userType: isRenter ? 'Renter': 'Landlord',
                };
                userList.push(userInfo);
                setError('');
                navigate('../Login');
            }
        }
    }
    return(
        <div class="create-account-fWa" id="30:2378">
<p class="create-account-Paz" id="30:2344">Create Account</p>
<div class="line-40-1Ez" id="30:2345"></div>
<div class="auto-group-hm86-i9Q" id="59gxWVhTTeHf4CE3Hehm86">
<div class="group-42-DM4" id="30:2371">
<p class="email-address-8D8" id="30:2343" >Email Address</p>
<input class="rectangle-84-2pJ" id="30:2346" name="email" value={formData.email} onChange={handleTextInput}></input>
</div>
<div class="group-48-YGr" id="30:2377">
<p class="first-name-Gie" id="30:2358">First Name</p>
<input class="rectangle-87-Nmg" id="30:2359" name="firstName" value={formData.firstName} onChange={handleTextInput}></input>
</div>
</div>
<div class="auto-group-ssk2-Hdk" id="59gxhVP8vDVmNh179USSk2">
<div class="group-44-QCa" id="30:2373">
<p class="password-Lc2" id="30:2347">Password</p>
<input type="password" class="rectangle-85-1CN" id="30:2348" name="password" value={formData.password} onChange={handleTextInput}></input>
</div>
<div class="group-47-Kir" id="30:2376">
<p class="last-name-U5x" id="30:2360" >Last Name</p>
<input class="rectangle-88-n6e" id="30:2361" name="lastName" value={formData.lastName} onChange={handleTextInput}></input>
</div>
</div>
<div class="auto-group-rkop-tfU" id="59gxtjZQEAYvURcemvrKop">
<div class="group-45-Qti" id="30:2374">
<p class="re-enter-password-kSn" id="30:2356" >Re-Enter Password</p>
<input type="password" class="rectangle-86-eo4" id="30:2357" name="reEnterPassword" value={formData.reEnterPassword} onChange={handleTextInput}></input>
</div>
<div class="group-46-NDG" id="30:2375">
<p class="phone-number-W4a" id="30:2362">Phone Number</p>
<input class="rectangle-89-b62" id="30:2363"  name="phoneNumber" value={formData.phoneNumber} onChange={handleTextInput}></input>
</div>
</div>
<div class="group-43-6oU" id="30:2372">
<p class="account-type--ngJ" id="30:2367">Account Type :</p>
<p class="renter-tzE" id="30:2366">Renter</p>
<input type="radio" class="rectangle-51-Dmc" id="30:2368" checked={isRenter} onChange={handleRenter}></input>
<p class="landlord-Vz2" id="30:2365">Landlord</p>
<input type="radio" class="rectangle-52-Rcn" id="30:2369"  checked={!isRenter} onChange={handleLandlord}></input>
</div>
<button type="submit" class="group-41-Xfp" id="30:2352" onClick={handleSubmit}>Create Account</button>
<p class="already-have-an-account-jWz" id="30:2342">Already have an account?</p>
<span class="error">{error}</span>

<div class="group-40-dMU" id="30:2349">
    <Link to="../Login">
    <p class="login">Login</p>
    </Link>
</div>

</div>
    );
}
export default Register;