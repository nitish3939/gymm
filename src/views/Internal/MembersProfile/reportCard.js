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

const ReportCard = () => {
   

   
    const page = ["All", "1", "2", "3", "4", "5", "6"];

    return (
        <>
        <div className='editMemberProfilePage '> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
           Report Card

            
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
                                    <div className='col-12 mt-2 pt-1'>
                                <div className='membershipsTabsStyle'>
                                    <section className={classNames('section', styles.followUpsWrapper)}>
                                    
                                        <div className='tableWrapperOuter'>
                                            <div className='tableHeading'>
                                                <h2 className='h2'> Report Card</h2>
                                            
                                            </div>
                                            <div className='tableWrapper'>
                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th> Height</th>
                                                            <th>Weight</th>
                                                            <th>Date</th>
                                                            <th>  Action</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                            {[...Array(5)].map(() =>         
                                                        <tr>
                                                            
                                                            <td>
                                                                6ft.
                                                            </td>
                                                           <td> 82kg.</td>

                                                            <td>

                                                            02/10/2022 <br></br>
                                                            03:34 pm
                                                            </td>


                                                            
                                                        
                                                            <td><span className='chipOutlineFilled done'>Done</span></td>
                                                          
                                                          
                                                        </tr>
                            )}


                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='paginationWrapperOuter flex alignItems spaceBetween'>
                                                <div className='paginationWrapper'>
                                                    <ul className='paginationInner'>
                                                        <li className='paginationItem'>
                                                            1
                                                        </li>
                                                        <li className='paginationItem active'>
                                                            2
                                                        </li>
                                                        <li className='paginationItem'>
                                                            3
                                                        </li>
                                                        <li className='paginationItem'>
                                                            4
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className={classNames("flex alignItems spaceBetween rowPerPageDropDown", styles.filterWrapper)}>
                                                    <div className={styles.sortBy}>Rows per page</div>
                                                    
                                                    <div className="selectedText" >
                                                        <CustomDropdown options={page} title="All" />
                                                    </div>
                                                    {/* </div> */}
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

export default ReportCard