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
import Page1 from "./Components/ListPropertyPages/Page1";
import Page2 from "./Components/ListPropertyPages/Page2";
import Page3 from "./Components/ListPropertyPages/Page3";
import Page4 from "./Components/ListPropertyPages/Page4";
import UserProfile from "./Pages/UserProfile";
import Calendar from "./Pages/UserProfile";
import PropertyPage from "./Pages/PropertyPage";
import { useLocation } from "react-router-dom";
import { FormDataProvider } from "./Context/formdatacontext";

function App() {
  const [isPopOpen, setPopOpen] = useState(false);

  const openPop = () => {
    setPopOpen(true);
  };
  const closePop = () => {
    setPopOpen(false);
  };
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
                  path={"/Calendar/:email"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/ListProperty"}
                  element={<Content openPopup={openPop} />}
                />
                <Route
                  path={"/PropertyPage/:email"}
                  element={<Content openPopup={openPop} />}
                />
              </Routes>
              <ListProperty isOpen={isPopOpen} requestClose={closePop} />
            </Router>
          </FilterProvider>
        </UserProvider>
      </PageProvider>
    </FormDataProvider>
  );
}
function Content({ openPopup }) {
  const { LoginRegisterPage, setLoginRegister } = useContext(PageContext);
  const location = useLocation();
  useEffect(() => {
    handleSwitch();
  }, [location.pathname, setLoginRegister]);
  const handleSwitch = () => {
    if (location.pathname === "/Login" || location.pathname === "/Register") {
      setLoginRegister(true);
    } else {
      setLoginRegister(false);
    }
  };
  return (
    <>
      {LoginRegisterPage ? <LoginRegisterNav /> : <Nav />}
      {location.pathname === "/" && <HomePage openPopup={openPopup} />}
      {location.pathname === "/Login" && <Login />}
      {location.pathname === "/Register" && <Register />}
      {location.pathname === "/UserProfile/:email" && <UserProfile />}
      {location.pathname === "/Calendar/:email" && <Calendar />}
      {location.pathname === "/ListProperty" && <ListProperty />}
      {location.pathname === "/PropertyPage/:email" && <PropertyPage />}
    </>
  );
}

export default App;
