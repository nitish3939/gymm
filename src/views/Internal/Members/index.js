import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "./../components/CustomDropdown";
import ModalForm from "./../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';

const Members = () => {
    const [smsModal, setSmsModal] = useState(false);
    const [notificationModal, setnotificationModal] = useState(false);
    const [editEnquiry, setEditEnquiryModal] = useState(false);

    const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const gender = ["Femal", "Male", "Other"];
    const Attendence = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowPerPage =["5", "10","20","50"] 




    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Members
                <div className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    Add Members
                </div>
            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>All Members </div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>540</div>
                        <div className='subTitle'>Active Menbers</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> group_add </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Upcoming Members</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons">group_remove </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Past Members</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons">group </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>88</div>
                        <div className='subTitle'>Today Attendence</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person_add_disabled  </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>88</div>
                        <div className='subTitle'>Today Absents</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>

            </div>



            <div className='row text-end'>
                <div className='col-lg-9'>
                    <div className='categoryWrapper'>

                        <div className=" dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Handle by" />
                        </div>






                        <div className="selectedText" >
                            <CustomDropdown options={gender} title="Gender" />
                        </div>

                        <div className="selectedText" >
                            <CustomDropdown options={Attendence} title="Today Attendence" />
                        </div>



                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div className='downloadReoprtBtn ml-auto'>
                        <span className="material-icons-outlined downloadIcon "> file_download </span>
                        Download XLS Report
                    </div>
                </div>
            </div>

            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle'>Active Members (563)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Active Members</h2>
                        <div className='smsBoxWrapper'>
                            <div className='smsRemainingBtn' onClick={() => setSmsModal(true)}>
                                <span className="material-icons smsIcon"> sms </span>
                                Send SMS (38)
                                <span className="material-icons sendIcon"> send </span>
                            </div>
                            <ModalForm
                                name={'smsModal'}
                                show={smsModal}
                                onHide={() => setSmsModal(false)}
                            />
                            <div className='sendSmsBtn' onClick={() => setnotificationModal(true)}>
                                <span className="material-icons smsIcon"> notifications_active </span>

                                Send Notification
                                <span className="material-icons sendIcon"> send </span>
                            </div>
                            <ModalForm
                                name={'notification'}

                                show={notificationModal}
                                onHide={() => setnotificationModal(false)}
                            />
                        </div>
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>
                                       <Form.Group className=" ModalFromCheckBox" >
                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </th>
                                    <th> Client Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th> Status</th>
                                    <th> Today Attendence</th>
                                    <th> Customer Service Executive</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </td>
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
                                        Male
                                    </td>

                                    <td>

                                        <span className='chipOutlineFilled active_member'> Active Member</span>
                                    </td>


                                    <td>
                                        <span className='chipOutlineFilled hot'>Absent</span>
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>MAD SALIF </div>
                                            </div>
                                        </div>
                                    </td>




                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                               <Link to="/viewProfile">      <Dropdown.Item  as="button" className='item1' >View Profile </Dropdown.Item></Link>
                                               <Link to="/memberEditProfile">   <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item></Link>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </td>
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
                                        Male
                                    </td>

                                    <td>

                                        <span className='chipOutlineFilled active_member'> Active Member</span>
                                    </td>


                                    <td>
                                        <span className='chipOutlineFilled hot'>Absent</span>
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>MAD SALIF </div>
                                            </div>
                                        </div>
                                    </td>




                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' >View Profile </Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </td>
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
                                        Male
                                    </td>

                                    <td>

                                        <span className='chipOutlineFilled active_member'> Active Member</span>
                                    </td>


                                    <td>
                                        <span className='chipOutlineFilled hot'>Absent</span>
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>MAD SALIF </div>
                                            </div>
                                        </div>
                                    </td>




                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setEditEnquiryModal(true)}>View Profile </Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                                <ModalForm

                                                    name={'editEnquiry'}
                                                    show={editEnquiry}
                                                    onHide={() => setEditEnquiryModal(false)}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </td>
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
                                        Male
                                    </td>

                                    <td>

                                        <span className='chipOutlineFilled active_member'> Active Member</span>
                                    </td>


                                    <td>
                                        <span className='chipOutlineFilled hot'>Absent</span>
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                <div className='subtitle'>MAD SALIF </div>
                                            </div>
                                        </div>
                                    </td>




                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' >View Profile </Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' >Edit Profile</Dropdown.Item>

                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


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

                        <div className={classNames("flex alignItems spaceBetween", styles.filterWrapper)}>
                            <div className={styles.sortBy}>Rows per page</div>
                            <CustomDropdown options={rowPerPage} title="Select Row"  />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Members