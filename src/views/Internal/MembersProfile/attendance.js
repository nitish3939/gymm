import React, { useState } from 'react'
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



const Attendance  = () => {
    // const [smsModal, setSmsModal] = useState(false);
    // const [notificationModal, setnotificationModal] = useState(false);
    // const [editEnquiry, setEditEnquiryModal] = useState(false);

    // const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    // const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    // const gender = ["Femal", "Male", "Other"];
    // const Attendence = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    // const rowPerPage =["5", "10","20","50"] 

    // const [keyMember, setkeyMember] = useState('activeMember');
    // const page = ["All", "1", "2", "3", "4", "5", "6"];

     

    const [startDate, setStartDate] = React.useState(null);
    const calRef = React.useRef();
    const [key, setKey] = useState('generalTraining');
    const fitnessCenter = <span className="material-icons-outlined">fitness_center</span>;




    const RenderCustomHeader = ({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const MonthSingle = date.toLocaleString("default", { month: "long" });
        return (
<div className='col-12 d-flex monthAndDropDown px-3'>

<div className='col-3 singleMonthsSec d-inline-flex '>
    
 <div className='singleMonths'>   {`${MonthSingle }`}</div> 
        <div className='gap-3 d-flex'>
            <button disabled={prevMonthButtonDisabled} onClick={decreaseMonth}>{<span class="material-icons arrowBack"> chevron_left </span>}</button>
            <button disabled={nextMonthButtonDisabled} onClick={increaseMonth}>{<span class="material-icons arrowBack"> chevron_right </span>}</button>
        </div>
</div>
<div className='col-9 attendanceMonthYear gap-2 d-inline-flex justify-content-end'>
            <select value={month} onChange={(e) => setStartDate(new Date(year, parseInt(e.target.value), 1))}>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(year, i, 1).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <select value={year} onChange={(e) => setStartDate(new Date(parseInt(e.target.value), month, 1))}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={year - 5 + i}>
                  {year - 5 + i}
                </option>
              ))}
            </select>
            </div>
          </div>
        );
      };


    return (
        <>
        <div className='editMemberProfilePage '> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
            Attendance History
            
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
            
            <section className='attendanceMainSection'>
                                    <div className='col-12 mt-3 pt-2'>
                                <div className='membershipsTabsStyle'>
                                    <section className={classNames('section', styles.followUpsWrapper)}>
                                    
                                        <div className='tableWrapperOuter'>
                                            <div className='tableHeading'>

                                            
                                            </div>
                                            <div className='tableWrapper d-inline-flex gap-3   '>
                                               
                                           




                                                
                       <div className=''>

                       {/* <div className='col-3'><RenderCustomHeader/> </div> */}
<Tabs activeKey={key} onSelect={(k) => setKey(k)} className=" ps-2  TabWrapper  gap-0">
<Tab eventKey="generalTraining" tabClassName=" ModalFormTabs" title={ <span>{fitnessCenter}  General Training</span>} > </Tab>
    <Tab eventKey="Training" tabClassName=" ModalFormTabs" title={<span> {fitnessCenter} Personal Training</span>} ></Tab>
            
   
<div eventKey="generalTraining" >

    <DatePicker
      ref={calRef}
       showIcon={true}
       selected={startDate}
       onChange={date => setStartDate(date)}
       peekNextMonth
       showMonthDropdown
       showYearDropdown
       dropdownMode="select" 
       className="form-control datePickerClass"
       shouldCloseOnSelect={false}
       monthsShown={1}
       inline
       placeholderText={" dd/mm/yyyy"}
       id={'fromdateApply'}
       calendarContainer={({ children }) => (
        <div className=''>
            <div className='d-inline-flex attendanceTotal gap-5 my-2 px-3'>
                <p className='d-inline-flex align-items-center done m-0'><span class="material-icons ">fiber_manual_record </span> Present Days (24) </p> 
                <p className='d-inline-flex align-items-center hot ms-3 m-0'><span class="material-icons ">fiber_manual_record </span> Absent Days (6)</p>
            </div>
             {children}</div>
      )}
      renderCustomHeader={RenderCustomHeader}

     
     >



   
</DatePicker>

   </div> 
   <div eventKey="Training" >
    
        
    <DatePicker
      ref={calRef}
       showIcon={true}
       //showIcon={<span class="material-icons calendarIcon" htmlFor='fromdateApply'>calendar_month_icon</span>}
       selected={startDate}
       onChange={date => setStartDate(date)}
       peekNextMonth
       showMonthDropdown
       showYearDropdown
       dropdownMode="select" 
       className="form-control datePickerClass"
       shouldCloseOnSelect={false}
       monthsShown={1}
       inline
     
      placeholderText={" dd/mm/yyyy"}
   
     id={'fromdateApply'}
     

     calendarContainer={({ children }) => (
        <div className='123'>
             <div className='d-inline-flex attendanceTotal gap-5 my-2 px-3'>
                <p className='d-inline-flex align-items-center done m-0'><span class="material-icons ">fiber_manual_record </span> Present Days (24) </p> 
                <p className='d-inline-flex align-items-center hot ms-3 m-0'><span class="material-icons ">fiber_manual_record </span> Absent Days (6)</p>
            </div>
             {children}</div>
      )}
      renderCustomHeader={RenderCustomHeader}
     >



   
</DatePicker>
 
   </div>           
                     
        </Tabs>           
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

export default Attendance