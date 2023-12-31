import React, { useState } from "react";
import Modal from "react-modal";
import "./Calendar.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CalendarModal = ({ isOpen, closeModal }) => {

    
    const [day1, setDay1Value] = useState('28');
    const [day2, setDay2Value] = useState('29');
    const [day3, setDay3Value] = useState('30');
    const [day4, setDay4Value] = useState('1');
    const [day5, setDay5Value] = useState('2');
    const [day6, setDay6Value] = useState('3');
    const [day7, setDay7Value] = useState('4');
    const [isVisible, setIsVisible] = useState(true);

    const handleForwardClick = () => {
        // Change the value when the icon is clicked
        setDay1Value('5');
        setDay2Value('6');
        setDay3Value('7');
        setDay4Value('8');
        setDay5Value('9');
        setDay6Value('10');
        setDay7Value('11');
        setIsVisible(false);
      };
      const handleBackClick = () => {
        // Change the value when the icon is clicked
        setDay1Value('28');
        setDay2Value('29');
        setDay3Value('30');
        setDay4Value('1');
        setDay5Value('2');
        setDay6Value('3');
        setDay7Value('4');
        setIsVisible(true);
      };
    
    //  const [isHoveredF, setIsHoveredF] = useState(false);
    //  const [isHoveredB, setIsHoveredB] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Calendar Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          display:isOpen ? 'block' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right:0,
          bottom: 0,
          zIndex: 2,
         },
        content: {
          width: '55%', // Adjust the width as needed
          height: '95%', // Adjust the height as needed
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto', // Enable scrolling
          top: '0%',
        },
      }}
    >
    <div className="calendar" >
      <div className="overlap">
        <div className="frame">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div>
              <div className="save-1" onClick={closeModal}>
                <span style={{ fontSize: "25px", marginLeft: "2.3rem", marginTop: "0.8rem", color: "#545454",	fontFamily: "Roboto-Regular, Helvetica"}}>Close</span>
              </div>
            </div>
            <div className="text-wrapper">December</div>
            <div className="schedule-toggle">
                
            </div>
          </div>
        </div>
      </div>
      <div className="div-time">
        <div className="text-wrapper-2">08:00</div>
        <div className="text-wrapper-3">09:00</div>
        <div className="text-wrapper-3">10:00</div>
        <div className="text-wrapper-3">11:00</div>
        <div className="text-wrapper-3">12:00</div>
        <div className="text-wrapper-3">13:00</div>
        <div className="text-wrapper-3">14:00</div>
        <div className="text-wrapper-3">15:00</div>
        <div className="text-wrapper-3">16:00</div>
        <div className="text-wrapper-3">17:00</div>
        <div className="text-wrapper-3">18:00</div>
      </div>
      <div className="frame-2">
        <ArrowBackIosIcon class="group-49-NEn"  id="165:6276" onClick={handleBackClick} />
        <div className="text-wrapper-4">SUN</div>
        <div className="text-wrapper-4">MON</div>
        <div className="text-wrapper-4">TUE</div>
        <div className="text-wrapper-4">WED</div>
        <div className="text-wrapper-4">THU</div>
        <div className="text-wrapper-4">FRI</div>
        <div className="text-wrapper-4">SAT</div>
        <ArrowForwardIosIcon class="group-48-NEn"  id="164:6276" onClick={handleForwardClick}  /> 
      </div>
      <div className="frame-3" style={{ display: 'flex' }}>
        <div className="text-wrapper-5">{day1}</div>
        <div className="text-wrapper-5">{day2}</div>
        <div className="text-wrapper-5">{day3}</div>
        <div className="text-wrapper-5">{day4}</div>
        <div className="text-wrapper-5">{day5}</div>
        <div className="text-wrapper-5">{day6}</div>
        <div className="text-wrapper-5">{day7}</div>
      </div>
      <div className="overlap-group">
        <div className="frame-4">
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
            <div class="vl"></div>
        </div>
        {isVisible && <div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
          <div className="rectangle" />
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">08:00 - 11:00</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">11:30 - 14:30</div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">13:00 - 17:00</div>
          </div>
        </div>
        </div>}
      </div>
    </div>
    </Modal>
  );
};
export default CalendarModal;