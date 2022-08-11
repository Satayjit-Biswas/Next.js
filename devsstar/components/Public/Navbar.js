import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsClockHistory } from "react-icons/bs";
import {
    MdOutlineMarkEmailRead,
    MdAddIcCall,
    MdAddLocationAlt,
} from "react-icons/md";
import navbar_styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import { useEffect, useRef } from "react";

const Navbar = () => {
    const addclass = useRef();

    useEffect(() => {
        console.log(addclass.current.className);
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                addclass.current.className = "Navbar_header_area__6XM4T sticky";
            } else {
                addclass.current.className = "Navbar_header_area__6XM4T";
            }
        });
    }, []);
    return (
        <div className={navbar_styles.header_area} ref={addclass}>
            <div className={navbar_styles.top_header}>
                <div className="container">
                    <div className={navbar_styles.top_header_area}>
                        <div className={navbar_styles.topbar_contact}>
                            <ul>
                                <li>
                                    <span
                                        className={navbar_styles.contact_icon}
                                    >
                                        <MdOutlineMarkEmailRead></MdOutlineMarkEmailRead>
                                    </span>
                                    <a href="mailto:info@devstar.com">
                                        info@devstar.com
                                    </a>
                                </li>
                                <li>
                                    <span
                                        className={navbar_styles.contact_icon}
                                    >
                                        <MdAddIcCall></MdAddIcCall>
                                    </span>
                                    <a href="tel:(+1)9999999999">
                                        (+1) 9999 999 999
                                    </a>
                                </li>
                                <li>
                                    <span
                                        className={navbar_styles.contact_icon}
                                    >
                                        <MdAddLocationAlt></MdAddLocationAlt>
                                    </span>
                                    55 Gerad Lane, NY 11201, USb
                                </li>
                            </ul>
                        </div>
                        <div className={navbar_styles.topbar_share}>
                            <ul>
                                <li className="opening">
                                    <span
                                        className={navbar_styles.contact_icon}
                                    >
                                        <BsClockHistory></BsClockHistory>
                                    </span>
                                    Monday - Friday / 8AM - 11PM
                                </li>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={navbar_styles.bottom_header}>
                <div className="container">
                    <div className={navbar_styles.bottom_header_area}>
                        <div className={navbar_styles.logo}>
                            <a href="#">
                                <Image src={logo} width="90" height="80" />
                            </a>
                        </div>
                        <div className={navbar_styles.menu}>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="service">Services</a>
                                </li>
                                <li>
                                    <a href="project">Our project</a>
                                </li>
                                <li>
                                    <a href="order">Order</a>
                                </li>
                                <li>
                                    <a href="blog">Blog</a>
                                </li>
                                <li>
                                    <a href="about">About</a>
                                </li>
                                <li>
                                    <a href="contact">Contact</a>
                                </li>
                                <li>
                                    <a href="login">login</a>
                                </li>
                                {/* <li>
                                    <div className={navbar_styles.login_icon}>
                                        <Image
                                            src={logo}
                                            width="30"
                                            height="30"
                                        />
                                        <ul
                                            className={navbar_styles.login_menu}
                                        >
                                            <li>
                                                <a
                                                    href="/profile"
                                                    className="nav-link"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/loginpage"
                                                    className="nav-link"
                                                >
                                                    logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
