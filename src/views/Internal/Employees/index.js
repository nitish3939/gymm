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




const Employees = () => {
    const [smsModal, setSmsModal] = useState(false);
    const [addMember, setaddMember] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [EditMemberDetails, setEditMemberDetails] = useState(false);
    // const [modal, setModal] = React.useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page = ["All", "10", "20", "50"]

    const [absentEmploye, setAbsentEmploye] = useState(false);
    const [active, setActive] = useState(true);
    const [PresentEmploye, setPresentEmploye] = useState(false);
    const absentHandler = () => {
        setAbsentEmploye(true);
        setActive(false);
        setPresentEmploye(false);
    };
    const activeHandler = () => {
        setAbsentEmploye(false);
        setActive(true);
        setPresentEmploye(false);
    };
    const presentHandler = () => {
        setAbsentEmploye(false);
        setActive(false);
        setPresentEmploye(true);
    };

    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems mt-1">
                Employees
                <div onClick={() => setaddMember(true)} className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    Add Employees
                </div>
            </h1>

            <div className='enquiriesBtnWrapper employeesTeam'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person_add_disabled </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>89</div>
                        <div className='subTitle'>Total Employees</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={absentHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>540</div>
                        <div className='subTitle'>Absent Employees</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={presentHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> group_remove </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Present Employees</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={activeHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Active Employees</div>
                        {/* <div className='subTitle'>Close Enquiry</div> */}
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> record_voice_over </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Inactive Employees</div>
                        {/* <div className='subTitle'>Close Enquiry</div> */}
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>

            </div>




            <div className='row text-end'>
                <div className='col-lg-7'>
                    <div className='categoryWrapper'>

                        <div className=" dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Role" />
                        </div>






                        <div className="selectedText" >
                            <CustomDropdown options={lead} title=" Attendence" />
                        </div>




                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>

                <div className='col-lg-5'>
                    <div className={classNames("flex alignItems justify-content-end ", styles.filterWrapper)}>
                        <div className={styles.sortBy}>Sort by</div>
                        <CustomDropdown options={lead} title=" Last 3 months" />
                    </div>


                </div>
            </div>

            {active && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Active Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'>Active Employees</h2>
                            <div className='smsBoxWrapper'>
                                <div className='smsRemainingBtn ' >
                                    <span class="material-icons">
                                        accessibility_new
                                    </span>
                                    Add Access Control

                                </div>
                                {/* <ModalForm
                                    name={'smsModal'}

                                    show={smsModal}
                                    onHide={() => setSmsModal(false)}
                                /> */}


                            </div>
                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Roles</th>
                                        <th>Attendence</th>
                                        <th>Activities</th>
                                        <th>Status</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(5)].map((x, i) =>
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
                                                <span className='chipOutlineFilled '>General Training,
                                                    Personal Training</span>
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled done '>Present</span>
                                            </td>
                                            <td>
                                                Call Me
                                            </td>

                                            <td>
                                                <span className='chipOutlineFilled hot'>Inactive</span>
                                            </td>


                                            <td className='textRight'>
                                                <div className='dottedBtnWrapper ml-auto'>

                                                    {/* <span className="material-icons">

                                            </span> */}
                                                    <div id="linkabkeDropdwon" className='dottedbtn' >
                                                        <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                            <Dropdown.Item as="button" className='item1' onClick={() => setaddMember(true)}>Add Member</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item3' onClick={() => setEditMemberDetails(true)} > Edit Member Details</Dropdown.Item>
                                                        </DropdownButton>
                                                        <ModalForm

                                                            name={'addMember'}
                                                            show={addMember}
                                                            onHide={() => setaddMember(false)}
                                                        />
                                                        <ModalForm

                                                            name={'deleteModal'}
                                                            show={deleteModal}
                                                            onHide={() => setdeleteModal(false)}
                                                        />
                                                        <ModalForm

                                                            name={'EditMemberDetails'}
                                                            show={EditMemberDetails}
                                                            onHide={() => setEditMemberDetails(false)}
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
            )}


            {absentEmploye && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Absent Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'>Absent Employees</h2>
                            <div className='smsBoxWrapper'>
                                <div className='smsRemainingBtn ' onClick={() => setSmsModal(true)}>
                                    <span class="material-icons">
                                        accessibility_new
                                    </span>
                                    Add Access Control

                                </div>
                                <ModalForm
                                    name={'smsModal'}

                                    show={smsModal}
                                    onHide={() => setSmsModal(false)}
                                />


                            </div>
                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Roles</th>
                                        <th>Attendence</th>
                                        <th>Activities</th>
                                        <th>Status</th>

                                        <th></th>
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
                                                <span className='chipOutlineFilled '>General Training,
                                                    Personal Training</span>
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled hot '>Absent</span>
                                            </td>
                                            <td>
                                                Call Me
                                            </td>

                                            <td>
                                                <span className='chipOutlineFilled done'>Active</span>
                                            </td>


                                            <td className='textRight'>
                                                <div className='dottedBtnWrapper ml-auto'>

                                                    {/* <span className="material-icons">

                                            </span> */}
                                                    <div id="linkabkeDropdwon" className='dottedbtn' >
                                                        <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                            <Dropdown.Item as="button" className='item1' onClick={() => setaddMember(true)}>Add Member</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item3' onClick={() => setEditMemberDetails(true)} > Edit Member Details</Dropdown.Item>
                                                        </DropdownButton>
                                                        <ModalForm

                                                            name={'addMember'}
                                                            show={addMember}
                                                            onHide={() => setaddMember(false)}
                                                        />
                                                        <ModalForm

                                                            name={'deleteModal'}
                                                            show={deleteModal}
                                                            onHide={() => setdeleteModal(false)}
                                                        />
                                                        <ModalForm

                                                            name={'EditMemberDetails'}
                                                            show={EditMemberDetails}
                                                            onHide={() => setEditMemberDetails(false)}
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
            )}

            {PresentEmploye && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Present Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'>Present Employees</h2>
                            <div className='smsBoxWrapper'>
                                <div className='smsRemainingBtn ' onClick={() => setSmsModal(true)}>
                                    <span class="material-icons">
                                        accessibility_new
                                    </span>
                                    Add Access Control

                                </div>
                                <ModalForm
                                    name={'smsModal'}

                                    show={smsModal}
                                    onHide={() => setSmsModal(false)}
                                />


                            </div>
                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Roles</th>
                                        <th>Attendence</th>
                                        <th>Activities</th>
                                        <th>Status</th>

                                        <th></th>
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
                                                <span className='chipOutlineFilled '>General Training,
                                                    Personal Training</span>
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled done '>Present</span>
                                            </td>
                                            <td>
                                                Call Me
                                            </td>

                                            <td>
                                                <span className='chipOutlineFilled done'>Active</span>
                                            </td>


                                            <td className='textRight'>
                                                <div className='dottedBtnWrapper ml-auto'>

                                                    {/* <span className="material-icons">

                                            </span> */}
                                                    <div id="linkabkeDropdwon" className='dottedbtn' >
                                                        <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                            <Dropdown.Item as="button" className='item1' onClick={() => setaddMember(true)}>Add Member</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item2' onClick={() => setdeleteModal(true)}>Delete</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item3' onClick={() => setEditMemberDetails(true)} > Edit Member Details</Dropdown.Item>
                                                        </DropdownButton>
                                                        <ModalForm

                                                            name={'addMember'}
                                                            show={addMember}
                                                            onHide={() => setaddMember(false)}
                                                        />
                                                        <ModalForm

                                                            name={'deleteModal'}
                                                            show={deleteModal}
                                                            onHide={() => setdeleteModal(false)}
                                                        />
                                                        <ModalForm

                                                            name={'EditMemberDetails'}
                                                            show={EditMemberDetails}
                                                            onHide={() => setEditMemberDetails(false)}
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
            )}



        </>
    )
}

export default Employees