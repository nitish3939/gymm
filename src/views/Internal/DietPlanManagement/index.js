import React, { useState, useContext } from 'react'
import styles from "./../Dashboard/dashboard.module.scss";
import classNames from 'classnames';
import userImg from "./../assets/images/profile-img.jpeg";
import illsutration from "./../assets/images/illustration.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ModalForm from "./../components/ModalForm";
import CustomDropdown from "./../components/CustomDropdown";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CustomToggle({ children, eventKey }) {
    const [icon, seticon] = useState("expand_more");
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        seticon("expand_less")
    );

    return (
        <button
            type="button"
            // seticon={expand_less}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}



const DietPlanManagement = () => {


    //const [dietPlan, setdietPlan] = useState(false);
    const [createDietPlan, setCreateDietPlan] = useState(false);
    


    const handle = ["Handle1", "Handle2", "Handle3", "This month", "Last month", "This year", "Custom"];
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState('public');
    const [keys, setKeys] = useState('private');


    return (
        <>
            <h1 className="h1 flex spaceBetween alignItems">
                Diet Plan Management
                <div className='addEnquiryBtn' onClick={() => setCreateDietPlan(true)}>
                    <span className="material-icons"> add </span>
                    Create Diet Plan
                </div>
                {/* <ModalForm
                    name={'dietPlan'}

                    show={dietPlan}
                    onHide={() => setdietPlan(false)}
                /> */}
               <ModalForm className='mt-5'
                   name={'createDietPlan'}
                   show={createDietPlan}
                    onHide={() => setCreateDietPlan(false)}
               />

            </h1>



    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="   TabWrapper  dietPlanManagement" >
                  <Tab eventKey="public" tabClassName=" ModalFormTabs" title={<span> Public</span>} > </Tab>
                  <Tab eventKey="private" tabClassName=" ModalFormTabs" title={<span>Private</span>} > </Tab>
          <div eventKey="public">
            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper gap-2'>
                          



                        <div className='col-1  dropDownIfFirst'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Days</span>} />
                        </div>
                        <div className=' dropDownIfFirst dietFoodtypeDropDown'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Food Type</span>} />
                        </div>
                        <div className=' dropDownIfFirst dietFoodtypeDropDown'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Meal Type</span>} />
                        </div>
                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>



            </div>
            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle ' >All Diet Plan(s) (540)</h3>
                <div className="AccordionDesign">


                    <Accordion defaultActiveKey="0">
                        <Card className='AccordionItemWrapper'>
                            <Card.Header className='AccordionHeader'>
                                <div className='AccordionTitle'> Diet Plan Name</div>



                                

                                <div className='d-flex align-items-center gap-3'>
                                <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            <input type="text" placeholder="Assign Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span>
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                </div>
                                    <CustomToggle eventKey="0"> <span class="material-icons BgIcon" >
                                        expand_more
                                    </span>
                                    </CustomToggle> <span class="material-icons">
                                        more_vert
                                    </span>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    {/* <div className='d-flex justify-content-between align-items-center AssignMembers'>
                                        <div className='MembersImg d-flex align-items-center gap-2'>
                                            <div className='d-flex ms-n2'>
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <img src={userImg} />

                                            </div>
                                            <span> Assign Members</span>

                                        </div>
                                        

                                    </div> */}
                                    <div className='AccordionData'>
                                        <span className='chipOutlineFilled'>Sunday </span>
                                        <Accordion defaultActiveKey="0">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Breakfast Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Lunch Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Morning Snack Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <span className='chipOutlineFilled'>Monday </span>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Breakfast Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>

                                    </div>
                                </div>


                            </Accordion.Collapse>
                        </Card>

                    </Accordion>




                </div>
            </section>
          </div>
          <div eventKey="private">
            <div className='row text-end'>
                <div className='col-lg-12'>
                    <div className='categoryWrapper gap-2'>
                          



                        <div className='col-1  dropDownIfFirst'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Days</span>} />
                        </div>
                        <div className=' dropDownIfFirst dietFoodtypeDropDown'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Food Type</span>} />
                        </div>
                        <div className=' dropDownIfFirst dietFoodtypeDropDown'>
                            <CustomDropdown options={handle} title={<span className='d-flex align-items-center gap-2'>Meal Type</span>} />
                        </div>
                        <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                            <input type="text" placeholder="Search Category" className="formControl" />
                            <span className="material-icons searchIcon"> search </span>
                            {/* <span className="material-icons closeIcon"> close </span> */}
                        </div>
                    </div>
                </div>



            </div>
            <section className={classNames('section', styles.followUpsWrapper)}>
                <h3 className='subtitle ' >All Diet Plan(s) (540)</h3>
                <div className="AccordionDesign">


                    <Accordion defaultActiveKey="0">
                        <Card className='AccordionItemWrapper'>
                            <Card.Header className='AccordionHeader'>
                                <div className='AccordionTitle'> Diet Plan Name</div>



                                

                                <div className='d-flex align-items-center gap-3'>
                                <div className={classNames("headerSearchWrapper member-search ", styles.dashboardSearch)}>
                                            <input type="text" placeholder="Assign Members" className="formControl" />
                                            <span className="material-icons searchIcon"> search </span>
                                            {/* <span className="material-icons closeIcon"> close </span> */}
                                </div>
                                    <CustomToggle eventKey="0"> <span class="material-icons BgIcon" >
                                        expand_more
                                    </span>
                                    </CustomToggle> <span class="material-icons">
                                        more_vert
                                    </span>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    {/* <div className='d-flex justify-content-between align-items-center AssignMembers'>
                                        <div className='MembersImg d-flex align-items-center gap-2'>
                                            <div className='d-flex ms-n2'>
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <img src={userImg} />
                                                <img src={userImg} />

                                            </div>
                                            <span> Assign Members</span>

                                        </div>
                                        

                                    </div> */}
                                    <div className='AccordionData'>
                                        <span className='chipOutlineFilled'>Sunday </span>
                                        <Accordion defaultActiveKey="0">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Breakfast Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Lunch Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Morning Snack Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>
                                        <span className='chipOutlineFilled'>Monday </span>
                                        <Accordion defaultActiveKey="1">
                                            <Card className='InnerAccordionWrapper'>
                                                <Card.Header className='AccordionHeader'>
                                                    <div className='AccordionTitle'>Breakfast Meal</div>

                                                    <div className='d-flex align-items-center gap-3'>
                                                        <CustomToggle eventKey="0"> <span class="material-icons text-white" >
                                                            expand_less
                                                        </span>
                                                        </CustomToggle></div>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <div>

                                                        <div className='InnerAccordionData'>
                                                            <Table>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>
                                                                    <tr>
                                                                        <td>Non-Veg
                                                                            <p> Food Type</p>
                                                                        </td>
                                                                        <td>5:00 am <p> Timing</p></td>
                                                                        <td className='DietFood'>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati) Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)
                                                                            <p> Diet</p></td>



                                                                    </tr>


                                                                </tbody>
                                                            </Table>



                                                        </div>
                                                    </div>


                                                </Accordion.Collapse>
                                            </Card>

                                        </Accordion>

                                    </div>
                                </div>


                            </Accordion.Collapse>
                        </Card>

                    </Accordion>




                </div>
            </section>
          </div>
            {/* <div class="HelpSupport">Help Support</div> */}
    </Tabs>
        </>
    )
}

export default DietPlanManagement