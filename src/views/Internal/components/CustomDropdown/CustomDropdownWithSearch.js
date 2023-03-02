import React, { useState, useEffect, useRef } from 'react'
import ModalForm from "./../ModalForm";

import Form from 'react-bootstrap/Form';


import userImg from "../../assets/images/profile-img.jpeg";





const CustomDropdownWithSearch = ({ options, title }) => {







    
    const [Active, setActive] = useState(false);
    const [Selected, setSelected] = useState(false);
    const myRef = useRef();

    const toggleDropdown = () => {
        setActive(!Active);
}

 const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      


    });






    return (
        <>

            










<div ref={myRef} className={`customDropdownWithSearch  selectDropdownBtn ${Active ? "active" : ""}`}>
              <input onClick={toggleDropdown} className={`formControl`}   type="text" placeholder="Assign Members" />
                <span className="material-icons searchIcon"> search </span>
                <span onClick={toggleDropdown} className="material-icons arrowDropWithSearch"> expand_more </span>
                <div className='selectDropdownBtnInner'>
                   
                    
                </div>
                {Active ?
                    <div className="selectDropdown">
                         

                        {options.map((option, index) => (
                            <div key={index} onClick={(e) => {setSelected(option) }} className="options">
                                <Form.Group className=" ModalFromCheckBox" >
                                        <div className='checkbox '>
                                              <Form.Check label="" name="book1" type="checkbox"  /><div className='imgWithName'><span><img className='userImg' src={userImg} alt=''/> </span> {option}</div> 
                                       </div>
                                </Form.Group>
                            </div>
                        ))}
                    </div>
                    : ""}
            </div>
        </>
    )
}




export default CustomDropdownWithSearch