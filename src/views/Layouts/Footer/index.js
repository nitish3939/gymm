import React from 'react';
import styles from "./footer.module.scss";
import classNames from "classnames";
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const Footer = () => {
    return (
        <footer className={classNames("section", styles.footerWrapper)} >
            <div className="containerWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
                <div className={styles.footerTop}>
                    <div>
                        <Link to="" className={styles.footerLogo}>
                            <img src="./images/logo.png" alt="" className={styles.logoImg} />
                        </Link>
                    </div>
                    <div className={styles.footerSubscriber}>
                        <h3 className={classNames("h3", styles.h3)}>Get New Updates of Gymowl</h3>
                        <div className={styles.footerSubscriberForm}>
                            <div className={classNames("", styles.fromGroup)}>
                                <input className={classNames("formControl", styles.formControl)} placeholder="Your email" />
                                <Button large customClass={styles.subscribeBtn}>Subscribe</Button>
                            </div>
                            <div className="msg"></div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBotLeft}>
                        <h4 className={classNames("h4", styles.h4)}>Contact Us</h4>

                        <ul className={styles.contactInfo}>
                            <li className={styles.email}>
                                <Link to="mailto:info.gymowl@gmail.com" className={styles.link}>info.gymowl@gmail.com</Link>
                            </li>
                            <li className={styles.mob}>
                                <a href="tel:+919311635424" className={styles.link}>+91 85878 85643</a> {" "}
                                <a href="tel:+919311635424" className={styles.link}>+91 93116 35424</a>
                            </li>
                        </ul>

                    </div>
                    <div className={styles.footerBotRight}>
                        <div className={styles.footerNavSec}>
                            <h4 className={classNames("h4", styles.h4)}>Resources</h4>
                            <ul className={styles.footerNav}>
                                <li>
                                    <Link to="/blog" className={styles.link}>Blog</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>Help Center</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={styles.link}>Contact Support</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" target="_blank" className={styles.link}>Dashboard</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerNavSec}>
                            <h4 className={classNames("h4", styles.h4)}>Company</h4>
                            <ul className={styles.footerNav}>
                                <li>
                                    <Link to="" className={styles.link}>About Us</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>Legal</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>Privacy & Policy</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>Terms of Use</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerNavSec}>
                            <h4 className={classNames("h4", styles.h4)}>Social</h4>
                            <ul className={styles.footerNav}>
                                <li>
                                    <Link to="" className={styles.link}>Twitter</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>LinkedIn</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>Facebook</Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.link}>YouTube</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <span className={styles.copyrightLink}> © Copyright 2022 </span>
                    <span className={styles.copyrightLink}>Signifier Technology Pvt. Ltd. </span>
                    <span className={styles.copyrightLink}> All rights reserved </span>
                </div>
            </div>
        </footer >
    )
}

export default Footer