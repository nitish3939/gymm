import React from 'react'
import styles from "./../../Dashboard/dashboard.module.scss";

const UserEnquiryDetails = ({ heading }) => {
    return (
        <>
            <div className={styles.membersCardList}>
                <div className={styles.membersHeading}>
                    <h2 className='h2'>{heading}</h2>
                    <span className="material-icons-outlined">
                        info
                    </span>
                </div>
                <div className={styles.membersContent}>
                    <div className={styles.membersContentList}>
                        <div className={styles.num}>20</div>
                        <div className={styles.text}>Active</div>
                    </div>
                    <div className={styles.membersContentList}>
                        <div className={styles.num}>0</div>
                        <div className={styles.text}>Upcoming</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEnquiryDetails