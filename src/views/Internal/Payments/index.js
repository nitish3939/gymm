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


import CustomCalendarDropDown from "../components/CustomDropdown/CustomCalendarDropDown.js";

const Payments = () => {
    const calendar_month = <span class="material-icons">
        calendar_month
    </span>;


    const [addMember, setaddMember] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [ invoiceBalanceDue, setinvoiceBalanceDue] = useState(false);
   

    const [EditMemberDetails, setEditMemberDetails] = useState(false);
    // const [modal, setModal] = React.useState(false);

    const [ChangeDate, setChangeDate] = useState(false);

    const [ smsModal, setSmsModal] = useState(false);

   

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowsPerPage=["5","10","20","50"]

    const [PaidPayment, setPaidPayment] = useState(false);

    const [Pending, setPending] = useState(true);

    const [activeTab, setActiveTab] = useState(1);
    


    const PaidPaymentHaldler = () => {

        setPaidPayment(true);
        setPending(false);
       
       
    };
    const PendingHandler = () => {
        setPaidPayment(false);
        setPending(true);
       
    };

    const [activeAccodion1, setActiveAccodion1] = useState(0);
 
    const showAccorion1 = (acc) => {
        setActiveAccodion1(acc);
      }
      

    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Payments

            </h1>

            <div className='enquiriesBtnWrapper'>

                <div className='enquiriesBtn' >
                    <div className='enquiryIcon'>
                        <span className="material-icons"> payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>₹563</div>
                        <div className='subTitle'>Total Revenue</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
              <div onClick={() => showAccorion1(1)}  className={`${activeAccodion1 === 1 ? "activePayTab" : "" }`} >  <div className='enquiriesBtn' onClick={PendingHandler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> payments
                        </span>
                    </div>
                    <div className='enquiryContent '>
                        <div className='title'>₹540</div>
                        <div className='subTitle'>Total Pending Payment</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div></div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>₹7</div>
                        <div className='subTitle'>Total Renewal Payments</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div  onClick={() => showAccorion1(2)}  className={`${activeAccodion1 === 2 ? "activePayTab" : "" }`} >
                      <div className='enquiriesBtn' onClick={PaidPaymentHaldler}>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> payments
                        </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>₹200</div>
                        <div className='subTitle'>Total Paid Payments</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div></div>


            </div>




            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className='col-2'>
                     <CustomCalendarDropDown title={"Select Invoice Date"}/>
                        </div>
                        <div className='col-2'>
                        <CustomCalendarDropDown title={"Select Due Date"}/>        
                      </div>



                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>


            </div>

            {Pending && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Pending Payment (₹540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'> Pending Payments</h2>

                        </div>
                        <div className='tableWrapper paymentsTableWrapper'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Invoice No</th>
                                        <th>Member Name</th>
                                        <th>Invoice Date</th>
                                        <th>Plan Total</th>
                                        <th>Total</th>
                                        <th> Discount</th>
                                        <th> Paid </th>
                                        <th>Balance</th>
                                        <th>Due Date</th>
                                        <th> Plan Type</th>
                                        <th>Status</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(1)].map((x, i) =>
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
                                               10 Oct, 2022
                                            </td>
                                            <td> 1264568</td>
                                            <td>
                                            ₹5000.00
                                            </td>
                                            <td>
                                            ₹00.00
                                            </td>
                                            <td> ₹10.00</td>
                                            <td> ₹200.00</td>


                                            <td>
                                                {/* <span className='chipOutlineFilled done'>Paid</span> */}
                                                02/10/2022
                                            </td>
                                            <td>
                                                
                                                <span className='chipOutlineFilled '>General Training, Personal Training</span>
                                            </td>
                                            <td>
                                                
                                                <span className='chipOutlineFilled hot'>Balance</span>
                                            </td>


                                            <td className='textRight'>
                                                <div className='dottedBtnWrapper ml-auto'>

                                                    {/* <span className="material-icons">

                                            </span> */}
                                                    <div id="linkabkeDropdwon" className='dottedbtn' >
                                                        <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                            <Dropdown.Item as="button" className='item1' onClick={() => setinvoiceBalanceDue(true)}>View Invoice</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item1' >Mail Invoice</Dropdown.Item>
                                                            <Dropdown.Item as="button" className='item3' onClick={() => setChangeDate(true)} > Change Invoice Date</Dropdown.Item>
                                                        </DropdownButton>
                                                        <ModalForm

                                                            name={'invoiceBalanceDue'}
                                                            show={invoiceBalanceDue}
                                                            onHide={() => setinvoiceBalanceDue(false)}
                                                        />
                                                        
                                                        <ModalForm

                                                            name={'ChangeDate'}
                                                            show={ChangeDate}
                                                            onHide={() => setChangeDate(false)}
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
                                <CustomDropdown options={rowsPerPage} title="Rows Per Page" />
                            </div>

                        </div>
                    </div>
                </section>
            )}


            {PaidPayment && (
                <section className={classNames('section', styles.followUpsWrapper)}>
                    <h3 className='subtitle' >Total Paid Payments (₹540)</h3>


                    <div className='tableWrapperOuter'>
                        <div className='tableHeading'>
                            <h2 className='h2'> Paid Payments</h2>

                        </div>
                        <div className='tableWrapper paymentsTableWrapper paidPayment'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> Invoice No</th>
                                        <th>Members</th>

                                        <th>Invoice Date</th>
                                        <th>Total</th>
                                        <th> Discount</th>
                                        <th> Plan Type</th>

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
                                            <td> 10 Oct, 2022</td>
                                            <td> ₹5000.00</td>
                                            <td> ₹00.00</td>
                                            <td>
                                                <span className='chipOutlineFilled '>General Training,
                                                    Personal Training</span>
                                            </td>



                                            <td>
                                                <span className='chipOutlineFilled done'>Paid</span>
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
                                <CustomDropdown options={rowsPerPage} title="Rows Per Page" />
                            </div>

                        </div>
                    </div>
                </section>
            )}





        </>
    )
}




export default Payments