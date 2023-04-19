import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import Form from 'react-bootstrap/Form';
import ModalForm from "../components/ModalForm";

import CustomCalendarDropDown from "../components/CustomDropdown/CustomCalendarDropDown.js";

const DueMembershipReport = () => {


    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;
    const [advanceFilter, setadvanceFilter] = useState(false);


    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page =["All", "10","20","50"]

    const [GenerateReport, setGenerateReport] = useState(false);
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Due Membership Report

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span class="material-icons">
                            payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>Members </div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span class="material-icons">
                            payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>Expected Business</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>






            </div>



            <div className='row text-end'>
                <div className='col-lg-8'>
                    <div className='categoryWrapper mb-3'>

                        <div className="CalendarWidthFixed" >
                            
                             <CustomCalendarDropDown  />
                        </div>
                        <div className="" >
                            
                            <CustomDropdown options={handle} title="Select Membership Type" />
                        </div>


                        <div className="" >
                           
                            <CustomDropdown options={handle} title="Select Trainer" />
                        </div>

                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Closed By" />
                        </div>












                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='OutlineBtn  ml-auto mb-2' onClick={() => setadvanceFilter(true)}>
                        <span class="material-icons">
                            filter_list
                        </span>
                        Advance Filter <span class="material-icons">
                            chevron_right
                        </span>
                    </div>
                    <ModalForm

                        name={'advanceFilter'}
                        show={advanceFilter}
                        onHide={() => setadvanceFilter(false)}
                    />
                    <div className='downloadReoprtBtn ml-auto mt-1' onClick={() => setGenerateReport(true)}>
                        <span className="material-icons-outlined downloadIcon "> file_download </span>
                        Generate XLS Report


                            
                    </div>
                     <ModalForm

                         name={'GenerateReport'}
                            show={GenerateReport}
                            onHide={() => setGenerateReport(false)}
                            />
                </div>



            </div>
            <div className='pb-3'>
                <Form.Group className="mb-4 ModalFromCheckBox ms-3 mt-1" >

                    <div className='checkbox gap-5'>
                        <Form.Check
                            className='gap-4'
                            label="Without Resal Payment"
                            name="book1"
                            type="checkbox"


                        />
                        <Form.Check
                            className='gap-4'
                            label="Exclude Upcoming Members"
                            name="book2"
                            type="checkbox"

                        /></div>


                </Form.Group>
            </div>

            <section className={classNames('section PersonalTraining dueMembershipReport', styles.followUpsWrapper)} >
                <h3 className='subtitle'>Total Expired Member Report (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Expired Member Report</h2>
                        <div className='mr-auto ms-3 d-flex gap-3 align-items-center'>
                            <span class="material-icons">
                                chevron_left
                            </span>
                            <span class="material-icons">
                                chevron_right
                            </span></div>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>

                                    <th> Client Id</th>
                                    <th>Employees</th>
                                    <th>Membership Type</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                    <th> Assign Trainer</th>
                                    <th> Total Sessions</th>
                                    <th> Attended Sessions</th>
                                    <th> Membership Price</th>
                                    <th> Invoice Number</th>
                                    <th> Discount Given</th>
                                    <th> Balance Due</th>
                                    <th>Close By</th>
                                    <th> Payment Type</th>
                                    



                                </tr>
                            </thead>
                            <tbody>
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
                                        <span className='chipOutlineFilled'> General Training,
                                            Personal Training</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> 02/10/2022</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td> 50</td>
                                    <td> 40</td>
                                    <td> ₹457.63</td>
                                    <td> 1234</td>
                                    <td> ₹457.63</td>

                                    <td> ₹457.63</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Cash
                                    </td>
                                   

                                </tr>
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
                                        <span className='chipOutlineFilled'> General Training,
                                            Personal Training</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> 02/10/2022</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td> 50</td>
                                    <td> 40</td>
                                    <td> ₹457.63</td>
                                    <td> 1234</td>
                                    <td> ₹457.63</td>

                                    <td> ₹457.63</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Cash
                                    </td>
                                   

                                </tr>
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
                                        <span className='chipOutlineFilled'> General Training,
                                            Personal Training</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> 02/10/2022</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td> 50</td>
                                    <td> 40</td>
                                    <td> ₹457.63</td>
                                    <td> 1234</td>
                                    <td> ₹457.63</td>

                                    <td> ₹457.63</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Cash
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
                            <div className={classNames("flex alignItems spaceBetween rowPerPageDropDown", styles.filterWrapper)}>
                            <div className={styles.sortBy}>Rows per page</div>
                            
                            <div className="selectedText" >
                                <CustomDropdown options={page} title="All" />
                            </div>
                            {/* </div> */}
                        </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default DueMembershipReport