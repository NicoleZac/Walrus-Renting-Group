import "./navbar.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../Context/usercontext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import ListProperty from "./ListProperty";
import { useFormData } from "../Context/formdatacontext";
import { state, useFilter } from "../Context/filtercontext";
import ClickableComponent from "./Special/Clicked";
import FilterModal from "./Special/FilterModal";
import Messaging from "../Components/Messaging";
import { toast } from "react-toastify";

function Nav() {
  const [locationFilter, setLocationFilter] = useState("");
  const [bathFilter, setBathFilter] = useState(0);
  const [bedFilter, setBedFilter] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const { dispatch } = useFormData();
  const { state, dispatchFilter } = useFilter();
  const userEmail = user?.email;
  const [isModalOpen, setModalOpen] = useState(false);
  const [showMessaging, setShowMessaging] = useState(false);

  // Location
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isUserProfile = location.pathname.includes("/UserProfile");
  const isMessaging = location.pathname.includes("/messaging");
  const isFavourites = location.pathname.includes("/Favourites/" + user?.email);

  //MinMax Popup
  const [isMinMaxPopupOpen, setMinMaxPopupOpen] = useState(false);
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();
  const maxDigits = 5;

  //BedBath Popup
  const [isBedBathOpen, setBedBathPopup] = useState(false);
  const maxBedBath = 9;

  //Filter Modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Notification Show
  const [notificationShow, setNotificationShow] = useState(false);
  const [oneTime, setOneTime] = useState(true);

  useEffect(() => {
    setMinPriceFilter(state.filters.minPrice);
    setMaxPriceFilter(state.filters.maxPrice);
  }, [state]);

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    setUser(null);
  }

  const handleFilterChange = (filterName, value) => {
    dispatchFilter({ type: "SET_FILTER", payload: { filterName, value } });
    closeMinMaxPopup();
  };

  const handleButtonClick = () => {
    if (!isHome) {
      navigate("/");
    }
    handleFilterChange("location", locationFilter);
    handleFilterChange("bath", bathFilter);
    handleFilterChange("bed", bedFilter);
    handleFilterChange("minPrice", minPriceFilter);
    handleFilterChange("maxPrice", maxPriceFilter);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const openMinMaxPopup = () => {
    setMinMaxPopupOpen(true);
  };

  const closeMinMaxPopup = () => {
    setMinMaxPopupOpen(false);
  };

  const openBedBathPopup = () => {
    setBedBathPopup(true);
  };

  const closeBedBathPopup = () => {
    setBedBathPopup(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (user !== null) {
        setNotificationShow(true);
        handleNewMessage();
      }
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleNewMessage = () => {
    toast.dismiss();
    toast.info(
      <div>
        <p> New Message!</p>
        <button
          onClick={() => {
            toast.dismiss();
            setShowMessaging(true);
            setNotificationShow(false);
          }}
        >
          View{" "}
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        closeButton: true,
        className: "confirmation-toast",
      }
    );
  };

  return (
    <div className="div">
      <div className="div-2">
        <div className="div-3">
          <div className="div-4">
            <Link to="/">
              <img
                class="group-6-T94"
                src={logo}
                alt={logo}
                id="I141:2772;1:110"
              />
            </Link>
          </div>
          <div className="div-100">
            <div className="div-8">
              <div className="div-9">
                <ClickableComponent className="div-10">
                  <div className="div-11">Where</div>
                  <input
                    className="div-12"
                    type="text"
                    placeholder="Find your new home..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    onKeyDown={handleEnterPress}
                  />
                </ClickableComponent>
                <ClickableComponent className="div-13">
                  <button
                    className="bedBath-button"
                    onMouseEnter={() => {
                      openBedBathPopup();
                      closeMinMaxPopup();
                    }}
                  >
                    <div className="div-15">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af350dc6-a591-468c-baa3-e3642d76bc54?"
                        className="img-2"
                      />
                      <input
                        type="number"
                        placeholder={bathFilter === 0 ? "Baths..." : bathFilter}
                        onChange={(e) => setBathFilter(e.target.value)}
                        onKeyDown={handleEnterPress}
                        className="number-input"
                        disabled={true}
                      />
                    </div>
                    <div className="div-18">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2377dc-9136-4549-84c6-158a8f299819?"
                        className="img-3"
                      />
                      <input
                        type="number"
                        placeholder={bedFilter === 0 ? "Beds..." : bedFilter}
                        onChange={(e) => setBedFilter(e.target.value)}
                        onKeyDown={handleEnterPress}
                        className="number-input"
                        disabled={true}
                      />
                    </div>
                  </button>
                </ClickableComponent>
                <ClickableComponent className="div-17">
                  <button
                    className="div-21"
                    onMouseEnter={() => {
                      openMinMaxPopup();
                      closeBedBathPopup();
                    }}
                  >
                    <div className="div-22">Price Range</div>
                    <div className="div-23">
                      {minPriceFilter ? "$" + minPriceFilter : "Min"} -{" "}
                      {maxPriceFilter ? "$" + maxPriceFilter : "Max"}
                    </div>
                  </button>
                  <button onClick={handleButtonClick}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c1d4bb4-e80e-4e78-8391-79dc5e262a64?"
                      className="img-4"
                    />
                  </button>
                </ClickableComponent>
              </div>
            </div>
            <div className="div-108">
              <div className="div-308">
                {isBedBathOpen && (
                  <div className="div-301" onMouseLeave={closeBedBathPopup}>
                    <div className="div-302">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af350dc6-a591-468c-baa3-e3642d76bc54?"
                        className="img-2"
                      />
                      <div className="bathText"> Baths</div>
                      <div className="div-401">
                        <button
                          onClick={() => {
                            setBathFilter(bathFilter - 1);
                          }}
                          disabled={bathFilter === 0}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46e673d-7348-497d-8d3a-01e311cfaaf6?"
                            className={bathFilter == 0 ? "disable" : "img-400"}
                          />
                        </button>
                        <div className="div-402">{bathFilter}</div>
                        <button
                          onClick={() => {
                            setBathFilter(bathFilter + 1);
                          }}
                          disabled={bathFilter === maxBedBath}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7e4247-9f23-4c5b-93e9-665cfd790d7d?"
                            className={
                              bathFilter == maxBedBath ? "disable" : "img-400"
                            }
                          />
                        </button>
                      </div>
                    </div>
                    <div className="div-302">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2377dc-9136-4549-84c6-158a8f299819?"
                        className="img-2"
                      />
                      <div className="bathText"> Beds</div>
                      <div className="div-405">
                        <button
                          onClick={() => {
                            setBedFilter(bedFilter - 1);
                          }}
                          disabled={bedFilter === 0}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46e673d-7348-497d-8d3a-01e311cfaaf6?"
                            className={bedFilter == 0 ? "disable" : "img-400"}
                          />
                        </button>
                        <div className="div-402">{bedFilter}</div>
                        <button
                          onClick={() => {
                            setBedFilter(bedFilter + 1);
                          }}
                          disabled={bedFilter === maxBedBath}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7e4247-9f23-4c5b-93e9-665cfd790d7d?"
                            className={
                              bedFilter == maxBedBath ? "disable" : "img-400"
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isMinMaxPopupOpen && (
                <div className="div-101" onMouseLeave={closeMinMaxPopup}>
                  <div className="div-102">
                    <div className="div-103">Min Price</div>
                    <label className="label-style">
                      $
                      <input
                        className="number-input"
                        placeholder="10"
                        type="number"
                        value={minPriceFilter}
                        onChange={(e) =>
                          setMinPriceFilter(
                            parseInt(e.target.value.slice(0, maxDigits))
                          )
                        }
                        onKeyDown={handleEnterPress}
                      />
                    </label>
                  </div>
                  <div className="div-105">
                    <div className="div-106">Max Price</div>
                    <label className="label-style">
                      $
                      <input
                        className="number-input"
                        placeholder="4000"
                        type="number"
                        value={maxPriceFilter}
                        onChange={(e) =>
                          setMaxPriceFilter(
                            parseInt(e.target.value.slice(0, maxDigits))
                          )
                        }
                        onKeyDown={handleEnterPress}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="div-201">
            <div className="div-200" onClick={openModal}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b69ccca-2cca-43a0-b4cf-69bdf3b4e361?"
                className="img-200"
              />
              <div className="div-202">Filters</div>
            </div>
          </div>
          <div className="div-24">
            {userEmail && (
              <>
                <Link to={`/UserProfile/${userEmail}`}>
                  <div
                    className={
                      isUserProfile ? "special-button-colour" : "regular"
                    }
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef4d5567-e4d6-40e8-9039-f16f190f3684?"
                      className="img-5"
                    />
                  </div>
                </Link>
                <div
                  className={isMessaging ? "special-button-colour" : "regular"}
                  onClick={() => {
                    setShowMessaging(true);
                    setNotificationShow(false);
                  }}
                  class="image-container"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/248ce8f4-51d8-4320-a68c-8957a496b0bd?"
                    className="img-6"
                  />
                  {notificationShow ? (
                    <div class="notification-dot"></div>
                  ) : (
                    <></>
                  )}
                </div>
                <Link
                  to={`/Favourites/` + user.email}
                  className={isFavourites ? "special-button-colour" : ""}
                >
                  <div
                    className={
                      isMessaging ? "special-button-colour" : "regular"
                    }
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/97d36e33-6f9a-4165-916f-a11683446465?"
                      className="img-7"
                    />
                  </div>
                </Link>
              </>
            )}
            <div className="div-25">
              {userEmail && (
                <Link to="/">
                  <div onClick={handleLogout}>Logout</div>
                </Link>
              )}
              {!userEmail && (
                <Link to="/Login">
                  <div>Login</div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <FilterModal isOpen={isModalOpen} closeModal={closeModal} />
        {showMessaging && (
          <Messaging
            isOpen={showMessaging}
            onClose={() => setShowMessaging(false)}
          />
        )}
      </div>
    </div>
  );
}
export default Nav;
