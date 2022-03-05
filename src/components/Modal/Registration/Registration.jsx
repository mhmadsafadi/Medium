import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import Login from "../Forms/Login";
import Signup from "../Forms/Signup";

import "./registration.css";

const Registration = (props) => {
  const [modalLogin, setModalLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { modalShow, onClose } = props;

  const handleOnClose = useCallback(() => {
    setIsLogin(false)
    setIsSignup(false)
    onClose();
  }, []);

  return (
    <div>
      <Modal show={modalShow} onHide={handleOnClose} size="lg" centered>
        <Modal.Header closeButton />
        {modalLogin ? (
          <>
            {isLogin ? (
              <Login setIsLogin={setIsLogin}/>
            ) : (
              <>
                <Modal.Body className="d-flex flex-column mb-3">
                  <Modal.Title className="mb-auto pb-5 ">
                    Welcome back.
                  </Modal.Title>
                  <div className="btn-sign">
                    <button>
                      <i className="bi bi-google"></i>
                      Sign in with Google
                    </button>
                    <button>
                      <i className="bi bi-facebook"></i>
                      Sign in with Facebook
                    </button>
                    <button>
                      <i className="bi bi-twitter"></i>
                      Sign in with Twitter
                    </button>
                    <button onClick={() => setIsLogin(true)}>
                      <i className="bi bi-envelope"></i>
                      Sign in with Email
                    </button>
                  </div>
                  <div>
                    No account?{" "}
                    <span
                      onClick={() => setModalLogin(false)}
                      className="modal-link"
                    >
                      Create one
                    </span>
                  </div>
                  <div className="mt-auto p-5 modal-footer">
                    Click “Sign Up” to agree to Medium’s Terms of Service and
                    acknowledge that Medium’s Privacy Policy applies to you.
                  </div>
                </Modal.Body>
              </>
            )}
          </>
        ) : (
          <>
            {isSignup ? (
              <Signup setIsSignup={setIsSignup}/>
            ) : (
              <>
                <Modal.Body className="d-flex flex-column mb-3">
                  <Modal.Title className="mb-auto pb-5 ">
                    Join Medium.
                  </Modal.Title>
                  <div className="btn-sign">
                    <button>
                      <i className="bi bi-google"></i>
                      Sign up with Google
                    </button>
                    <button>
                      <i className="bi bi-facebook"></i>
                      Sign up with Facebook
                    </button>
                    <button onClick={() => setIsSignup(true)}>
                      <i className="bi bi-envelope"></i>
                      Sign up with Email
                    </button>
                  </div>
                  <div>
                    Already have an account?{" "}
                    <span
                      onClick={() => setModalLogin(true)}
                      className="modal-link"
                    >
                      Sign in
                    </span>
                  </div>
                  <div className="mt-auto p-5 modal-footer">
                    Click “Sign Up” to agree to Medium’s Terms of Service and
                    acknowledge that Medium’s Privacy Policy applies to you.
                  </div>
                </Modal.Body>
              </>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default Registration;
