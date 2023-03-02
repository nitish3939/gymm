import React, { useState, useEffect, useRef } from 'react'
import ModalForm from "../ModalForm";

import Form from 'react-bootstrap/Form';


import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CustomCalendarDropDown = ({title}) => {







    
    const originalDate = new Date(); // or get it as prop

    const [startDate, setStartDate] = React.useState(null);
    const calRef = React.useRef();

  






    return (
        <>

            

<div className='CustomCalendarDatePicker'>
                        
                         <Form.Group className=" ModalFormInputField" >
                            {/* <Form.Label>Start Date </Form.Label> */}
                            
                            
      <Datepicker
       ref={calRef}
        showIcon
        selected={startDate}
        onChange={date => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select" 
        className="form-control datePickerClass"
        shouldCloseOnSelect={false}
        monthsShown={1}
        
      //isClearable
      placeholderText=" dd/mm/yyyy"
    //   customInput={<input placeholder='dd/mm/yyyy' className='form-control '  />}
      id={'fromdateApply'}
      
    
      >




     <div className=' '>
        <div className='col-4'>
</div>
       <div className='col-8 gap-2 d-inline-flex datePickerChildren'> 
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




export default CustomCalendarDropDown