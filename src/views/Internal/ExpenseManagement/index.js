import React, { useState } from 'react';


import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import ModalForm from "../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CustomCalendarDropDown from '../components/CustomDropdown/CustomCalendarDropDown';
// import DropdownLinable from './../components/DropdownLinable'




const ExpenseManagement = () => {
    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;


    const [addExpense, setaddExpense] = useState(false);
    const [editExpense, seteditExpense] = useState(false);




    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];




    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Expense Management
                <div onClick={() => setaddExpense(true)} className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    Add Expenses
                </div>

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn' >
                    <div className='enquiryIcon'>
                        <span class="material-icons">
                            paid
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title d-flex align-items-center'><span class="material-icons">
                            currency_rupee
                        </span>9999989</div>
                        <div className='subTitle'>Total Expenses</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn' >
                    <div className='enquiryIcon'>
                        <span className="material-icons"> paid
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title d-flex align-items-center'><span class="material-icons">
                            currency_rupee
                        </span>540</div>
                        <div className='subTitle'>Total Profit</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>



            </div>




            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>









                        <div className='dropDownIfFirst'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'> Select Staff</span>} />
                        </div>
                        <div className='col-2'>
                           <CustomCalendarDropDown  />    
                        </div>



                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>


            </div>


            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle' >Total Expenses (₹540)</h3>


                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'> Expense Management</h2>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Invoice No</th>
                                    <th>Expenses Type</th>
                                    <th>Description</th>
                                    <th>Expenses Date</th>
                                    <th>Amount</th>
                                    <th> Staff Name</th>
                                    <th> Payment Mode </th>


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(10)].map((x, i) =>
                                    <tr>
                                        <td> 260449</td>


                                        <td>
                                            <span className='chipOutlineFilled '>Cash</span>
                                        </td>
                                        <td> 2 treadmill, 20 Types of Dumbells, Barbell Rods, Butterfly</td>
                                        <td>
                                            02/10/2022
                                        </td>
                                        <td>
                                            ₹45000
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
                                            <span className='chipOutlineFilled '>Cash</span>
                                        </td>


                                        <td className='textRight'>
                                            <div className='dottedBtnWrapper ml-auto'>

                                                {/* <span className="material-icons">

                                            </span> */}
                                                <div id="linkabkeDropdwon" className='dottedbtn' >
                                                    <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                        <Dropdown.Item as="button" className='item1' onClick={() => setaddExpense(true)}>Add Expenses</Dropdown.Item>
                                                        <Dropdown.Item as="button" className='item3' onClick={() => seteditExpense(true)} > Edit Expenses</Dropdown.Item>
                                                    </DropdownButton>
                                                    <ModalForm

                                                        name={'addExpense'}
                                                        show={addExpense}
                                                        onHide={() => setaddExpense(false)}
                                                    />

                                                    <ModalForm

                                                        name={'editExpense'}
                                                        show={editExpense}
                                                        onHide={() => seteditExpense(false)}
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








        </>
    )
}

export default ExpenseManagement