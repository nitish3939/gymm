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

    const [GenerateReport, setGenerateReport] = useState(false);
    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Member Report Card
            </h1>





            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper'>

                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>


                        <div className='downloadReoprtBtn ml-auto' onClick={() => setGenerateReport(true)}>
                        <span className="material-icons downloadIcon "> file_download </span>
                        Download XLS Report


                            
                    </div>
                     <ModalForm

                         name={'GenerateReport'}
                            show={GenerateReport}
                            onHide={() => setGenerateReport(false)}
                            />
                    </div>
                </div>



            </div>
            <section className={classNames('section memberReportCard', styles.followUpsWrapper)}>
                <h3 className='subtitle ' >Total PT Report (540)</h3>
                <div className="AccordionDesign">


                    <Accordion defaultActiveKey="0">
                        <Card className='AccordionItemWrapper'>
                            <Card.Header className='AccordionHeader'>
                                <div className='userAvatar'>
                                    <div className='userImg'>
                                        <img src={userImg} alt="user" />
                                    </div>
                                    <div className='userContent'>
                                        <div className='title'>Sonu Sharma</div>
                                        <div className='subtitle'>9988776655 </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <span class="material-icons BgIcon">
                                        file_download
                                    </span>
                                    <span class="material-icons BgIcon">
                                        edit
                                    </span>
                                    <CustomToggle eventKey="0"> <span class="material-icons text-white  ms-3" >
                                        expand_more
                                    </span>
                                    </CustomToggle>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <div>

                                    <div className='AccordionData'>
                                        <div className='text-center py-2 AccordionTitle'>
                                            Super Sets</div>

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
                    <Accordion defaultActiveKey="0">
                        <Card className='AccordionItemWrapper'>
                            <Card.Header className='AccordionHeader'>
                                <div className='userAvatar'>
                                    <div className='userImg'>
                                        <img src={userImg} alt="user" />
                                    </div>
                                    <div className='userContent'>
                                        <div className='title'>Sonu Sharma</div>
                                        <div className='subtitle'>9988776655 </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <span class="material-icons BgIcon">
                                        file_download
                                    </span>
                                    <span class="material-icons BgIcon">
                                        edit
                                    </span>
                                    <CustomToggle eventKey="0"> <span class="material-icons text-white  ms-3" >
                                        expand_more
                                    </span>
                                    </CustomToggle>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <div>

                                    <div className='AccordionData'>
                                        <div className='text-center py-2 AccordionTitle'>
                                            Super Sets</div>

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
            <div className='HelpSupport'>
                Help Support
            </div>

        </>
    )
}

export default MemberReportCard