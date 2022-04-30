import React from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const ContactTwoArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_form_one contact_info_wrapper">
                                <h3 className="text-center">Get In Touch</h3>
                                <form onSubmit={(e)=> {e.preventDefault(); Swal.fire('Thank You', 'We Got Your Message', 'success')}}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="email" placeholder="Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" name="phone" placeholder="Phone" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" name="message" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button value="Submit" className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left_side_contact contact_info_wrapper">
                                <ul>
                                    <li className="address_location">
                                        <div className="contact_widget ">
                                            <i className="fa fa-map-marker"></i>
                                            <p>Main Campus, Sector C DHA Phase 6, Lahore</p>
                                        </div>
                                    </li>
                                    <li className="address_location">


                                        <div className="contact_widget">
                                            <i className="fa fa-phone"></i>
                                            <p>+92 345 3626917</p>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-mobile"></i>
                                            <p>+92 336 4865562</p>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-envelope"></i>
                                            <Link to="/">support@pcmasters.com</Link>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-globe"></i>
                                            <Link to="/">pcmasters.com.pk</Link>
                                        </div>
                                    </li>
                                </ul>
                                {/* <Map /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwoArea