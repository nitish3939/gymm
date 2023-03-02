import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from "../../components/useOnScreen";

const SocialRating = () => {
    const [counterState, setCounter] = useState(0);
    const [likeCounter, setLikeCounter] = useState(0);

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const isVisible1 = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            let timer;
            clearInterval(timer)
            timer = setInterval(() => {
                if (counterState === 500) {
                    clearInterval(timer)
                    return
                }
                setCounter(prev => prev + 10)
            }, 20)
            return () => clearInterval(timer);
        }

    }, [counterState, isVisible]);

    useEffect(() => {
        if (isVisible1) {
            let timer1;
            clearInterval(timer1)
            timer1 = setInterval(() => {
                if (likeCounter === 99) {
                    clearInterval(timer1)
                    return false;
                }
                setLikeCounter(prev => prev + 3)
            }, 20)
            return () => clearInterval(timer1);
        }

    }, [likeCounter, isVisible1]);
    return (
        <div className="containerWrapper" ref={ref} >
            <div className="socalFeedbackWraper" data-aos={"fade-up"}>
                <div className="socalFeedbackList">
                    <div className="feedbackIcon thumb">
                        <span className="material-icons">
                            thumb_up_alt
                        </span>
                    </div>
                    <div className="socialFeedbackContent">
                        <div className="feedback">{likeCounter}%</div>
                        <div className="msg">Customer Retention Rate</div>
                    </div>
                </div>
                <div className="socalFeedbackList">
                    <div className="feedbackIcon heart">
                        <span className="material-icons">
                            favorite
                        </span>
                    </div>
                    <div className="socialFeedbackContent">
                        <div className="feedback">{counterState}+</div>
                        <div className="msg">Trusted by Brands</div>
                    </div>
                </div>
                <div className="socalFeedbackList">
                    <div className="feedbackIcon location">
                        <span className="material-icons-outlined">
                            location_on
                        </span>
                    </div>
                    <div className="socialFeedbackContent">
                        <div className="feedback">Pan India</div>
                        <div className="msg">Locations</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialRating