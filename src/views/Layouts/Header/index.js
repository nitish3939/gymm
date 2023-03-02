import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import styles from "./header.module.scss";
import classNames from "classnames";
import Button from "./../../../components/Button";


const Header = () => {
    const [mobActive, setMobActive] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    let location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            if (window.innerWidth > 1400) {
                if (moving > 80) setVisible(position > moving);
            } else {
                if (moving > 72) setVisible(position > moving);
            }
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })



    const headerBgIn = () => {
        setIsHover(true)
    }
    const headerBgOut = () => {
        setIsHover(false)
    }

    const toggleMenu = () => {
        document.body.classList.toggle('overflowHidden', !mobActive);
        setMobActive(!mobActive);
    }

    useEffect(() => {
        hideMenu();
    }, [location]);

    function hideMenu() {
        setMobActive(false);
        document.body.classList.toggle('overflowHidden', false);
    }

    return (
        <header className={classNames(styles.headerWrapper, { [styles.mouseHover]: isHover, "visible": visible, "hidden": !visible, "contactHeader": location.pathname === '/contact', [styles.headerWrapperWhite]: (location.pathname === '/' ? false : true) })} >
            <div className={classNames("containerWrapper", styles.headerInnerWrapper)} >
                <Link to="/" className={styles.logo}>
                    <img src="./images/logo.png" alt="" className={styles.logoImg} />
                    <img src="./images/contactLogo.png" alt="" className={classNames(styles.logoImg, styles.headerWhiteLogo)} />
                </Link>

                <div className={classNames(styles.navWrapper, {
                    [styles.show]: mobActive
                })} >
                    <ul className={styles.navListWrapper}>
                        <li className={classNames(styles.navList, styles.mobileLink)}>
                            <NavLink to="/" className={styles.navLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className={classNames(styles.navList, styles.mobileLink)}>
                            <NavLink to="/features" className={styles.navLink}>
                                Feature
                            </NavLink>
                        </li>
                        <li className={classNames(styles.navList, styles.megaMenu)} onMouseOver={headerBgIn} onMouseOut={headerBgOut}>
                            <NavLink to="/" className={styles.navLink}>
                                Feature
                                <span className={classNames("material-icons", styles.downArrow)}>
                                    expand_more
                                </span>
                            </NavLink>
                            <div className={styles.navDropdown}>
                                <div className={classNames("containerWrapper", styles.headerContainer)}>
                                    <div className={styles.navDropdownInner}>
                                        <div className={styles.featureMenuLeftWrapper}>
                                            {[...Array(6).keys()].map((i) =>
                                                <Link to="/features" key={i}>
                                                    <div className={styles.featureListMenu}>
                                                        <div className={styles.featureListMenuImg}>
                                                            <img src="./images/menuFeature.png" alt="" />
                                                        </div>
                                                        <div className={styles.featureListMenuContent}>
                                                            <h4>Fitness Club Management</h4>
                                                            <p>The tool to manage members membership management and more.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>

                                        <div className={styles.featureMenuCard}>
                                            <div className={styles.featureMenuCardImg}>
                                                <img src="./images/menuFeature.png" alt="" />
                                            </div>
                                            <div className={styles.featureMenuCardBody}>
                                                <h4>Explore Features</h4>
                                                <p>Gymowl provides various features for you to manage your global Gyms & Fitness Health Clubs.</p>
                                                <Link to="/features" className={styles.txtBtn}>
                                                    Features
                                                    <span className="material-icons">
                                                        trending_flat
                                                    </span>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li className={styles.navList}>
                            <NavLink to="/pricing" className={styles.navLink}>
                                Pricing
                            </NavLink>
                        </li>
                        <li className={styles.navList}>
                            <NavLink to="/blog" className={styles.navLink}>
                                Blog
                            </NavLink>
                        </li>
                        <li className={styles.navList}>
                            <NavLink to="/" className={styles.navLink}>
                                Listing
                                <span className={styles.badgeSoon}>soon</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.otherLinks}>
                    {/* <Link to="" className={styles.loginLink}>Login</Link> */}
                    <a href="tel:+918587885643" className={styles.mobLink}> <span className="material-icons">  phone_in_talk </span> +91 85878 85643</a>
                    <Button isLink={true} path="/" customClass={styles.headerPrimaryBtn}>Start free for 3 days</Button>
                    <button className={styles.hamburgerBtn} onClick={toggleMenu}>
                        {
                            mobActive ? <span className="material-icons">  close </span> : <span className="material-icons">  menu </span>
                        }

                    </button>

                </div>
            </div>


        </header >
    )
}

export default Header