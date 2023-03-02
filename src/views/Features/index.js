import React from 'react'
import styles from "./features.module.scss";
import classNames from 'classnames';
import SocialRating from "../../components/SocialRating";
import Button from "../../components/Button";


const Features = () => {

    return (
        <>
            <section className={classNames("section", styles.featureBannerOuter)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className={styles.featureBannerWrapper}>
                    <div className={styles.featureContainer}>
                        <div className={styles.featureBannerLeft}>
                            <h1 className="h1">Find Your Next Gym Management Tool</h1>
                            <p>All-In-One Gym Membership Management Software With Multiple Features Made for Gyms & Fitness Health Clubs.</p>
                            <Button large> Call us : +91 85878 85643 </Button>
                        </div>
                    </div>
                    <div className={styles.featureContainer}>
                        <div className={styles.featureBannerRight}>
                            <img src="./images/featureBannerImgMobile.png" alt="" className={styles.featureBannerImg} />
                        </div>
                        <div className={styles.arrowTooltip}>
                            <img src="./images/arrow-down.svg" alt="" className={styles.arrowTooltipImg} />
                            <div className={styles.arrowTooltipContent}>Features That Fit For Your Brand.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classNames("section", styles.featurelistOuter)} data-aos={"fade-up"} data-aos-duration='1000'>
                <div className="containerWrapper">
                    <div className={styles.featureHeadingWrapper} data-aos={"fade-up"} data-aos-duration='1000'>
                        <div className={styles.featureHeading}>
                            <div className={styles.featureHeadingImg}>
                                <img src="./images/featureIcon-1.svg" alt="" />
                            </div>
                            <div className={styles.featureHeadingInner}>
                                <h2 className="h2">Member Registration Process</h2>
                                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                            </div>
                        </div>
                        <div className={styles.featureListWrapper}>
                            {[...Array(3).keys()].map(i =>
                                <div className={styles.featureList} key={i}>
                                    <div className={styles.featureListImg}>
                                        <img src="./images/featureImgMove.png" alt="" />
                                    </div>
                                    <div className={styles.featureListContent}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.featureListAnimationWrapper}>
                            <div className={styles.featureAnimationContentWrapper}>
                                {[...Array(3).keys()].map(i =>
                                    <div className={styles.featureAnimationContent} key={i}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.featureAnimationImgWrapper}>
                                <div className={styles.featureAnimationImg}>
                                    <img src="./images/featureImgMove.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.featureHeadingWrapper} data-aos={"fade-up"} data-aos-duration='1000'>
                        <div className={styles.featureHeading}>
                            <div className={styles.featureHeadingImg}>
                                <img src="./images/featureIcon-1.svg" alt="" />
                            </div>
                            <div className={styles.featureHeadingInner}>
                                <h2 className="h2">Member Registration Process</h2>
                                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                            </div>
                        </div>
                        <div className={styles.featureListWrapper}>
                            {[...Array(3).keys()].map(i =>
                                <div className={styles.featureList} key={i}>
                                    <div className={styles.featureListImg}>
                                        <img src="./images/featureImgMove.png" alt="" />
                                    </div>
                                    <div className={styles.featureListContent}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.featureListAnimationWrapper}>
                            <div className={styles.featureAnimationContentWrapper}>
                                {[...Array(3).keys()].map(i =>
                                    <div className={styles.featureAnimationContent} key={i}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.featureAnimationImgWrapper}>
                                <div className={styles.featureAnimationImg}>
                                    <img src="./images/featureImgMove.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.featureHeadingWrapper} data-aos={"fade-up"} data-aos-duration='1000'>
                        <div className={styles.featureHeading}>
                            <div className={styles.featureHeadingImg}>
                                <img src="./images/featureIcon-1.svg" alt="" />
                            </div>
                            <div className={styles.featureHeadingInner}>
                                <h2 className="h2">Member Registration Process</h2>
                                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                            </div>
                        </div>
                        <div className={styles.featureListWrapper}>
                            {[...Array(3).keys()].map(i =>
                                <div className={styles.featureList} key={i}>
                                    <div className={styles.featureListImg}>
                                        <img src="./images/featureImgMove.png" alt="" />
                                    </div>
                                    <div className={styles.featureListContent}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.featureListAnimationWrapper}>
                            <div className={styles.featureAnimationContentWrapper}>
                                {[...Array(3).keys()].map(i =>
                                    <div className={styles.featureAnimationContent} key={i}>
                                        <h3 className="h3">Member Registration Process</h3>
                                        <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                                        <Button path="/" large isLink={true}>Join Now</Button>
                                    </div>
                                )}
                            </div>
                            <div className={styles.featureAnimationImgWrapper}>
                                <div className={styles.featureAnimationImg}>
                                    <img src="./images/featureImgMove.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classNames("section testimonialWrapper")} data-aos={"fade-up"} data-aos-duration='1000'>
                <SocialRating />
            </section>
        </>
    )
}

export default Features