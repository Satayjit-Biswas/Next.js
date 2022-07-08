import service_styles from "../../styles/Service.module.css";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices, MdMobileFriendly } from "react-icons/md";
import { TbBrandCodesandbox } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

import { BsCodeSlash } from "react-icons/bs";
const Our_service = () => {
    return (
        <div className={service_styles.Our_service_area}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <CgWebsite />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>01</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">Web Design</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <MdOutlineDesignServices />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>02</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">Creative Design</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <BsCodeSlash />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>03</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">Web Development</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <MdMobileFriendly />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>04</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">Responsive Design</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <BiSupport />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>05</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">24/Support</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb_70 mt_35">
                        <div className={service_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={service_styles.Services_icon}>
                                    <TbBrandCodesandbox />
                                    <div
                                        className={
                                            service_styles.Services_number
                                        }
                                    >
                                        <span>06</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={service_styles.Services_title}>
                                    <h1>
                                        <a href="#">Branding Identity</a>
                                    </h1>
                                </div>
                                <div className={service_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our_service;
