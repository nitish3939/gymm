import classNames from 'classnames';
import React, { useState } from 'react';
import styles from "./sideNav.module.scss";
import userImg from "./../../assets/images/profile-img.jpeg";
import { Link } from "react-router-dom";


import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Modal, Button } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';




// Start Side Nav Toggle

 const SideNav = ({ isToggled, props }) => {



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
            Dashboard
     </div>
    </Tooltip>
  );
  const renderTooltipTwo = (props) => (
    <Tooltip  className={`toolTipHide , firsttwotooltip ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
      Enquiries 
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
     Feedback Management 
     </div>
    </Tooltip>
  );
  const renderTooltipFive = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
      Diet Plan Management 
     </div>
    </Tooltip>
  );
  const renderTooltipSix = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
            Payments
     </div>
    </Tooltip>
  );
  const renderTooltipSeven = (props) => (
    <Tooltip  className={`toolTipHide  ${isToggled ?  "sidebarFoldStateToolTip" : ''}` } {...props}>
      <div className='tooltipInner'>
      Expense Management 
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



{/* =====================Main Dashboard Sidebar Start===================== */}



            <div    id="sidebar"  className={classNames(styles.sideNavWrapper  , `toggler ${isToggled ? styles.sidebarFoldState : ''}` ) }>
           

 
                <div className={classNames(styles.locationDropdownWrapper, {
                    [styles.open]: openLocationDropdown
                })}>

                    <div className={classNames(styles.list, styles.searchWrapper)}>
                        <div className={classNames("headerSearchWrapper", styles.locationSearchWrapper)}>
                            <input type="text" placeholder="Search locations here.." className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                        </div>
                    </div>
                    {/* <div className={classNames(styles.list, styles.totalLocationList)}>All locations </div> */}
                    {/* <div className={classNames("text", styles.list, styles.allLocationList)}>All locations (27)</div> */}
                    
                    
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
                </div>


                <div className={classNames(styles.sideBarNavWrapper )}>




                <div className={styles.userLocationWrapper} onClick={locationDropdown}>
                    <div  className={styles.userLocationAvatar}>
                        <img src={userImg} alt="user" />
                    </div>

                    
                    <div className={styles.userLocationTxt}>
                        <div className={classNames("title", styles.title ,styles.titleHide )}>U Turn Fitness</div>
                        <div className={classNames("subtitle", styles.subtitle, styles.subtitleHide)}>All locations</div>
                    </div>
                    <span className={classNames("material-icons", styles.moreIcon,styles.moreIconHide)}>
                        unfold_more
                    </span>
                </div>

              
                 

                    <ul className={styles.sideBarNavInnerWrapper}>
                        <li   className={classNames( location.pathname === '/dashboard' ? styles.activeNavManu : '', styles.linkItem,) }>
                         <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>   
                            
                             <Link to="/dashboard" className={styles.link}  >
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    dashboard
                                </span>
                           
                                <span className={styles.linkText}> Dashboard </span>
                                
                             </Link>
                             
                        </OverlayTrigger>
                            <span className={styles.alertNotification}>9</span>
                        </li>
                        <li  className={classNames(location.pathname === '/enquiries' ? styles.activeNavManu : '', styles.linkItem) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipTwo}>   
                         
                            <Link to="/enquiries" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    record_voice_over
                                </span>
                                <span className={styles.linkText}> Enquiries </span>
                            </Link>
                        </OverlayTrigger>
                            <span className={styles.alertNotification}>9</span>
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



                           


                <div className={classNames(styles.accord, ` ${ !isToggled && activeAccodion === 1 ?   styles.activeAccord : ""  }`)} >
                      
                        <li  className={classNames(styles.linkItem, styles.multipleDropdown,  )   }>
                
                            <div onClick={() => setActiveAccodion(activeAccodion === 0 ? 1 : 0  || activeAccodion === 1 ? 0 : 1 ) }  className={styles.link} >
                                <span  className={classNames("material-icons", styles.linkIcon)}>
                                    person
                                </span>
                                <span className={styles.linkText}> Members </span>
                            </div>
                            <span className={classNames("material-icons", styles.arrowIcon , `${activeAccodion === 1 ? styles.rotateArrow : ""}`)}>
                                expand_more
                            </span>
                           
                        </li>
                    
            
                    <div className={classNames(  ` ${ isToggled  ?   styles.openSideNavSubManuPopOver : ""  }`, styles.sidePopOne)} >  
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverArrow : ""  }`)}></div>
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverToManu : ""  }`)}> </div>       
                           <div className={styles.memberOfPopOver} >
                              <div className={classNames( styles.iconMemberGroup)}>   
                                      <span  className={classNames("material-icons", styles.linkIcon)}>
                                           person
                                       </span>
                                       <span className={styles.linkTextPopOver}> Members </span>
                                </div>
                            </div>


                        <li className={classNames(styles.subDropdown , styles.subDropdownPopOver)}>
                        
                            <ul className={styles.subDropdownInner}>
                            
                                <li className={styles.subLinkItem}>
                                    <Link className={classNames(styles.active, styles.subLink)} to="/members">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Members </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/memberships">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Memberships  </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/memberships-packages">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Memberships & Packages </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/members-workout-card">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Members Workout Card </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </div>  
                    
                </div>






                        <li  className={classNames(location.pathname === '/feedback-Management' ? styles.activeNavManu : '', styles.linkItem,) }>
                           <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipFour}>   
                         
                            <Link to="/feedback-Management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    sms_failed
                                </span>
                                <span className={styles.linkText}> Feedback Management </span>
                            </Link>
                            </OverlayTrigger>
                        </li>




                <div className={classNames(styles.accord, `${!isToggled && activeAccodion === 2 ? styles.activeAccord : ""}`)} >
                        
                        
                        <li  className={classNames(styles.linkItem, styles.multipleDropdown,  )}>
                            <div onClick={() => setActiveAccodion(activeAccodion === 0 ? 2 : 0 || activeAccodion === 2 ? 0 : 2) } className={styles.link }>
                           
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                assessment
                                </span>
                               
                                <span className={styles.linkText}> Reports </span>
                            </div>

                           <span className={classNames("material-icons", styles.arrowIcon, `${activeAccodion === 2 ? styles.rotateArrow : ""}`)}>
                                expand_more
                            </span>
                        </li>
                       



                <div className={classNames( ` ${ isToggled  ?   styles.openSideNavSubManuPopOver : ""  }`, styles.sidePopTwo)} >  
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverArrow : ""  }`)}></div>
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverToManu : ""  }`)}> </div>       
                           <div className={styles.memberOfPopOver} >
                              <div className={classNames( styles.iconMemberGroup)}>   
                                      <span  className={classNames("material-icons", styles.linkIcon)}>
                                           person
                                       </span>
                                       <span className={styles.linkTextPopOver}> Reports </span>
                                </div>
                            </div>

                        <li className={classNames(styles.subDropdown)}>
                            <ul className={ styles.subDropdownInner }>
                                <li className={styles.subLinkItem}>
                                    <Link className={classNames("active", styles.subLink)} to="/balance-due-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Balance Due Report </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/sales-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Sales Report</span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/expire-member-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Expired Member Report </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/member-report-card">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Member Report Card </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/due-membership-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Due Membership Report </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/sms-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> SMS Report</span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/attendance-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Attendance Report </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/pt-report">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> PT Report </span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </li>
                        </div>
                </div> 

                        <li  className={classNames(location.pathname === '/diet-plan-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipFive}>   
                         
                            <Link to="/diet-plan-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                food_banksharp
                                </span>
                                <span className={styles.linkText}> Diet Plan Management </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                        <li className={styles.subHeading}>
                            <div className={classNames(styles.subHeadingText , styles.businessSetting)} >Business Setting</div>
                        </li>

                <div className={classNames(styles.accord, `${!isToggled && activeAccodion === 3 ? styles.activeAccord : ""}`)} >
                        <li className={classNames(styles.linkItem, styles.multipleDropdown)}>
                            <div onClick={() => setActiveAccodion(activeAccodion === 0 ? 3 : 0 || activeAccodion === 3 ? 0 : 3 ) } className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    person
                                </span>
                                <span className={styles.linkText}> Team </span>
                            </div>
                            <span className={classNames("material-icons", styles.arrowIcon , `${activeAccodion === 3 ? styles.rotateArrow : ""}`)}>
                                expand_more
                            </span>
                        </li>




                    <div className={classNames( `  ${ isToggled  ?   styles.openSideNavSubManuPopOver : ""  }`, styles.sidePopThree)} >  
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverArrow : ""  }`)}></div>
                                <div className={classNames( ` ${ isToggled  ?   styles.popOverToManu : ""  }`)}> </div>       
                           <div className={styles.memberOfPopOver} >
                              <div className={classNames( styles.iconMemberGroup)}>   
                                      <span  className={classNames("material-icons", styles.linkIcon)}>
                                           person
                                       </span>
                                       <span className={styles.linkTextPopOver}> Team </span>
                                </div>
                            </div>    
                        <li className={classNames(styles.subDropdown)}>
                            <ul className={styles.subDropdownInner}>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/employees">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Employees </span>
                                    </Link>
                                </li>

                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/employee-attendence">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Employee Attendence </span>
                                    </Link>
                                </li>
                                <li className={styles.subLinkItem}>
                                    <Link className={styles.subLink} to="/payroll">
                                        <span className={classNames("material-icons", styles.subCircleIcon)}>
                                            trip_origin
                                        </span>
                                        <span className={styles.subLinkText}> Payroll </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                      </div>  
                </div>
                        <li className={classNames(location.pathname === '/payments' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSix}>   
                         
                            <Link to="/payments" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    payments
                                </span>
                                <span className={styles.linkText}> Payments </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                        <li  className={classNames(location.pathname === '/expense-management' ? styles.activeNavManu : '', styles.linkItem,) }>
                        <OverlayTrigger  trigger="hover" className={styles.toolTipHide}  placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSeven}>   
                         
                            <Link to="/expense-management" className={styles.link}>
                                <span className={classNames("material-icons", styles.linkIcon)}>
                                    paid
                                </span>
                                <span className={styles.linkText}> Expense Management </span>
                            </Link>
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
            </div>
         

                    



        </>
    )
};


export default SideNav;



