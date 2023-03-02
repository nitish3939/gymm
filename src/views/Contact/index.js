import React from 'react'
import SocialRating from "./../../components/SocialRating";
import styles from "./contact.module.scss";
import { Link } from 'react-router-dom';
import Button from "./../../components/Button";
import classNames from 'classnames';

const Contact = () => {
    return (
        <>
            <section className={classNames("section", styles.contactPageWrapper)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactformWrapper}>
                        <div className={styles.contactContainer}>
                            <div className={styles.contactformWrapperInner}>
                                <Link to="/" className={styles.contactLogo}>
                                    <img src="./images/contactLogo.png" alt="" className={styles.contactLogoImg} />
                                </Link>
                                <div className={styles.contactForm}>
                                    {/* <div className="fromGroup invalid">
                                        <label className="label">Full Name*</label>
                                        <input type="text" className="formControl" placeholder="Full name" />
                                        <div className="msg">error comes here </div>
                                    </div> */}
                                    <div className="fromGroup">
                                        <label className="label">Full Name*</label>
                                        <input type="text" className="formControl" placeholder="Full name" />
                                    </div>
                                    <div className="fromGroup">
                                        <label className="label">Phone number*</label>
                                        <input type="text" className="formControl" placeholder="99244-66881" />
                                    </div>
                                    <div className="fromGroup">
                                        <label className="label">Email Address*</label>
                                        <input type="text" className="formControl" placeholder="Type your email address" />
                                    </div>
                                    <div className="fromGroup ">
                                        <label className="label">Business Type*</label>
                                        <input type="text" className="formControl" placeholder="Type your email address" />
                                    </div>
                                    <div className="fromGroup">
                                        <label className="label">Preferred Time*</label>
                                        <input type="text" className="formControl" placeholder="Preferred Time to contact" />
                                    </div>
                                    <div className="fromGroup">
                                        <label className="label">Your Message</label>
                                        <textarea type="text" className="formControl" placeholder="Type your message here..." ></textarea>
                                    </div>
                                    <Button full large>Request a free demo</Button>
                                </div>
                                <div className={styles.feedback}>
                                    <h2 className="h2">We’d love to hear from you</h2>
                                    <p>Chat to our friendly team.</p>
                                    <div className={styles.feedbackList}>
                                        <div>
                                            <div className={styles.icon}>
                                                <span className="material-icons">
                                                    mail_outline
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="h3">Chat to Sales</h3>
                                            <p>Speak to our friendly team.</p>
                                            <Link to="info.gymowl@gmail.com"> info.gymowl@gmail.com</Link>
                                        </div>
                                    </div>
                                    <div className={styles.feedbackList}>
                                        <div>
                                            <div className={styles.icon}>
                                                <span className="material-icons">
                                                    phone_in_talk
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="h3">Call us</h3>
                                            <p>We are available 24/7 for you.</p>
                                            <a href="tel:+918587885643"> +91 85878 85643</a>
                                            <a href="tel:+919311635424">+91 93116 35424</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactBanner}>
                        <div className={styles.contactContainer}>

                            <div className={styles.contactRightLink}>
                                <a href="tel:+4733378901" className={styles.mobLink}>
                                    <span className="material-icons"> phone_in_talk </span>
                                    +91 85878 85643
                                </a>
                                <Button isLink={true} path="/" customClass={styles.headerPrimaryBtn}>Start free for 3 days</Button>
                            </div>
                            <div className={styles.contactBannerHeading}>
                                <div className={styles.head}>Contact us</div>
                                <div className={styles.content}>
                                    Our friendly team would love to hear from you!
                                </div>
                            </div>
                        </div>
                        <img src="./images/contactus_image.png" alt="" className={classNames(styles.contactBannerImg, styles.desktop)} />
                        <img src="./images/contactus_image_mob.png" alt="" className={classNames(styles.contactBannerImg, styles.mob)} />
                    </div>
                </div>

            </section>
            <section className={classNames("section testimonialWrapper", styles.ContactTestimonial)} data-aos={"fade-up"} data-aos-duration='1000'>
                <SocialRating />
            </section>
        </>
    )
}

export default Contact