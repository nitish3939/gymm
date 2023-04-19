import React, { useState ,useRef, useEffect, Component} from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import ModalForm from "../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DatePicker from "react-datepicker";


import FullCalendar ,{CalendarOptions, CustomButtons, headerToolbar} from '@fullcalendar/react';

import timeGridPlugin from '@fullcalendar/timegrid';


import interactionPlugin from '@fullcalendar/interaction';


import CustomCalendarDropDown from '../components/CustomDropdown/CustomCalendarDropDown';


import moment from 'moment';

const WorkoutHistory  = (date) => {
    
      



// const customDates = [
     
//     { date: new Date("2023-03-20T00:00:00"), content: 'Present' },
    
    
//   ];
//   const calendarOptions: CalendarOptions = {
//     plugins: [timeGridPlugin],
//     initialView: 'timeGridWeek',
//     dayCellContent: (arg) => {
//       const { date } = arg;
//       const customDate = customDates.find((d) => d.date.toISOString().slice(0, 10) === date.toISOString().slice(0, 10));
//       if (customDate) {
//         return (
//           <div>
//              {/* <span>{arg.date.getDate()}</span> */}
            
//             <div onClick={() => setdeleteModal(true)} className='addEnquiryBtn gap-3 d-flex align-items-center w-auto'>
//             {customDate.content}
//             </div>
//             <ModalForm

// name={'deleteModal'}
// show={deleteModal}
// onHide={() => setdeleteModal(false)}
// />
//           </div>
//         );
//       }
//     },
    
    
// };








const [currentMonth, setCurrentMonth] = useState('');

  function handleDatesSet(info) {
    const calendarApi = info.view.calendar;
    const currentMonthDate = calendarApi.view.currentStart;
    const currentMonthName = calendarApi.formatDate(currentMonthDate, { month: 'long' });
    setCurrentMonth(currentMonthName);
  }
  
    const [chestModal, setchestModal] = useState(false);


const events =

[
  {
    title: 'Present',
    start: '2023-03-29',
    allDay: true ,
    classNames: ["present EventBTN"],
    
  },
  
  {

  title: 'Absent',
    start: '2023-03-28', 
    allDay: true ,
    classNames: ["absent EventBTN"],
   
  },
  {
    classNames: ["hasEvent"],
    title: 'Event 2',
    start: '2023-03-30T07:00:00', 
   
  },
  
  
];


  const eventContent = (info) => {
    if(info.event.classNames.includes('hasEvent') ){
    return (
      <>
        {/* <div>{info.timeText}</div> */}
        {/* <div>{info.event.title}</div> */}
        
        <div className={classNames("addEnquiryBtn")}>
                    
                    <div className="eventModalBTN "> Chest, Back Day </div> 
                    
                </div>
                

      </>
    );
      }else{
        return <div>{info.event.title}</div>;
      }
  };
  

  const slotLabelFormat = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: 'short'
   
  };
  


  useEffect(() => {
    const paragraphs = document.querySelectorAll('.fc-header-toolbar');
    paragraphs.forEach((paragraph) => {
      const text = paragraph.textContent;
      const words = text.split(' ');
      const lastThreeWords = words.slice(-2);
  
      const newHtml = words.map((word, index) => {
        if (lastThreeWords.includes(word)) {
          if (index >= words.length - 3) {
            return `<div class="lastThreeWords">${word}  <span class="presentDays"> <span class="material-icons ">circle</span> Present Days (24)</span> <span class="absentDays"> <span class="material-icons ">circle</span>Absent Days (6)</span> </div>`;
          }
          //return word;
        }
        //return word;
      }).join(' ');
  
      paragraph.innerHTML = newHtml;
    });
  }, []);

  
 const calendarRef = useRef(null);
 
  


 class CustomToolbar extends Component {
  constructor(props) {
    super(props);
   
    const date = moment();
    
    this.state = {
      view: 'month',
      year: date.year(),
      month: date.month(),
    };

    this.onViewChange = this.onViewChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
  }
 
  onViewChange(view) {
    this.setState({ view });
    this.props.onViewChange(view);
  }

  onYearChange(event) {
    const year = parseInt(event.target.value, 10);
    const date = moment({ year, month: this.state.month });
    this.setState({ year, date });
    this.props.onDateChange(date);
  }

  onMonthChange(event) {
    const month = parseInt(event.target.value, 10);
    const date = moment({ year: this.state.year, month });
    this.setState({ month, date });
    this.props.onDateChange(date);
  }

  render() {
    const yearRange = Array.from({ length: 10 }, (v, k) => moment().year() + k);
    const monthRange = moment.months();

    return (
      <div className="fc-toolbar">
        <div className="fc-left">
        </div>
        <div className="fc-center">
         
          <select className='monthDropDownFull' value={this.state.month} onChange={this.onMonthChange}>
            {monthRange.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select className='yearDropDownFull' value={this.state.year} onChange={this.onYearChange}>
            {yearRange.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}



  const renderCustomComponent = () => {
    return <CustomToolbar />;
  };



    return (
        <>
        <div  className='editMemberProfilePage '> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
            Workout History
            
            </h1>
        <div className='row'>
               <div className='col-12 mb-3 mt-2'>
                   
                   <div className='memberInfoBoxes'>
                     <div className='d-flex'>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>Mobile Number</h5>
                                 <p>+91-9988776642</p>
                            </div>
                        </div>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>Email ID</h5>
                                 <p>abc@gmail.com</p>
                            </div>
                        </div>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>DOB</h5>
                                 <p>Client ID : 230492</p>
                            </div>
                        </div>
                       
                     </div>
                     <div className='d-flex secondRowInfoBox'>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>Aniversary Date</h5>
                                 <p>Client ID : 230492</p>
                            </div>
                        </div>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>Emergency Contact Name</h5>
                                 <p>Client ID : 230492</p>
                            </div>
                        </div>
                        <div className='col-4 boxStart'>
                            <div className='infoMainBox'>
                                 <h5>Emergency Contact No</h5>
                                 <p>+91-9988776642</p>
                            </div>
                        </div>
                       
                     </div>
                    
                      
                     
                         
                   </div>
                    
               </div>

             


        </div>

        <div className='row mt-4 pt-1 workoutRowTwo'>
             <div className='d-inline-flex justify-content-between'>
                   <div>
                        <h6>Workout History </h6> 
                        <p> Change Workout</p> 
                   </div>
                   <div className='workoutRowCalendar'>
                      <CustomCalendarDropDown/>
                   </div>
             </div>
        </div>
        <div className='row workoutBoxesRow '>

   { [...Array(9)].map(() => 
   
           <div className='workoutBox col-4'>
                <div className='workoutBoxHeader d-flex'>
                  <div className='w-50'>
                      Workout Name
                  </div>
                  <div className='w-50 ps-3'>
                    Status
                  </div>
                </div>
                <div className='workoutBoxBody d-flex'>
                    <div className='w-50'>
                        Chest Workout                  
                    </div>
                  <div className='w-50 ps-4 ms-4'>
                      <div className='workoutBoxBtn text-light bg-green'>
                        Done
                      </div>
                  </div>
                  <span onClick={() => setchestModal(true)} class="material-icons ">remove_red_eye</span>
                  <ModalForm name={'chestModal'} show={chestModal} onHide={() => setchestModal(false)}/>
                </div>
           </div>

)}
        </div> 







            <section className='attendanceMainSection'>
                                    <div className='col-12 mt-3 pt-2'>
                                <div className='membershipsTabsStyle'>
                                    <section className={classNames('section', styles.followUpsWrapper)}>
                                    
                                        <div className='tableWrapperOuter'>
                                            <div className='tableHeading d-inlinr-flex justify-content-between'>
                                                <p className='currentMonth pt-3'> 
                                                    {currentMonth}  
                                                </p>
                                                <div className='customFullMonthYear'>{<CustomToolbar/>}</div>
                                            </div>
                                            <div className='tableWrapper d-inline-flex gap-3   '>
                                               
                                           




                                                
                    

                      
   
<div  id='fullCalendar'>





<FullCalendar 
 //{...calendarOptions}
  plugins={[ timeGridPlugin, interactionPlugin ]}
  initialView="timeGridWeek"
  dayHeaderFormat={{ weekday: 'short', day: 'numeric'}}
  
  titleFormat={ {month: "long" }}
  
    datesSet={handleDatesSet}
  selectable={true}

  events={events}

  
eventContent={eventContent}
 
headerToolbar={{
    left: 'prev,next ',
    center:  "",
    right: " renderMonthDropdown",
    
  }}
  
  slotLabelFormat={slotLabelFormat}
  slotDuration="01:00:00"
  ref={calendarRef}
  

  
/>

   </div> 
           
                     

                                            </div>
                                           
                                        </div>
                                    </section> 
                                                            
                                                    
                                                        
                                                        
                                                        
                                            
                                </div>
                                    </div>
            </section>

        </div>


           

            
        </>
    )
}

export default WorkoutHistory