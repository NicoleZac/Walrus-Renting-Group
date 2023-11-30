import React, { useState } from "react";
import "./CreateCalendar.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Calendar = () => {

    
    const [day1, setDay1Value] = useState('28');
    const [day2, setDay2Value] = useState('29');
    const [day3, setDay3Value] = useState('30');
    const [day4, setDay4Value] = useState('1');
    const [day5, setDay5Value] = useState('2');
    const [day6, setDay6Value] = useState('3');
    const [day7, setDay7Value] = useState('4');
    // const [isVisible, setIsVisible] = useState(false);
    const [MonVisible, setMonVisible] = useState(false);
    const [WedVisible, setWedVisible] = useState(false);
    const [ThurVisible, setThurVisible] = useState(false);
    const [Thur1, setThur1] = useState(true);
    const [Thur2, setThur2] = useState(true);
    const [Thur3, setThur3] = useState(true);
    const [Thur4, setThur4] = useState(true);
    const [Thur5, setThur5] = useState(true);
    const [Thur6, setThur6] = useState(true);
    const [BCt1, setBCt1] = useState('white');
    const [BCt2, setBCt2] = useState('white');
    const [BCt3, setBCt3] = useState('white');
    const [BCt4, setBCt4] = useState('white');
    const [BCt5, setBCt5] = useState('white');
    const [BCt6, setBCt6] = useState('white');

    const Thur1Click = () => {
      setBCt1('grey');
    };
    const Thur2Click = () => {
      setBCt2('grey');
    };
    const Thur3Click = () => {
      setBCt3('grey');
    };
    const Thur4Click = () => {
      setBCt4('grey');
    };
    const Thur5Click = () => {
      setBCt5('grey');
    };
    const Thur6Click = () => {
      if(BCt6 == 'white'){
        setBCt6('grey');
      }
      else{
        setThur1(false);
        setThur2(false);
        setThur3(false);
        setThur4(false);
        setThur5(false);
        setThur6(false);
        setThurVisible(true);
      }
    };


    const [Mon1, setMon1] = useState(true);
    const [Mon2, setMon2] = useState(true);
    const [Mon3, setMon3] = useState(true);
    const [Mon4, setMon4] = useState(true);
    const [Mon5, setMon5] = useState(true);
    const [Mon6, setMon6] = useState(true);
    const [BCm1, setBCm1] = useState('white');
    const [BCm2, setBCm2] = useState('white');
    const [BCm3, setBCm3] = useState('white');
    const [BCm4, setBCm4] = useState('white');
    const [BCm5, setBCm5] = useState('white');
    const [BCm6, setBCm6] = useState('white');

    const Mon1Click = () => {
      setBCm1('grey');
    };
    const Mon2Click = () => {
      setBCm2('grey');
    };
    const Mon3Click = () => {
      setBCm3('grey');
    };
    const Mon4Click = () => {
      setBCm4('grey');
    };
    const Mon5Click = () => {
      setBCm5('grey');
    };
    const Mon6Click = () => {
      if(BCm6 == 'white'){
        setBCm6('grey');
      }
      else{
        setMon1(false);
        setMon2(false);
        setMon3(false);
        setMon4(false);
        setMon5(false);
        setMon6(false);
        setMonVisible(true);
      }
    };
    

    const [Wed1, setWed1] = useState(true);
    const [Wed2, setWed2] = useState(true);
    const [Wed3, setWed3] = useState(true);
    const [Wed4, setWed4] = useState(true);
    const [Wed5, setWed5] = useState(true);
    const [Wed6, setWed6] = useState(true);
    const [Wed7, setWed7] = useState(true);
    const [Wed8, setWed8] = useState(true);
    const [BCw1, setBCw1] = useState('white');
    const [BCw2, setBCw2] = useState('white');
    const [BCw3, setBCw3] = useState('white');
    const [BCw4, setBCw4] = useState('white');
    const [BCw5, setBCw5] = useState('white');
    const [BCw6, setBCw6] = useState('white');
    const [BCw7, setBCw7] = useState('white');
    const [BCw8, setBCw8] = useState('white');
    

    const Wed1Click = () => {
      setBCw1('grey');
    };
    const Wed2Click = () => {
      setBCw2('grey');
    };
    const Wed3Click = () => {
      setBCw3('grey');
    };
    const Wed4Click = () => {
      setBCw4('grey');
    };
    const Wed5Click = () => {
      setBCw5('grey');
    };
    const Wed6Click = () => {
      setBCw6('grey');
    };
    const Wed7Click = () => {
      setBCw7('grey');
    };
    const Wed8Click = () => {
      if(BCw8 == 'white'){
        setBCw8('grey');
      }
      else{
        setWed1(false);
        setWed2(false);
        setWed3(false);
        setWed4(false);
        setWed5(false);
        setWed6(false);
        setWed7(false);
        setWed8(false);
        setWedVisible(true);
      }
    };

    const handleForwardClick = () => {
        // Change the value when the icon is clicked
        setDay1Value('5');
        setDay2Value('6');
        setDay3Value('7');
        setDay4Value('8');
        setDay5Value('9');
        setDay6Value('10');
        setDay7Value('11');
        setThurVisible(false);
        setWedVisible(false);
        setMonVisible(false);
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
        setThurVisible(true);
        setWedVisible(true);
        setMonVisible(true);
      };
      

  return (
    <div className="calendar" >
      <div className="overlap">
        <div className="frame">
          <div className="text-wrapper">December</div>
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
        <div className="overlap-group-wrapper">
              {Thur1 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCt1 }} > <div className="rectanglet1" style={{height: 37, borderRadius: 0}} onClick={Thur1Click}/> </div>}
              {Thur2 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCt2 }} > <div className="rectanglet2" style={{height: 37, borderRadius: 0}} onClick={Thur2Click}/> </div>}
              {Thur3 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCt3 }} > <div className="rectanglet3" style={{height: 37, borderRadius: 0}} onClick={Thur3Click}/> </div>}
              {Thur4 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCt4 }} > <div className="rectanglet4" style={{height: 37, borderRadius: 0}} onClick={Thur4Click}/> </div>}
              {Thur5 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCt5 }} > <div className="rectanglet5" style={{height: 37, borderRadius: 0}} onClick={Thur5Click}/> </div>}
              {Thur6 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCt6}} > <div className="rectanglet6" style={{height: 37, borderRadius: 0}} onClick={Thur6Click} /> </div>}
        </div>
        {( ThurVisible) &&
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
          <div className="rectangle" />
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">08:00 - 11:00</div>
          </div>
        </div>}
        <div className="overlap-wrapper">
              {Mon1 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCm1 }} > <div className="rectanglew1" style={{height: 37, borderRadius: 0}} onClick={Mon1Click}/> </div>}
              {Mon2 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCm2 }} > <div className="rectanglew2" style={{height: 37, borderRadius: 0}} onClick={Mon2Click}/> </div>}
              {Mon3 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCm3 }} > <div className="rectanglew3" style={{height: 37, borderRadius: 0}} onClick={Mon3Click}/> </div>}
              {Mon4 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCm4 }} > <div className="rectanglew4" style={{height: 37, borderRadius: 0}} onClick={Mon4Click}/> </div>}
              {Mon5 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCm5 }} > <div className="rectanglew5" style={{height: 37, borderRadius: 0}} onClick={Mon5Click}/> </div>}
              {Mon6 && <div className="overlap-group-2" style={{height: 37, borderRadius: 0, backgroundColor: BCm6}} > <div className="rectanglew6" style={{height: 37, borderRadius: 0}} onClick={Mon6Click} /> </div>}
        </div>
        {(MonVisible) && <div className="overlap-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">11:30 - 14:30</div>
          </div>
        </div>}
        <div className="div-wrapper">
              {Wed1 && <div className="overlap-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCw1 }} > <div className="rectanglew1" style={{height: 37, borderRadius: 0}} onClick={Wed1Click}/> </div>}
              {Wed2 && <div className="overlap-2" style={{height: 37, borderRadius: 0,  backgroundColor: BCw2 }} > <div className="rectanglew2" style={{height: 37, borderRadius: 0}} onClick={Wed2Click}/> </div>}
              {Wed3 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw3 }} > <div className="rectanglew3" style={{height: 37, borderRadius: 0}} onClick={Wed3Click}/> </div>}
              {Wed4 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw4 }} > <div className="rectanglew4" style={{height: 37, borderRadius: 0}} onClick={Wed4Click}/> </div>}
              {Wed5 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw5 }} > <div className="rectanglew5" style={{height: 37, borderRadius: 0}} onClick={Wed5Click}/> </div>}
              {Wed6 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw6}} > <div className="rectanglew6" style={{height: 37, borderRadius: 0}} onClick={Wed6Click} /> </div>}
              {Wed7 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw7}} > <div className="rectanglew6" style={{height: 37, borderRadius: 0}} onClick={Wed7Click} /> </div>}
              {Wed8 && <div className="overlap-2" style={{height: 37, borderRadius: 0, backgroundColor: BCw8}} > <div className="rectanglew6" style={{height: 37, borderRadius: 0}} onClick={Wed8Click} /> </div>}
        </div>
        {(WedVisible) && <div className="div-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-6">Free</div>
            <div className="text-wrapper-7">13:00 - 17:00</div>
          </div>
        </div>}
      </div>
    </div>
  );
}
export default Calendar;