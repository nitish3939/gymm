import React, { useState, useEffect, useRef } from 'react'




const CustomDropdown = ({ options, title }) => {

    const [Active, setActive] = useState(false);
    const [Selected, setSelected] = useState(false);
    const myRef = useRef(null);
    const listRef = useRef(null);
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


useEffect(() => {
    if (Active) {
      const parentRect = myRef.current.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - parentRect.bottom;
      const spaceRight = window.innerWidth - parentRect.right;

      if (spaceBelow < listRect.height && spaceBelow < parentRect.top) {
        listRef.current.style.top = `-${listRect.height}px`;
      } else {
        listRef.current.style.top = `${parentRect.height}px`;
      }

      if (spaceRight < listRect.width && spaceRight < parentRect.left) {
        listRef.current.style.left = "auto";
        listRef.current.style.right = "0";
      } else {
        listRef.current.style.right = "auto";
        listRef.current.style.left = "0";
      }
    }
  }, [Active]);

      
    
    return (
        <>
            <div  ref={myRef} className={`selectDropdownBtn dropDownFullWidth ${Active ? "active" : ""}`} onClick={toggleDropdown}>
                <div className='selectDropdownBtnInner'>
                    <div className="selectedText">
                        {Selected ? Selected : title}
                    </div>
                    <span className="material-icons"> expand_more </span>
                </div>
                {Active ?
                    <div  ref={listRef} className="selectDropdown py-2">
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