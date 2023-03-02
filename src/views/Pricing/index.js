import React, { useState } from 'react';
import styles from "./pricing.module.scss";
import classNames from 'classnames';
import SocialRating from "./../../components/SocialRating";
import Button from '../../components/Button';


const Pricing = () => {
    const [activePricing, setActivePricing] = useState(1);
    const ActivePricing = (tabs) => {
        setActivePricing(tabs);
    };


    return (
        <>
            <section className={classNames("section", styles.pricingBanner)}>
                <div className={classNames("containerWrapper", styles.pricingBannerInner)}>
                    <div className={styles.pricingBannerLeft} data-aos={"fade-right"} data-aos-duration='1000' >
                        <h1 className="h1">Find Your Next Gym Management Tool</h1>
                        <p>All-In-One Gym Membership Management Software With Multiple Features Made for Gyms & Fitness Health Clubs.</p>
                        <Button isLink={true} path="tel:+918587885643" customClass={styles.callBtn} >Call us : +91 85878 85643</Button>
                    </div>
                    <div className={styles.pricingBannerRight} data-aos={"fade-left"} data-aos-duration='1000'>
                        <img src="./images/pricingBanner.png" alt="" className={styles.pricingBannerImg} />
                    </div>
                </div>
            </section>
            <section className={classNames("section", styles.pricingOuter)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className="containerWrapper">
                    <h2 className="h2">Choose Plan That Fits For You</h2>
                    <p>All you need is Gymowl Gym Management Software</p>
                    <div className={styles.tabButton}>
                        <div className={classNames(styles.tabBtnList)} onClick={() => ActivePricing(1)}>
                            Monthly Plan
                        </div>
                        <div className={classNames(styles.tabBtnList)} onClick={() => ActivePricing(2)}>
                            Annual Plan
                            <div className={styles.offers}>Save up to 10%</div>
                        </div>
                        <div className={classNames(styles.tabSlider, {
                            [styles.active]: activePricing === 2
                        })}></div>
                    </div>
                    {activePricing === 1 &&
                        <div className={styles.pricingTableWrapper} data-aos={"fade-up"} data-aos-duration='1000'>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Standard Plan</div>
                                            <div className={styles.subTitle}>Starting Up Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Smart Dashboard</li>
                                        <li>Prospect Management</li>
                                        <li>Billing & POS Sales</li>
                                        <li>Package Management</li>
                                        <li>Campaign Offers</li>
                                        <li>Live SMS</li>
                                        <li>Membership Management
                                            (Upgrade, Freeze, Transfer, Date Changes, etc.)</li>
                                        <li>Appointment Management</li>
                                        <li>Subscription Payments (Automated Monthly Recurring)</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Standard Plan</div>
                                            <div className={styles.subTitle}>Starting Up Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Gift Voucher</li>
                                        <li>Trial Tracking</li>
                                        <li>Class Management</li>
                                        <li>IP Restriction Security</li>
                                        <li>Automated SMS & Email</li>
                                        <li>Automated Lead Assignment</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Premium Plan</div>
                                            <div className={styles.subTitle}>Established Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Advance Campaign Management</li>
                                        <li>Prospect Management</li>
                                        <li>Global Membership Access Control</li>
                                        <li>Stock Management with SKU Sale</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                        </div>
                    }
                    {activePricing === 2 &&
                        <div className={styles.pricingTableWrapper} data-aos={"fade-up"} data-aos-duration='1000'>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Standard Plan</div>
                                            <div className={styles.subTitle}>Starting Up Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Smart Dashboard</li>
                                        <li>Prospect Management</li>
                                        <li>Billing & POS Sales</li>
                                        <li>Package Management</li>
                                        <li>Campaign Offers</li>
                                        <li>Live SMS</li>
                                        <li>Membership Management
                                            (Upgrade, Freeze, Transfer, Date Changes, etc.)</li>
                                        <li>Appointment Management</li>
                                        <li>Subscription Payments (Automated Monthly Recurring)</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Standard Plan</div>
                                            <div className={styles.subTitle}>Starting Up Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Gift Voucher</li>
                                        <li>Trial Tracking</li>
                                        <li>Class Management</li>
                                        <li>IP Restriction Security</li>
                                        <li>Automated SMS & Email</li>
                                        <li>Automated Lead Assignment</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                            <div className={styles.pricingtableList}>
                                <div>
                                    <div className={styles.pricingHeader}>
                                        <div className={styles.pricingHeaderImg}>
                                            <img src="./images/dummyImg.png" alt="" />
                                        </div>
                                        <div className={styles.pricingHeaderContent}>
                                            <div className={styles.title}>Premium Plan</div>
                                            <div className={styles.subTitle}>Established Businesses</div>
                                        </div>
                                    </div>
                                    <ul className={styles.pricingfeatureList}>
                                        <li>Advance Campaign Management</li>
                                        <li>Prospect Management</li>
                                        <li>Global Membership Access Control</li>
                                        <li>Stock Management with SKU Sale</li>
                                    </ul>
                                </div>
                                <Button large full customClass={styles.pricingBtn}>Contact Us</Button>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <section className={classNames("section testimonialWrapper", styles.blogTestimonial)} data-aos={"fade-up"} data-aos-duration='1000'>
                <SocialRating />
            </section>
        </>
    )
}

export default Pricing