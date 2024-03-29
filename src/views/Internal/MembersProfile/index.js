import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import CustomDropdown from "../components/CustomDropdown";
import ModalForm from "../components/ModalForm";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import Form from 'react-bootstrap/Form';
import CustomCalendarDropDown from '../components/CustomDropdown/CustomCalendarDropDown';

const MemberEditProfile = () => {
    const [smsModal, setSmsModal] = useState(false);
    const [notificationModal, setnotificationModal] = useState(false);
    const [editEnquiry, setEditEnquiryModal] = useState(false);

    const options = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    const gender = ["Femal", "Male", "Other"];
    const Attendence = ["All time", "Today", "Yesterday", "This month", "Last month", "This year", "Custom"];
    const rowPerPage =["5", "10","20","50"] 

    const [editDesktopPictureModal, setEditDesktopPictureModal] = useState(false);

    const[saveChangesModal, setSaveChangesModal] =useState(false);


    return (
        <>
        <div className='editMemberProfilePage'> 
            <h1 className="h1 flex spaceBetween alignItems mt-1">
               Edit Profile
                <div onClick={() => setSaveChangesModal(true)}  className='addEnquiryBtn'>
                    
                    Save Changes
                </div>
                
                <ModalForm
                    name={'saveChangesModal'}
                    show={saveChangesModal}
                    onHide={() => setSaveChangesModal(false)}
                />
            </h1>
        <div className='row'>
               <div className='col-3 mb-3'>
                    <div  className='memberAvatar d-inline-flex mt-2'>
                        <img src={userImg} alt="user" />
                        <span onClick={() => setEditDesktopPictureModal(true)}  class="material-icons editMemberPicIcon">edit</span>
                        <div className='memberAvatarTitle'>
                        <div className='mainTitle mb-1'>Sonu Sharma </div>
                        <div className='subTitle'>Client ID : 230492</div>
                    </div>
                    </div>
                    
               </div>
               <ModalForm
                    name={'editDesktopPictureModal'}
                    show={editDesktopPictureModal}
                    onHide={() => setEditDesktopPictureModal(false)}
                />
        </div>
            
            <section >
            <Form>
                            <div className=''>
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
                                            <Form.Group className="mb-4 ModalFormInputField " >
                                                <Form.Label>Emergency Contact Name*</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 ">
                                            <Form.Group className=" mb-4 ModalFormInputField" >
                                                <Form.Label>Emergency Contact Number*</Form.Label>
                                                <Form.Control type="text" placeholder="Ex : 9988776655" />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6 d-inline-flex">
                                            <Form.Group className="mb-4 ModalFromRadioBtn me-5" >
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
                                            <Form.Group className="mb-4 ModalFromRadioBtn ms-5" >
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
                                        <div class="col-6"> </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField" >
                                                <Form.Label>Birth Date</Form.Label>
                                                <CustomCalendarDropDown />
                                                <Form.Control.Feedback type="invalid">
                                                    error message
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </div>
                                        <div className="col-6">
                                            <Form.Group className="mb-4 ModalFormInputField">
                                                <Form.Label>Aniversary Date</Form.Label>
                                                <CustomCalendarDropDown />
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


                                
                            </div>

                        </Form>
            </section>

        </div>


           

            
        </>
    )
}

export default MemberEditProfile