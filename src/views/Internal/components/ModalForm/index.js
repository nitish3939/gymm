import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import userImg from "../../assets/images/profile-img.jpeg";
import illsutration from "../../assets/images/illustration.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from "../../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import InputGroup from 'react-bootstrap/InputGroup';
import HeaderStrip from '../../assets/images/headerStrip.svg';
import logo from '../../assets/images/logo-white-bg.png';

import './modal.scss'


import CustomDropdown from "./../CustomDropdown";
import CustomCalendarDropDown from "../CustomDropdown/CustomCalendarDropDown.js";



import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ModalBody } from 'react-bootstrap-v5';
import { ModalHeader } from 'react-bootstrap';


function ModalForm(props) {
    const editicon = <span className="material-icons-outlined">edit</span>;
    const historyicon = <span class="material-icons-outlined">history  </span>;
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const HearAbout = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const member = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const privacy =["Private","Public"]
    const [dietPlan, setdietPlan] = useState(false);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState('edit');
    const [keys, setKeys] = useState('salary');
    
    const [keyDiet, setkeyDiet] = useState('sunday');

    const [style, setStyle] = useState("HalfScreenModalCol");
    const [icon, seticon] = useState("open_in_full");

    const [fullscreen, setFullscreen] = useState(false);

    //const [startDate, setStartDate] = useState(new Date());
    const originalDate = new Date(); // or get it as prop

    const [startDate, setStartDate] = React.useState(null);
    const calRef = React.useRef();
  
    const  originalDateTwo = new Date(); // or get it as prop
    const [startDateTwo, setStartDateTwo] = React.useState(null);
    const calRefTwo = React.useRef();

    
    const changeStyle = () => {
        if (style == "HalfScreenModalCol") {
            setStyle("FullScreenModalRow");
            seticon("close_fullscreen");
            setFullscreen(true);
        } else {
            setStyle("HalfScreenModalCol");
            seticon("open_in_full");
            setFullscreen(false);
        }

    };


    return (
        <>

               {/* =====================Add New Sale modal from ============= */}
         {props.name == 'addNewSaleModal' &&
                <Modal
                    {...props}


                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title id="contained-modal-title-vcenter">
                            <span className="material-icons"> add</span>  Add New Sale
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        


                    <Form>
                            <div>
                                <div>

                                    <div className='row'>
                                       
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 ">
                                            <Form.Group className=" mb-4 ModalFormInputField" >
                                                <Form.Label>Mobile Number*</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : 9988776655" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                     
                                      
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Gender*</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Male"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Female"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                       
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label> Birth Date*</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label> Member/Employee Referral*</Form.Label>
                                                <CustomDropdown options={member} title="Select Referral" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Remark / Summery</Form.Label>
                                                <textarea placeholder="Type your Remark / Summery here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Residential Address</Form.Label>
                                                <textarea placeholder="Type your Address here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>


                                    </div>

                                </div>


                                <div>
                                  
                                </div>
                            </div>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer className='me-1'>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn ">Add New Sale
                    
                        </Button>
                    </Modal.Footer>
                </Modal>
            }









         {/* =====================Add New Enquiry modal from ============= */}
         {props.name == 'addNewEnquiry' &&
                <Modal
                    {...props}


                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title id="contained-modal-title-vcenter">
                            <span className="material-icons"> record_voice_over</span>  Add New Enquiry
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        


                    <Form>
                            <div>
                                <div>

                                    <div className='row'>
                                       
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 ">
                                            <Form.Group className=" mb-4 ModalFormInputField" >
                                                <Form.Label>Mobile Number*</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : 9988776655" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Gym Services*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Budget per month</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : ₹4000" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Lead Type*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Gender*</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Male"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Female"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                       
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label> Where did you hear about us?*</Form.Label>
                                                <CustomDropdown options={member} title="Select One" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Remark / Summery</Form.Label>
                                                <textarea placeholder="Type your Comments here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Residential Address</Form.Label>
                                                <textarea placeholder="Type your Address here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>

                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromCheckBox" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label="Book a Trial"
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label>Assign To*</Form.Label>
                                                <CustomDropdown options={member} title="Select Trainer" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Start Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>End Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>


                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromCheckBox" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label="Add Follow Up"
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Follow Up Date*</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label>Allocate*</Form.Label>
                                                <CustomDropdown options={member} title="Select Allocate" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label>Type*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                <Form.Label>Convertibility*</Form.Label>
                                                <CustomDropdown options={member} title="Select " />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>To Do*</Form.Label>
                                                <textarea placeholder="Type here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                        

                                    </div>

                                </div>


                                <div>
                                  
                                </div>
                            </div>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer className='me-1'>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn ">Add Enquiry
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }





            {/* =====================sms modal from ============= */}
            {props.name == 'smsModal' &&
                <Modal
                    {...props}


                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title id="contained-modal-title-vcenter">
                            <span className="material-icons"> sms</span>  Send SMS
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        <div className='ModalFormInputField mb-4'>
                            <Form.Label className="d-flex justify-content-between">
                                <span> SMS</span>
                                <span> 30/100</span>

                            </Form.Label >



                            <ProgressBar className="ModalFormProgressBar" now={50} />
                        </div>


                        <div className='ModalFormInputField mb-4 customBigDropDown'>
                            <Form.Label >Select type of numbers </Form.Label>
                            <CustomDropdown options={handle} title="Select" />
                            <Form.Control.Feedback type="invalid">
                                error message
                            </Form.Control.Feedback>

                        </div>
                        <div className='ModalFormInputField mb-4 customBigDropDown'>
                            <Form.Label>Select Template</Form.Label>
                            <CustomDropdown options={handle} title="Select" />
                            <Form.Control.Feedback type="invalid">
                                error message
                            </Form.Control.Feedback>

                        </div>
                        <div className='ModalFormTextarea'>
                            <Form.Label>SMS Message </Form.Label>
                            <Form.Control as="textarea" placeholder="Select the template" />
                            <Form.Control.Feedback type="invalid">
                                error message
                            </Form.Control.Feedback>

                        </div>

                    </Modal.Body>
                    <Modal.Footer className='me-1'>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn ">Send SMS
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
            {/*=============== Edit Enquiry  Modal Design =================*/}
            {props.name == 'editEnquiry' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">edit</span>  Edit Enquiry
                        </Modal.Title>
                        <div className='expandicon '>
                            <span class="material-icons " onClick={changeStyle}  > {icon} </span>
                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>
                                <div>

                                    <div className='row'>
                                        <div className='ModalFormTitle'>
                                            Personal Info

                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 ">
                                            <Form.Group className=" mb-4 ModalFormInputField" >
                                                <Form.Label>Mobile Number*</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : 9988776655" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Gender*</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Male"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Female"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                        <div class="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Marital Status</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Single"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Married"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Birth Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Aniversary Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Residential Address</Form.Label>
                                                <textarea placeholder="Type your Address here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>


                                <div>
                                    <div className='row'>

                                        <div className='ModalFormTitle '>
                                            Gym Info

                                        </div>

                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormInputField ">

                                                <Form.Label>Where did you hear about us?</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />
                                            </Form.Group>


                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Are you currently exercising?</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Yes"
                                                        name="exercising"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="No"
                                                        name="exercising"
                                                        type="radio"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <div className='mb-4 ModalFormTextarea'>
                                                <textarea placeholder="Describe the reason here..." ></textarea> </div>
                                        </div>

                                        <div className="col-12 ModalFromRadioBtn">
                                            <Form.Group className="mb-4" >
                                                <Form.Label className='mb-3'>Any Health challenges?</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Yes"
                                                        name="challanges"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="No"
                                                        name="challanges"
                                                        type="radio"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromCheckBox" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label="Book a Trial"
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                    <Form.Check

                                                        label="Book a Trial"
                                                        name="book2"
                                                        type="checkbox"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Schedule Trial*</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 

                                            </Form.Group>
                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField ">

                                                <Form.Label>Assign To</Form.Label>
                                                <CustomDropdown options={member} title="Select Member" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Lead Type*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Member/Employee Referral</Form.Label>
                                                <CustomDropdown options={member} title="Select " />
                                            </Form.Group>


                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Budget per month</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : ₹4000" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Other Referral</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : Rahul" />

                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter'>

                        <div className='user d-flex flex-row'>
                            <div className='img'>
                                <img src="/static/media/profile-img.8c485a2c6d52c80731ed.jpeg" />

                            </div>
                            <div className='d-flex flex-column'>
                                <div className='username'>Manish Kumar</div>
                                <div className='subtitle'>Enquiry Created by</div>
                            </div>


                        </div>
                        <button className='FormFillBtn '> Apply Changes</button>




                    </Modal.Footer>
                </Modal>
            }

{/*=============== Add Enquiry  Modal Design =================*/}
{props.name == 'addEnquiry' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">edit</span>  Add Enquiry
                        </Modal.Title>
                        <div className='expandicon '>
                            <span class="material-icons " onClick={changeStyle}  > {icon} </span>
                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>
                                <div>

                                    <div className='row'>
                                        <div className='ModalFormTitle'>
                                            Personal Info

                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 ">
                                            <Form.Group className=" mb-4 ModalFormInputField" >
                                                <Form.Label>Mobile Number*</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : 9988776655" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Gender*</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Male"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Female"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                        <div class="col-6">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Marital Status</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Single"
                                                        name="gender"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Married"
                                                        name="gender"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>


                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Birth Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Aniversary Date</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Residential Address</Form.Label>
                                                <textarea placeholder="Type your Address here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>


                                <div>
                                    <div className='row'>

                                        <div className='ModalFormTitle '>
                                            Gym Info

                                        </div>

                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormInputField ">

                                                <Form.Label>Where did you hear about us?</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />
                                            </Form.Group>


                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromRadioBtn" >
                                                <Form.Label className='mb-3'>Are you currently exercising?</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Yes"
                                                        name="exercising"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="No"
                                                        name="exercising"
                                                        type="radio"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className='col-12'>
                                            <div className='mb-4 ModalFormTextarea'>
                                                <textarea placeholder="Describe the reason here..." ></textarea> </div>
                                        </div>

                                        <div className="col-12 ModalFromRadioBtn">
                                            <Form.Group className="mb-4" >
                                                <Form.Label className='mb-3'>Any Health challenges?</Form.Label>
                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Yes"
                                                        name="challanges"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="No"
                                                        name="challanges"
                                                        type="radio"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFromCheckBox" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label="Book a Trial"
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                    <Form.Check

                                                        label="Book a Trial"
                                                        name="book2"
                                                        type="checkbox"

                                                    /></div>


                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Schedule Trial*</Form.Label>
                                                <CustomCalendarDropDown title={"dd/mm/yyyy"}/> 

                                            </Form.Group>
                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField ">

                                                <Form.Label>Assign To</Form.Label>
                                                <CustomDropdown options={member} title="Select Member" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Lead Type*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Member/Employee Referral</Form.Label>
                                                <CustomDropdown options={member} title="Select " />
                                            </Form.Group>


                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Budget per month</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : ₹4000" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Other Referral</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : Rahul" />

                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter'>

                        <div className='user d-flex flex-row'>
                            <div className='img'>
                                <img src="/static/media/profile-img.8c485a2c6d52c80731ed.jpeg" />

                            </div>
                            <div className='d-flex flex-column'>
                                <div className='username'>Manish Kumar</div>
                                <div className='subtitle'>Enquiry Created by</div>
                            </div>


                        </div>
                        <button className='FormFillBtn '> Add Enquiry</button>




                    </Modal.Footer>
                </Modal>
            }



{/* =====================Done Enquiry modal ============= */}
{props.name == 'doneModal' &&
                <Modal
                    {...props}


                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id='DeleteModal'
                >

                    <Modal.Header>
                        <div></div>
                        <div className='DeleteCloseBtn'>

                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-center'>
                            <div className='DeleteIcon '>
                                <span class="material-icons DoneBTNIcon">
                                     check_circle
                                </span>


                            </div>
                            <div className='Text' >
                                <h1>  Move to Done follow up?</h1>


                                <p> Do you really want to move this follow up to  <span> Done</span>?
                                   </p>
                                   <p className='  gap-2 d-inline-flex align-items-center justify-content-center'> <span>Follow up ID </span> < h6 className='doneBtnFollowId'>230492</h6> </p>
                               
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button className='FormFillBtn DeleteBtn DoneBTN' > <span class="material-icons">
                            delete
                        </span>
                               Yes, Move to Done

                        </Button>
                    </Modal.Footer>
                </Modal>
            }




            {/* =====================Delete Enquiry modal ============= */}
            {props.name == 'deleteModal' &&
                <Modal
                    {...props}


                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    id='DeleteModal'
                >

                    <Modal.Header>
                        <div></div>
                        <div className='DeleteCloseBtn'>

                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-center'>
                            <div className='DeleteIcon'>
                                <span class="material-icons">
                                    delete
                                </span>


                            </div>
                            <div className='Text' >
                                <h1>  Delete Enquiry?</h1>


                                <p> Do you really want to delete <span> 456 Enquiries</span>?
                                   <br></br> This process cannot be undone.</p>
                                <button onClick={handleShow}  > <span class="material-icons">
                                    visibility
                                </span>View 456 Enquiries</button>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button className='FormFillBtn DeleteBtn' > <span class="material-icons">
                            delete
                        </span>
                            Yes, Delete Enquiry

                        </Button>
                    </Modal.Footer>
                </Modal>
            }

            {/* ==============view deleted enquiry Modal =============== */}
            <Modal show={show} fullscreen className="fullScreenModal" >
                <Modal.Header className='ModalFormHeader' >
                    <Modal.Title >

                        <span class="material-icons"> delete</span>  Delete Enquiries (456)

                    </Modal.Title>
                    <span class="material-icons closeCursorPointer" onClick={handleClose}> close</span>

                </Modal.Header>
                <Modal.Body className='ModalFormContent'>
                    <div className='enquiriesBtnWrapper'>

                        <div className='enquiriesBtn'>
                            <div className='enquiryIcon'>
                                <span className="material-icons"> done_all </span>
                            </div>
                            <div className='enquiryContent'>
                                <div className='ModalFormTitl'>89</div>
                                <div className='subTitle'>Selected Enquiries</div>
                            </div>
                            <img className='illustration' src={illsutration} alt="" />
                        </div>
                        <div className='enquiriesBtn'>
                            <div className='enquiryIcon'>
                                <span className="material-icons"> remove_done </span>
                            </div>
                            <div className='enquiryContent'>
                                <div className='ModalFormTitl
                                '>540</div>
                                <div className='subTitle'>Not Selected Enquiries</div>
                            </div>
                            <img className='illustration' src={illsutration} alt="" />
                        </div>


                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
                                    </th>
                                    <th>Name</th>
                                    <th>Enquiry No.</th>
                                    <th>Enquiry Date</th>
                                    <th>Handle by</th>
                                    <th>Lead Type</th>
                                    <th>Trial Booked</th>
                                    <th>Comments</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    <Form.Group className=" ModalFromCheckBox" >
                                        <div className='checkbox '>
                                             <Form.Check label="" name="book1" type="checkbox" />
                                        </div>
                                    </Form.Group>
                                    </td>
                                    <td>
                                        <div className='userAvatar'>
                                            <div className='userImg'>
                                                <img src={userImg} alt="user" />
                                            </div>
                                            <div className='userContent'>
                                                <div className='ModalFormTitle'>Sonu Sharma</div>
                                                <div className='subtitle'>9988776655</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>
                                <tr>
                                    <td>
                                        {/* <label className="checkboxContainer">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
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
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
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
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>
                                <tr>
                                    <td>
                                       <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
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
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
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
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group className=" ModalFromCheckBox" >

                                            <div className='checkbox '>
                                                <Form.Check label="" name="book1" type="checkbox" />
                                            </div>
                                        </Form.Group>
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
                                        230492
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
                                        <span className='chipOutlineFilled hot'>Hot</span>
                                    </td>
                                    <td>
                                        <span className='chipOutlineFilled done'>Yes</span>
                                    </td>
                                    <td>Call Me</td>


                                </tr>

                            </tbody>
                        </table>
                    </div>

                </Modal.Body>
                <Modal.Footer className='ModalFormFooter'>

                    <div className='user d-flex flex-row'>
                        <div className='img'>
                            <span class="material-icons"> delete</span>

                        </div>
                        <div className='d-flex flex-column'>
                            <div className='username'>89</div>
                            <div className='subtitle'>Delete Selected Enquiries</div>
                        </div>


                    </div>
                    <button className='FormFillBtn'>   <span class="material-icons"> delete</span> Yes, Delete Enquiries</button>




                </Modal.Footer>
            </Modal>

            {/*=============== schedual follow up   Modal Design =================*/}

            {
                props.name == 'schedule' &&
                <Modal
                    {...props}

                    id='EditEnquiry'

                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title>
                            <span class="material-icons">replay</span>  Add to Follow Up
                        </Modal.Title>


                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>

                            <div className='row'>
                                <div className='title d-flex align-items-center'>
                                    Enquiry Properties <span class="material-icons px-2">
                                        info_outline
                                    </span>

                                </div>
                                <div className='col-12'>
                                    <Card className='ModalFormProperty mt-3'>
                                        <Card.Text>
                                            <div className='userAvatar'>
                                                <div className='userImg'>
                                                    <img src={userImg} alt="user" />
                                                </div>
                                                <div className='userContent'>
                                                    <div className='title'>Sonu Sharma</div>
                                                    <div className='subtitle'>Enquiry ID: 235702</div>
                                                </div>
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Enquiry Date : 20 Sep, 2022 | 01:03 AM
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div className='d-flex align-center gap-1' >
                                                <div> Remarks/Summary:</div>
                                                <div className='pe-2'> Follow up for balance payment of Rs. 1999 due on 02-07-2022 against invoice number GYMDISCOVERY/2022-2023/44.</div>
                                            </div>
                                        </Card.Text>
                                        <Card.Text>

                                            <div className='UserProfile d-flex flex-row align-center'>
                                                Handle by :
                                                <div className='SmallImg' >
                                                    <img src={userImg} />

                                                </div>

                                                <div className='username-small'>Mohit Sharma</div>




                                            </div>
                                        </Card.Text>
                                        <Card.Text>

                                            <div className='UserProfile d-flex flex-row'>
                                                Created by :
                                                <div className='SmallImg' >
                                                    <img src={userImg} />

                                                </div>

                                                <div className='username-small'>Sonu Sharma</div>




                                            </div>
                                        </Card.Text>
                                        <Card.Text className='border-0'>

                                            <div className='d-flex flex-row align-items-center gap-1'>
                                                Lead Type :
                                                <div className='chipOutlineFilled hot ms-0'>Hot</div>





                                            </div>
                                        </Card.Text>
                                    </Card>

                                </div>







                                <div className='ModalFormTitle d-flex align-center'>
                                    Follow Up Properties <span class="material-icons px-2">
                                        info_outline
                                    </span>

                                </div>





                                <div className="col-12">
                                    <Form.Group className="mb-4 ModalFormInputField">
                                        <Form.Label>Follow Up Date*</Form.Label>
                                       <CustomCalendarDropDown title="dd/mm/yyyy" />

                                    </Form.Group>
                                </div>
                                <div className='col-12'>
                                    <Form.Group className="mb-4 ModalFormInputField">

                                        <Form.Label>Assign To</Form.Label>
                                        <CustomDropdown options={member} title="Select Member" />
                                    </Form.Group>


                                </div>
                                <div className='col-12'>
                                    <Form.Group className="mb-4 ModalFormInputField">

                                        <Form.Label> Type*</Form.Label>
                                        <CustomDropdown options={member} title="Select" />
                                    </Form.Group>


                                </div>
                                <div className='col-12'>
                                    <Form.Group className="mb-4 ModalFormInputField">

                                        <Form.Label> Convertibility*</Form.Label>
                                        <CustomDropdown options={member} title="Select" />
                                    </Form.Group>


                                </div>
                                 <div className='col-12'>
                                    <Form.Group className="mb-4  ModalFormTextarea">

                                        <Form.Label> Comments*</Form.Label>
                                        <Form.Control as="textarea" placeholder="Type your Comments here..." />
                                    </Form.Group>


                                </div>



                            </div>


                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter'>

                        <div className='UserProfile d-flex flex-row m-0'>
                            <div className='img'>
                                <img src={userImg} alt="user" />

                            </div>
                            <div className='d-flex flex-column'>
                                <div className='username'>Manish Kumar</div>
                                <div className='subtitle'>Follow up Schedule by</div>
                            </div>


                        </div>
                        <button className='FormFillBtn m-0'>Add Follow up</button>




                    </Modal.Footer>
                </Modal>
            }

            {/*=============== Edit Response  Modal Design =================*/}
            {props.name == 'response' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <div className='UserProfile d-flex flex-row'>
                                <div className='img'>
                                    <img src={userImg} />

                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='username'>Sonu Sharma</div>
                                    <div className='subtitle'>Follow Up ID : 34567</div>
                                </div>


                            </div>
                        </Modal.Title>
                        <div className='expandicon'>
                            <span className="material-icons " onClick={changeStyle}  > {icon} </span>
                            <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body className="px-0 py-0">



                        <Tabs

                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className=" px-4  TabWrapper  gap-0"
                        >
                            <Tab eventKey="edit" tabClassName=" ModalFormTabs" title={<span>{editicon} Edit Response</span>} >

                            </Tab>
                            <Tab eventKey="history" tabClassName=" ModalFormTabs" title={<span>{historyicon} Response History</span>} >

                            </Tab>
                            <div eventKey="edit" >
                                <Form className='px-4 py-4  '>
                                    <div className={style}>
                                        <div>
                                            <div className='row '>
                                                <div className='ModalFormTitle d-flex align-items-center '>
                                                    Response Properties <span class="material-icons px-2">
                                                        info_outline
                                                    </span>

                                                </div>
                                                <div className='col-12'>
                                                    <Card className='ModalFormProperty'>

                                                        <Card.Text>
                                                            <div>
                                                                Follow Up ID : 177902
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <div>
                                                                Follow Up On : 20 Sep, 2022 | 01:03 AM
                                                                <div className='chipOutlineFilled hot'>Missed</div>
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <div className='d-flex align-center gap-1' >
                                                                <div> Remarks/Summary:</div>
                                                                <div className='pl-2'> Follow up for balance payment of Rs. 1999 due on 02-07-2022 against invoice number GYMDISCOVERY/2022-2023/44.</div>
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>

                                                            <div className='UserProfile d-flex flex-row align-center'>
                                                                Assign to :
                                                                <div className='SmallImg' >
                                                                    <img src={userImg} />

                                                                </div>

                                                                <div className='username-small'>Mohit Sharma</div>




                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>

                                                            <div className='UserProfile d-flex flex-row'>
                                                                Schedule by :
                                                                <div className='SmallImg' >
                                                                    <img src={userImg} />

                                                                </div>

                                                                <div className='username-small'>Sonu Sharma</div>




                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>

                                                            <div className='d-flex flex-row align-items-center gap-2'>
                                                                Follow Up Type :
                                                                <div className='chipOutlineFilled ms-0'>Trial</div>





                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text className='border-0'>

                                                            <div className='d-flex flex-row align-items-center gap-2'>
                                                                Status :
                                                                <div className='chipOutlineFilled hot ms-0'>Hot</div>





                                                            </div>
                                                        </Card.Text>
                                                    </Card>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='row'>

                                                <div className='ModalFormTitle d-flex align-items-center'>
                                                    Update Response <span class="material-icons px-2">
                                                        info_outline
                                                    </span>

                                                </div>






                                                <div className='col-12'>
                                                    <Form.Group className="mb-4 ModalFormInputField customBigDropDown">

                                                        <Form.Label>Convertibility Status</Form.Label>
                                                        <CustomDropdown options={member} title="Select " />
                                                    </Form.Group>


                                                </div>
                                                <div className='col-12'>
                                                    <Form.Group className="mb-4 ModalFormInputField customBigDropDown">

                                                        <Form.Label> Customer Response*</Form.Label>
                                                        <CustomDropdown options={member} title="Select" />
                                                    </Form.Group>


                                                </div>
                                                <div className="col-12">
                                                    <Form.Group className="mb-4 ModalFormInputField customBigDropDown">
                                                        <Form.Label>Schedule Follow Up</Form.Label>
                                                        <CustomCalendarDropDown title="dd/mm/yyyy" />

                                                    </Form.Group>
                                                </div>
                                                <div className='col-12'>
                                                    <Form.Group className='ModalFormTextarea mb-4'>
                                                        <Form.Label>Customer Remarks* </Form.Label>
                                                        <Form.Control as="textarea" placeholder="Type your Remarks here" />
                                                    </Form.Group>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>

                            </div>
                            <div eventKey="history" >

                                <Form className='px-4 py-4  '>
                                    <div className={style}>
                                        <div>
                                            <div className='row '>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div className='ModalFormTitle d-flex  '>
                                                        Customer Details <span class="material-icons px-2">
                                                            info_outline
                                                        </span>

                                                    </div>
                                                    <div className='ModalChangeTitle  '>
                                                        Change Details

                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <Card className='ModalFormProperty'>
                                                        <Card.Text>
                                                            <div className='userAvatar'>
                                                                <div className='userImg'>
                                                                    <img src={userImg} alt="user" />
                                                                </div>
                                                                <div className='userContent'>
                                                                    <div className='ModalFormTitl'>Sonu Sharma</div>
                                                                    <div className='subtitle'>9988776655</div>
                                                                </div>
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <div>
                                                            Mobile Number : +91-9955662891
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <div className='d-flex align-center gap-1' >
                                                                <div> Date of Birth : 06 Oct, 2022</div>
                                                               
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text>

                                                            <div className='UserProfile d-flex flex-row align-center'>
                                                            Email Address : sonusharma@gmail.com
                                                               
                                                            </div>
                                                        </Card.Text>
                                                        <Card.Text className='border-0'>
                                                            <div className='UserProfile d-flex flex-row'>
                                                                 Anniversary Date :  
                                                            </div>
                                                        </Card.Text>
                                                     
                                                    </Card>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='row'>

                                                <div className='ModalFormTitle d-flex align-center'>
                                                    Response History <span class="material-icons px-2">
                                                        info_outline
                                                    </span>

                                                </div>
                                                <div>

                                                    <div className='TimeLine'>
                                                        <div className='userAvatar'>
                                                            <div className='userImg'>
                                                                <img src={userImg} alt="user" />
                                                            </div>
                                                            <div className='userContent'>
                                                                <div className='ModalFormTitl'>Sonu Sharma</div>
                                                                <div className='subtitle'>Response Edited on 20 Sep, 2022 | 01:03 AM</div>
                                                            </div>
                                                        </div>

                                                        <Card className='ModalFormProperty mt-3 ms-5'>

                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up ID : 177902
                                                                </div>
                                                            </Card.Text>

                                                            <Card.Text>
                                                                <div className='d-flex align-center gap-1' >
                                                                    <div> Follow Up Schedule:</div>
                                                                    <div className='ps-2' width="100%"> Follow up for balance payment of Rs. 1999 due on 02-07-2022 against invoice number GYMDISCOVERY/2022-2023/44.</div>
                                                                </div>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up Schedule : 20 Sep, 2022 | 01:03 AM
                                                                </div>
                                                            </Card.Text>


                                                            <Card.Text className=''>
                                                                <div className='d-flex flex-row align-items-center gap-2'>
                                                                    Follow Up Type :
                                                                    <div className='chipOutlineFilled ms-0'>Trial</div>
                                                                </div>
                                                            </Card.Text>
                                                            <Card.Text className='border-0'>
                                                                <div className='d-flex flex-row align-items-center gap-2'>Lead Type :
                                                                    <div className='chipOutlineFilled hot ms-0'>Missed</div>
                                                                            </div>
                                                            </Card.Text>
                                                        </Card>
                                                    </div>
                                                    <div className='TimeLine'>
                                                        <div className='userAvatar'>
                                                            <div className='userImg'>
                                                                <img src={userImg} alt="user" />
                                                            </div>
                                                            <div className='userContent'>
                                                                <div className='ModalFormTitl'>Sonu Sharma</div>
                                                                <div className='subtitle'>Response Edited on 20 Sep, 2022 | 01:03 AM</div>
                                                            </div>
                                                        </div>

                                                        <Card className='ModalFormProperty mt-3 ms-5'>

                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up ID : 177902
                                                                </div>
                                                            </Card.Text>

                                                            <Card.Text>
                                                                <div className='d-flex align-center gap-1' >
                                                                    <div> Follow Up Schedule:</div>
                                                                    <div className='ps-2' width="100%"> Follow up for balance payment of Rs. 1999 due on 02-07-2022 against invoice number GYMDISCOVERY/2022-2023/44.</div>
                                                                </div>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up Schedule : 20 Sep, 2022 | 01:03 AM
                                                                </div>
                                                            </Card.Text>


                                                            <Card.Text className=''>

                                                                <div className='d-flex flex-row align-items-center gap-2'>
                                                                    Follow Up Type :
                                                                    <div className='chipOutlineFilled ms-0'>Trial</div>
                                                                </div>
                                                            </Card.Text>
                                                            <Card.Text className='border-0'>

                                                                <div className='d-flex flex-row align-items-center gap-2'>
                                                                    Follow Up Type :
                                                                    <div className='chipOutlineFilled done ms-0'>Done</div>
                                                                </div>
                                                            </Card.Text>
                                                        </Card>
                                                    </div>
                                                    <div className='TimeLine'>
                                                        <div className='userAvatar'>
                                                            <div className='userImg'>
                                                                <img src={userImg} alt="user" />
                                                            </div>
                                                            <div className='userContent'>
                                                                <div className='ModalFormTitl'>Sonu Sharma</div>
                                                                <div className='subtitle'>Response Edited on 20 Sep, 2022 | 01:03 AM</div>
                                                            </div>
                                                        </div>

                                                        <Card className='ModalFormProperty mt-3 ms-5'>

                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up ID : 177902
                                                                </div>
                                                            </Card.Text>

                                                            <Card.Text>
                                                                <div className='d-flex align-center gap-1' >
                                                                    <div> Follow Up Schedule:</div>
                                                                    <div className='ps-2' width="100%"> Follow up for balance payment of Rs. 1999 due on 02-07-2022 against invoice number GYMDISCOVERY/2022-2023/44.</div>
                                                                </div>
                                                            </Card.Text>
                                                            <Card.Text>
                                                                <div>
                                                                    Follow Up Schedule : 20 Sep, 2022 | 01:03 AM
                                                                </div>
                                                            </Card.Text>


                                                            <Card.Text className='border-0'>

                                                                <div className='d-flex flex-row align-items-center gap-2'>
                                                                    Follow Up Type :
                                                                    <div className='chipOutlineFilled ms-0'>Trial</div>

                                                                </div>
                                                            </Card.Text>
                                                        </Card>
                                                    </div>
                                                </div>







                                            </div>
                                        </div>
                                    </div>
                                </Form>


                            </div>

                        </Tabs>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter'>

                        <div className='UserProfile d-flex flex-row'>
                            <div className='img'>
                                <img src={userImg} />

                            </div>
                            <div className='d-flex flex-column'>
                                <div className='username'>Manish Kumar</div>
                                <div className='subtitle'>Enquiry Created by</div>
                            </div>


                        </div>
                        <button className='FormFillBtn'> Apply Changes</button>




                    </Modal.Footer>
                </Modal >
            }
            {/*================= Notification Modal ==================== */}

            {props.name == 'notification' &&
                <Modal
                    {...props}


                    size="lg"

                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon"> notifications_active </span>
                            Send Notification
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        <div className='Notification d-flex mb-4 text-white '>
                            <span class="material-icons ">
                                info
                            </span>

                            <p> The notification will share on members Gymowl app. Send Unlimited Free Notifications.</p>


                        </div>




                        <div className='ModalFormInputField mb-4'>
                            <Form.Label>Title*</Form.Label>
                            <CustomDropdown options={handle} title="Type the tittle here..." />

                        </div>
                        <div className='ModalFormTextarea'>
                            <Form.Label>Describe Message* </Form.Label>
                            <Form.Control as="textarea" placeholder="Describe the message here..." />

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Send
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
            {/*================= Add Client Id Modal ==================== */}

            {props.name == 'clientID' &&
                <Modal
                    {...props}


                    size="lg"

                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon"> person</span>
                            Add Client Id
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        <div className='Notification d-flex mb-4 text-white '>
                            <span class="material-icons ">
                                info
                            </span>

                            <p>You can find the client id in the Registration booket.</p>


                        </div>




                        <Form.Group className=" ModalFormInputField " >
                            <Form.Label>Client Id</Form.Label>
                            <Form.Control type="text" placeholder="Type the Client Id here..." />

                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Add
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
            {/*================= Add On Client Day Modal ==================== */}

            {props.name == 'clientDay' &&
                <Modal
                    {...props}


                    size="lg"

                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon">date_range </span>
                            Add on Days
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        <div className='Notification d-flex mb-4 text-white '>
                            <span class="material-icons ">
                                info
                            </span>

                            <p>You can increase more days/months on member plan.</p>


                        </div>
                        <Form.Group className=" ModalFromRadioBtn" >
                            {/* <Form.Label className='mb-3'>Gender*</Form.Label> */}
                            <div className='radiobtn '>
                                <Form.Check

                                    label="Days"
                                    name="day"
                                    type="radio"


                                />
                                <Form.Check

                                    label="Months"
                                    name="day"
                                    type="radio"

                                /></div>


                        </Form.Group>




                        <div className='ModalFormInputField mb-4'>
                            <Form.Label>Title*</Form.Label>
                            <CustomDropdown options={handle} title="Type the tittle here..." />

                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Add
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }


              {/*================ Generate Report Modal==================== */}

              {props.name == 'GenerateReport' &&
                <Modal
                    {...props}


                    size="lg"
                     className='datePickerModal generateReportModal'
                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon">date_range </span>
                            Generate Report
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        


                    <div className='d-flex gap-3 '>
                        <div className=''>
                         <Form.Group className=" ModalFormInputField" >
                            <Form.Label>Start Date </Form.Label>
                            
                            
      <Datepicker
       ref={calRef}
        showIcon
        selected={startDate}
        onChange={date => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select" 
        className="form-control datePickerClass"
        shouldCloseOnSelect={false}
       
      //isClearable
      placeholderText=" dd/mm/yyyy"
    //   customInput={<input placeholder='dd/mm/yyyy' className='form-control '  />}
      id={'fromdateApply'}
      
    
      >
     <div className=' '>
        <div className='col-4'>
</div>
       <div className='col-8 gap-2 d-flex datePickerChildren'> 
     <button className='clearDateBtn'
          onClick={() => {
            setStartDate(null);
            calRef.current.setOpen(false);
          }}
        >
          Cancel
        </button>
        <button className='applyDateBtn'
          onClick={() => {
            calRef.current.setOpen(false);
          }}
        >
          Apply
        </button>
        </div>
      </div>
</Datepicker>

      <span class="material-icons calendarIcon" htmlFor='fromdateApply'>calendar_month_icon</span>


                        </Form.Group>
                      </div>
                      <div className=''>
                      <Form.Group className=" ModalFormInputField" >
                            <Form.Label>End Date </Form.Label>
                            
                            
      <Datepicker
       ref={calRefTwo}
        showIcon
        selected={startDateTwo}
        onChange={date => setStartDateTwo(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select" 
        className="form-control datePickerClass"
        shouldCloseOnSelect={false}
       
      //isClearable
      placeholderText=" dd/mm/yyyy"
    //   customInput={<input placeholder='dd/mm/yyyy' className='form-control '  />}
      id={'fromdateApply'}
      
    
      >
     <div className='  '>
        <div className='col-4'>
</div>
       <div className='col-8 gap-2 d-flex datePickerChildren'> 
     <button className='clearDateBtn'
          onClick={() => {
            setStartDateTwo(null);
            calRefTwo.current.setOpen(false);
          }}
        >
          Cancel
        </button>
        <button className='applyDateBtn'
          onClick={() => {
            calRefTwo.current.setOpen(false);
          }}
        >
          Apply
        </button>
        </div>
      </div>
</Datepicker>

      <span class="material-icons calendarIcon" htmlFor='fromdateApply'>calendar_month_icon</span>


                        </Form.Group>
                      </div>
                    </div>
                      
                       
                       


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Download Report
                           
                        </Button>
                    </Modal.Footer>
                </Modal>
            }



{/* ========================custom Calendar Modal============================== */}

{props.name == 'CustomCalendarModal' &&
                <Modal
                    {...props}


                    size="lg"
                     className='datePickerModal'
                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon">date_range </span>
                            Generate Report
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        {/* <div className='Notification d-flex mb-4 text-white '>
                            <span class="material-icons ">
                                info
                            </span>

                            <p>You can change start date of this member.</p>


                        </div> */}


                    <div className='d-flex gap-5 '>
                        <div className='col-5'>
                         <Form.Group className=" ModalFormInputField" >
                            <Form.Label>Start Date </Form.Label>
                            
                            
      <Datepicker
       ref={calRef}
        showIcon
        selected={startDate}
        onChange={date => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select" 
        className="form-control datePickerClass"
        shouldCloseOnSelect={false}
       
      //isClearable
      placeholderText=" dd/mm/yyyy"
    //   customInput={<input placeholder='dd/mm/yyyy' className='form-control '  />}
      id={'fromdateApply'}
      
    
      >
     <div className=' d-flex datePickerChildren'>
        <div className='col-4'>
</div>
       <div className='col-8 gap-2 d-flex'> 
     <button className='clearDateBtn'
          onClick={() => {
            setStartDate(null);
            calRef.current.setOpen(false);
          }}
        >
          Cancel
        </button>
        <button className='applyDateBtn'
          onClick={() => {
            calRef.current.setOpen(false);
          }}
        >
          Apply
        </button>
        </div>
      </div>
</Datepicker>

      <span class="material-icons calendarIcon" htmlFor='fromdateApply'>calendar_month_icon</span>


                        </Form.Group>
                      </div>
                      
                    </div>
                      
                       
                       


                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Download Report
                           
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            }




            {/*================= Add On Client Day Modal ==================== */}

            {props.name == 'ChangeDate' &&
                <Modal
                    {...props}


                    size="lg"

                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                            <span className="material-icons smsIcon">date_range </span>
                            Change Date
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        <div className='Notification d-flex mb-4 text-white '>
                            <span class="material-icons ">
                                info
                            </span>

                            <p>You can change start date of this member.</p>


                        </div>




                        <Form.Group className=" ModalFormInputField" >
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />

                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button className="FormFillBtn">Add
                            <span className="material-icons "> send </span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            }



                  
            {/*================= Select and Create Diet Plan Modal ==================== */}

            {props.name == 'createDietPlan' &&
                <Modal
                    {...props}


                    size="lg"

                    centered
                    id='DashboardSmsModal'
                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >
                        <span class="material-icons">food_bank</span>
                            Create Diet Plan
                        </Modal.Title>
                        <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body >
                        {/* <div className='Notification d-flex mb-4 text-white '>
                           </div>  */}
                        


                        <Form.Group className=" ModalFormInputField" >
                            <Form.Label>Diet Plan</Form.Label>
                            <Form.Control type="text" placeholder='Type diet plan name here...' />

                        </Form.Group>
                        
                        <Form.Group className=" ModalFormInputField mt-4" >
                            <Form.Label>Privacy Mode</Form.Label>
                            <CustomDropdown options={privacy} title={<span className='d-flex align-items-center gap-2'>Select Privacy</span>} />

                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} className="FormOutlineBtn">Cancel</Button>
                        <Button  onClick={() => setdietPlan(true)} className="FormFillBtn">Create
                           
                        </Button>
                        
                    </Modal.Footer>
                   
               
                    <ModalForm
                    name={'dietPlan'}

                    show={dietPlan}
                    onHide={() => setdietPlan(false)}
                      />
               
                </Modal>
               
            }








            {/*=============== Edit Package  Modal Design =================*/}
            {props.name == 'editPackage' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">edit</span>  Edit Package
                        </Modal.Title>
                        <div className='expandicon'>
                            <span class="material-icons " onClick={changeStyle}  > {icon} </span>
                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>
                                <div>

                                    <div className='row'>
                                        <div className='ModalFormTitle d-flex  '>
                                            Package Details <span class="material-icons px-2">
                                                info_outline
                                            </span>

                                        </div>
                                        <div class="col-12">
                                            <Card className='ModalFormProperty  '>

                                                <Card.Text>
                                                    <div>
                                                        Client ID : 253398
                                                    </div>
                                                </Card.Text>

                                                <Card.Text>
                                                    <div className='d-flex align-center gap-1' >
                                                        <div> Package Name : </div>
                                                        <div className='chipOutlineFilled'>Gym Membership</div>
                                                    </div>
                                                </Card.Text>
                                                <Card.Text>
                                                    <div>
                                                        Duration : 6 Months
                                                    </div>
                                                </Card.Text>
                                                <Card.Text>
                                                    <div>
                                                        Sessions : 156

                                                    </div>
                                                </Card.Text>
                                                <Card.Text>
                                                    <div>
                                                        Price : ₹7000.00

                                                    </div>
                                                </Card.Text>



                                            </Card>
                                        </div>

                                    </div>

                                </div>


                                <div>
                                    <div className='row'>
                                        <div className='ModalFormTitle d-flex  '>
                                            New Packages <span class="material-icons px-2">
                                                info_outline
                                            </span>

                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>Plan Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Type Plan Name" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Plan Type*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Actvities*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Plan Timing*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />

                                            </Form.Group>
                                        </div>





                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Description</Form.Label>
                                                <textarea placeholder="Describe the plan here..."></textarea>
                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn '> Apply Changes</button>




                    </Modal.Footer>
                </Modal>
            }
            {/*=============== New Package  Modal Design =================*/}
            {props.name == 'newPackage' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">add_box</span>  New Packages
                        </Modal.Title>
                        <div className='expandicon'>
                            <span class="material-icons " onClick={changeStyle}  > {icon} </span>
                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>
                                <div>

                                    <div className='row'>
                                        <div className='ModalFormTitle d-flex  '>
                                            New Packages <span class="material-icons px-2">
                                                info_outline
                                            </span>

                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>Plan Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Type Plan Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Plan Type*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Actvities*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Plan Timing*</Form.Label>
                                                <CustomDropdown options={HearAbout} title="Select" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>





                                        <div className='col-12'>
                                            <Form.Group className="mb-4 ModalFormTextarea">
                                                <Form.Label>Description</Form.Label>
                                                <textarea placeholder="Describe the plan here..."></textarea>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>


                                <div className=''>
                                    <div className='row bgOutline mx-1'>



                                        <div className='col-12'>
                                            <Form.Group className="my-3 mx-2 py-1  ModalFromRadioBtn ">

                                                <div className='radiobtn '>
                                                    <Form.Check

                                                        label="Days"
                                                        name="exercising"
                                                        type="radio"


                                                    />
                                                    <Form.Check

                                                        label="Months"
                                                        name="exercising"
                                                        type="radio"

                                                    /></div>
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>
                                            </Form.Group>


                                        </div>
                                        <div className='horizontalLine'></div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 mx-2 mt-4 ModalFormInputField" >
                                                <Form.Label>Duration*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Duration" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 mx-2  ModalFormInputField" >
                                                <Form.Label>Sessions*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Sessions" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 mx-2  ModalFormInputField" >
                                                <Form.Label>Rack Rate*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Rack Rate" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-4 mx-2  ModalFormInputField" >
                                                <Form.Label>Base Rate*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Base Rate" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Label>Session Days*</Form.Label>
                                            <Form.Group className="mb-4 ModalFromCheckBox" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label="All Days"
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                    <Form.Check

                                                        label="Mon"
                                                        name="book2"
                                                        type="checkbox"

                                                    /></div>


                                            </Form.Group>
                                        </div>







                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>In Time</Form.Label>
                                                <Form.Control type="time" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Out Time</Form.Label>
                                                <Form.Control type="time" />

                                            </Form.Group>
                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField ">

                                                <Form.Label>Assign To</Form.Label>
                                                <CustomDropdown options={member} title="Select Member" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Lead Type*</Form.Label>
                                                <CustomDropdown options={member} title="Select" />
                                            </Form.Group>


                                        </div>
                                        <div className='col-6'>
                                            <Form.Group className="mb-4 ModalFormInputField">

                                                <Form.Label>Member/Employee Referral</Form.Label>
                                                <CustomDropdown options={member} title="Select " />
                                            </Form.Group>


                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Budget per month</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : ₹4000" />

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Other Referral</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : Rahul" />

                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn '> Apply Changes</button>




                    </Modal.Footer>
                </Modal>
            }
            {/*========================= add workout cards Old Design===============  */}
            {props.name == 'addWorkout-old' &&
                <Modal
                    {...props}
                    fullscreen

                    className="fullScreenModal" >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >

                            <span class="material-icons"> add_box</span>  Add Workout

                        </Modal.Title>
                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body className='ModalFormContent'>
                        <div className='row'>
                            <div className='col-4'>

                                <div className='bgOutline'>
                                    <div className=' text-center TitleBig' >
                                        <div className=''>
                                            Add Member</div>
                                    </div>
                                    <div className='MemberList p-3'>

                                        <div className='Notification d-flex mb-4 text-white '>
                                            <span class="material-icons ">
                                                info
                                            </span>

                                            <p> The notification will share on members Gymowl app. Send Unlimited Free Notifications.</p>

                                        </div>
                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            <input type="text" placeholder="Search Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span>
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                        </div>
                                        <div className='Label mt-1'>
                                            Search and Add members from here
                                        </div>
                                        <div className='ListCheckBox'>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-3 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>


                                            </Form.Group>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div>
                                    <div className='  TitleBig' >
                                        <div className=''>
                                            Weekly Workout</div>

                                    </div>
                                    <div className='AddExercise'>
                                        <span class="material-icons">
                                            add
                                        </span> Add Exercise


                                    </div>
                                    <div className='ExerciseChart'>
                                        <div className='d-flex align-items-center  BtnWrapper'>
                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Monday
                                            </div>
                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Tuesday
                                            </div>

                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Wednesday
                                            </div>
                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Thursday </div>

                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Friday
                                            </div>
                                            <div className='MiniRoundedBtn'><span class="material-icons">
                                                check
                                            </span>
                                                Saturday
                                            </div>

                                        </div>

                                   



                                        <div className=' BorderBottom'>
                                            <div className='row p-4 align-items-center'>

                                                <div className='col-7'>
                                                    <Form.Label >Exercise Category* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                </div>
                                                <div className='col-5 text-end'>
                                                    <span class="material-icons BgIcon delete">
                                                        delete
                                                    </span>


                                                </div>
                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col-3 mb-3 '>
                                                    <Form.Label >Exercise* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Reps* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Reps " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Sets* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Sets" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Weight </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Weight" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Time* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>

                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row p-4 align-items-center'>

                                                <div className='col-7'>
                                                    <Form.Label >Exercise Category* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                </div>
                                                <div className='col-5 text-end'>
                                                    <span class="material-icons BgIcon delete">
                                                        delete
                                                    </span>


                                                </div>
                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col-3 mb-3 '>
                                                    <Form.Label >Exercise* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Reps* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Reps " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Sets* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Sets" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Weight </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Weight" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col-3 mb-3'>
                                                    <Form.Label >Time* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn'>   Add New Package</button>




                    </Modal.Footer>
                </Modal>
            }
            {/*=============== advance filter   Modal Design =================*/}

            {
                props.name == 'advanceFilter' &&
                <Modal
                    {...props}

                    id='EditEnquiry'

                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title>
                            <span class="material-icons">filter_list</span>  Advance Filter
                        </Modal.Title>


                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body className='px-0 '>
                        <Form>

                            <div className=' advanceFilter'>




                                <Form.Group className="mb-4 ModalFromRadioBtn px-4" >
                                    <Form.Label className='mb-3'>Date Picker</Form.Label>
                                    <div className='radiobtn flex-column'>
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"



                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"


                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"


                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"

                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"


                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"

                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"


                                        />
                                        <Form.Check

                                            label="Last 6 months"
                                            name="Date Picker"
                                            type="radio"

                                        />
                                    </div>
                                    <Form.Control.Feedback type="invalid">
                                        error message
                                    </Form.Control.Feedback>


                                </Form.Group>
                                <div className='horizontalLine mb-4'></div>
                                <Form.Group className="mb-4 ModalFromCheckBox px-4" >
                                    <Form.Label className='mb-3'>Select Membership Type</Form.Label>
                                    <div className='checkbox flex-column align-items-start '>
                                        <Form.Check

                                            label="Balance Due"
                                            name="membership1"
                                            type="checkbox"


                                        />
                                        <Form.Check

                                            label="Membership Renewal"
                                            name="membership2"
                                            type="checkbox"


                                        />
                                        <Form.Check

                                            label="Feedback"
                                            name="membership3"
                                            type="checkbox"


                                        />
                                        <Form.Check

                                            label="Anniversary"
                                            name="membership4"
                                            type="checkbox"


                                        />
                                        <Form.Check

                                            label="Birthday"
                                            name="membership5"
                                            type="checkbox"


                                        />
                                    </div>


                                </Form.Group>
                                <div className='horizontalLine mb-4'></div>

                            </div>




















                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormOutlineBtn'>Cancel</button>
                        <button className='FormFillBtn'>Apply</button>




                    </Modal.Footer>
                </Modal>
            }


            {/* ============add diet Plan  Modal ============  */}
            {props.name == 'dietPlan' &&
                <Modal
                    {...props}
                    fullscreen

                    className="fullScreenModal" >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title >

                            <span class="material-icons"> add_box</span>  Create Diet Plan

                        </Modal.Title>
                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body className='ModalFormContent'>
                        <div className='row'>
                            <div className='col-4'>

                                <div className='bgOutline'>
                                    <div className=' text-center TitleBig assignMember' >
                                        <div className=''>
                                            Assign Members</div>
                                    </div>
                                    <div className='MemberList '>

                                        <div className='Notification d-flex mb-4 text-white '>
                                            <span class="material-icons ">
                                                info
                                            </span>

                                            <p> Diet Plan can be assigned to members directly from here.</p>

                                        </div>
                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            <input type="text" placeholder="Search Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span>
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                        </div>
                                        <div className='Label mt-1 '>
                                            Search and Add members from here
                                        </div>
                                        <div className='ListCheckBox ps-2'>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-3 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>


                                            </Form.Group>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div>
                                    <div className='  TitleBig' >
                                        <div className=''>
                                            Weekly Diet Plan</div>

                                    </div>
            <Tabs activeKey={keyDiet} onSelect={(k) => setkeyDiet(k)} className="   TabWrapper  createDietPlanModalTabs" >
                  <Tab eventKey="sunday" tabClassName=" ModalFormTabs" title={<span>Sunday</span>} > </Tab>
                  <Tab eventKey="monday" tabClassName=" ModalFormTabs" title={<span>Monday</span>} > </Tab>    
                  <Tab eventKey="tuesday" tabClassName=" ModalFormTabs" title={<span>Tuesday</span>} > </Tab>    
                  <Tab eventKey="wednesday" tabClassName=" ModalFormTabs" title={<span>Wednesday</span>} > </Tab>    
                  <Tab eventKey="thursday" tabClassName=" ModalFormTabs" title={<span>Thursday</span>} > </Tab>    
                  <Tab eventKey="friday" tabClassName=" ModalFormTabs" title={<span>Friday</span>} > </Tab>    
                  <Tab eventKey="saturday" tabClassName=" ModalFormTabs" title={<span>Saturday</span>} > </Tab>    

                                 <div eventKey="sunday">
                                     
                                    <div className='ExerciseChart'>
                                       

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Food Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Meal Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" placeholder="Enter Reps " />
                                                    
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Quantity* </Form.Label>
                                                    <Form.Control type="text" placeholder="Ex : 56" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Unit* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Timing* </Form.Label>
                                                    <CustomCalendarDropDown title={"Select"}/> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row px-4 pt-4 align-items-center'>

                                                <div className='ModalFormInputField col-12 mb-3'>
                                                    <Form.Label >Item Name* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Item Name " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                       
                                            <div className='row px-4 pb-4 '>


                                                <div className='ModalFormTextarea col-12'>
                                                    <Form.Label>Describe Diet* </Form.Label>
                                                    <Form.Control as="textarea" placeholder="Describe Diet here..." />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>

                                                </div>
                                               
                                            </div>
                                        </div>
                                    

                                    </div>
                                    <div className='ExerciseChart'>
                                       

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Food Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Meal Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" placeholder="Enter Reps " />
                                                    
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Quantity* </Form.Label>
                                                    <Form.Control type="text" placeholder="Ex : 56" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Unit* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Timing* </Form.Label>
                                                    <CustomCalendarDropDown title={"Select"}/> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row px-4 pt-4 align-items-center'>

                                                <div className='ModalFormInputField col-12 mb-3'>
                                                    <Form.Label >Item Name* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Item Name " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                       
                                            <div className='row px-4 pb-4 '>


                                                <div className='ModalFormTextarea col-12'>
                                                    <Form.Label>Describe Diet* </Form.Label>
                                                    <Form.Control as="textarea" placeholder="Describe Diet here..." />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>

                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className=' p-4 '>
                                                <div className='AddExercise'>
                                                      <span class="material-icons">
                                                        add
                                                    </span> Add Diet Day
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                                <div eventKey="monday">
                                     
                                    <div className='ExerciseChart'>
                                       

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Food Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Meal Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" placeholder="Enter Reps " />
                                                    
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Quantity* </Form.Label>
                                                    <Form.Control type="text" placeholder="Ex : 56" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Unit* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Timing* </Form.Label>
                                                    <CustomCalendarDropDown title={"Select"}/> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row px-4 pt-4 align-items-center'>

                                                <div className='ModalFormInputField col-12 mb-3'>
                                                    <Form.Label >Item Name* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Item Name " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                       
                                            <div className='row px-4 pb-4 '>


                                                <div className='ModalFormTextarea col-12'>
                                                    <Form.Label>Describe Diet* </Form.Label>
                                                    <Form.Control as="textarea" placeholder="Describe Diet here..." />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>

                                                </div>
                                               
                                            </div>
                                        </div>
                                    

                                    </div>
                                    <div className='ExerciseChart'>
                                       

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Food Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Meal Type* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" placeholder="Enter Reps " />
                                                    
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Quantity* </Form.Label>
                                                    <Form.Control type="text" placeholder="Ex : 56" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Unit* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Timing* </Form.Label>
                                                    <CustomCalendarDropDown title={"Select"}/> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className='row px-4 pt-4 align-items-center'>

                                                <div className='ModalFormInputField col-12 mb-3'>
                                                    <Form.Label >Item Name* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Item Name " />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                       
                                            <div className='row px-4 pb-4 '>


                                                <div className='ModalFormTextarea col-12'>
                                                    <Form.Label>Describe Diet* </Form.Label>
                                                    <Form.Control as="textarea" placeholder="Describe Diet here..." />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>

                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className=' BorderBottom'>
                                            <div className=' p-4 '>
                                                <div className='AddExercise'>
                                                      <span class="material-icons">
                                                        add
                                                    </span> Add Diet Day
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
            </Tabs>                   
                                </div>
                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn'>  Create Diet Plan</button>




                    </Modal.Footer>
                </Modal>
            }



  {/* ============add Workout Card  Modal ============  */}
  {props.name == 'addWorkout' &&
                <Modal 
                    {...props}
                    fullscreen

                    className="fullScreenModal modalWorkOut" >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title className='gap-2'>

                            <span class="material-icons plusIcon ms-1"> add_box</span>  Add Workout

                        </Modal.Title>
                        <span class="material-icons closeCursorPointer me-2 pe-1" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body className='ModalFormContent'>
                        <div className='row'>
                            <div className='col-4 workOutSideBar'>

                                <div className='bgOutline '>
                                    <div className=' text-center TitleBig assignMember' >
                                        <div className=''>
                                            Assign Members</div>
                                    </div>
                                    <div className='MemberList '>

                                        <div className='Notification d-flex mb-4 text-white '>
                                            <span class="material-icons ">
                                                info
                                            </span>

                                            <p> Workout Plan can be assigned to members directly from here.</p>

                                        </div>
                                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            <input type="text" placeholder="Search Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span>
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                        </div>
                                        <div className='Label mt-1 '>
                                            Search and Add members from here
                                        </div>
                                        <div className='ListCheckBox ps-2'>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>

                                            </Form.Group>
                                            <Form.Group className="mb-1 ModalFromCheckBox gap-2 d-flex align-items-center" >

                                                <div className='checkbox '>
                                                    <Form.Check

                                                        label=""
                                                        name="book1"
                                                        type="checkbox"


                                                    />
                                                </div>
                                                <div className='userAvatar'>
                                                    <div className='userImg'>
                                                        <img src={userImg} alt="user" />
                                                    </div>
                                                    <div className='userContent'>
                                                        <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                                        <div className='subtitle'>Client ID : 483900</div>
                                                    </div>
                                                </div>


                                            </Form.Group>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8 workOutMainContent'>
                                <div>
                                    <div className='  TitleBig' >
                                        <div className=''>
                                            Weekly Workout</div>

                                    </div>
            <Tabs activeKey={keyDiet} onSelect={(k) => setkeyDiet(k)} className="   TabWrapper  createDietPlanModalTabs" >
                  <Tab eventKey="sunday" tabClassName=" ModalFormTabs" title={<span>Sunday</span>} > </Tab>
                  <Tab eventKey="monday" tabClassName=" ModalFormTabs" title={<span>Monday</span>} > </Tab>    
                  <Tab eventKey="tuesday" tabClassName=" ModalFormTabs" title={<span>Tuesday</span>} > </Tab>    
                  <Tab eventKey="wednesday" tabClassName=" ModalFormTabs" title={<span>Wednesday</span>} > </Tab>    
                  <Tab eventKey="thursday" tabClassName=" ModalFormTabs" title={<span>Thursday</span>} > </Tab>    
                  <Tab eventKey="friday" tabClassName=" ModalFormTabs" title={<span>Friday</span>} > </Tab>    
                  <Tab eventKey="saturday" tabClassName=" ModalFormTabs" title={<span>Saturday</span>} > </Tab>    

                                 <div className='' eventKey="sunday">
                                     
                                 
                                    <div className='ExerciseChart'>
                                       
                                    <div className=' BorderBottom'>
                                            <div className='d-flex align-items-center justify-content-between'>

                                            
                                               <div className='  workOutTitle' >
                                                 <div className=''>
                                                   1. Workout
                                                </div>
                                              </div>
                                              <div className=' text-end  me-2 pe-1'>
                                                    <span class="material-icons BgIcon delete">
                                                        delete
                                                    </span>


                                                </div>
                                            </div>
                                        </div>
                      

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                               
                                                <div className='col-7'>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Exercise Category* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Category" /> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                             </div>

                                            </div>
                                        </div>

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Exercise* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Exercise" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                               
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Reps* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Reps" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Sets* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Sets" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Weight* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Weight" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                            <div className='row p-4 pt-1'>
                                            <div className='ModalFormInputField col-3  '>
                                                    <Form.Label >Time* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Time" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className=' BorderBottom'>
                                            <div className=' p-4 '>
                                                <div className='AddExercise'>
                                                      <span class="material-icons">
                                                      file_copy
                                                    </span> Duplicate Exercise
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='ExerciseChart'>
                                       
                                    <div className=' BorderBottom'>
                                            <div className='d-flex align-items-center justify-content-between'>

                                            
                                               <div className='  workOutTitle' >
                                                 <div className=''>
                                                   2. Workout
                                                </div>
                                              </div>
                                              <div className=' text-end  me-2 pe-1'>
                                                    <span class="material-icons BgIcon delete">
                                                        delete
                                                    </span>


                                                </div>
                                            </div>
                                        </div>
                      

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                               
                                                <div className='col-7'>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Exercise Category* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Category" /> 
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                             </div>

                                            </div>
                                        </div>

                                        <div className=' BorderBottom'>
                                            <div className='row p-4 '>


                                                <div className='ModalFormInputField col  '>
                                                    <Form.Label >Exercise* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Exercise" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                               
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Reps* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Reps" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Sets* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Sets" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className='ModalFormInputField col '>
                                                    <Form.Label >Weight* </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Weight" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>


                                            </div>
                                            <div className='row p-4 pt-1'>
                                            <div className='ModalFormInputField col-3  '>
                                                    <Form.Label >Time* </Form.Label>
                                                    <CustomDropdown options={handle} title="Select Time" />
                                                    <Form.Control.Feedback type="invalid">
                                                        error message
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className=' BorderBottom'>
                                            <div className=' p-4 '>
                                                <div className='AddExercise'>
                                                      <span class="material-icons">
                                                      file_copy
                                                    </span> Duplicate Exercise
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                                <div eventKey="monday">
                                     
                                <div className='ExerciseChart'>
                                       
                                       <div className=' BorderBottom'>
                                               <div className='d-flex align-items-center justify-content-between'>
   
                                               
                                                  <div className='  workOutTitle' >
                                                    <div className=''>
                                                      1. Workout
                                                   </div>
                                                 </div>
                                                 <div className=' text-end  me-2 pe-1'>
                                                       <span class="material-icons BgIcon delete">
                                                           delete
                                                       </span>
   
   
                                                   </div>
                                               </div>
                                           </div>
                         
   
                                           <div className=' BorderBottom'>
                                               <div className='row p-4 '>
   
   
                                                  
                                                   <div className='col-7'>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Exercise Category* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Category" /> 
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                </div>
   
                                               </div>
                                           </div>
   
                                           <div className=' BorderBottom'>
                                               <div className='row p-4 '>
   
   
                                                   <div className='ModalFormInputField col  '>
                                                       <Form.Label >Exercise* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Exercise" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                  
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Reps* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Reps" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Sets* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Sets" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Weight* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Weight" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
   
   
                                               </div>
                                               <div className='row p-4 pt-1'>
                                               <div className='ModalFormInputField col-3  '>
                                                       <Form.Label >Time* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Time" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                               </div>
                                           </div>
                                          
                                           <div className=' BorderBottom'>
                                               <div className=' p-4 '>
                                                   <div className='AddExercise'>
                                                         <span class="material-icons">
                                                         file_copy
                                                       </span> Duplicate Exercise
                                                   </div>
                                               </div>
                                           </div>
   
                                       </div>
   
                                       <div className='ExerciseChart'>
                                          
                                       <div className=' BorderBottom'>
                                               <div className='d-flex align-items-center justify-content-between'>
   
                                               
                                                  <div className='  workOutTitle' >
                                                    <div className=''>
                                                      2. Workout
                                                   </div>
                                                 </div>
                                                 <div className=' text-end  me-2 pe-1'>
                                                       <span class="material-icons BgIcon delete">
                                                           delete
                                                       </span>
   
   
                                                   </div>
                                               </div>
                                           </div>
                         
   
                                           <div className=' BorderBottom'>
                                               <div className='row p-4 '>
   
   
                                                  
                                                   <div className='col-7'>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Exercise Category* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Category" /> 
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                </div>
   
                                               </div>
                                           </div>
   
                                           <div className=' BorderBottom'>
                                               <div className='row p-4 '>
   
   
                                                   <div className='ModalFormInputField col  '>
                                                       <Form.Label >Exercise* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Exercise" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                  
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Reps* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Reps" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Sets* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Sets" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                                   <div className='ModalFormInputField col '>
                                                       <Form.Label >Weight* </Form.Label>
                                                       <Form.Control type="text" placeholder="Enter Weight" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
   
   
                                               </div>
                                               <div className='row p-4 pt-1'>
                                               <div className='ModalFormInputField col-3  '>
                                                       <Form.Label >Time* </Form.Label>
                                                       <CustomDropdown options={handle} title="Select Time" />
                                                       <Form.Control.Feedback type="invalid">
                                                           error message
                                                       </Form.Control.Feedback>
                                                   </div>
                                               </div>
                                           </div>
                                          
                                           <div className=' BorderBottom'>
                                               <div className=' p-4 '>
                                                   <div className='AddExercise'>
                                                         <span class="material-icons">
                                                         file_copy
                                                       </span> Duplicate Exercise
                                                   </div>
                                               </div>
                                           </div>
   
                                       </div>
                                </div> 
            </Tabs>                   
                                </div>
                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn'>  Add Workout</button>




                    </Modal.Footer>
                </Modal>
            }






            {/*=============== add Member  Modal Design =================*/}
            {props.name == 'addMember' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">add_box
                            </span> Add Member
                        </Modal.Title>
                        <div className='expandicon'>

                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>


                                <div className='row'>
                                    <div className='ModalFormTitle'>
                                        Personal Info

                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFormInputField " >
                                            <Form.Label>First Name*</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Last Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-6 ">
                                        <Form.Group className=" mb-4 ModalFormInputField" >
                                            <Form.Label>Mobile Number*</Form.Label>
                                            <Form.Control type="text" placeholder="Ex : 9988776655" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFromRadioBtn" >
                                            <Form.Label className='mb-3'>Gender*</Form.Label>
                                            <div className='radiobtn '>
                                                <Form.Check

                                                    label="Male"
                                                    name="gender"
                                                    type="radio"


                                                />
                                                <Form.Check

                                                    label="Female"
                                                    name="gender"
                                                    type="radio"

                                                /></div>
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>


                                        </Form.Group>
                                    </div>
                                    <div class="col-6">
                                        <Form.Group className="mb-4 ModalFromRadioBtn" >
                                            <Form.Label className='mb-3'>Marital Status</Form.Label>
                                            <div className='radiobtn '>
                                                <Form.Check

                                                    label="Single"
                                                    name="gender"
                                                    type="radio"


                                                />
                                                <Form.Check

                                                    label="Married"
                                                    name="gender"
                                                    type="radio"

                                                /></div>
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>


                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFormInputField" >
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control type="date" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Aniversary Date</Form.Label>
                                            <Form.Control type="date" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4 ModalFormTextarea">
                                            <Form.Label>Residential Address</Form.Label>
                                            <textarea placeholder="Type your Address here..."></textarea>
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className='col-6'>
                                        <Form.Group className="mb-4 ModalFormInputField ">

                                            <Form.Label>Gym Role*</Form.Label>
                                            <CustomDropdown options={HearAbout} title="Select Role" />
                                        </Form.Group>


                                    </div>
                                    <div className='col-6'>
                                        <Form.Group className="mb-4 ModalFormInputField ">

                                            <Form.Label>Gym Activities</Form.Label>
                                            <CustomDropdown options={HearAbout} title="Select Activities" />
                                        </Form.Group>


                                    </div>
                                </div>





                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn '> Add Member</button>




                    </Modal.Footer>
                </Modal>
            }
            {/*=============== Edit Member Details   Modal Design =================*/}

            {
                props.name == 'EditMemberDetails' &&
                <Modal
                    {...props}

                    id='EditEnquiry'

                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title>
                            <span class="material-icons">edit</span>  Edit Member Details
                        </Modal.Title>


                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>

                            <div className='row'>
                                <div className='title d-flex align-center mb-3'>
                                    Package Details <span class="material-icons px-2">
                                        info_outline
                                    </span>

                                </div>
                                <div className='col-12'>
                                    <Card className='ModalFormProperty'>

                                        <Card.Text>
                                            <div>
                                                Name : 20 Sep, 2022 | 01:03 AM
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Mobile Number : +91 9992376345
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Gender : Male
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Marital Status : Married
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Birth Date : 06/02/1993
                                            </div>
                                        </Card.Text>



                                        <Card.Text className=''>

                                            <div className='d-flex flex-row align-items-center gap-2'>
                                                Gym Activities :
                                                <div className='chipOutlineFilled '>General Training, Personal Training, Kick Boxing,
                                                    Fitness Workout, Yoga, Power Yoga</div>





                                            </div>
                                        </Card.Text>
                                        <Card.Text className='border-0'>

                                            <div className='d-flex flex-row align-items-center gap-2'>
                                                Gym Roles:
                                                <div className='chipOutlineFilled '>General Training, Personal Training, Kick Boxing,
                                                    Fitness Workout, Yoga, Power Yoga</div>





                                            </div>
                                        </Card.Text>
                                    </Card>

                                </div>











                            </div>
                            <div className='row'>
                                <div className='ModalFormTitle'>
                                    Personal Info

                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFormInputField " >
                                        <Form.Label>First Name*</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFormInputField">
                                        <Form.Label>Last Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className="col-6 ">
                                    <Form.Group className=" mb-4 ModalFormInputField" >
                                        <Form.Label>Mobile Number*</Form.Label>
                                        <Form.Control type="text" placeholder="Ex : 9988776655" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFormInputField">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="text" placeholder="Ex : abc@gmail.com" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFromRadioBtn" >
                                        <Form.Label className='mb-3'>Gender*</Form.Label>
                                        <div className='radiobtn '>
                                            <Form.Check

                                                label="Male"
                                                name="gender"
                                                type="radio"


                                            />
                                            <Form.Check

                                                label="Female"
                                                name="gender"
                                                type="radio"

                                            /></div>
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>


                                    </Form.Group>
                                </div>
                                <div class="col-6">
                                    <Form.Group className="mb-4 ModalFromRadioBtn" >
                                        <Form.Label className='mb-3'>Marital Status</Form.Label>
                                        <div className='radiobtn '>
                                            <Form.Check

                                                label="Single"
                                                name="gender"
                                                type="radio"


                                            />
                                            <Form.Check

                                                label="Married"
                                                name="gender"
                                                type="radio"

                                            /></div>
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>


                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFormInputField" >
                                        <Form.Label>Birth Date</Form.Label>
                                        <Form.Control type="date" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-4 ModalFormInputField">
                                        <Form.Label>Aniversary Date</Form.Label>
                                        <Form.Control type="date" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>
                                <div className='col-12'>
                                    <Form.Group className="mb-4 ModalFormTextarea">
                                        <Form.Label>Residential Address</Form.Label>
                                        <textarea placeholder="Type your Address here..."></textarea>
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group className="mb-4 ModalFormInputField ">

                                        <Form.Label>Gym Role*</Form.Label>
                                        <CustomDropdown options={HearAbout} title="Select Role" />
                                    </Form.Group>


                                </div>
                                <div className='col-6'>
                                    <Form.Group className="mb-4 ModalFormInputField ">

                                        <Form.Label>Gym Activities</Form.Label>
                                        <CustomDropdown options={HearAbout} title="Select Activities" />
                                    </Form.Group>


                                </div>
                            </div>



                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter'>

                        <div className='UserProfile d-flex flex-row'>
                            <div className='img'>
                                <img src={userImg} alt="user" />

                            </div>
                            <div className='d-flex flex-column'>
                                <div className='username'>Manish Kumar</div>
                                <div className='subtitle'>Follow up Schedule by</div>
                            </div>


                        </div>
                        <button className='FormFillBtn'>Add Follow up</button>




                    </Modal.Footer>
                </Modal>
            }

            {/*=============== add Payroll  Modal Design =================*/}
            {props.name == 'payroll' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">add_box
                            </span> Add Payroll
                        </Modal.Title>
                        <div className='expandicon'>

                            <span className="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body className=" ">
                        <div className='bgOutline py-0 '>



                            <Tabs

                                activeKey={keys}
                                onSelect={(k) => setKeys(k)}
                                className=" px-4  TabWrapper  "
                            >
                                <Tab eventKey="salary" tabClassName="ModalFormTabs " title=" Salary Paid ">

                                </Tab>
                                <Tab eventKey="advance" tabClassName=" ModalFormTabs" title='Advance Paid' >

                                </Tab>
                                <div className='horizontalLine'>

                                </div>
                                <div eventKey="salary" >
                                    <Form className='px-4 py-4  '>


                                        <div className='row '>

                                            <div className='col-12'>
                                                <Form.Group className="mb-4 ModalFormInputField">

                                                    <Form.Label>Employee*</Form.Label>
                                                    <CustomDropdown options={member} title="Select " />
                                                </Form.Group>


                                            </div>
                                            <div className="col-12">
                                                <Form.Group className="mb-4 ModalFormInputField">
                                                    <Form.Label>Month of Salary</Form.Label>
                                                    <Form.Control type="date" />

                                                </Form.Group>
                                            </div>
                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Monthly of Salary</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Monthly Salary"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className='col-12'>
                                                <Form.Group className="mb-4 ModalFormInputField">

                                                    <Form.Label> Payment Mode*</Form.Label>
                                                    <CustomDropdown options={member} title="Select Payment Mode " />
                                                </Form.Group>


                                            </div>

                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Salary Pay*</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Salary Pay"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Payable Salary*</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Payable Salary"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>

                                        </div>


                                    </Form>

                                </div>
                                <div eventKey="advance" >

                                    <Form className='px-4 py-4  '>
                                        <div className='row '>

                                            <div className='col-12'>
                                                <Form.Group className="mb-4 ModalFormInputField">

                                                    <Form.Label>Employee*</Form.Label>
                                                    <CustomDropdown options={member} title="Select " />
                                                </Form.Group>


                                            </div>
                                            <div className="col-12">
                                                <Form.Group className="mb-4 ModalFormInputField">
                                                    <Form.Label>Month of Salary</Form.Label>
                                                    <Form.Control type="date" />

                                                </Form.Group>
                                            </div>
                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Monthly of Salary</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Monthly Salary"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className='col-12'>
                                                <Form.Group className="mb-4 ModalFormInputField">

                                                    <Form.Label> Payment Mode*</Form.Label>
                                                    <CustomDropdown options={member} title="Select Payment Mode " />
                                                </Form.Group>


                                            </div>

                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Salary Pay*</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Salary Pay"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className='col-12 ModalFormInputField mb-4'>
                                                <Form.Label>Payable Salary*</Form.Label>
                                                <InputGroup className="">

                                                    <InputGroup.Text id="basic-addon1"><span class="material-icons">
                                                        currency_rupee
                                                    </span></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Enter Payable Salary"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>

                                        </div>
                                    </Form>


                                </div>

                            </Tabs>

                        </div>





                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>

                        <button className='FormFillBtn'>Add Payroll</button>




                    </Modal.Footer>
                </Modal >
            }

            {/*=============== Add Expenses  Modal Design =================*/}
            {props.name == 'addExpense' &&
                <Modal
                    {...props}
                    size=""
                    id='EditEnquiry'
                    fullscreen={fullscreen}
                >
                    <Modal.Header className='ModalFormHeader'>
                        <Modal.Title>
                            <span class="material-icons">paid

                            </span> Add Expenses
                        </Modal.Title>
                        <div className='expandicon'>

                            <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span></div>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <div className={style}>


                                <div className='row'>
                                    <div className='title d-flex align-center mb-3'>
                                        New Package  <span class="material-icons px-2">
                                            info_outline
                                        </span>

                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-4 ModalFormInputField " >
                                            <Form.Label>Expense Type*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Expense Type" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className='col-12'>
                                        <Form.Group className="mb-4 ModalFormTextarea">
                                            <Form.Label>Description</Form.Label>
                                            <textarea placeholder="Describe the plan here..."></textarea>
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>


                                    <div className="col-12">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Expens Amount*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Expens Amount" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Expense Date*</Form.Label>
                                            <Form.Control type="date" placeholder="Select" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>




                                    <div className='col-12'>
                                        <Form.Group className="mb-4 ModalFormInputField ">

                                            <Form.Label>Payment Mode*</Form.Label>
                                            <CustomDropdown options={HearAbout} title="Select " />
                                        </Form.Group>


                                    </div>
                                    <div className="col-12">
                                        <Form.Group className="mb-4 ModalFormInputField">
                                            <Form.Label>Staff Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Type Staff Name" />
                                            <Form.Control.Feedback type="invalid">
                                                error message
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>

                                </div>





                            </div>

                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn '> Add Member</button>




                    </Modal.Footer>
                </Modal>
            }
            {/*=============== Edit Member Details   Modal Design =================*/}

            {
                props.name == 'editExpense' &&
                <Modal
                    {...props}

                    id='EditEnquiry'

                >
                    <Modal.Header className='ModalFormHeader' >
                        <Modal.Title>
                            <span class="material-icons">paid
                            </span>  Edit  Expense
                        </Modal.Title>


                        <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>

                    </Modal.Header>
                    <Modal.Body>

                        <Form>

                            <div className='row'>
                                <div className=' ModalFormTitle d-flex align-items-center mb-3'>
                                    Package Details <span class="material-icons px-2">
                                        info_outline
                                    </span>

                                </div>
                                <div className='col-12'>
                                    <Card className='ModalFormProperty'>

                                        <Card.Text>
                                            <div>
                                                Name : 20 Sep, 2022 | 01:03 AM
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Mobile Number : +91 9992376345
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Gender : Male
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Marital Status : Married
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div>
                                                Birth Date : 06/02/1993
                                            </div>
                                        </Card.Text>



                                        <Card.Text className=''>

                                            <div className='d-flex flex-row align-items-center gap-2'>
                                                Gym Activities :
                                                <div className='chipOutlineFilled '>General </div>





                                            </div>
                                        </Card.Text>

                                    </Card>

                                </div>











                            </div>
                            <div className='row'>
                                <div className='title d-flex align-items-center mb-3'>
                                    Edit Packages <span class="material-icons px-2">
                                        info_outline
                                    </span>

                                </div>
                                <div className="col-12">
                                    <Form.Group className="mb-4 ModalFormInputField " >
                                        <Form.Label>Expense Type*</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Expense Type" />
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </div>



                                <div className='col-12'>
                                    <Form.Group className="mb-4 ModalFormTextarea">
                                        <Form.Label>Description</Form.Label>
                                        <textarea placeholder="Describe the plan here..."></textarea>
                                        <Form.Control.Feedback type="invalid">
                                            error message
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                            </div>



                        </Form>






                    </Modal.Body>
                    <Modal.Footer className='ModalFormFooter justify-content-end'>


                        <button className='FormFillBtn'>Update Expenes</button>




                    </Modal.Footer>
                </Modal>
            }

            {/* =============== Invoice Modal ================== */}

                   {

                     props.name == 'invoiceBalanceDue' &&

                     <Modal {...props} id='InvoiceBalanceDue'>
                           <Modal.Header>
                           <Modal.Title>
                                   Invoice Balance Due
                           </Modal.Title>
                                 <span class="material-icons closeCursorPointer" onClick={props.onHide}> close</span>
                           </Modal.Header>
                               <img src={HeaderStrip} alt="headerstrip" />
                           <Modal.Body>
                               
                               <div className='px-1 ContentTop'>
                                     <div className='logo flex spaceBetween '>
                                           <img src={logo} alt="logo" />
                                          <h2>Invoice
                                              <p>Bill No: GYMOWL/UTURN/2022-2023/517</p>
                                          </h2>
                                    
                                     </div>
                                   <div className='col-12 d-inline-flex spaceBetween'>
                                   
                                     <div className='col-5 flex spaceBetween invoiceDetailBox'>
                                        <div className=' tex'>
                                            <p>Invoice ID :</p>
                                            <p>Invoice Date :</p>
                                            <p>GST NO :</p>
                                            <p>SAC CODE :</p>
                                            <p>Place of Supply :</p>
                                            <p>Aadhar Number :</p>
                                        </div>
                                        <div className='text-end '>
                                            <p> GYMOWL/UTURN</p>
                                            <p>23/01/2022</p>
                                            <p>999723GHDKS</p>
                                            <p>999723</p>
                                            <p>Uttar Pardesh</p>
                                            <p>2222 3333 4444</p>
                                        </div>
                                     </div>
                                     <div className='col-5 flex spaceBetween invoiceDetailBox'>
                                        <div className=''>
                                        <p> Firm Name :</p>
                                        <p>Firm Employee Name :</p>
                                        <p>Firm Address :</p>
                                        </div>
                                        <div className='text-end '>
                                        <p> MONKEY</p>
                                        <p>Nitish Sharma</p>
                                        <p className='addressInvoice'>Speak or write to someone, or to direct information to someone: 
                                            The First Lady addressed the meeting briefly. He was generally</p>
                                        </div>
                                     </div>
                                 </div>  
       
                            <div className='col-12 flex spaceBetween invoiceDetailBox billDetail'>
                                <div>
                                    <h3>Bill From</h3>
                                    <h2>GYMOWL</h2>
                                   
                                    <p>J-55, Sector - 22<br></br>
                                         Near Oriental Bank,<br></br>
                                          Noida , Utter Pradesh , 201301</p>
                                  <p>9755005623</p>
                                  <p>uturnfitness@gmail.com</p>
                                </div>
                                <div className='text-end'>
                                    <h3>Bill To</h3>
                                    <h2>Harshal Dharpale</h2>
                                   
                                    <p>U Turn Fitness</p>
                                    <p>J-55, Sector - 22 <br></br>
                                        Near Oriental Bank,<br></br>
                                         Noida, Utter Pradesh , 201301</p>
                                  <p>9755005623</p>
                                  <p>uturnfitness@gmail.com</p>
                                </div>
                            </div>

                            <div className='col-12 mt-5'>
                           <div className='tableWrapperOuter bg-white'>
                   
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Client ID</th>
                                    <th>Invoice/ <br></br>Receipt No</th>
                                    <th>Amount</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th> Amount Paid  <br></br>(Inclusive GST)</th>
                                    <th> Payment Mode </th>
                                    


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                    <tr>
                                        <td> 260028</td>
                                        <td>
                                        UTURN/2022 <br></br>2023/517
                                        </td>
                                        <td> ₹21400.00</td>
                                        <td>
                                        ₹1926.00
                                        </td>
                                        <td>
                                        ₹1926.00
                                        </td>
                                        <td>
                                        ₹25252.00
                                        </td>

                                        <td>
                                        Cash
                                        </td>
                                        
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>
                           </div>
                           <div className='col-12 mt-5'>
                           <div className='tableWrapperOuter bg-white'>
                    <div className='tableHeading'>
                        <h2 className='h2'> Payment log</h2>

                    </div>
                    <div className='tableWrapper'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> Client ID</th>
                                    <th>Invoice/ <br></br>Receipt No</th>
                                    <th>Amount</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th> Amount Paid  <br></br>(Inclusive GST)</th>
                                    <th> Payment Mode </th>
                                    <th>Payment Date</th>
                                    <th>Received by</th>


                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                    <tr>
                                        <td> 260028</td>
                                        <td>
                                        UTURN/2022 <br></br>2023/517
                                        </td>
                                        <td> ₹21400.00</td>
                                        <td>
                                        ₹1926.00
                                        </td>
                                        <td>
                                        ₹1926.00
                                        </td>
                                        <td>
                                        ₹25252.00
                                        </td>

                                        <td>
                                        Cash
                                        </td>
                                        <td>04-11-2022</td>
                                        <td>Admin</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>
                           </div>
                     
                           <div className='col-12 d-inline-flex spaceBetween'>
                                   
                                   <div className='col-5 flex spaceBetween invoiceDetailBox'>
                                      <div className=' tex'>
                                          <p>Selected Plans Total :</p>
                                          <p>Sub Total :</p>
                                          <p>Discount :</p>
                                          <p>Surcharge(%) :</p>
                                          <p>Payable Amount :</p>
                                          
                                      </div>
                                      <div className='text-end '>
                                          <p> ₹21400.00</p>
                                          <p>₹25252.00</p>
                                          <p>₹0.00</p>
                                          <p>₹0.00</p>
                                          <p>₹25252.00</p>
                                          
                                      </div>
                                   </div>
                                   <div className='col-5  invoiceDetailBox'>
                                      <div className=''>
                                      <p> Balance Due Date :
                                     
                                      <span className='text-end '>04-11-2022</span>
                                      </p>
                                      
                                      </div>
                                     
                                      <div className='balanceBoxRed'>
                                      <p>Balance Amount :</p>
                                      <h2>₹25252.00</h2>
                                      </div>
                                   </div>
                               </div> 


                             <div className='comments'>
                                <h5>Comments</h5>
                                <p>Fees Once Paid will not be Refundable, Nor-Transferable and Nor-Extendable. Outside Shoes Not Allowed. Please do Not Bring any Valuables as the Club will not be responsible for any Loss.</p>
                             </div>
                             <div className='comments'>
                                <h5>Term & conditions</h5>
                                <p>
                                    1. Fees Once Paid will not be Refundable, Nor-Transferable and Nor-Extendable. <br></br>
                                    2. Outside Shoes Not Allowed. <br></br>
                                    3. Please do Not Bring any Valuables as the Club will not be responsible for any Loss.</p>
                             </div>

                            </div>
                           </Modal.Body>

                     </Modal>

                   }

            
        </>
    );
}

export default ModalForm 