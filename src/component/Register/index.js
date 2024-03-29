import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../app/actions/userActions";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const RegisterArea = () => {
  let dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let status = useSelector((state) => state.user.status);
  let userData = useSelector((state) => state.user.user);

  // Add to cart
  const register = () => {
    if (pass !== confirmPass) {
      setErrorMessage("Please use same password");
    } else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
      setErrorMessage("Please enter valid email");
    } 
    else {
      dispatch(registerUser({ user, email, pass }));
      history.push("/");
    }

    // if (status) {
    //   Swal.fire({
    //     icon: "question",
    //     title: "Mr. " + userData.name,
    //     html:
    //       "You are already Registered <br />" +
    //       "You can go to <b>" +
    //       "Dashboard</b> " +
    //       "or our <b>Shop</b> page",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       history.push("/my-account");
    //     } else {
    //       // not clicked
    //     }
    //   });
    // } else {
    //   dispatch({ type: "user/register", payload: { user, email, pass } });

    //   Swal.fire({
    //     icon: "success",
    //     title: "Registration Sucessfull",
    //     text: "Welcome Mr." + user,
    //   });
    //   history.push("/my-account");
    // }
  };
  return (
    <>
      <section id="login_area" className="ptb-50">
        {errorMessage && (
          <Alert
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              marginLeft: "35%",
            }}
            variant={"danger"}
          >
            {errorMessage}
          </Alert>
        )}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="account_form">
                <h3>Register</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    register();
                  }}
                >
                  <div className="default-form-box">
                    <label>
                      Full Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={user}
                      onChange={(e) => setUser(e.currentTarget.value)}
                      required
                    />
                  </div>
                  <div className="default-form-box">
                    <label>
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      required
                    />
                  </div>
                  <div className="default-form-box">
                    <label>
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={pass}
                      onChange={(e) => setPass(e.currentTarget.value)}
                      required
                      minLength="8"
                    />
                  </div>
                  <div className="default-form-box">
                    <label>
                      Confirm Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.currentTarget.value)}
                      required
                      minLength="8"
                    />
                  </div>
                  <div className="login_submit">
                    <button
                      className="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
