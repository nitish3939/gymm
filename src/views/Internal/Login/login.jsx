import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handelForgotPassword = () => {
    setForgotPassword(true);
    setLogin(false);
  };
  const handelConfirmPassword = () => {
    setForgotPassword(false);
    setConfirmPassword(true);
  };
  return (
    <>
      <div className={styles.LoginWrapper}>
        <Row className="mx-0 px-0">
          <Col md={6} className="mx-0 px-0">
            <div className={styles.LoginLeftSide}>
              <span className={styles.contact}>
                Contact us : +91 8527649106
              </span>
              <h3>Our friendly team would love to hear from you!</h3>
            </div>
          </Col>
          <Col md={6} className="mx-0 px-0">
            <div className={styles.LoginRightSide}>
              <div className={styles.topLeftBg}></div>
              <div className={styles.topRightBg}></div>
              <div className={styles.bottomLeftBg}></div>
              <div className={styles.bottomRightBg}></div>
              <div className="d-flex justify-content-center py-5 ">
                <img src={logo} height="52px" width="100%" />
              </div>
              {/* login form  */}
              {login && (
                <Form.Group className={styles.loginForm}>
                  <h5> Login</h5>
                  <div className=" mb-5">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className=" mb-5">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your password"
                    />
                    <label className="d-flex justify-content-end">
                      <span onClick={handelForgotPassword}>
                        Forgot Password{" "}
                      </span>
                    </label>
                  </div>
                  <Button> Login</Button>
                </Form.Group>
              )}
              {/* forgot password form */}
              {forgotPassword && (
                <Form.Group className={styles.loginForm}>
                  <h5> Forgot Password</h5>
                  <div className=" mb-5">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <Button onClick={handelConfirmPassword}> Send</Button>
                  {/* <label className="mt-5">
                    Reset link has been sent to your email ID.
                  </label> */}
                </Form.Group>
              )}

              {/* Confirm New Password form*/}
              {confirmPassword && (
                <Form.Group className={styles.loginForm}>
                  <h5> Confirm New Password</h5>
                  <div className="mb-5">
                    <Form.Label>New Password</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="mb-5">
                    <Form.Label> Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <Button> Confirm</Button>
                  {/* <label className="mt-5">
                    Reset link has been sent to your email ID.
                  </label> */}
                </Form.Group>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Login;
