import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./../../assets/scss/styles.scss";
import Button from "./../../components/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import SocialRating from "./../../components/SocialRating";


const Home = () => {
  const [activeAccodion, setActiveAccodion] = useState(1);
  const [activeAccodion1, setActiveAccodion1] = useState(1);
  const [activeAccodion2, setActiveAccodion2] = useState(1);
  const [activeAccodion3, setActiveAccodion3] = useState(1);
  const [slideResponsive, setSlideResponsive] = useState();
  const [showIndicators, setShowIndicators] = useState(false);


  const showAccorion = (acc) => {
    setActiveAccodion(acc);
  }
  const showAccorion1 = (acc) => {
    setActiveAccodion1(acc);
  }
  const showAccorion2 = (acc) => {
    setActiveAccodion2(acc);
  }
  const showAccorion3 = (acc) => {
    setActiveAccodion3(acc);
  }

  useEffect(() => {
    calulateWidth();
  }, []);

  const calulateWidth = () => {
    let width = window.innerWidth;
    if (width <= 576) {
      setSlideResponsive(90);
      setShowIndicators(true);
    } else {
      setSlideResponsive(60);
      setShowIndicators(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', calulateWidth);
    return () => window.removeEventListener('resize', calulateWidth);
  }, []);

  return (
    <>
      <section className="bannerWrapper">
        <div className="containerWrapper bannerInnerWrapper">
          <div className="welcomeLeft" data-aos={"fade-right"} data-aos-duration='1000'>
            <h1>Gym management software for fitness industry</h1>
            <p>All-In-One Gym Membership Management Software With Multiple Features Made for Gyms & Fitness Health Clubs.</p>
            <div className="requestForDemo">
              <input type="text" className="formControl" placeholder="Enter your email address" />
              <Button large> Request a free demo </Button>
            </div>

            <ul className="noCreditCard">
              <li>No credit card required</li>
              <li>Cancel anytime</li>
            </ul>

            <div className="welcomeLogos welcomeLeftLogo">
              <img src="./images/img1.png" alt="" />
              <img src="./images/img2.png" alt="" />
              <img src="./images/img3.png" alt="" />
              <img src="./images/img4.png" alt="" />
              <img src="./images/img5.png" alt="" />
              <img src="./images/img6.png" alt="" />
            </div>
          </div>
          <div className="welcomeRight" data-aos={"fade-left"} data-aos-duration='1000'>
            <div className="welcomeImgWrapper">
              <img src="./images/bannerImg.png" alt="" />
            </div>

            <div className="welcomeLogos welcomeRightLogo">
              <img src="./images/img1.png" alt="" />
              <img src="./images/img2.png" alt="" />
              <img src="./images/img3.png" alt="" />
              <img src="./images/img4.png" alt="" />
              <img src="./images/img5.png" alt="" />
              <img src="./images/img6.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section homeFeatureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
        <div className="containerWrapper">
          <h2 className="h1">Gymowl provides smart fitness features</h2>
          <p>
            Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device.Manage multiple programs, customize ranks, levels and promotion criteria.
          </p>
          <div className="featureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
            <div className="featureList" data-aos={"fade-up"} data-aos-duration='1000'>
              <div className="featureListContent">
                <h3 className="h3">Member Registration Process</h3>
                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device.Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                <div className="featureImgMobile"><img src="./images/featureImg1.png" alt="" /></div>
                <div className="featureAccodionWrapper">
                  <div className={`featureAccodionList ${activeAccodion === 1 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion(1)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon1.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Enquiry Registration</div>
                      <span className={`material-icons featureAccArrowIcon ${activeAccodion === 1 ? "rotate" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <div>
                        <p>Bring local offline customers into your digital community.</p>
                        <div className="featureAccChipWrapper">
                          <span className="featureAccChip active">Enquiry Type</span>
                          <span className="featureAccChip">Enquiry Type</span>
                          <span className="featureAccChip">Enquiry Type</span>
                          <span className="featureAccChip">Enquiry Type</span>
                          <span className="featureAccChip">Enquiry Type</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion === 2 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion(2)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon2.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Quick Registration</div>
                      <span className={`material-icons featureAccArrowIcon ${activeAccodion === 2 ? "rotate" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion === 3 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion(3)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon3.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Gym App</div>
                      <span className={`material-icons featureAccArrowIcon ${activeAccodion === 3 ? "rotate" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featureListContent featuredRightImg">
                <img src="./images/featureImg1.png" alt="" className="featureImg" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section homeFeatureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
        <div className="containerWrapper">
          <div className="featureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
            <div className="featureList" data-aos={"fade-up"} data-aos-duration='1000'>
              <div className="featureListContent">
                <h3 className="h3">Club Retention</h3>
                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                <div className="featureImgMobile"><img src="./images/featureImg2.png" alt="" /></div>
                <div className="featureAccodionWrapper">
                  <div className={`featureAccodionList ${activeAccodion1 === 1 ? "active" : ""}`}>
                    <div className="featureAccodionHead">
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon1.svg" alt="" />
                      </div>
                      <div className="featureAccodionHead" onClick={() => showAccorion1(1)}>Data Management</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion1 === 2 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion1(2)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon2.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Automatic Bill Payments</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion1 === 3 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion1(3)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon3.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Gym Automation</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featureListContent featuredRightImg" >
                <img src="./images/featureImg2.png" alt="" className="featureImg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section homeFeatureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
        <div className="containerWrapper">
          <div className="featureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
            <div className="featureList" data-aos={"fade-up"} data-aos-duration='1000' >
              <div className="featureListContent">
                <h3 className="h3">Sales & Marketing</h3>
                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                <div className="featureImgMobile"><img src="./images/featureImg3.png" alt="" /></div>
                <div className="featureAccodionWrapper">
                  <div className={`featureAccodionList ${activeAccodion2 === 1 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion2(1)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon1.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Sales System</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion2 === 2 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion2(2)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon2.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Recommendation</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion2 === 3 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion2(3)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon3.svg" alt="" />
                      </div>
                      <div className="featureAccHead">CRM</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featureListContent featuredRightImg">
                <img src="./images/featureImg3.png" alt="" className="featureImg" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section homeFeatureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
        <div className="containerWrapper">
          <div className="featureWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
            <div className="featureList" data-aos={"fade-up"} data-aos-duration='1000'>
              <div className="featureListContent">
                <h3 className="h3">Operations</h3>
                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device. Manage multiple programs, customize ranks, levels and promotion criteria.</p>
                <div className="featureImgMobile"><img src="./images/featureImg4.png" alt="" /></div>
                <div className="featureAccodionWrapper">
                  <div className={`featureAccodionList ${activeAccodion3 === 1 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion3(1)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon1.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Dashboard Report</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion3 === 2 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion3(2)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon2.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Device Integration</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                  <div className={`featureAccodionList ${activeAccodion3 === 3 ? "active" : ""}`}>
                    <div className="featureAccodionHead" onClick={() => showAccorion3(3)}>
                      <div className="featureAccIcon">
                        <img src="./images/featureIcon3.svg" alt="" />
                      </div>
                      <div className="featureAccHead">Staff Management</div>
                      <span className="material-icons featureAccArrowIcon">
                        expand_more
                      </span>
                    </div>
                    <div className="featureAccodionContent">
                      <p>Bring local offline customers into your digital community.</p>
                      <div className="featureAccChipWrapper">
                        <span className="featureAccChip active">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                        <span className="featureAccChip">Enquiry Type</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featureListContent featuredRightImg">
                <img src="./images/featureImg4.png" alt="" className="featureImg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section fitnessFeatureWrapper">
        <div className="containerWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
          <h2 className="h1">Gymowl provides smart fitness features</h2>
          <div className="fitnessFeatureListWrapper">
            {[...Array(6).keys()].map(i =>
              <div className="fitnessFeatureList" key={`fitness-${i}`}>
                <div className="zoomImg">
                  <img src="./images/dummyImg.png" alt="" />
                </div>
                <h3 className="h3">Yoga</h3>
                <p>Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="section testimonialWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
        <div className="containerWrapper">
          <h2 className="h1">Trusted by <span> 500+ </span> the Worldwide Gyms and Fitness Studios</h2>
        </div>
        <div className="testimonialSliderWrapper">
          <Carousel
            infiniteLoop
            centerMode
            autoPlay
            showArrows={!showIndicators}
            showThumbs={false}
            showIndicators={showIndicators}
            showStatus={false}
            centerSlidePercentage={slideResponsive}
            emulateTouch={true}


          >
            {[...Array(6).keys()].map(i =>
              <div className="testimonialList" key={`testimonial-${i}`}>
                <img src="./images/userLogo.png" alt="" className="testimonialLogo" />
                <p>
                  I just love the fact that the software provides me with all the features to manage and build my business. As a new business owner, I find the software very easy to use and also very informative. Thank You, Gymowl.
                </p>
                <div className="userDetails">
                  <img src="./images/user.png" alt="" className="userImg" />
                  <div className="userContent">
                    <div className="name">Kaustubh Lokhande</div>
                    <div className="designation">Founder of Loha the Fitness Kingdom</div>
                  </div>
                </div>
              </div>
            )}
          </Carousel>
        </div>

        <SocialRating />
      </section>

      <section className="section scheduleFreeDemoWrapper" >
        <div className="containerWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
          <div className="scheduleFreeDemo">
            <div className="scheduleFreeList">
              <h2 className="h2">Schedule a
                <span> free demo <img src="./images/demoVector.png" alt="" className="demoVector" /> </span>
              </h2>
              <p>Gymowl Manage your Entire Management with Revolutionary Gym Management Software designed for Gyms & Fitness Studio.</p>
              <ul className="scheduleFreeDemoBenefits">
                <li>Cut costs by 50%. Save thousands with glofox, compared to other management platforms.</li>
                <li>Increase revenue by 133%. Our average customer more than doubles their revenue within eighteen months of implementing our platform.</li>
                <li>Flat pricing. One low monthly price. No hidden fees or setup. No contracts.</li>
              </ul>
            </div>
            <div className="scheduleFreeList">
              <div className="scheduleFreeDemoForm">
                <div className="fromGroup">
                  <label className="label">Full name*</label>
                  <input type="text" className="formControl" placeholder="Full name" />
                </div>
                <div className="fromGroup invalid">
                  <label className="label">Phone number*</label>
                  <input type="text" className="formControl" placeholder="Phone number" />
                  <div className="msg">error comes here </div>
                </div>
                <div className="fromGroup">
                  <label className="label">Your email*</label>
                  <input type="text" className="formControl" placeholder="Your email" />
                </div>
                <Button type="submit" large full>Request a free demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section homeBlogWrapper">
        <div className="containerWrapper" data-aos={"fade-up"} data-aos-duration='1000'>
          <h2 className="h1">Get to know more from <span> GYMOWL blog </span> </h2>
          <div className="homeBlogListWrapper">
            {[...Array(6).keys()].map((i) =>
              <div className="homeBlogList" key={`blog-${i}`}>
                <div className="zoomImg">
                  <img src="./images/dummyImg.png" alt="" />
                </div>
                <h3 className="h3">Benefits of Dead Lift...</h3>
                <p>
                  Sign-up members and prospects online or through an in-person kiosk, using a laptop, tablet or mobile device.
                </p>
                <Link to="/" className="txtBtn">
                  Read more
                  <span className="material-icons">
                    trending_flat
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home