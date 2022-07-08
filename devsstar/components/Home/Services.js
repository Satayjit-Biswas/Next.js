import home_styles from "../../styles/Home.module.css";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices, MdMobileFriendly } from "react-icons/md";
import { TbBrandCodesandbox } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

import { BsCodeSlash } from "react-icons/bs";

const Services = () => {
    return (
        <div className={`${home_styles.Services_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row mt_15">
                    <div className="col-md-8 col-lg-7 col-12">
                        <h3 className="upper_line text_white mt_30">
                            What services we provide to our customers business
                        </h3>
                    </div>
                    <div className="col-lg-5 col-md-4 col-12">
                        <div className="custom_btn text_center">
                            <a href="#">find Consultant</a>
                        </div>
                    </div>
                </div>
                <div className="row mb_15">
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <CgWebsite />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">Web Design</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        Our design pixel perfect design and Our
                                        code are w3c validated. And Custom
                                        design beautiful website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <MdOutlineDesignServices />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">Creative Design</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        We create a creative and modern website
                                        from scratch using advanced web
                                        technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <BsCodeSlash />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">Web Development</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        We create a modern and dynamic website
                                        using React.js, Express, Node.js,
                                        MongoDB, Firebase Authentication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <MdMobileFriendly />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">Responsive Design</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        Our design is high-Quality and fully
                                        friendly-responsive for Desktop, Mobile
                                        & Tablet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <BiSupport />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">24/Support</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        Professional it helpdesk / remote tech
                                        Support 24/7 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={home_styles.Services_box}>
                            <div className="Services_box_left">
                                <div className={home_styles.Services_icon}>
                                    <TbBrandCodesandbox />
                                </div>
                            </div>
                            <div className="Services_box_right">
                                <div className={home_styles.Services_title}>
                                    <h1>
                                        <a href="#">Branding Identity</a>{" "}
                                    </h1>
                                </div>
                                <div className={home_styles.Services_text}>
                                    <p>
                                        Complete branding identity design
                                        services.
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

export default Services;
