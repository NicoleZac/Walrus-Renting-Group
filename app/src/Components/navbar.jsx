import "./navbar.css";
import React, {useContext,useState} from "react";
import {UserContext} from "../Context/usercontext";
import {Link} from "react-router-dom";
import logo from "../Images/logo.png"
import ProfileIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SearchIcon from '@mui/icons-material/Search';
import ListProperty from './ListProperty';
import {useFormData} from "../Context/formdatacontext";

function Nav(){
    const [listProperty,setListProperty] = useState(false);
    const {user,setUser} = useContext(UserContext);
    const{dispatch} = useFormData();
    const userEmail = user?.email;
    function handleLogout(){
        dispatch({type: 'LOGOUT'});
        setUser(null);
    }
return(
    <><nav>
        <div class="header-P5L" id="141:2721">
            <div class="auto-group-ephx-9Tp" id="N4FjgWHfmcRyaX4FNqepHx">
                <div class="group-1-6vn" id="I141:2830;1:33"></div>
                <div class="frame-16-p66" id="141:3733">
                    <div class="banner-jTx" id="141:2772">
                        <Link to="/">
                            <img class="group-6-T94" src={logo} alt={logo} id="I141:2772;1:110" />
                        </Link>
                    </div>
                    <div class="search-bar-qhL" id="141:3078">
                        <div class="frame-15-Y5x" id="I141:3078;141:2933">
                            <div class="frame-15-Sx2" id="I141:3078;141:2930">
                                <p class="where-yh4" id="I141:3078;141:2924">Where</p>
                                <p class="find-your-new-home-hNA" id="I141:3078;141:2927">Find your new home</p>
                            </div>
                            <div class="line-36-E7C" id="I141:3078;141:2931"></div>
                            <div class="frame-15-ZQN" id="I141:3078;141:2953">
                                <BedIcon class="bath-3aS" id="I141:3078;141:2949" />
                                <p class="beds-mmL" id="I141:3078;141:2944">Beds</p>
                            </div>
                            <div class="line-38-K2A" id="I141:3078;141:2960"></div>
                            <div class="frame-16-T8N" id="I141:3078;141:2954">
                                <BathroomIcon class="bath-MzS" id="I141:3078;141:2957" />
                                <p class="bath-h2i" id="I141:3078;141:2956">Baths</p>
                            </div>
                            <div class="line-39-36a" id="I141:3078;141:2964"></div>
                            <div class="frame-17-m2a" id="I141:3078;141:2961">
                                <p class="price-range-HWi" id="I141:3078;141:2962">Price Range</p>
                                <p class="min-max-Rcv" id="I141:3078;141:2963">Min - Max</p>
                            </div>
                        </div>
                        <div class="group-15-wLN" id="I141:3078;141:2968">
                            <SearchIcon class="vector-GtS" id="I141:3078;141:2967" />
                        </div>
                    </div>
                    {userEmail && (<>
                        <div class="frame-69-9hL" id="141:3230">
                            <Link to={`/UserProfile/${userEmail}`}>
                                <ProfileIcon class="icon-person-R94" id="141:3164" />
                            </Link>
                            <MailIcon class="vector-LWv" id="141:3163" />
                            <FavoriteIcon class="vector-sWr" id="141:3162" />
                        </div>
                    </>)}


                    {userEmail && (<>
                        <Link to="/">
                            <div class="frame-8-Dqc" id="141:3160" onClick={handleLogout}>Logout</div>
                        </Link>
                    </>)}
                    {!userEmail && (<>
                        <Link to="/Login">
                            <div class="frame-8-Dqc" id="141:3160">Login
                            </div>
                        </Link>
                    </>)}
                </div>
            </div>
            <p class="additional-filters-twk" id="141:5089">Additional Filters</p>
        </div>








    </nav><>
            <ListProperty trigger={listProperty} setTrigger={setListProperty}></ListProperty>
        </></>
);
}
export default Nav