import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "../components/ModalForm";

import CustomCalendarDropDown from "../components/CustomDropdown/CustomCalendarDropDown.js";
const AttendenceReport = () => {


    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;


    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const [GenerateReport, setGenerateReport] = useState(false);
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Attendence Report

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span class="material-icons">
                            person
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>Total Attendance</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>





            </div>



            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className="col-2" >
                   <CustomCalendarDropDown/>
                        </div>




                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                        <div className='downloadReoprtBtn ml-auto' onClick={() => setGenerateReport(true)}>
                        <span className="material-icons downloadIcon "> file_download </span>
                        Generate XLS Report


                            
                    </div>
                     <ModalForm

                         name={'GenerateReport'}
                            show={GenerateReport}
                            onHide={() => setGenerateReport(false)}
                            />
                    </div>
                </div>



            </div>

            <section className={classNames('section PersonalTraining', styles.followUpsWrapper)} >
                <h3 className='subtitle'>Total Attendance (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Attendence Report</h2>
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


                                    <th>Members</th>
                                    <th> Membership Plan</th>
                                    <th>Membership Type</th>
                                    <th> Attended Sessions</th>
                                    <th> Total Sessions</th>
                                    <th> End Date</th>
                                    <th> Assigned Trainer</th>
                                    <th>Last Marked Attendance</th>




                                </tr>
                            </thead>
                            <tbody>
                                <tr>


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
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out </span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled'> General Training	</span>
                                    </td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> 04/1/2023</td>
                                    <td>  <div className='userAvatar'>
                                        <div className='userImg'>
                                            <img src={userImg} alt="user" />
                                        </div>
                                        <div className='userContent'>
                                            <div className='title'>Sonu Sharma</div>

                                        </div>
                                    </div></td>
                                    <td> 04/1/2023</td>

                                </tr>
                                <tr>


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
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out </span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled'> General Training	</span>
                                    </td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> 04/1/2023</td>
                                    <td>  <div className='userAvatar'>
                                        <div className='userImg'>
                                            <img src={userImg} alt="user" />
                                        </div>
                                        <div className='userContent'>
                                            <div className='title'>Sonu Sharma</div>

                                        </div>
                                    </div></td>
                                    <td> 04/1/2023</td>

                                </tr>
                                <tr>


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
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out </span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled'> General Training	</span>
                                    </td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> 04/1/2023</td>
                                    <td>  <div className='userAvatar'>
                                        <div className='userImg'>
                                            <img src={userImg} alt="user" />
                                        </div>
                                        <div className='userContent'>
                                            <div className='title'>Sonu Sharma</div>

                                        </div>
                                    </div></td>
                                    <td> 04/1/2023</td>

                                </tr>
                                <tr>


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
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out </span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled'> General Training	</span>
                                    </td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> 04/1/2023</td>
                                    <td>  <div className='userAvatar'>
                                        <div className='userImg'>
                                            <img src={userImg} alt="user" />
                                        </div>
                                        <div className='userContent'>
                                            <div className='title'>Sonu Sharma</div>

                                        </div>
                                    </div></td>
                                    <td> 04/1/2023</td>

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
                            <div className="selectDropdownBtn smallDropdown">
                                <div className="selectedText">
                                    6
                                </div>
                                <span className="material-icons"> expand_more </span>
                                <div className="selectDropdown">
                                    <div className="options static">All time</div>
                                    <div className="options">Today</div>
                                    <div className="options">Yesterday</div>
                                    <div className="options">This month</div>
                                    <div className="options">Last month</div>
                                    <div className="options">This year</div>
                                    <div className="options custom">Custom</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default AttendenceReport