import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import CustomDropdown from "./../components/CustomDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "./../components/ModalForm";

const FollowUps = () => {

    const [ResponseModal, setResponseModal] = useState(false);
    const [DoneModal, setDoneModal] = useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const trial = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const month = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const allocate = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const page = ["All", "1", "2", "3", "4", "5", "6"];
    const followup = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];










    return (
        <>
            <h1 className="h1 pt-1">Follow Ups</h1>

            <div className='row text-end pt-1'>
                <div className='col-lg-7'>
                    <div className='categoryWrapper'>

                        <div className=" dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Follow Type"  />
                        </div>

                        <div className="selectedText" >
                            <CustomDropdown options={lead} title=" Convertible Type" />
                        </div>

                        <div className="selectedText" >
                            <CustomDropdown options={trial} title="Status" />
                        </div>
                       
                        <div className="selectedText " >
                            <CustomDropdown options={month} title="Assigned" />
                        </div>
                        <div className="selectedText dropDownIfFirst" >
                            <CustomDropdown options={month} title="Last 3 months" />
                        </div>


                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>

                <div className='col-lg-5'>
                    <div className='downloadReoprtBtn ml-auto'>
                        <span className="material-icons-outlined downloadIcon "> file_download </span>
                        Download XLS Report
                    </div>
                </div>
            </div>

            {/* <div className='categoryWrapper'>
                <div className="selectDropdownBtn">
                    <div className="selectedText">
                        Category
                    </div>
                    <span className="material-icons"> expand_more </span>
                    <div className="selectDropdown">
                        <div className="options static">Membership Renewal	</div>
                        <div className="options">Membership Renewal	</div>
                        <div className="options">Membership Renewal	</div>
                        <div className="options">Membership Renewal	</div>
                        <div className="options">Membership Renewal	</div>
                    </div>
                </div>
                <div className="selectDropdownBtn">
                    <div className="selectedText">
                        Convertible Type
                    </div>
                    <span className="material-icons"> expand_more </span>
                    <div className="selectDropdown">
                        <div className="options static">Convertible Type 1</div>
                        <div className="options">Convertible Type 2</div>
                        <div className="options">Convertible Type 3</div>
                    </div>
                </div>
                <div className="selectDropdownBtn">
                    <div className="selectedText">
                        Status
                    </div>
                    <span className="material-icons"> expand_more </span>
                    <div className="selectDropdown">
                        <div className="options static">Done</div>
                        <div className="options">Warm</div>
                        <div className="options">Hot</div>
                    </div>
                </div>
                <div className="selectDropdownBtn">
                    <div className="selectedText">
                        Assigned
                    </div>
                    <span className="material-icons"> expand_more </span>
                    <div className="selectDropdown">
                        <div className="options static">User 1</div>
                        <div className="options">User 2</div>
                        <div className="options">User 3</div>
                        <div className="options">User 4</div>
                    </div>
                </div>
                <div className='downloadReoprtBtn ml-auto'>
                    <span className="material-icons downloadIcon "> file_download </span>
                    Download XLS Report
                </div>
            </div> */}


            {/* <div className='clearFilterWrapper'>
                <div className='clearFilterBtn'>Clear Filter</div>
                <div className='chip1'>
                    Membership Renewal
                    <span className="material-icons closeIcon"> close </span>
                </div>
                <div className='chip1'>
                    <span className='avatar'><img src={userImg} alt="user" /></span>
                    Membership Renewal
                    <span className="material-icons closeIcon"> close </span>
                </div>
                <div className='chip1 warm'>
                    Warm
                    <span className="material-icons closeIcon"> close </span>
                </div>
                <div className='chip1 done'>
                    Done
                    <span className="material-icons closeIcon"> close </span>
                </div>




            </div> */}

            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle'>Total Follow Ups (563)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Follow Ups</h2>
                       
                        <div className="selectedText" >
                            <CustomDropdown options={followup} title="  Follow up Type" />
                        </div>
                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Scheduled</th>
                                    <th>Assign to</th>
                                    <th>Schedule by</th>
                                    <th>Convertible</th>
                                    <th>Follow Up on</th>
                                    <th>Status</th>
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
                                    <td>
                                        02/10/2022 <br />
                                        03:34 pm
                                    </td>
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        02/10/2022 <br />
                                        03:34 pm
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Done</span>
                                    </td>
                                    <td>Call Me</td>

                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)}>Edit Response</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setResponseModal(true)} >History</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setDoneModal(true)} >Done</Dropdown.Item>
                                                </DropdownButton>
                                                <ModalForm

                                                    name={'response'}
                                                    show={ResponseModal}
                                                    onHide={() => setResponseModal(false)}
                                                />
                                             <ModalForm name={'doneModal'}
                                                    show={DoneModal}
                                                    onHide={() => setDoneModal(false)}  />

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

export default FollowUps