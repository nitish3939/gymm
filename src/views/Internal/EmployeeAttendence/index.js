import React, { useState } from 'react';


import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import ModalForm from "../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownLinable from './../components/DropdownLinable'




const EmployeeAttendance = () => {
    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;

    const [addMember, setaddMember] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [EditMemberDetails, setEditMemberDetails] = useState(false);
    // const [modal, setModal] = React.useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];




    const [AttendanceLog, setAttendanceLog] = useState(true);
    const [ManualAttendance, setManualAttendance] = useState(false);
    const AttendanceLogHandler = () => {

        setAttendanceLog(true);
        setManualAttendance(false);
    };
    const ManualAttendanceHandler = () => {

        setAttendanceLog(false);
        setManualAttendance(true);
    };


    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems mt-1">
                Employee Attendence

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn' onClick={AttendanceLogHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person_add_disabled </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>89</div>
                        <div className='subTitle'>Attendance Log</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={ManualAttendanceHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>540</div>
                        <div className='subTitle'>Manual Attendance</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>


            </div>




            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className=" dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Employees" />
                        </div>
                        <div>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>{calendar_month} Last 6 months</span>} />
                        </div>










                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>


            </div>

            {AttendanceLog && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Attendence Log (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'>Attendence Log</h2>

                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>In Time</th>
                                        <th>Out Time</th>
                                        <th>Total Hours</th>
                                        <th> Attendence</th>
                                        <th>Status</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(10)].map((x, i) =>
                                        <tr>
                                            <td> 260449</td>
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
                                                02/10/2022 <br />
                                                03:34 pm
                                            </td>
                                            <td>
                                                02/10/2022 <br />
                                                03:34 pm
                                            </td>

                                            <td>
                                                98 Hours
                                            </td>

                                            <td>
                                                <span className='chipOutlineFilled done'>Present</span>
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled done'>Active</span>
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

                            <div className={classNames("flex alignItems spaceBetween", styles.filterWrapper)}>
                                <div className={styles.sortBy}>Rows per page</div>
                                <CustomDropdown options={handle} title="Select Row" />
                            </div>

                        </div>
                    </div>
                </section>
            )}


            {ManualAttendance && (
                <div>
                    <div className='Notification d-flex mb-4 text-white '>
                        <span class="material-icons ">
                            info
                        </span>

                        <p> You may manually add members' attendance here.</p>


                    </div>
                    <section className={classNames('section', styles.followUpsWrapper)}>
                        <h3 className='subtitle' >Total Absent Employees (540)</h3>


                        <div className='tableWrapperOuter'>
                            <div className='tableHeading'>
                                <h2 className='h2'>Absent Employees</h2>

                            </div>
                            <div className='tableWrapper'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th> Employee ID</th>
                                            <th>Employee</th>

                                            <th>Attendence</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(10)].map((x, i) =>
                                            <tr>
                                                <td> 260449</td>
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
                                                    <div className='d-flex gap-3'>
                                                        <span className='FormFillBtn'>Punch In</span>
                                                        <span className='FormFillBtn   '>Punch In</span>
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

                                <div className={classNames("flex alignItems spaceBetween", styles.filterWrapper)}>
                                    <div className={styles.sortBy}>Rows per page</div>
                                    <CustomDropdown options={handle} title="Select Row" />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            )}





        </>
    )
}

export default EmployeeAttendance