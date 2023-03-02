import classNames from 'classnames';
import React from 'react'
import styles from "./blog.module.scss";
import Button from "./../../components/Button";
import SocialRating from "./../../components/SocialRating";

const Blog = () => {
    return (
        <>
            <section className={classNames("section", styles.blogFeatureWrapperTop)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className="containerWrapper">
                    <div className={styles.blogFeatureWrapper}>
                        <div className={styles.blogFeatureLeftWrapper}>
                            <div className={styles.blogFeatureContentWrapper}>
                                <h2 className="h2">Our friendly team would love to hear from you!</h2>
                                <div className={styles.blogChipListWrapper}>
                                    <span className={styles.blogChip}>Business</span>
                                    <span className={styles.blogChip}>Strategy</span>
                                    <span className={styles.blogChip}>Analytics</span>
                                </div>
                            </div>
                            <div className={styles.layer}></div>
                            <img src="./images/dummyImg.png" alt="" className={styles.blogFeatureLeftImg} />
                        </div>
                        <div className={styles.blogFeatureRightWrapper}>
                            <div className={styles.blogFeatureRightInnerWrapper}>
                                {[...Array(6).keys()].map(i =>
                                    <div className={styles.blogTopList} key={i}>
                                        <img src="./images/dummyImg.png" alt="" className={styles.blogTopListImg} />
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
                    </div>
                </div>
            </section>

            <section className={classNames("section", styles.blogWrapperBox)} >
                <div className={classNames("containerWrapper", styles.blogBottomContainer)} data-aos={"fade-up"} data-aos-duration='1000'>
                    <div className={styles.headWrapper}>
                        <h2 className="h2">All Blogs</h2>
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
                        {[...Array(6).keys()].map(i =>
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

        </>
    )
}

export default Blog