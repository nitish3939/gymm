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




const Payroll = () => {
    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;

    const [payroll, setpayroll] = useState(false);
    const [addMember, setaddMember] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [EditMemberDetails, setEditMemberDetails] = useState(false);
    // const [modal, setModal] = React.useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];


    const [advancePaid, setadvancePaid] = useState(false);
    const [PaidEmployee, setPaidEmployee] = useState(true);
    const [Pending, setPending] = useState(false);
    const advancePaidHandler = () => {
        setadvancePaid(true);
        setPaidEmployee(false);
        setPending(false);
    };
    const PaidEmployeeHandler = () => {
        setadvancePaid(false);
        setPaidEmployee(true);
        setPending(false);
    };
    const PendingHandler = () => {
        setadvancePaid(false);
        setPaidEmployee(false);
        setPending(true);
    };

    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Payroll
                <div className='addEnquiryBtn' onClick={() => setpayroll(true)}>
                    <span className="material-icons"> add </span>
                    Add Payroll
                </div>
                <ModalForm

                    name={'payroll'}
                    show={payroll}
                    onHide={() => setpayroll(false)}
                />
            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn' onClick={PaidEmployeeHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> currency_rupee </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>89</div>
                        <div className='subTitle'>Paid Salary</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={advancePaidHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> currency_rupee </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>540</div>
                        <div className='subTitle'>Advance Paid Salary</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' onClick={PendingHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> currency_rupee </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Pending Salary</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>


            </div>




            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className="dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Select Employees" />
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

            {PaidEmployee && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Paid Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'> Paid Employees</h2>

                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Pay Type</th>
                                        <th>Dues Adjust with Salary Pay</th>
                                        <th>Month of Salary</th>
                                        <th> Salary</th>
                                        <th> Paid Commision</th>
                                        <th> Paid Amount</th>
                                        <th>Status</th>
                                        <th> Payments Date</th>
                                        <th> Payments Mode</th>

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
                                                <span className='chipOutlineFilled '>Paid Salary</span>
                                            </td>
                                            <td> No</td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                ₹45000
                                            </td>
                                            <td> ₹4500</td>
                                            <td> ₹4500</td>


                                            <td>
                                                <span className='chipOutlineFilled done'>Paid</span>
                                            </td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled '>Cash</span>
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
                                <CustomDropdown options={handle} title="Select Row" />
                            </div>

                        </div>
                    </div>
                </section>
            )}


            {advancePaid && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Advance Paid Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'> Advance Paid Employees</h2>

                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Pay Type</th>
                                        <th>Dues Adjust with Salary Pay</th>
                                        <th>Month of Salary</th>
                                        <th> Salary</th>
                                        <th> Paid Commision</th>
                                        <th> Paid Amount</th>
                                        <th>Status</th>
                                        <th> Payments Date</th>
                                        <th> Payments Mode</th>

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
                                                <span className='chipOutlineFilled '>Paid Salary</span>
                                            </td>
                                            <td> No</td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                ₹45000
                                            </td>
                                            <td> ₹4500</td>
                                            <td> ₹4500</td>


                                            <td>
                                                <span className='chipOutlineFilled done'>Advance</span>
                                            </td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled '>Cash</span>
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
                                <CustomDropdown options={handle} title="Select Row" />
                            </div>

                        </div>
                    </div>
                </section>
            )}

            {Pending && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Pending Paid Employees (540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'>Pending Paid Employees </h2>

                        </div>
                        <div className='tableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Employee ID</th>
                                        <th>Employee</th>
                                        <th>Pay Type</th>
                                        <th>Dues Adjust with Salary Pay</th>
                                        <th>Month of Salary</th>
                                        <th> Salary</th>
                                        <th> Paid Commision</th>
                                        <th> Paid Amount</th>
                                        <th>Status</th>
                                        <th> Payments Date</th>
                                        <th> Payments Mode</th>

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
                                                <span className='chipOutlineFilled '>Paid Salary</span>
                                            </td>
                                            <td> No</td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                ₹45000
                                            </td>
                                            <td> ₹4500</td>
                                            <td> ₹4500</td>


                                            <td>
                                                <span className='chipOutlineFilled done'>Pending</span>
                                            </td>
                                            <td>
                                                02/10/2022
                                            </td>
                                            <td>
                                                <span className='chipOutlineFilled '>Cash</span>
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
                                <CustomDropdown options={handle} title="Select Row" />
                            </div>

                        </div>
                    </div>
                </section>
            )}



        </>
    )
}

export default Payroll