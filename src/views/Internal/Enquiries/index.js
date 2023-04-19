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


const Enquiries = () => {
    const [smsModal, setSmsModal] = useState(false);
    const [editEnquiry, setEditEnquiryModal] = useState(false);
    const [addEnquiry, setAddEnquiryModal] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [scheduleModal, setscheduleModal] = useState(false);
    // const [modal, setModal] = React.useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const trial = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const month = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowPerPage = ["5","10","20", "50"]
    const followUp =["Yes", "No"]
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems pt-1">
                Enquiry
                <div onClick={() => setAddEnquiryModal(true)} className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    Add Enquiry
                </div>

                <ModalForm name={'addEnquiry'} show={addEnquiry} onHide={() => setAddEnquiryModal(false)} />
            </h1>

            <div className='enquiriesBtnWrapper'>
                        {/* Active class added if active activeEnquiriesBtn */}
                <div className='enquiriesBtn activeEnquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person_add_disabled </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>89</div>
                        <div className='subTitle'>Close Enquiry</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>540</div>
                        <div className='subTitle'>Open Enquiry</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> group_remove </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Not Interested</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>Enquiry Ratio</div>
                        {/* <div className='subTitle'>Close Enquiry</div> */}
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>

            </div>




            <div className='row text-end'>
                <div className='col-lg-6'>
                    <div className='categoryWrapper'>

                        <div className="dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Handle by" />
                        </div>






                        <div className="selectedText" >
                            <CustomDropdown options={lead} title=" Lead Type" />
                        </div>
                       
                        <div className="selectedText dropDownIfFirst" >
                            <CustomDropdown options={trial} title="Trial Booked" />
                        </div>
                        <div className="selectedText dropDownIfFirst CalendarWidthFixed" >
                            <CustomCalendarDropDown  title="Last 3 months" />
                        </div>


                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search " className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                        <div className='FormOutlineBtn ml-auto ms-0 w-auto gap-3 d-flex align-items-center'>
                            Membership Renewal 
                            <span className="material-icons downloadIcon "> close </span>
                         </div>
                        
                         <div className='addEnquiryBtn gap-3 d-flex align-items-center'>
                               Warm
                            <span className="material-icons downloadIcon "> close </span>
                           </div>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='downloadReoprtBtn ml-auto'>
                        <span className="material-icons-outlined downloadIcon "> file_download </span>
                        Download XLS Report
                    </div>
                </div>
            </div>


            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle' >Total Enquiries (563)</h3>


                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Enquiry</h2>
                        <div className='smsBoxWrapper'>
                            <div className='smsRemainingBtn ' onClick={() => setSmsModal(true)}>
                                <span className="material-icons smsIcon"> sms </span>
                                Send SMS (10000)
                                <span className="material-icons sendIcon"> send </span>
                            </div>
                            <ModalForm
                                name={'smsModal'}

                                show={smsModal}
                                onHide={() => setSmsModal(false)}
                            />


                        </div>
                    </div>
                    <div className='tableWrapper enquiryCheckBoxPadd'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>
                                        {/* <label className="checkboxContainer">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </th>
                                    <th>Name</th>
                                    <th>Enquiry No.</th>
                                    <th>Enquiry Date</th>
                                    <th>Handle by</th>
                                    <th>Lead Type</th>
                                    <th>Trial Booked</th>
                                    <th>Comments</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {/* <label className="checkboxContainer">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                        <Form.Group className=" ModalFromCheckBox" >

<div className='checkbox '>
    <Form.Check label="" name="book1" type="checkbox" />
</div>
</Form.Group>
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
                                        230492
                                    </td>
                                    <td>
                                        02/10/2022 <br />
                                        03:34 pm
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
                                    <td>
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>

                                            {/* <span className="material-icons">

                                            </span> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setEditEnquiryModal(true)}>Edit Enquiry</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item3' onClick={() => setscheduleModal(true)} ><i className="material-icons align-middle"> replay</i> Schedule Follow Up</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'editEnquiry'}
                                                    show={editEnquiry}
                                                    onHide={() => setEditEnquiryModal(false)}
                                                />
                                                <ModalForm

                                                    name={'deleteModal'}
                                                    show={deleteModal}
                                                    onHide={() => setdeleteModal(false)}
                                                />
                                                <ModalForm

                                                    name={'schedule'}
                                                    show={scheduleModal}
                                                    onHide={() => setscheduleModal(false)}
                                                />

                                            </div>




                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <label className="checkboxContainer">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                        <Form.Group className=" ModalFromCheckBox" >

<div className='checkbox '>
    <Form.Check label="" name="book1" type="checkbox" />
</div>
</Form.Group>
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
                                        230492
                                    </td>
                                    <td>
                                        02/10/2022 <br />
                                        03:34 pm
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
                                    <td>
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>

                                            {/* <span className="material-icons">

                                            </span> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setEditEnquiryModal(true)}>Edit Enquiry</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item3' onClick={() => setscheduleModal(true)} ><i className="material-icons align-middle"> replay</i> Schedule Follow Up</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'editEnquiry'}
                                                    show={editEnquiry}
                                                    onHide={() => setEditEnquiryModal(false)}
                                                />
                                                <ModalForm

                                                    name={'deleteModal'}
                                                    show={deleteModal}
                                                    onHide={() => setdeleteModal(false)}
                                                />
                                                <ModalForm

                                                    name={'schedule'}
                                                    show={scheduleModal}
                                                    onHide={() => setscheduleModal(false)}
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
                                        230492
                                    </td>
                                    <td>
                                        02/10/2022 <br />
                                        03:34 pm
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
                                    <td>
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>

                                            {/* <span className="material-icons">

                                            </span> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setEditEnquiryModal(true)}>Edit Enquiry</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item3' onClick={() => setscheduleModal(true)} ><i className="material-icons align-middle"> replay</i> Schedule Follow Up</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'editEnquiry'}
                                                    show={editEnquiry}
                                                    onHide={() => setEditEnquiryModal(false)}
                                                />
                                                <ModalForm

                                                    name={'deleteModal'}
                                                    show={deleteModal}
                                                    onHide={() => setdeleteModal(false)}
                                                />
                                                <ModalForm

                                                    name={'schedule'}
                                                    show={scheduleModal}
                                                    onHide={() => setscheduleModal(false)}
                                                />

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

                        <div className={classNames("flex alignItems spaceBetween rowPerPageDropDown", styles.filterWrapper)}>
                            <div className={styles.sortBy}>Rows per page</div>


                            <CustomDropdown options={rowPerPage} title="6" />

                           
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default Enquiries