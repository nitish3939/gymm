import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "../components/ModalForm";
import CustomDropdown from "../components/CustomDropdown";



const Memberships_Packages = () => {
    const [newPackage, setnewPackage] = useState(false);
    const [editPackage, seteditPackage] = useState(false);
    const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const lead = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowPerPage = ["5 10", "20", "50",]
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Memberships Packages
                <div onClick={() => setnewPackage(true)} className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    New Packages
                </div>

            </h1>

            <div className='enquiriesBtnWrapper'>

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



            </div>



            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className="dropDownIfFirst" >
                            <CustomDropdown  options={handle} title="Assigned Trainer" />
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

            <section className={classNames('section', styles.followUpsWrapper)}>
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
                                    <th>Package Name</th>
                                    <th>Duration</th>
                                    <th> Sessions</th>
                                    <th> Price</th>
                                    <th> Active / Inactive</th>


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>
                                        230492
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled'> Gym Membership</span>

                                    </td>
                                    <td>
                                        6 Months
                                    </td>
                                    <td> 156</td>
                                    <td> ₹7000.00</td>





                                    <td>

                                        <span className='ToggleIconOn'>
                                            <span class="material-icons">
                                                fiber_manual_record
                                            </span>  </span>


                                    </td>






                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setnewPackage(true)} >New Packages</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => seteditPackage(true)}>Edit Package</Dropdown.Item>


                                                </DropdownButton>
                                                <ModalForm

                                                    name={'newPackage'}
                                                    show={newPackage}
                                                    onHide={() => setnewPackage(false)}
                                                />
                                                <ModalForm

                                                    name={'editPackage'}
                                                    show={editPackage}
                                                    onHide={() => seteditPackage(false)}
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
                                        <span className='chipOutlineFilled'> Gym Membership</span>

                                    </td>
                                    <td>
                                        6 Months
                                    </td>
                                    <td> 156</td>
                                    <td> ₹7000.00</td>





                                    <td>

                                        <span className='ToggleIconOff'>
                                            <span class="material-icons">
                                                fiber_manual_record
                                            </span>  </span>


                                    </td>






                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='dottedbtn' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons ">
                                                    <Dropdown.Item as="button" className='item1' onClick={() => setnewPackage(true)} >New Packages</Dropdown.Item>
                                                    <Dropdown.Item as="button" className='item1' onClick={() => seteditPackage(true)}>Edit Package</Dropdown.Item>


                                                </DropdownButton>
                                                <ModalForm

                                                    name={'newPackage'}
                                                    show={newPackage}
                                                    onHide={() => setnewPackage(false)}
                                                />
                                                <ModalForm

                                                    name={'editPackage'}
                                                    show={editPackage}
                                                    onHide={() => seteditPackage(false)}
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

                        <div className={classNames("flex alignItems spaceBetween", styles.filterWrapper)}>
                            <div className={styles.sortBy}>Rows per page</div>
                            <CustomDropdown  options={rowPerPage} title="Select Row" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Memberships_Packages