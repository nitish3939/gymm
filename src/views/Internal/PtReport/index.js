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
const PtReport = () => {


    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;


    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page = ["All", "10", "20", "50"]

    const [GenerateReport, setGenerateReport] = useState(false);
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                PT Report

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
                        <div className='subTitle'>Total PT</div>
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
                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Trainer" />

                        </div>




                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                        <div className='downloadReoprtBtn ml-auto' onClick={() => setGenerateReport(true)}>
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



            </div>

            <section className={classNames('section PersonalTraining', styles.followUpsWrapper)} >
                <h3 className='subtitle'>Total PT Report (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>PT Report</h2>


                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>


                                    <th>Trainer Name</th>
                                    <th> Customer</th>
                                    <th>Package Start Date</th>
                                    <th> Package End Date</th>
                                    <th> Total Sessions</th>
                                    <th> Attended Sessions</th>
                                    <th> Amount</th>
                                    <th> Status</th>




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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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
                                    <td> 04/1/2023</td>
                                    <td> 04/1/2023</td>
                                    <td> 40</td>
                                    <td>40</td>
                                    <td> ₹457.63</td>
                                    <td>  <span className='chipOutlineFilled done'> Active </span></td>

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

export default PtReport