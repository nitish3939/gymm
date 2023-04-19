import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import CustomCalendarDropDown from "../components/CustomDropdown/CustomCalendarDropDown.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "../components/ModalForm";


const BalanceDueReport = () => {


    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;
    const [ClientIdModal, setClientIdModal] = useState(false);
    const [ClientDayModal, setClientDayModal] = useState(false);
    const [ChangeDateModal, setChangeDateModal] = useState(false);


    const [GenerateReport, setGenerateReport] = useState(false);
    // const [CustomCalendarDropDown, setCustomCalendarDropDown] = useState(false);
    

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page = ["All", "1", "2", "3", "4", "5", "6"];
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Balance Due Report

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>Members </div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Total Pending Amount</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>



            </div>



            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className="col-2"  >
                           
                            <CustomCalendarDropDown  />
                            
                        </div>










                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>



                    <div className='downloadReoprtBtn ml-auto' onClick={() => setGenerateReport(true)}>
                        <span className="material-icons-outlined downloadIcon ">file_download  </span>
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
                <h3 className='subtitle'>Total Balance Due Report (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Balance Due Report</h2>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>

                                    <th> Client ID</th>
                                    <th>Employees</th>
                                    <th>Invoice ID</th>
                                    <th> Balance Due</th>
                                    <th> Due Date</th>
                                    <th> Closed By</th>
                                    <th> Closed Date</th>


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {[...Array(10)].map((x, i) =>
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
                                        UTURN75
                                    </td>
                                    <td> ₹60.00</td>
                                    <td> 02/10/2022</td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>

                                            </div>
                                        </div></td>
                                    <td> 02/10/2022</td>











                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons dottedbtn ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setClientIdModal(true)}>Pay Balance Due</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setClientDayModal(true)} >View Invoice</Dropdown.Item>

                                                </DropdownButton>
                                                <ModalForm

                                                    name={'clientID'}
                                                    show={ClientIdModal}
                                                    onHide={() => setClientIdModal(false)}
                                                />
                                                <ModalForm

                                                    name={'clientDay'}
                                                    show={ClientDayModal}
                                                    onHide={() => setClientDayModal(false)}
                                                />

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
            <section className={classNames('section DeleteMembership', styles.followUpsWrapper)}>
                <h3 className='subtitle'>Personal Training Members (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Personal Training Members</h2>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>

                                    <th> Client Id</th>
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
                                    <td> 7/7</td>
                                    <td> 10 Oct, 2022</td>
                                    <td> 19 Oct, 2022</td>
                                    <td> 0</td>


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

                                        <span className='chipOutlineFilled done'> Done</span>
                                    </td>






                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons dottedbtn ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setClientIdModal(true)}>Add Client Id</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setClientDayModal(true)} >Add on Days</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setChangeDateModal(true)} > Change Date</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'clientID'}
                                                    show={ClientIdModal}
                                                    onHide={() => setClientIdModal(false)}
                                                />
                                                <ModalForm

                                                    name={'clientDay'}
                                                    show={ClientDayModal}
                                                    onHide={() => setClientDayModal(false)}
                                                />
                                                <ModalForm

                                                    name={'ChangeDate'}
                                                    show={ChangeDateModal}
                                                    onHide={() => setChangeDateModal(false)}
                                                />
                                            </div>

                                        </div>
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
                                        7 Days
                                    </td>
                                    <td> 7/7</td>
                                    <td> 10 Oct, 2022</td>
                                    <td> 19 Oct, 2022</td>
                                    <td> 0</td>


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

                                        <span className='chipOutlineFilled done'> Done</span>
                                    </td>






                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <button className='dottedbtn'>
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button>
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
                            
                            <div className="selectedText" >
                                <CustomDropdown options={page} title="All" />
                            </div>
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BalanceDueReport