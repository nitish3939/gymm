import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import userImg from "./../assets/images/profile-img.jpeg";
import styles from "./dashboard.module.scss";
import LeadTypes from "../components/LeadTypes";
import MembersCounting from "../components/MembersCounting";
import FinancialAnalytics from "../components/FinancialAnalytics";
import CustomDropdown from "./../components/CustomDropdown";


import ModalForm from "./../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// import UserEnquiryDetails from "./../components/UserEnquiryDetails";



const Dashboard = () => {


    const [ResponseModal, setResponseModal] = useState(false);

    const [smsModal, setSmsModal] = useState(false);
    const [addNewSale, setAddNewSale] = useState(false);
    const [newEnquiry, setNewEnquiry] = useState(false)
    const [editEnquiry, setEditEnquiryModal] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);

    const [scheduleModal, setscheduleModal] = useState(false);





    const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const followups = ["Balance Due", "Enquiry", "Feedback", "Membership Renewal", "Trial", "Birthday","Anniversary"];
    const rowPerPage = ["5","10","20", "50"]

    return (
        <>
            <h1 className="h1 pt-1">Dashboard</h1>
            <div className={classNames("flex alignItems spaceBetween pt-1", styles.filterWrapperTop)}>
                <div className={classNames("headerSearchWrapper", styles.dashboardSearch)}>
                    <input type="text" placeholder="Search & Create “New Sales”" className="formControl" />
                    <div className='searchBtnInner'>  
                        <button onClick={() => setAddNewSale(true)} className='FormFillBtn BtnInner1'> New Sale</button>
                        <button onClick={() => setNewEnquiry(true)} className='FormFillBtn BtnInner2'> New Enquiry</button>
                    </div>
                    <span className="material-icons searchIcon"> search </span>
                    {/* <span className="material-icons closeIcon"> close </span> */}

                    <ModalForm  id='addNewEnquiryModal'
                                name={'addNewSaleModal'}
                                scrollable={true}
                                show={addNewSale}
                                onHide={() => setAddNewSale(false)}
                    />
                       
                    <ModalForm  id='addNewEnquiryModal'
                                name={'addNewEnquiry'}
                                scrollable={true}
                                show={newEnquiry}
                                onHide={() => setNewEnquiry(false)}
                    />



                </div>

                <div className={classNames("flex alignItems", styles.filterWrapper)}>
                    <div className={styles.sortBy}>Sort by</div>
                    <CustomDropdown options={options} title="Last 3 months" />
                </div>
            </div>
            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle'>Follow Ups (20)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Follow Ups </h2>
                        <CustomDropdown options={followups} title="Follow up Type" />
                    </div>
                    <div className='tableWrapper tableWrapperDashboard'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Scheduled</th>
                                    <th>Convertible</th>
                                    <th>Comments</th>
                                    <th></th>
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
                                        <span className='chipOutlineFilled'>Enquriy</span>
                                    </td>
                                    <td>02/10/2022 <br />
                                        03:34 pm</td>
                                    <td>
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            {/* <button className='dottedbtn'>
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)}>Edit Response</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item2' onClick={() => setResponseModal(true)} >History</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item3'  >Done</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'response'}
                                                    show={ResponseModal}
                                                    onHide={() => setResponseModal(false)}
                                                />


                                            </div>






                                        </div>
                                    </td>
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
                                        <span className='chipOutlineFilled'>Enquriy</span>
                                    </td>
                                    <td>02/10/2022 <br />
                                        03:34 pm</td>
                                    <td>
                                        <span className='chipOutlineFilled warm'>Warm</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            {/* <button className='dottedbtn'>
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)}>Edit Response</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)} >History</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1'  >Done</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'response'}
                                                    show={ResponseModal}
                                                    onHide={() => setResponseModal(false)}
                                                />


                                            </div>






                                        </div>
                                    </td>
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
                                        <span className='chipOutlineFilled'>Enquriy</span>
                                    </td>
                                    <td>02/10/2022 <br />
                                        03:34 pm</td>
                                    <td>
                                        <span className='chipOutlineFilled cool'>Cool</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            {/* <button className='dottedbtn'>
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button> */}
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)}>Edit Response</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)} >History</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1'  >Done</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'response'}
                                                    show={ResponseModal}
                                                    onHide={() => setResponseModal(false)}
                                                />


                                            </div>






                                        </div>
                                    </td>
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
                                        <span className='chipOutlineFilled'>Enquriy</span>
                                    </td>
                                    <td>02/10/2022 <br />
                                        03:34 pm</td>
                                    <td>
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            {/* <button className='dottedbtn'>
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button> */}
                                           <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)}>Edit Response</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)} >History</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1'  >Done</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'response'}
                                                    show={ResponseModal}
                                                    onHide={() => setResponseModal(false)}
                                                />


                                            </div>
  






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
                            <div className={ styles.sortBy}>Rows per page</div>

                            <CustomDropdown options={rowPerPage} title="6 " />
                            
                        </div>

                    </div>
                </div>
            </section>

            <section className={classNames('section', styles.membersOverviewWrapper)}>
                <h3 className='subtitle'>Overview</h3>
                <div className={styles.membersCardOverviewWrapper}>
                    {/* <UserEnquiryDetails heading="Members" infoIcon="" /> */}

                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Members</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Active</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>6790</div>
                                <div className={styles.text}>Upcoming</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Attendence</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Present</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>6790</div>
                                <div className={styles.text}>Absent</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Enquiry Overview</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>New Enquiries</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>6790</div>
                                <div className={styles.text}>Sales</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Follow Ups Overview</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Totla</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>6790</div>
                                <div className={styles.text}>Done</div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.membersCardList )}>
                        <div className={classNames(styles.membersHeading)}>
                            <h2 className='h2'>Trial</h2>
                            
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Attended</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>6790</div>
                                <div className={styles.text}>Non-Attended</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Balance Payment</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>20</div>
                                <div className={styles.text}>Paid</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Due</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Total PT Sales</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>20</div>
                                <div className={styles.text}>Number</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Amount</div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.membersCardList, styles.membersCardList1)}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Fresh PT Sales</h2>
                            <h2 className='h2'>PT Renewal Sales</h2>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={classNames('d-flex flex-column' , styles.membersContent1)}>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>0</div>
                                    <div className={styles.text}>Number</div>
                                </div>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>₹677798787979</div>
                                    <div className={styles.text}>Amount</div>
                                </div>

                            </div>
                            <div className={classNames('d-flex flex-column' , styles.membersContent1)}>
                            <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>0</div>
                                    <div className={styles.text}>Number</div>
                                </div>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>₹677798787979</div>
                                    <div className={styles.text}>Amount</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Sales</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>20</div>
                                <div className={styles.text}>Upgrade</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Transfer</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Sales</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>20</div>
                                <div className={styles.text}>Upgrade</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Transfer</div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.membersCardList, styles.membersCardList1)}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Fresh PT Sales</h2>
                            <h2 className='h2'>PT Renewal Sales</h2>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={classNames('d-flex flex-column' , styles.membersContent1)}>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>0</div>
                                    <div className={styles.text}>Number</div>
                                </div>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>₹677798787979</div>
                                    <div className={styles.text}>Amount</div>
                                </div>

                            </div>
                            <div className={classNames('d-flex flex-column' , styles.membersContent1)}>
                            <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>0</div>
                                    <div className={styles.text}>Number</div>
                                </div>
                                <div className={classNames('py-2', styles.membersContentList)}>
                                    <div className={styles.num}>₹677798787979</div>
                                    <div className={styles.text}>Amount</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.membersCardList}>
                        <div className={styles.membersHeading}>
                            <h2 className='h2'>Sales</h2>
                            <span className="material-icons-outlined">
                                info
                            </span>
                        </div>
                        <div className={styles.membersContent}>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>20</div>
                                <div className={styles.text}>Upgrade</div>
                            </div>
                            <div className={styles.membersContentList}>
                                <div className={styles.num}>0</div>
                                <div className={styles.text}>Transfer</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={classNames('section', styles.membersChartOverviewWrapper)}>
                <h3 className='subtitle'>Members Overview</h3>
                <div className="membersChartListWrapper">
                    <LeadTypes />
                    <MembersCounting />
                </div>
                <FinancialAnalytics />
                <div className={classNames( styles.helpSupport)}>Help Support</div>
            </section>

        </>
    )
}

export default Dashboard