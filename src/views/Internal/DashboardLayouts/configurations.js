import React, { useState } from 'react';


import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "./../components/CustomDropdown";
import ModalForm from "./../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownLinable from './../components/DropdownLinable'

import Form from 'react-bootstrap/Form';
import CustomCalendarDropDown from '../components/CustomDropdown/CustomCalendarDropDown';
import { FormGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Configurations = () => {
   

  

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    

    
    return (
        <>
            <div id='configuration'>

            
              <div className='configLable py-1  d-flex'> Profile Menu  <span>  / </span> Configurations</div>
            <h1 className="h1 d-flex spaceBetween alignItems pt-1">
              
            <div className='d-inline-flex  configBtnAndText'>
              
                <Link to="/memberEditProfile">
              <div className='configBtn ml-auto ms-0 w-auto  d-flex align-items-center'>
                  <span className="material-icons downloadIcon "> arrow_back </span>
                              Back
                </div>
                </Link> 
          
                Configurations

            </div>
                  
                <div  className='addEnquiryBtn'>
                    
                    Save Configurations
                </div>
           
            

               
            </h1>

            <div className='mt-4 pt-3'> 
                 <div className='termC'> <p> Terms & Conditions</p> </div>
                 <div className="">
                  <textarea placeholder="Type your Address here... " className="configFormControl formControl" />
                           
               </div>
            </div>
            <div className='mt-4 pt-3 d-grid'>
                  <div className='termC'> <p> Template Size</p> </div>
                  <div className='col-6 configDropDown'> 
                      <CustomDropdown title="Select Template Size" options={handle} />
                  </div>

          <div class="d-grid ps-1 pt-1">
            
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow Delete Membership" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                  
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow Upgrade Membership" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                  
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Data Hide" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                  
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow back date invoice" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                  
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow change package start date" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                 
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow delete enquiry" name="book1" type="checkbox" />
                      </div>
                  </Form.Group>
                 
            </div>
            <div className='pt-3 d-inline-flex align-items-center'>
                  <Form.Group className=" ModalFromCheckBox" >
                      <div className='checkbox '>
                          <Form.Check label="Allow addon days" name="book1" type="checkbox" />
                          
                      </div>
                  </Form.Group>
                 
            </div>
      </div>        
           
            </div>

         </div>


        </>
    )
}

export default Configurations