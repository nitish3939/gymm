import React, { useState, useEffect, useRef } from 'react'




const CustomDropdown = ({ options, title }) => {

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
            <div  ref={myRef} className={`selectDropdownBtn ${Active ? "active" : ""}`} onClick={toggleDropdown}>
                <div className='selectDropdownBtnInner'>
                    <div className="selectedText">
                        {Selected ? Selected : title}
                    </div>
                    <span className="material-icons"> expand_more </span>
                </div>
                {Active ?
                    <div className="selectDropdown py-2">
                        {options.map((option, index) => (
                            <div key={index} onClick={(e) => {
                                setSelected(option)
                            }} className="options">{option}</div>
                        ))}
                    </div>
                    : ""}
            </div>
        </>
    )
}



















export default CustomDropdown 