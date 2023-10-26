import "./navbar.css";
import React, {useContext} from "react";
import {UserContext} from "../Context/usercontext";
import {Link} from "react-router-dom";
import logo from "../Images/logo.png"
import ProfileIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

function Nav(){
    const {user,setUser} = useContext(UserContext);
    const userEmail = user?.email;
    const userType = user?.userType;
    function handleLogout(){
        setUser(null);
    }
    console.log(userEmail);
return(
    <nav>
    <div class="header-logged-out-vqY" id="59:679">
<div class="header-wke" id="59:662">
<div class="banner-EDx" id="I59:662;119:2579">
<Link to="/">
<img class="group-6-wPG" src={logo} alt ={logo}id="I59:662;119:2579;1:110"/>
</Link>

</div>
<div class="group-1-h9U" id="I59:662;24:109;1:33">

<div class="frame-8-ZxN" id="I59:662;24:109;24:97">
<p class="location-Jux" id="I59:662;24:109;24:87">Location</p>
<div class="line-5-2qx" id="I59:662;24:109;24:88"></div>
<p class="location-Jux" id="I59:662;24:109;24:89">Beds</p>
<div class="line-5-2qx" id="I59:662;24:109;24:91"></div>
<p class="location-Jux" id="I59:662;24:109;24:90">Baths</p>
<div class="line-5-2qx" id="I59:662;24:109;24:92"></div>
<p class="location-Jux" id="I59:662;24:109;24:93">Price Range</p>
</div>

</div>
{userType === "Renter" && (<>
<div class="frame-68-xFk" id="I59:662;102:4943">
<Link to={`/UserProfile/${userEmail}`}>
<ProfileIcon class= "icon-person-TyC"/>
</Link>
<MailIcon class="vector-AMp"/>
<FavoriteIcon class="vector-7H4"/>
</div>
</>)}
{userType === "Landlord" && (<>
<div class="frame-68-xFk" id="I59:662;102:4943">
<Link to={`/ListProperty`}>
<AddIcon class="icon-add"/>
</Link>
<Link to={`/UserProfile/${userEmail}`}>
<ProfileIcon class= "icon-person-TyC"/>
</Link>
<MailIcon class="vector-AMp"/>
<FavoriteIcon class="vector-7H4"/>
</div>
</>)}
{}
{userEmail &&(<>
<Link to="/">
<div class="frame-8-rVY" id="I59:662;1:129" onClick={handleLogout}>Logout</div>
</Link>
</>)}
{!userEmail &&(<>
<Link to="/Login">
<div class="frame-8-rVY" id="I59:662;1:129">Login</div>
</Link>
</>)}
</div>
</div>
</nav>
);
}
export default Nav