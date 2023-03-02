import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "./../components/CustomDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "./../components/ModalForm";


const Memberships = () => {

    const deleteMembership = () => {

    }
    const [ClientIdModal, setClientIdModal] = useState(false);
    const [ClientDayModal, setClientDayModal] = useState(false);
    const [ChangeDateModal, setChangeDateModal] = useState(false);

    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
   const rowPerPage= ["5" , "10","20","50"];



    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Memberships

            </h1>

            <div className='enquiriesBtnWrapper membershipBtns'>

                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>563</div>
                        <div className='subTitle'>General Training </div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Personal Training</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons"> person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Group Ex</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons">person </span>
                    </div>
                    <div className='enquiryContent'>
                        <div className='title'>7</div>
                        <div className='subTitle'>Complete Fitness</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>
                <div className='enquiriesBtn'>
                    <div className='enquiryIcon'>
                        <span className="material-icons">person </span>
                    </div>
                    <div className='enquiryContent' onClick={deleteMembership}>
                        <div className='title'>88</div>
                        <div className='subTitle'>Delete Memberships</div>
                    </div>
                    <img className='illustration' src={illsutration} alt="" />
                </div>


            </div>



            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className=" dropDownIfFirst" >
                            <CustomDropdown options={handle} title="Assigned Trainer" />
                        </div>






                        <div className="selectedText" >
                            <CustomDropdown options={lead} title=" Status" />
                        </div>




                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>



            </div>

            <section className={classNames('section PersonalTraining', styles.followUpsWrapper)} >
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
                                {/* <tr>

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
                                </tr> */}


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
                            <CustomDropdown options={rowPerPage} title="Select Row" />
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

                        <div className={classNames("flex alignItems spaceBetween", styles.filterWrapper)}>
                            <div className={styles.sortBy}>Rows per page</div>
                            <CustomDropdown options={rowPerPage} title="Select Row" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Memberships