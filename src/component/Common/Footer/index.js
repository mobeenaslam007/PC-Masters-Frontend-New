import React, { useEffect } from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About us", link: "/about" },
            { linkTitle: "Compare", link: "/compare" },
            // { linkTitle: "Privacy Policy", link: "/privacy-policy" },
            // { linkTitle: "Frequently Questions", link: "/faqs" },
            // { linkTitle: "Order Tracking", link: "/order-tracking" },
            { linkTitle: "Contact Us", link: "/contact-two"},
        ]
    },
    {
        title: "SHOP",
        links: [
            // { linkTitle: "Cart View One", link: "/cart" },
            { linkTitle: "Cart", link: "/cartTwo" },
            // { linkTitle: "Empty Cart", link: "/empty-cart" },
            // { linkTitle: "Checkout View One", link: "/checkout-one" },
            // { linkTitle: "Checkout View Two", link: "/checkout-two" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {
    let dispatch = useDispatch();

    let promoCenter = useSelector((state) => state.settings.promoCenter);
    let promoStatus = useSelector((state) => state.settings.promoStatus);
    let stopPromo = useSelector((state) => state.settings.stopPromo);
    let stopCookie = useSelector((state) => state.settings.stopCookie);

    useEffect(() => {
        if (promoStatus) {
            return
        } else {
            dispatch({ type: "settings/promoStatus" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 2000)
        }

        
    }, [dispatch, promoStatus, stopCookie]);


    const startPromoModal = () => {
        if (stopPromo) {
            dispatch({ type: "settings/promoCenter" })
            return;
        } else {
            dispatch({ type: "settings/promoCenter" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 700000)
        }

    }

    const stopPromoModal = () => {
        dispatch({ type: "settings/stopPromo" })
    }

    
    
    return (
        <>
            <footer id="footer_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left_side">
                                <Link to="/" ><img src={logo} alt="logo" width="300px" height="auto" className='img-responsive' style={{marginRight: 15}} /></Link>
                                <p>
                                    <strong>PC Masters </strong> is a multi-vendor B2C fast e-commerce company. The company mainly focuses on Computer Hardwares like Graphic Cards, Processors,
                                    RAM's and other related products like computer casings, and power supplies. etc.
                                </p>
                                <div className="footer_left_side_icon">
                                    <ul>
                                        <li>
                                            <a href="#!"><i className="fa fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-google"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(0, 1).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(1, 2).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    
                    </div>
                </div>
                <div className="go-top active" onClick={()=> {window.scrollTo(0, 0)}}>
                    <i className="fa fa-chevron-up"></i>
                    <i className="fa fa-arrow-up"></i>
                </div>
            </footer>

            <section id="copyright_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                                <h6>© CopyRight 2021 <Link to="/"><span >PC Masters</span></Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_right">
                                <img src={payment} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Footer