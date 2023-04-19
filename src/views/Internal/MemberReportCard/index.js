import React, { useState, useContext } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "./../components/ModalForm";
import CustomDropdown from "./../components/CustomDropdown";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function CustomToggle({ children, eventKey }) {
    const [icon, seticon] = useState("expand_more");
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        seticon("expand_less")
    );

    return (
        <button
            type="button"
            // seticon={expand_less}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}



const MemberReportCard = () => {
    const [addWorkout, setaddWorkout] = useState(false);
    const page = ["All", "1", "2", "3", "4", "5", "6"];
    const [EditReportCard, setEditReportCard] = useState(false);
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Member Report Card
            <div onClick={() => setEditReportCard(true)} className='addEnquiryBtn'>
                    <span className="material-icons"> add </span>
                    Add Report Card
                </div>



                {/* <ModalForm name={'addEnquiry'} show={addEnquiry} onHide={() => setAddEnquiryModal(false)} /> */}
            </h1>





            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>
                        <div className={classNames("headerSearchWrapper member-search mt-1", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search " className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>            
                    </div>
                </div>



            </div>
            <section className={classNames('section memberReportCard', styles.followUpsWrapper)}>
                <h3 className='subtitle ' >Member Report Card (540)</h3>
                <div className='tableWrapperOuter'>
                    <div className='tableHeading'>
                        <h2 className='h2'>Member Report Card</h2>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>

                                   
                                    <th>Members</th>
                                   
                            
                                    <th> Date</th>
                                    <th> Number</th>
                                    


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {[...Array(5)].map((x, i) =>
                                <tr>

                                  
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='title'>Sonu Sharma</div>
                                                {/* <div className='subtitle'>9988776655</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td> 02/10/2022</td>
                                   
                                    <td> 9876543210</td>


                                    <td className='textRight'>
                                        <div className='dottedBtnWrapper ml-auto'>
                                            <div id="linkabkeDropdwon" className='' >
                                                <DropdownButton title="more_vert" drop='bottom' className="material-icons dottedbtn ">

                                                    <Dropdown.Item as="button" className='item1' onClick={() => setEditReportCard(true)}> Edit Report Card</Dropdown.Item>
                                                    

                                                </DropdownButton>
                                                <ModalForm

                                                    name={'editReportCard'}
                                                    show={EditReportCard}
                                                    onHide={() => setEditReportCard(false)}
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
            <div className='HelpSupport'>
                Help Support
            </div>

        </>
    )
}

export default MemberReportCard