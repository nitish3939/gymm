import React from 'react';
import { Link } from "react-router-dom"
import styles from "./header.module.scss";
import logo from "./../../assets/images/logo.png";
import profileImg from "./../../assets/images/profile-img.jpeg";
import classNames from 'classnames';



import { useRef, useState } from 'react';

 

const HeaderDashboard = ({ toggle }) => {


    // const divEl = useRef(null);
    // const [isActive, setActive] = useState(false);
  
    // const handleClick = () => {
    //   setActive(!isActive);
    //   if (isActive) {
    //     divEl.current.classList.remove("active123");
    //   } else {
    //     divEl.current.classList.add("active123");
    //   }
    // };

 
//   const ClassAdder = () =>{
    
//     // this.onButtonClick()
//     }; 



    return (
        <div className={styles.dashboardHeaderWrapper}>
            <button onClick={toggle} id="trigger" className={styles.hamburgerBtn}>
                <span className="material-icons">  menu </span>
            </button>
            <Link to="" className={styles.logo}>
                <img src={logo} alt="" />
            </Link>
            <div className="headerSearchWrapper">
                <input type="text" placeholder="What are you looking for?" className="formControl" />
                <span className="material-icons searchIcon"> search </span>
                {/* <span className="material-icons closeIcon"> close </span> */}
            </div>
            <div className={styles.headerRight}>
                <div className={styles.notifiactionWrapper}>
                    <span className={styles.notificationHint}></span>
                    <span className={classNames("material-icons", styles.bellIcon)}>
                        notifications
                    </span>

                </div>
                <div className={styles.userInfoWrapper}>
                    <div className={styles.userInfoInner}>
                        <img src={profileImg} alt="" className={styles.profileInfo} />
                        <div className={styles.userInfoContent}>
                            <div className={styles.companyName}>U Turn Fitness</div>
                            <div className={styles.userName}> Sonu Sharma</div>
                        </div>
                        <span className={classNames("material-icons", styles.arrowDown)} >
                            expand_more
                        </span>
                    </div>

                    <div className={styles.profileDropdownWrapper}>
                        <div className={styles.profileInfo}>
                            <div className={styles.title}>Sonu Verma</div>
                            <div className={styles.subTitle}>sonusharma@gmail.com</div>
                        </div>
                        <div className={styles.otherLinksWrapper}>
                            <div className={styles.subHeading}>Theme</div>
                            <div className={styles.selectThemeWrapper}>
                                <label className="fromGroup radioContainer">Light
                                    <input type="radio" name="light" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="fromGroup radioContainer">Dark
                                    <input type="radio" name="dark" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <Link to="/" className={styles.link}> Configurations </Link>
                            <Link to="/" className={styles.link}> Help & Center </Link>
                        </div>
                        <div className={styles.logoutWrapper}>
                            <span className={classNames("material-icons", styles.logoutIcon)}> logout</span>
                            Log Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HeaderDashboard