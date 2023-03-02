import classNames from 'classnames';
import React, { useState } from 'react';
import styles from "./sideNav.module.scss";
import userImg from "./../../assets/images/profile-img.jpeg";
import { Link } from "react-router-dom";


import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Modal, Button } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';





const SideNavMemberProfile = ({ isToggled, props }) => {



    const [openLocationDropdown, setOpenLocationDropdown] = useState(false);

    const locationDropdown = () => {
        setOpenLocationDropdown(!openLocationDropdown);
    };

  const [activeAccodion, setActiveAccodion] = useState(0);


// End  Side Nav Toggle



// Start ToolTips Start

const renderTooltip = (props) => (
    <Tooltip  className={`toolTipHide  firsttwotooltip ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
            Edit Profile
     </div>
    </Tooltip>
  );
  const renderTooltipTwo = (props) => (
    <Tooltip  className={`toolTipHide , firsttwotooltip ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
     Memberships
     </div>
    </Tooltip>
  );
  const renderTooltipThree = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
      Follow Ups 
     </div>
    </Tooltip>
  );
  const renderTooltipFour = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
     Payment History
     </div>
    </Tooltip>
  );
  const renderTooltipFive = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
     Report Card
     </div>
    </Tooltip>
  );
  const renderTooltipSix = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
           Workout History
     </div>
    </Tooltip>
  );
  const renderTooltipSeven = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
     Upload Documents
     </div>
    </Tooltip>
  );
  const renderTooltipEight = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
     Attendance
     </div>
    </Tooltip>
  );
  const renderTooltipNine = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
    Biometric
     </div>
    </Tooltip>
  );

  // End ToolTips Start



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleMouseOver = () => setShow(true);
  const handleMouseOut = () => setShow(false);

  // Start Add Class If Nav Cliced



const [activeNavManu, setactiveNavManu] = useState('enquiries');

//const [active, setActive] = useState('home');

const handleClickManu = (item) => {
    setactiveNavManu(item);
}

// Get User Location TO add classs to Active Nav 
const location = useLocation();

const  dashboardMain = () =>{

} 


    return (
        <>



{/* =====================Member Profile Dashboard Sidebar Start===================== */}



            <div    id="sidebar"  className={classNames(styles.sideNavWrapper  , `toggler ${isToggled ? styles.sidebarFoldState : ''}` ) }>
           

 
                {/* <div className={classNames(styles.locationDropdownWrapper, {
                    [styles.open]: openLocationDropdown
                })}>

                    <div className={classNames(styles.list, styles.searchWrapper)}>
                        <div className={classNames("headerSearchWrapper", styles.locationSearchWrapper)}>
                            <input type="text" placeholder="Search locations here.." className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                        </div>
                    </div>
                    
                    <div className={classNames(styles.list, styles.locationListWrapper)}>
                    <div className={classNames("text all-locs", styles.list, styles.allLocationList)}>All locations (27)</div>
                        {
                            [...Array(5)].map((e, i) =>
                                <div className={classNames(styles.locationList, styles.active)} key={i}>
                                    <span className={classNames("material-icons", styles.checkIcon)}>
                                        check
                                    </span>
                                    U Turn Fitness (K-56 faridabad)
                                </div>
                            )
                        }
                        {
                            [...Array(5)].map((e, i) =>
                                <div className={styles.locationList} key={i}>
                                    <span className={classNames("material-icons", styles.checkIcon)}>
                                        check
                                    </span>
                                    U Turn Fitness (K-56 faridabad)
                                </div>
                            )
                        }
                    </div>
                </div> */}


                <div className={classNames(styles.sideBarNavWrapper )}>

                    <Link to="/members"> 
                      <div className={classNames(" d-flex" ,styles.membersProfileBackBtn)}>

                      <span className={classNames("material-icons", styles.arrowBack)}> arrow_back_ios </span>
                     
                         <div className={classNames(styles.membersProfileBackBtnHide)} >Members Profile </div> 
                      </div>
                     </Link>
                <div className={styles.userLocationWrapper} >
                    <div  className={classNames(styles.userLocationAvatar , styles.memberProfileAvatar)}>
                        <img src={userImg} alt="user" />
                    </div>

                    
                    <div className={styles.userLocationTxt}>
                        <div className={classNames("title", styles.title ,styles.titleHide )}>Sonu Sharma </div>
                        <div className={classNames("subtitle", styles.subtitle, styles.subtitleHide)}>Client ID : 230492</div>
                    </div>
                    {/* <span className={classNames("material-icons", styles.moreIcon,styles.moreIconHide)}>
                        unfold_more
                    </span> */}
                </div>
 
                <div  className={classNames("addEnquiryBtn", styles.addNewSale )}>
                    <span className="material-icons"> add </span>
                    <div className={classNames(styles.addNewSaleHide)}> Add to New Sale</div> 
                </div>

                    <ul className={styles.sideBarNavInnerWrapper}>
                        <li   className={classNames( location.pathname === '/memberEditProfile' ? styles.activeNavManu : '', styles.linkItem,) }>
                         <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>   
                            
                             <Link to="/memberEditProfile" className={styles.link}  >
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    edit
                                </span>
                           
                                <span className={styles.linkText}> Edit Profile </span>
                                
                             </Link>
                             
                        </OverlayTrigger>
                            {/* <span className={styles.alertNotification}>9</span> */}
                        </li>
                        <li  className={classNames(location.pathname === '/enquiries' ? styles.activeNavManu : '', styles.linkItem) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipTwo}>   
                         
                            <Link to="/enquiries" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    person
                                </span>
                                <span className={styles.linkText}> Memberships </span>
                            </Link>
                        </OverlayTrigger>
                            
                        </li>
                        <li className={classNames(location.pathname === '/followups' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipThree}>   
                         
                            <Link to="/followups" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    replay
                                </span>
                                <span className={styles.linkText}> Follow Ups </span>
                            </Link>
                            </OverlayTrigger>
                        </li>


                        <li  className={classNames(location.pathname === '/feedback-Management' ? styles.activeNavManu : '', styles.linkItem,) }>
                           <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipFour}>   
                         
                            <Link to="/feedback-Management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                   payments
                                </span>
                                <span className={styles.linkText}> Payment History</span>
                            </Link>
                            </OverlayTrigger>
                        </li>


                        <li  className={classNames(location.pathname === '/diet-plan-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipFive}>   
                         
                            <Link to="/diet-plan-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                               assessment
                                </span>
                                <span className={styles.linkText}> Report Card </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                    

            
                        <li className={classNames(location.pathname === '/payments' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSix}>   
                         
                            <Link to="/payments" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                fitness_center
                                </span>
                                <span className={styles.linkText}> Workout History </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                        <li  className={classNames(location.pathname === '/expense-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSeven}>   
                         
                            <Link to="/expense-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                text_snippet
                                </span>
                                <span className={styles.linkText}> Upload Documents </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                        <li  className={classNames(location.pathname === '/expense-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipEight}>   
                         
                            <Link to="/expense-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                calendar_month
                                </span>
                                <span className={styles.linkText}> Attendance </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                        <li  className={classNames(location.pathname === '/expense-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipNine}>   
                         
                            <Link to="/expense-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                               fingerprints
                                </span>
                                <span className={styles.linkText}> Biometric</span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
            </div>
         

        </>
    )
};



export default SideNavMemberProfile;
