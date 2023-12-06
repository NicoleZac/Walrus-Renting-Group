import React, { useState } from "react";
import "./Messaging.css";
import Send from "../Images/PropertyPics/send.png";
import Calendar from "../Images/PropertyPics/calendar.png";
import Matthew from "../Images/PropertyPics/matthew.png";
import Landlord from "../Images/PropertyPics/Landlord.png";
import Anger from "../Images/PropertyPics/Anger.png";
import Search from "../Images/PropertyPics/search.png";
import { Link } from "react-router-dom";
import CalendarModal from "../Components/Special/Calendar";

export const Messaging = ({ isOpen, onClose }) => {
  const [isBorderWhite, setIsBorderWhite] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [isTextColored, setIsTextColored] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSend = () => {
    setIsBorderWhite(false);
    setHasShadow(true);
    setIsTextColored(true);
  };

  // };
  /* For view availability button */
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSearch = () => {};

  /* Should go to landlord profiles*/
  const matthewProfile = () => {};

  const drakeProfile = () => {
    const email = "resaLmother@email.com"; // The email you want to navigate to
    window.location.href = `/UserProfile/${email}`;
  };

  const angerProfile = () => {};

  return (
    <>
      {isOpen && (
        <div className="messaging">
          <div className="modal-container">
            <div className="overlap-wrapper1">
              <div className="overlap1">
                <div className="overlap2">
                  <div className="search-bar-wrapper">
                    <div className="search-bar">
                      <div className="frame-wrapper1">
                        <div className="frame-3">
                          <input
                            type="text"
                            className="text-input"
                            placeholder="Write a message..."
                          />
                        </div>
                      </div>
                      <button onClick={handleSend}>
                        <img
                          className="send"
                          alt="Send"
                          loading="lazy"
                          src={Send}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="frame-4">
                      <div className="text-wrapper-2">Teressa Mother</div>
                      <div className="frame-5s">
                        <div className="text-wrapper-3">View Availability</div>
                        <button onClick={openModal}>
                          <img
                            className="calendar-icon"
                            alt="Calendar"
                            loading="lazy"
                            src={Calendar}
                          />
                        </button>
                        <CalendarModal
                          isOpen={isModalOpen}
                          closeModal={closeModal}
                        />
                        <span className="close-message" onClick={onClose}>
                          &times;
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="frame-6">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-13">
                        <div className="rectangle" />
                        <div className="frame-7">
                          <div className="user-card">
                            <div className="frame25">
                              <button onClick={drakeProfile}>
                                <img
                                  className="drake"
                                  alt="Drake"
                                  loading="lazy"
                                  src={Landlord}
                                />
                                <Link
                                  to={`/UserProfile/resaLmother@email.com`}
                                ></Link>
                              </button>
                              <div className="div25">
                                <div className="textwrapper25">
                                  Teressa Mother
                                </div>
                                <div className="textwrapper25-2">...</div>
                              </div>
                              {/* <div className="group25">
                                  <div className="overlap-group25">
                                    <div className="text-wrapper25-3">3</div>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                          <div className="user-card">
                            <div className="frame25">
                              <button onClick={matthewProfile}>
                                <img
                                  className="matthew"
                                  alt="Matthew"
                                  loading="lazy"
                                  src={Matthew}
                                />
                              </button>
                              <div className="div25">
                                <div className="textwrapper25">
                                  Matthew Roberts
                                </div>
                                <div className="textwrapper25-2">
                                  How are you doing?
                                </div>
                              </div>
                              <div className="group25">
                                <div className="overlap-group25">
                                  <div className="text-wrapper25-3">3</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="user-card">
                            <div className="frame25">
                              <button onClick={angerProfile}>
                                <img
                                  className="anger"
                                  alt="Anger"
                                  loading="lazy"
                                  src={Anger}
                                />
                              </button>
                              <div className="div25">
                                <div className="textwrapper25">
                                  Anger Issues
                                </div>
                                <div className="textwrapper25-2">
                                  You: I am interested
                                </div>
                              </div>
                              <div className="group25">
                                <div className="overlap-group25">
                                  <div className="text-wrapper25-3">1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-bar-2">
                    <div className="frame-9">
                      <div className="frame-3">
                        <input
                          type="text"
                          className="text-wrapper-5"
                          placeholder="Search your messages"
                        />
                      </div>
                    </div>
                    <button onClick={handleSearch}>
                      <img
                        className="search"
                        alt="Searcn"
                        loading="lazy"
                        src={Search}
                      />
                    </button>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="frame-12">
                    <div className="frame-screen">
                      <div className="frame-6-variant3p">
                        <div
                          className={
                            isBorderWhite
                              ? "frame-variant white-border"
                              : `frame-variant ${
                                  hasShadow ? "with-shadow" : ""
                                }`
                          }
                        >
                          <div className="framepp">
                            <p
                              className={
                                isTextColored
                                  ? "text-wrapperpp colored-text"
                                  : "text-wrapperpp"
                              }
                            >
                              Hello, are you free Thursday at 11 am for a
                              viewing?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Messaging;
