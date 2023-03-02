import React from 'react';
import { Link } from "react-router-dom";
import styles from "./blog-details.module.scss";
import Button from "../../components/Button";
import classNames from 'classnames';
import SocialRating from "../../components/SocialRating";

const blogDetails = () => {
    return (
        <>
            <section className={classNames("section", styles.blogDetailsWrapperBox)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className="containerWrapper">
                    <div className={styles.blogDetailsheader}>
                        <img src="./images/blog-img.png" alt="" className={styles.blogHeadeImg} />
                    </div>

                    <div className={styles.blogDetailsOuter}>
                        <div className={styles.blogDetailsContentSection}>
                            <div className={styles.blogHeading}>
                                <h2 className="h2">Our friendly team would love to hear from you!</h2>
                                <div className={styles.date}>
                                    <span>24th July, 2022</span>
                                    <span className={classNames("material-icons", styles.icon)}>
                                        fiber_manual_record
                                    </span>
                                    <span>1:02 pm</span>
                                </div>
                                <div className={classNames(styles.blogChipListWrapper, styles.blogDetailsChip)}>
                                    <span className={styles.blogChip}>Business</span>
                                    <span className={styles.blogChip}>Strategy</span>
                                    <span className={styles.blogChip}>Analytics</span>
                                </div>
                            </div>
                            <div className={styles.socialLinkWrapper}>
                                <Link to="" className={styles.socialLink}><img src="./images/linkedin.png" alt="" /></Link>
                                <Link to="" className={styles.socialLink}><img src="./images/youtube.png" alt="" /></Link>
                                <Link to="" className={styles.socialLink}><img src="./images/instagram.png" alt="" /></Link>
                                <Link to="" className={styles.socialLink}><img src="./images/facebook.png" alt="" /></Link>
                                <Link to="" className={styles.socialLink}>Share</Link>
                            </div>
                        </div>
                        <div className={styles.blogDetailsContentWrapper}>
                            <div className={styles.contentLeft}>
                                <p>Fitness word implies a condition of being physically fit and healthy. This meaning has become more relevant in today's chaotic situation where the whole world is greatly affected by covid-19 on a mental and physical level. This word with 100% physical significance is playing the role of an infallible weapon. This weapon is proving to be a covenant solution in adding Life, Light and positivity inside everyone.</p>
                                <h3>"Physical fitness versus covid-19 pandemic"</h3>
                                <p>
                                    Fitness word implies a condition of being physically fit and healthy. This meaning has become more relevant in today's chaotic situation where the whole world is greatly affected by covid-19 on a mental and physical level. This word with 100% physical significance is playing the role of an infallible weapon. This weapon is proving to be a covenant solution in adding Life, Light and positivity inside everyone.
                                </p>
                                <p>
                                    This pandemic without failing has taught us that good health is the only shield we need to overcome all the uncertainties faced by us at different points of our lives. Just like many new and improved version of covid-19 this fitness is also evolving itself according to the needs and demands of time and situation.
                                </p>
                                <img src="./images/blog-detail-img.png" alt="" />
                                <p>Fitness word implies a condition of being physically fit and healthy. This meaning has become more relevant in today's chaotic situation where the whole world is greatly affected by covid-19 on a mental and physical level. This word with 100% physical significance is playing the role of an infallible weapon. This weapon is proving to be a covenant solution in adding Life, Light and positivity inside everyone.</p>
                                <h3>"Physical fitness versus covid-19 pandemic"</h3>
                                <p>
                                    Fitness word implies a condition of being physically fit and healthy. This meaning has become more relevant in today's chaotic situation where the whole world is greatly affected by covid-19 on a mental and physical level. This word with 100% physical significance is playing the role of an infallible weapon. This weapon is proving to be a covenant solution in adding Life, Light and positivity inside everyone.
                                </p>
                                <p>
                                    This pandemic without failing has taught us that good health is the only shield we need to overcome all the uncertainties faced by us at different points of our lives. Just like many new and improved version of covid-19 this fitness is also evolving itself according to the needs and demands of time and situation.
                                </p>
                                <img src="./images/blog-detail-img.png" alt="" />
                            </div>
                            <div className={styles.contentRight}>
                                <div className={styles.blogBanner}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.blogFooter}>
                <section className={classNames("section", styles.blogWrapperBox)} data-aos={"fade-up"} data-aos-duration='1000'>
                    <div className="containerWrapper">
                        <div className={styles.headWrapper}>
                            <h2 className="h2">Related Blogs</h2>
                            <div className={classNames("formGroup", styles.serachForm)}>
                                <input className="formControl" placeholder="Search “Exciting Blog”" />
                                <Button customClass={styles.searchBtn} large>Search</Button>
                            </div>
                            <button className={classNames(styles.filterBtn, styles.active)}>
                                <span className="material-icons">
                                    filter_list
                                </span>
                                Filter
                            </button>
                        </div>
                        <div className={styles.filterChipWrapper}>
                            <div className={styles.filterChipInnerWrapper}>
                                <span className={classNames(styles.filterChip, styles.active)}>Business</span>
                                <span className={classNames(styles.filterChip, styles.active)}>Strategy</span>
                                <span className={classNames(styles.filterChip, styles.active)}>Analytics</span>
                                <span className={styles.filterChip}>Development</span>
                                <span className={styles.filterChip}>Marketing</span>
                                <span className={styles.filterChip}>Health</span>
                                <span className={styles.filterChip}>Dietitian</span>
                                <span className={styles.filterChip}>Analytics</span>
                                <span className={styles.filterChip}>Workout</span>
                            </div>
                        </div>
                        <div className={styles.blogListWrapper}>
                            {[...Array(3).keys()].map(i =>
                                <div className={styles.blogList} key={i}>
                                    <img src="./images/dummyImg.png" alt="" className={styles.blogListImg} />
                                    <h3 className="h3">Benefits of Dead Lift...</h3>
                                    <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device.</p>
                                    <div className={styles.blogChipListWrapper}>
                                        <span className={styles.blogChip}>Business</span>
                                        <span className={styles.blogChip}>Strategy</span>
                                        <span className={styles.blogChip}>Analytics</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className={classNames("section testimonialWrapper", styles.blogTestimonial)} data-aos={"fade-up"} data-aos-duration='1000'>
                    <SocialRating />
                </section>
            </div>
        </>

    )
}

export default blogDetails