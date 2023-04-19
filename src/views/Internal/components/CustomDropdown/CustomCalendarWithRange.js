import React, {  useEffect, useRef,Component, useState } from 'react'
import ModalForm from "../ModalForm";

import Form from 'react-bootstrap/Form';



import Datepicker, { CalendarContainer } from 'react-datepicker';
//import Datepicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

// import { DateRangePicker } from 'react-date-range';


//  import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

 //import { addDays } from 'date-fns';
// import { useState } from 'react';






const CustomCalendarWithRange = ({title}) => {
    
  

  // const [startDate, setStartDate] = React.useState(null);
  const calRef = React.useRef();


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };




    




  
  return (
      <>

          

<div className='CustomCalendarDatePicker'>
                      
                       <Form.Group className=" ModalFormInputField" >
                          {/* <Form.Label>Start Date </Form.Label> */}
                          
                          
    <Datepicker
     ref={calRef}
      showIcon
      
      //onChange={date => setStartDate(date)}
      //onChange={onChange}
      //peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select" 
      className="form-control datePickerClass"
      shouldCloseOnSelect={false}
      monthsShown={2}
      selectsRange
      
      //showTimeSelect
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
     
    //isClearable
    placeholderText=" dd/mm/yyyy"
  //   customInput={<input placeholder='dd/mm/yyyy' className='form-control '  />}
    id={'fromdateApply'}
    

    
    calendarContainer={CalendarContainer}
    
  

    >

<div className='customRangeLable'>
  <div className='innerLabelRange'> 
      <div className='lableRange'> All Time</div>
      <div className='lableRange'>Today</div>
      <div className='lableRange'>Yesterday</div>
      <div className='lableRange'>Last Week</div>
      <div className='lableRange'> Last Months</div>
      <div className='lableRange'>This Year </div>
      <div className='lableRange'> Custom</div>
  </div>
</div>



<div className='d-flex col-12'> 
<div className='col-6'> </div>
<div className='col-4'> 
<div className='customTimeRange'>
  <select className='selectOne'> 6:00
    
    <option>7:00</option>
    <option>8:00</option>
    <option>9:00</option>
    <option>10:00</option>
    <option>11:00</option>
</select>
<div>
  <select className='selectTwo'> am
    
    <option>am</option>
    <option>pm</option>
    
</select>


</div>
</div>
</div>
</div>

   <div className='twoBTNSection d-flex col-12'>
      <div className='col-8'>
</div>
     <div className='col-4 gap-2 d-inline-flex datePickerChildren'> 
     <button className='clearDateBtn'
        onClick={() => {
          setStartDate(null);
          calRef.current.setOpen(false);
        }}
      >
        Cancel
      </button>
      <button className='applyDateBtn'
        onClick={() => {
          calRef.current.setOpen(false);
        }}
      >
        Apply
      </button>
      </div>
    </div>
</Datepicker>


    <span class="material-icons calendarIcon" htmlFor='fromdateApply'>calendar_month_icon</span>


                      </Form.Group>
                    
                    
                      </div>









      </>
  )
}




 export default CustomCalendarWithRange