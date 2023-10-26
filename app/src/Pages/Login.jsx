import React,{useState,useContext} from 'react';
import "./Login.css";
import {Link,useNavigate} from "react-router-dom";
import userList from '../Components/userList';
import {UserContext} from "../Context/usercontext";
function Login(){
    const {setUser}= useContext(UserContext);
    const navigate = useNavigate();
    const[error,setError] =useState('');
    const[formData,setFormData] = useState({
        email: '',
        password: '',
    });
    const handleTextInput = (e)=>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.email || !formData.password){
            setError('All fields must be filled');
        }
        else{
            const user = userList.find((u)=> u.email === formData.email && u.password=== formData.password);
            if(user){
                setUser(user);
                setError('');
                navigate('/');
            }
            else{
                setError('Email or username is incorrect');
            }
        }
    }
    return(
        <div class="login-screen-aAN" id="30:2355">
        <p class="account-login-7Zc" id="30:2327">Account Login</p>
        <div class="line-39-Yev" id="30:2328"></div>
        <p class="email-address-fUe" id="30:2329">Email Address</p>
        <input class="rectangle-81-XWr" id="30:2330" name="email" value={formData.email} onChange={handleTextInput}></input>
        <p class="password-ozA" id="30:2331">Password</p>
        <input type="password" class="rectangle-81-XWr" id="30:2332"  name="password" value={formData.password} onChange={handleTextInput}></input>
        <button type="submit" class="group-39-zan" id="30:2335" onClick={handleSubmit}>Login</button>
        <span class="error">{error}</span>
        <p class="dont-have-an-account-i7U" id="30:2339">Don’t have an account?</p>
        <div class="group-39-zan" id="30:2336">
        <Link to="../Register">
        <p class="create-account">Create Account</p>
        </Link>
        </div>
        </div>
    );
}
export default Login;