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
import CustomCalendarDropDown from '../components/CustomDropdown/CustomCalendarDropDown.js';

const Biometric = () => {
    const [smsModal, setSmsModal] = useState(false);
    const [notificationModal, setnotificationModal] = useState(false);
    const [editEnquiry, setEditEnquiryModal] = useState(false);

    const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const gender = ["Femal", "Male", "Other"];
    const Attendence = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowPerPage =["5", "10","20","50"] 

    const [keyMember, setkeyMember] = useState('activeMember');
    const page = ["All", "1", "2", "3", "4", "5", "6"];

    return (
        <>
        <div className='editMemberProfilePage '> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
            Biometric

            
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
            
            <section >
                                    <div className='col-12 mt-3 pt-2'>
                                <div className='membershipsTabsStyle'>
                                    <section className={classNames('section', styles.followUpsWrapper)}>
                                    
                                        <div className='tableWrapperOuter'>
                                            <div className='tableHeading'>
                                                <h2 className='h2'>Biometric Details</h2>
                                            
                                            </div>
                                            <div className='tableWrapper d-inline-flex gap-3 mt-4 ms-2 ps-1 mb-3'>
                                               
                                            <div className='addEnquiryBtn w-auto'><span class="material-icons-outlined">block</span>
                                                  Unblock from Essl
                                            </div>
                                            <div className='addEnquiryBtn w-auto'><span class="material-icons-outlined">add</span>
                                                Add Biometric
                                            </div>
                                            <div className='addEnquiryBtn w-auto addedBiometric'><span class="material-icons-outlined">done</span>
                                            Added Biometric
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

export default Biometric