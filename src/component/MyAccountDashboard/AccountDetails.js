import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img/team/team1.png'
const AccountDetails = () => {
    let user = useSelector((state) => state.user.user);

    console.log("user", user)
    let status = useSelector((state) => state.user.status);


    return (
        <>
            {status && <div className="myaccount-content">
                <div className="save_button mt-3 d-flex align-items-center justify-content-between">
                    <h4 className="title">Account details</h4>
                    {/* <Link to="/account-edit" className="theme-btn-one bg-black btn_sm">Update Account</Link> */}
                </div>
                <div className="login_form_container">
                    <div className="account_details_form">
                        <form action="#">
                            {/* <div className="img_profiles">
                                <img src={img1} alt="img" />
                            </div> */}
                            {/* <div className="input-radio">
                                <span className="custom-radio">
                                    <input type="radio" defaultValue="1" name="mr" checked readOnly /> Mr.</span>
                            </div> */}
                            <div className="default-form-box mb-20">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" defaultValue={user?.name}
                                    readOnly />
                            </div>
                            
                            <div className="default-form-box mb-20">
                                <label>Email</label>
                                <input type="text" name="email" defaultValue={user?.email}
                                    className="form-control" readOnly />
                            </div>
                            {/* <div className="default-form-box mb-20">
                                <label>Password</label>
                                <input type="password" name="user-password" defaultValue=""
                                    className="form-control" readOnly />
                            </div>
                            */}
                           
                            <br />
                            
                        </form>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default AccountDetails
