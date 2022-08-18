import Image from "next/image";
import logo from "../../assets/img/logo.png";
import footer_styles from "../../styles/Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
    MdOutlineMarkEmailRead,
    MdAddIcCall,
    MdAddLocationAlt,
} from "react-icons/md";
const Footer = () => {
    return (
        <div className={footer_styles.Footer_area}>
            <div className={footer_styles.top_footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className="top_footer_box">
                                <div className={footer_styles.footer_logo}>
                                    <Image src={logo} width="97" height="70" />
                                </div>
                                <p className="mb_20 mt_10">
                                    We denounce with righteous indig nation in
                                    and dislike men who are so beguiled and to
                                    demo realized by the, so blinded by desire,
                                    that they cannot foresee.
                                </p>
                                <div className={footer_styles.footer_share}>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaInstagram></FaInstagram>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_services}>
                                <h5 className="upper_line mt_25">
                                    OUR SERVICES
                                </h5>
                                <p>
                                    <a href="#">Web Design</a>
                                </p>
                                <p>
                                    <a href="#">Creative Design</a>
                                </p>
                                <p>
                                    <a href="#">Web Development</a>
                                </p>
                                <p>
                                    <a href="#">Responsive Design</a>
                                </p>
                                <p>
                                    <a href="#">24/Support</a>
                                </p>
                                <p>
                                    <a href="#">Branding Identity</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_contact}>
                                <h5 className="upper_line mt_25">
                                    CONTACT INFO
                                </h5>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdAddLocationAlt />
                                    </div>
                                    <p>
                                        Ta-134/A, Gulshan Badda Link Rd, Dhaka
                                    </p>
                                </div>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdAddIcCall />
                                    </div>
                                    <p>
                                        <a href="tel:(+1)9999999999">
                                            (+1) 9999 999 999
                                        </a>
                                    </p>
                                </div>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <MdOutlineMarkEmailRead />
                                    </div>
                                    <p>
                                        <a href="mailto:info@devstar.com">
                                            info@devstar.com
                                        </a>
                                    </p>
                                </div>
                                <div className={footer_styles.info}>
                                    <div className={footer_styles.info_icon}>
                                        <AiOutlineFieldTime />
                                    </div>
                                    <p>Office Hours: 8AM - 11PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb_50">
                            <div className={footer_styles.footer_newsletter}>
                                <h5 className="upper_line mt_25">NEWSLETTER</h5>
                                <p>
                                    Stay up to update with our latest news and
                                    products.
                                </p>
                                <form action="">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your email address"
                                    />
                                    <div className="custom_btn">
                                        <a className="" type="submit">
                                            Subscribe Now
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footer_styles.bottom_footer}>
                    <div className="container">
                        <p>
                            &copy; 2022 Devs-Star - Consulting Company Inc. All
                            Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
