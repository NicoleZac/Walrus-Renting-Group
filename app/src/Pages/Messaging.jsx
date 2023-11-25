import PropTypes from "prop-types";
import React from "react";
import "./Messaging.css";
import Send from '../Images/PropertyPics/send.png'
import Calendar from '../Images/PropertyPics/calendar.png'
import Matthew from '../Images/PropertyPics/matthew.png'
import Drake from '../Images/PropertyPics/drake.png'
import Anger from '../Images/PropertyPics/Anger.png'
import Search from '../Images/PropertyPics/search.png'

export const Messaging = () => {
  return (
    <div className = "messaging">
      <div className = "overlap-wrapper1">
        <div className = "overlap1">
          <div className = "overlap2">
            <div className = "search-bar-wrapper">
              <div className = "search-bar">
                <div className = "frame-wrapper1">
                  <div className = "frame-3">
                    <div className = "text-wrapper">Write a message...</div>
                  </div>
                </div>
                <img className="send" alt="Send" src={Send}/>
              </div>
            </div>
            <div className = "div-wrapper">
              <div className = "frame-4">
                <div className = "text-wrapper-2">Drake The Demon</div>
                <div className = "frame-5s">
                  <div className="text-wrapper-3">View Availability</div>
                  <img className="calendar" alt="Calendar" src={Calendar}/>
                </div>
              </div>
            </div>
            
            <div className="frame-6">
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <div className="rectangle" />
                  <div className="frame-7">
                    <div className="user-card">
                      <div className = "frame25">
                        <img className="matthew" alt="Matthew" src={Matthew}/>
                        <div className="div25">
                          <div className="textwrapper25">Matthew Roberts</div>
                          <div className="textwrapper25-2">How are you doing?</div>
                        </div>
                        <div className="group25">
                          <div className="overlap-group25">
                            <div className="text-wrapper25-3">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-card">
                      <div className = "frame25">
                        <img className="drake" alt="Drake" src={Drake}/>
                        <div className="div25">
                          <div className="textwrapper25">Drake the Demon</div>
                          <div className="textwrapper25-2">I have a house for you</div>
                        </div>
                        <div className="group25">
                          <div className="overlap-group25">
                            <div className="text-wrapper25-3">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user-card">
                      <div className = "frame25">
                        <img className="anger" alt="Anger" src={Anger}/>
                        <div className="div25">
                          <div className="textwrapper25">Anger Issues</div>
                          <div className="textwrapper25-2">You: I am interested</div>
                        </div>
                        <div className="group25">
                          <div className="overlap-group25">
                            <div className="text-wrapper25-3">3</div>
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
                  <div className="text-wrapper-4">Search your messages</div>
                  <div className="text-wrapper-5">John Smith</div>
                </div>
              </div>
              <img className="search" alt="Search" src={Search} />
            </div>
          </div>
          <div className="frame-11">
              <div className="frame-12">
                <div className="frame-screen">
                  <div className="frame-6-variant3p">
                    <div className="frame-variant">
                      <div className="framepp">
                        <p className="text-wrapperpp">
                          Hello, are you free tomorrow at 2pm for a viewing?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-6-variant3">
                  <div className="frame-instance">
                    <div className="framep">
                      <p className="text-wrapperp">
                        Yes, I am! Please make sure to complete the form, prepare a reference letter, and some form of identification. See you then.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Messaging;
