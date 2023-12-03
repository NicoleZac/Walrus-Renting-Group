import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/usercontext";
import { PageProvider, PageContext } from "./Context/pagecontext";
import { FilterProvider } from "./Context/filtercontext";
import Nav from "./Components/navbar";
import LoginRegisterNav from "./Components/LoginRegisterNavbar";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ListProperty from "./Components/ListProperty";
import UserProfile from "./Pages/UserProfile";
import PropertyPage from "./Pages/PropertyPage";
import CreateCalendar from "./Pages/CreateCalendar";
import Favourites from "./Pages/Favourites";
import Dashboard from "./Pages/Dashboard";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FormDataProvider } from "./Context/formdatacontext";

function App() {
  const[showToast,setShowToast] = useState(true);
  const [isPopOpen, setPopOpen] = useState(false);

  const openPop = () => {
    toast.dismiss();
    setPopOpen(true);
  };
  const closePop = () => {
    toast.dismiss();
    if(showToast){
    toast.info(
      <div>
      <p> Are you sure you want to close the page?</p>
      <button onClick={handleCloseConfirmation}>Yes </button>
      <button onClick={handleCancelConfirmation}>No </button>
    </div>,{
      position:'top-center',
      autoClose: false,
      hideProgressBar:true,
      closeOnClick:false,
      pauseOnHover:true,
      draggable: true,
      closeButton: false,
      className:'confirmation-toast',
    })
  }
  else{
    setShowToast(true);
  }
  };
  const handleCloseConfirmation=()=>{
    setPopOpen(false);
    toast.dismiss();
  }
  const handleCancelConfirmation=()=>{
    toast.dismiss();
  }
  return (
    <FormDataProvider>
      <PageProvider>
        <UserProvider>
          <FilterProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Content openPopup={openPop} />} />
                <Route
                  path="/Login"
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path="/Register"
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/UserProfile/:email"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/ListProperty"}
                  element={<Content openPopup={openPop} />}
                />
                  <Route
                  path={"/PropertyPage/:id/:property"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/CreateCalendar/:email"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/Favourites/:email"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/Dashboard"}
                  element={<Content openPopup={openPop} />}
                />
              </Routes>
         
              <ToastContainer position="top-center"/>
           <ListProperty isOpen={isPopOpen} requestClose={closePop} setShowToast={setShowToast} />
            </Router>
          </FilterProvider>
        </UserProvider>
      </PageProvider>
    </FormDataProvider>
  );
}
function Content({ openPopup }) {
  const { pageStates, setPageState } = useContext(PageContext);
  const location = useLocation();
  const {email} = useParams(); 
  const {id,property} = useParams();
  useEffect(() => {
    handleSwitch();
  }, [location.pathname, setPageState]);
  const handleSwitch = () => {
    if (location.pathname === "/Login" || location.pathname === "/Register") {
      setPageState('LoginRegisterPage',true);
    } else {
      setPageState('LoginRegisterPage',false);
    }
    if(location.pathname === `/UserProfile/${email}`){
      setPageState('UserProfilePage',true);
    }
    else{
      setPageState('UserProfilePage',false);
    }
  };

  return (
    <>
      {pageStates.LoginRegisterPage ? <LoginRegisterNav /> : <Nav />}
      {location.pathname === "/" && <HomePage openPopup={openPopup} /> }
      {location.pathname === "/Login" && <Login />}
      {location.pathname === "/Register" && <Register />}
      {location.pathname === `/UserProfile/${email}` && <UserProfile openPopup={openPopup}/>  }
      {location.pathname === "/ListProperty" && <ListProperty />}
      {location.pathname === `/PropertyPage/${encodeURIComponent(id)}/${encodeURIComponent(property)}` && <PropertyPage />}
      {location.pathname === `/CreateCalendar/${email}` && <CreateCalendar />}
      {location.pathname === `/Favourites/${email}` && <Favourites />}
      {location.pathname === `/Dashboard` && <Dashboard />}
    </>
  );
}

export default App;
