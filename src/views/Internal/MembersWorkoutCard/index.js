import React, { useState, useContext } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "./../components/ModalForm";
import CustomDropdown from "./../components/CustomDropdown";
import CustomDropdownWithSearch from "./../components/CustomDropdown/CustomDropdownWithSearch.js";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';





const handle = ["Sonu Sharma1","Sonu sharma2","Sonu sharma3","Sonu sharma4","Sonu sharma5","Sonu sharma6"];

//const handle= {name:"John", img: 'userImg' };

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



const MembersWorkoutCard = () => {
    const [addWorkout, setaddWorkout] = useState(false);


    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Members Workout Card
                <div className='addEnquiryBtn' onClick={() => setaddWorkout(true)}>
                    <span className="material-icons"> add </span>
                    Add Workout Card
                </div>
                <ModalForm
                    name={'addWorkout'}

                    show={addWorkout}
                    onHide={() => setaddWorkout(false)}
                />

            </h1>





            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>



            </div>
            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle ' >Total Enquiries (563)</h3>
                <div className="AccordionDesign">


                    <Accordion defaultActiveKey="0">
                        <Card className='AccordionItemWrapper'>
                            <Card.Header className='AccordionHeader'>
                                <div className='AccordionTitle'> Super Sets</div>

                                <div className='d-flex align-items-center gap-3'>
                                    <CustomToggle eventKey="0"> <span class="material-icons BgIcon" >
                                        expand_more
                                    </span>
                                    </CustomToggle> 
                                    <span class="material-icons moreVertStyle">
                                        more_vert
                                    </span></div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <div className='d-flex justify-content-between align-items-center AssignMembers'>
                                        <div className='MembersImg d-flex align-items-center gap-2'>
                                            <div className='d-flex ms-3'>
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <span className='memberImgText'>+91</span>

                                            </div>
                                            <span> Assign Members</span>

                                        </div>
                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            {/* <input type="text" placeholder="Assign Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span> */}
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                          
                                            <CustomDropdownWithSearch options={handle}  />
                                            
                                            


                                        </div>

                                    </div>
                                    <div className='AccordionData'>
                                        <span className='chipOutlineFilled'>Sunday </span>
                                        <Accordion defaultActiveKey="0">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Chest</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>

                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>
                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>
                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <span className='chipOutlineFilled'>Monday </span>
                                        <Accordion defaultActiveKey="0">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Arms</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>

                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>
                                                                    <tr>
                                                                        <td>PUSH-UPS-CLOSE GRIP TRICEPS
                                                                            <p> Exercise</p>
                                                                        </td>
                                                                        <td>24 <p> Reps</p></td>
                                                                        <td>5 <p> Sets</p></td>
                                                                        <td>24kg <p> Weight</p></td>
                                                                        <td>06:30pm
                                                                            <p> Time</p>
                                                                        </td>


                                                                    </tr>
                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>

                                    </div>
                                </div>


                            </Accordion.Collapse>
                        </Card>

                    </Accordion>




                </div>
            </section>

        </>
    )
}

export default MembersWorkoutCard