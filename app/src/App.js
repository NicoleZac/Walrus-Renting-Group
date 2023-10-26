import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {UserProvider} from "./Context/usercontext";
import Nav from "./Components/navbar";
import ListProperty from "./Pages/ListProperty"
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserProfile from "./Pages/UserProfile"
function App() {
  return (
    <UserProvider>
      <Router>
   <Nav/>
   <Routes>
    <Route path="/"element={<HomePage/>}/>
    <Route path="/ListProperty" element={<ListProperty/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path={"/UserProfile/:email"} element={<UserProfile />}/>
   </Routes>
  </Router>
  </UserProvider>
      
  );
}

export default App;
