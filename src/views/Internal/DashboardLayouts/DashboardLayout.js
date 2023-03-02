import { Outlet } from 'react-router-dom';
import React from 'react';
import HeaderDashboard from './Header';
import "./../assets/scss/dashboardLayout.scss";
import SideNav  from './SideNav';

import SideNavMemberProfile from './SideNav/memberProfile.js'
//  import dashboardMain from './SideNav';

//  import MemberProfileSidebar from './SideNav';


import  { useState } from 'react';



function DashboardLayout(props ) {


    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled(!isToggled);


    // const [sidebarType, setSidebarType] = useState('dashboard' , 'SideNavTwo');
    

    return (
        <>
            <HeaderDashboard toggle={toggle} />
           
             
            <SideNav isToggled={isToggled}  />

    {/* <SideNavMemberProfile isToggled={isToggled}  /> */}
 
            {/* {sidebarType === 'dashboard' ?  <SideNav   isToggled={isToggled} /> :  <SideNavTwo   isToggled={isToggled} />} */}

            
           

            <div   className={ ` mainContentWrapper  ${isToggled ? "sidebarFoldState" : ''}` } isToggled={isToggled}>
                <Outlet  />
            </div>






            {/* <div className='modalWrapperOuter'>
                <div className='modalWrapper size-480'>
                    <div className='modalHeader'>
                        <h2 className='h2'><span className="material-icons"> textsms </span> Send SMS</h2>
                        <button className='modalCloseBtn'>
                            <span className="material-icons"> close </span>
                        </button>
                    </div>
                    <div className='modalBody'>
                        <div>
                            <div className='fromGroup'>
                                <label className='label1' htmlFor=''>Select type of numbers</label>
                                <select className="formControl1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className='fromGroup'>
                                <label className='label1' htmlFor=''>Select Template</label>

                                <select className="formControl1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className='fromGroup'>
                                <label className='label1' htmlFor=''>SMS Message</label>
                                <textarea className='formControl1' placeholder='Select the template'></textarea>
                            </div>
                            <div className='actionWrapper'>
                                <button className='cancelBtn'>Cancel</button>
                                <button className='submitBtn'>Send SMS <span className="material-icons"> send </span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default DashboardLayout;
