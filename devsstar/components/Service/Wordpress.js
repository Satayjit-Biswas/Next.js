import service_styles from "../../styles/Service.module.css";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const Wordpress = () => {
    return (
        <div className={service_styles.Wordpress}>
            <div
                className={`${
                    service_styles.web_design_area
                }${" "}top_bottom_gap`}
            >
                <div className="container">
                    <h3 className="text_center upper_line mt_45">Wordpress</h3>
                    <div className={service_styles.work_plan}>
                        <div className={service_styles.work_box}>
                            <div className={service_styles.work_img}>
                                <div className={service_styles.work_img_box}>
                                    <AiOutlineFundProjectionScreen />
                                    <div
                                        className={service_styles.work_img_icon}
                                    >
                                        <BsFillTriangleFill />
                                    </div>
                                </div>
                            </div>
                            <div className={service_styles.dot}>
                                <span>1</span>
                            </div>
                            <div className={service_styles.work_text}>
                                <h3>Planning</h3>
                                <p>Planning is a main part for any project.</p>
                            </div>
                        </div>
                        <div className={service_styles.work_box}>
                            <div className={service_styles.work_img}>
                                <div className={service_styles.work_img_box}>
                                    <FaLaptopCode />
                                    <div
                                        className={service_styles.work_img_icon}
                                    >
                                        <BsFillTriangleFill />
                                    </div>
                                </div>
                            </div>
                            <div className={service_styles.dot}>
                                <span>2</span>
                            </div>
                            <div className={service_styles.work_text}>
                                <h3>Pixel perfect Coding</h3>
                                <p>
                                    Our code is 100% pixel perfect and w3
                                    validation.
                                </p>
                            </div>
                        </div>
                        <div className={service_styles.work_box}>
                            <div className={service_styles.work_img}>
                                <div className={service_styles.work_img_box}>
                                    <RiLiveLine />
                                    <div
                                        className={service_styles.work_img_icon}
                                    >
                                        <BsFillTriangleFill />
                                    </div>
                                </div>
                            </div>
                            <div className={service_styles.dot}>
                                <span>3</span>
                            </div>
                            <div className={service_styles.work_text}>
                                <h3>live Demo Service</h3>
                                <p>
                                    When our project is compleat,we provide live
                                    demo for project.
                                </p>
                            </div>
                        </div>
                        <div className={service_styles.work_box}>
                            <div className={service_styles.work_img}>
                                <div className={service_styles.work_img_box}>
                                    <FaHandshake />
                                    <div
                                        className={service_styles.work_img_icon}
                                    >
                                        <BsFillTriangleFill />
                                    </div>
                                </div>
                            </div>
                            <div className={service_styles.dot}>
                                <span>4</span>
                            </div>
                            <div className={service_styles.work_text}>
                                <h3>Satisfaction & Handling</h3>
                                <p>We provide 100% Satisfaction for Client.</p>
                            </div>
                        </div>
                    </div>
                    <div className={service_styles.web_design_btn}>
                        <div className="custom_btn mt_40">
                            <a href="#">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wordpress;
