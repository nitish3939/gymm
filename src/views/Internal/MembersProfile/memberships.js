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

const MembersMemberships = () => {
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
        <div className='editMemberProfilePage viewOnlyProfile'> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
              Memberships

            
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
                                   
            <Tabs activeKey={keyMember} onSelect={(k) => setkeyMember(k)} className="   TabWrapper  createDietPlanModalTabs" >
                  <Tab eventKey="activeMember" tabClassName=" ModalFormTabs" title={<span>Active Member</span>} > </Tab>
                  <Tab eventKey="pastMember" tabClassName=" ModalFormTabs" title={<span>Past Member</span>} > </Tab>    
                  <Tab eventKey="upcomingMember" tabClassName=" ModalFormTabs" title={<span>Upcoming Member</span>} > </Tab>    
                  <Tab eventKey="transferred" tabClassName=" ModalFormTabs" title={<span> <span class="material-icons linkIcon">swap_horiz</span> Transferred</span>} > </Tab>    
                  <Tab eventKey="freeze" tabClassName=" ModalFormTabs" title={<span> <span class="material-icons linkIcon">ac_unit</span> Freeze</span>} > </Tab>    
                   

                               <div eventKey="activeMember">
                                            <div className='row text-end mt-3 '>
                                                <div className='col-lg-9'>
                                                    <div className='categoryWrapper mb-3 pb-1'>

                                                        <div className="selectedText  dropDownIfFirst" >
                                                            <CustomDropdown options={gender} title="Assigned Trainer" />
                                                        </div>

                                                        <div className="selectedText" >
                                                            <CustomDropdown options={Attendence} title="Status" />
                                                        </div>

                                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                                            <input type="text" placeholder="Search " className="formControl" />
                                                            <span className="material-icons searchIcon"> search </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




            <section className={classNames('section', styles.followUpsWrapper)}>
               
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                       
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Membership ID</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Add On Days</th>
                                    <th> Assigned Trainer</th>
                                    <th> Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                       {[...Array(5)].map(() =>         
                                <tr>
                                    
                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       7 Days   
                                    </td>

                                    <td>

                                       7/7
                                    </td>


                                    <td>
                                         10 Oct, 2022
                                    </td>
                                    <td>
                                        17 Oct, 2022
                                    </td>




                                    <td className=''>
                                        0
                                    </td>
                                    <td>
                                    <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className='chipOutlineFilled done'>Done</span></td>

                                    <td>
                                         <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                  <Dropdown.Item  as="button" className='item1' >View Profile </Dropdown.Item>
                                                 <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
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
                                <div eventKey="pastMember">
                                            <div className='row text-end mt-3 '>
                                                <div className='col-lg-9'>
                                                    <div className='categoryWrapper mb-3 pb-1'>

                                                        <div className="selectedText  dropDownIfFirst" >
                                                            <CustomDropdown options={gender} title="Assigned Trainer" />
                                                        </div>

                                                        <div className="selectedText" >
                                                            <CustomDropdown options={Attendence} title="Status" />
                                                        </div>

                                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                                            <input type="text" placeholder="Search " className="formControl" />
                                                            <span className="material-icons searchIcon"> search </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




            <section className={classNames('section', styles.followUpsWrapper)}>
               
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                       
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Membership ID</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Add On Days</th>
                                    <th> Assigned Trainer</th>
                                    <th> Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                       {[...Array(5)].map(() =>         
                                <tr>
                                    
                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       7 Days   
                                    </td>

                                    <td>

                                       7/7
                                    </td>


                                    <td>
                                         10 Oct, 2022
                                    </td>
                                    <td>
                                        17 Oct, 2022
                                    </td>




                                    <td className=''>
                                        0
                                    </td>
                                    <td>
                                    <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className='chipOutlineFilled done'>Done</span></td>

                                    <td>
                                         <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                  <Dropdown.Item  as="button" className='item1' >View Profile </Dropdown.Item>
                                                 <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
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
                                <div eventKey="upcomingMember">
                                            <div className='row text-end mt-3 '>
                                                <div className='col-lg-9'>
                                                    <div className='categoryWrapper mb-3 pb-1'>

                                                        <div className="selectedText  dropDownIfFirst" >
                                                            <CustomDropdown options={gender} title="Assigned Trainer" />
                                                        </div>

                                                        <div className="selectedText" >
                                                            <CustomDropdown options={Attendence} title="Status" />
                                                        </div>

                                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                                            <input type="text" placeholder="Search " className="formControl" />
                                                            <span className="material-icons searchIcon"> search </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




            <section className={classNames('section', styles.followUpsWrapper)}>
               
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                       
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Membership ID</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Add On Days</th>
                                    <th> Assigned Trainer</th>
                                    <th> Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                       {[...Array(5)].map(() =>         
                                <tr>
                                    
                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       7 Days   
                                    </td>

                                    <td>

                                       7/7
                                    </td>


                                    <td>
                                         10 Oct, 2022
                                    </td>
                                    <td>
                                        17 Oct, 2022
                                    </td>




                                    <td className=''>
                                        0
                                    </td>
                                    <td>
                                    <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className='chipOutlineFilled done'>Done</span></td>

                                    <td>
                                         <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                  <Dropdown.Item  as="button" className='item1' >View Profile </Dropdown.Item>
                                                 <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
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
                                <div eventKey="transferred">
                                            <div className='row text-end mt-3 '>
                                                <div className='col-lg-9'>
                                                    <div className='categoryWrapper mb-3 pb-1'>

                                                        <div className="selectedText  dropDownIfFirst" >
                                                            <CustomDropdown options={gender} title="Assigned Trainer" />
                                                        </div>

                                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                                            <input type="text" placeholder="Search " className="formControl" />
                                                            <span className="material-icons searchIcon"> search </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




            <section className={classNames('section', styles.followUpsWrapper)}>
               
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                       
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Membership ID</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Assigned Trainer</th>
                                    <th> User Name</th>
                                   
                                </tr>
                            </thead>
                            <tbody>

                       {[...Array(5)].map(() =>         
                                <tr>
                                    
                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       7 Days   
                                    </td>

                                    <td>

                                       7/7
                                    </td>


                                    <td>
                                         10 Oct, 2022
                                    </td>
                                    <td>
                                        17 Oct, 2022
                                    </td>




                                    <td className=''>
                                    <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                  
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
                                <div eventKey="freeze">
                                            <div className='row text-end mt-3 '>
                                                <div className='col-lg-9'>
                                                    <div className='categoryWrapper mb-3 pb-1'>

                                                        <div className="selectedText  dropDownIfFirst" >
                                                            <CustomDropdown options={gender} title="Assigned Trainer" />
                                                        </div>

                                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                                            <input type="text" placeholder="Search " className="formControl" />
                                                            <span className="material-icons searchIcon"> search </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>




            <section className={classNames('section', styles.followUpsWrapper)}>
               
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                       
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Membership ID</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Freeze Frequency</th>
                                    <th> Freeze Remark</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                       {[...Array(5)].map(() =>         
                                <tr>
                                    
                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       7 Days   
                                    </td>

                                    <td>

                                       7/7
                                    </td>


                                    <td>
                                         10 Oct, 2022
                                    </td>
                                    <td>
                                        17 Oct, 2022
                                    </td>

                                    <td>
                                       1/2
                                    </td>
                                    <td>
                                        Call Me
                                    </td>

                                    <td>
                                         <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                  <Dropdown.Item  as="button" className='item1' >View Profile </Dropdown.Item>
                                                 <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
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
                                 
            </Tabs>                   
        </div>
                            </div>
            </section>

        </div>


           

            
        </>
    )
}

export default MembersMemberships