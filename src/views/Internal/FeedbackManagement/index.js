import React, { useState } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import Form from 'react-bootstrap/Form';




const FeedbackManagement = () => {

    return (
        <>

            <section className='ChatBoxWrapper'>
                <div className='ChatBoxLeft'>
                    <h1 className="h1 flex spaceBetween alignItems">
                        Feedback Management

                    </h1>
                    <div className='ChatIcon active'>
                        <span class="material-icons">
                            chat
                        </span> Chats
                    </div>
                    <div className='AllChatList'>
                        <div className='TotalChat'> Total Chats (457)</div>
                        <div className='d-flex justify-content-between List active ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>
                        <div className='d-flex justify-content-between List ' >
                            <div className='ChatUser'>
                                <div className='UserImg'>
                                    <img src={userImg} alt="user" />
                                </div>
                                <div className='UserAbout d-flex flex-column'>
                                    <div className='Name'>Sonu Sharma</div>
                                    <div className='Number'>9988776655</div>
                                </div>
                            </div>
                            <div className='ChatTime'>01:56 pm</div>
                        </div>

                    </div>
                </div>
                <div className='ChatBoxRight'>
                    <div className='ChatHeader'>
                        <div className='userAvatar'>
                            <div className='userImg'>
                                <img src={userImg} alt="user" />
                            </div>
                            <div className='userContent'>
                                <div className='ModalFormTitle mb-0'>Sonu Sharma</div>
                                <div className='subtitle'>9988776655</div>
                            </div>
                        </div>
                    </div>
                    <div className='ChatBody'>
                        <div className='UserBox mb-4'>
                            <img src={userImg} />
                            <div>
                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit</p>

                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>


                        </div>
                        <div className='UserBox Admin mb-4'>
                            <div>

                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit</p>

                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>
                            <img src={userImg} />


                        </div>
                        <div className='UserBox mb-4'>
                            <img src={userImg} />
                            <div>
                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit Profile Page Disable States (Add on Emergency Contact Name & Number) - Dropdown (Increase Padding 8px top & Bottom) - Created : Save before close (Modal) , Dropdowns (Memberships Tab, Follow ups, Payment History) , Tables (Memberships) , working on payment section
                                    </p>

                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>


                        </div>
                        <div className='UserBox Admin mb-4'>

                            <div>
                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit Profile Page Disable States (Add on Emergency Contact Name & Number) - Dropdown (Increase Padding 8px top & Bottom) - Created : Save before close (Modal) , Dropdowns (Memberships Tab, Follow ups, Payment History) , Tables (Memberships) , working on payment section
                                    </p>


                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>
                            <img src={userImg} />


                        </div>
                        <div className='UserBox mb-4'>
                            <img src={userImg} />
                            <div>
                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit Profile Page Disable States (Add on Emergency Contact Name & Number) - Dropdown (Increase Padding 8px top & Bottom) - Created : Save before close (Modal) , Dropdowns (Memberships Tab, Follow ups, Payment History) , Tables (Memberships) , working on payment section
                                    </p>

                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>


                        </div>
                        <div className='UserBox Admin mb-4'>

                            <div>
                                <div className='msg'>
                                    <p> Today's done tasks : Updates : - Edit Profile Page Disable States (Add on Emergency Contact Name & Number) - Dropdown (Increase Padding 8px top & Bottom) - Created : Save before close (Modal) , Dropdowns (Memberships Tab, Follow ups, Payment History) , Tables (Memberships) , working on payment section
                                    </p>


                                </div>
                                <span className='ChatTime'>01:56:23 pm</span>
                            </div>
                            <img src={userImg} />


                        </div>

                    </div>
                    <div className='ChatFooter'>
                        <div className='Emoji'>
                            <span class="material-icons">
                                emoji_emotions
                            </span>
                        </div>
                        <div className='Search'>
                            <Form.Control type="text" placeholder="Type message here..." />
                        </div>
                        <div className='Send'>
                            <span class="material-icons">
                                send
                            </span>
                        </div>

                    </div>

                </div>

            </section>







        </>
    )
}

export default FeedbackManagement