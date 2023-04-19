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
const SalesReport = () => {


    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;
    const [ClientIdModal, setClientIdModal] = useState(false);
    const [ClientDayModal, setClientDayModal] = useState(false);
    const [ChangeDateModal, setChangeDateModal] = useState(false);
    const [GenerateReport, setGenerateReport] = useState(false);
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page= ["All", "10", "20", "50"]
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Sales Report

            </h1>

            <div className='enquiriesBtnWrapper salesReportCards'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span class="material-icons">
                            payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>Invoice Generated </div>
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
                        <div className='subTitle'>Total Amount</div>
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
                        <div className='subTitle'>Paid Amount </div>
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
                        <div className='subTitle'>Balance Amount</div>
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
                        <div className='subTitle'>Tax Amount </div>
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
                        <div className='subTitle'>Online </div>
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
                        <div className='subTitle'>Wallet </div>
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
                        <div className='subTitle'>Cash </div>
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
                        <div className='subTitle'>Other </div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>



            </div>



            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className="col-2" >
                            
                            
                            <CustomCalendarDropDown  />
                        </div>
                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Membership Type" />
                        </div>
                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Sale Type" />
                        </div>

                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Trainer" />
                        </div>

                        <div className="" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Closed By" />
                        </div>
                        <div className="dropDownIfFirst" >
                            {/* <span class="material-icons">
                                calendar_month
                            </span> */}
                            <CustomDropdown options={handle} title="Select Handled By" />
                        </div>










                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>


                        <div className='downloadReoprtBtn ml-auto' onClick={() => setGenerateReport(true)}>
                        <span className="material-icons-outlined downloadIcon "> file_download </span>
                        Download XLS Report


                            
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
                <h3 className='subtitle'>Total Sales Report (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Sales Report</h2>
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
                                    <th> Plan Name</th>
                                    <th> Package Start Date</th>
                                    <th> Duration</th>
                                    <th> Invoice Number</th>
                                    <th> Paid Amount</th>
                                    <th> SGST</th>
                                    <th> CGST</th>
                                    <th> Payment Mode</th>
                                    <th>Invoice Amount</th>
                                    <th>Discount</th>
                                    <th>Balance Amount</th>
                                    <th>Closed By</th>
                                    <th>Handle By</th>
                                    <th>Close Date</th>
                                    <th>Payment Date</th>
                                    <th>Assign Trainer</th>
                                    <th>Sale Types</th>


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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> UTURN/2021-
                                        2022/268</td>
                                    <td> 1234 </td>
                                    <td> ₹6000.00</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td>₹457.63</td>
                                  

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
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> UTURN/2021-
                                        2022/268</td>
                                    <td>1234 </td>
                                    <td> ₹6000.00</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>

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
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> UTURN/2021-
                                        2022/268</td>
                                    <td>1234 </td>
                                    <td> ₹6000.00</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>

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
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
                                    </td>
                                    <td> 02/10/2022</td>
                                    <td> UTURN/2021-
                                        2022/268</td>
                                    <td>1234 </td>    
                                    <td> ₹6000.00</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>
                                    <td> ₹457.63</td>

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
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div>
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
                                    <td>
                                        <span className='chipOutlineFilled'> workout,gym
                                            work out	</span>
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

export default SalesReport