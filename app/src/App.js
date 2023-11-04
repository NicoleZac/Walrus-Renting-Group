import React, {useContext,useEffect} from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {UserProvider} from "./Context/usercontext";
import {PageProvider,PageContext} from "./Context/pagecontext";
import Nav from "./Components/navbar";
import LoginRegisterNav from "./Components/LoginRegisterNavbar";
import ListProperty from "./Pages/ListProperty"
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserProfile from "./Pages/UserProfile"
import {useLocation} from 'react-router-dom';

function App() {
  
  return (
    <PageProvider>
    <UserProvider>
      <Router>
 

   <Routes>
    <Route path="/"element={<Content/> }/>
    <Route path="/ListProperty" element={<Content/>}/>
    <Route path="/Login" element={<Content/> }/>
    <Route path="/Register" element={<Content/>}/>
    <Route path={"/UserProfile/:email"} element={<Content />}/>
   </Routes>

  </Router>
  </UserProvider>
   </PageProvider>
  
  );
}
function Content(){
  const{LoginRegisterPage,setLoginRegister} = useContext(PageContext);
  const location = useLocation();
  useEffect(()=>{
    handleSwitch();
},[location.pathname,setLoginRegister]);
const handleSwitch=()=>{

  if (location.pathname === '/Login' || location.pathname=== '/Register'){
    setLoginRegister(true);

}
else{
  setLoginRegister(false);
}
};
  return (
    <>
    {LoginRegisterPage ? <LoginRegisterNav/>: <Nav/>}
    <Routes>
    <Route index element={<HomePage/>}/>
    </Routes>
    {location.pathname === '/ListProperty' && <ListProperty/>}
    {location.pathname === '/Login' && <Login/>}
    {location.pathname === '/Register' && <Register/>}
    {location.pathname === "/UserProfile/:email" && <UserProfile/>}
    </>

  );
}

export default App;
