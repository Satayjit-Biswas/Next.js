import home_styles from "../../styles/Home.module.css";
import Image from "next/image";
import img from "../../assets/img/home/5.jpg";
import img1 from "../../assets/img/home/5 (1).jpg";
import { HiArrowRight } from "react-icons/hi";

const Complete_project = () => {
    return (
        <div
            className={`${
                home_styles.Completed_business_area
            }${" "}top_bottom_gap`}
        >
            <div className="container">
                <h3 className="text_center upper_line mt_45">
                    Completed business cases
                </h3>
                <div className="business_filter mb_15">
                    <div className={home_styles.filter_menu}>
                        <ul>
                            <li className="Active">All</li>
                            <li>Web Design</li>
                            <li>React js</li>
                            <li>Next js</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <div className={home_styles.filter_project}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img1}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img1}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className={home_styles.filter_box}>
                                    <div className={home_styles.filter_img}>
                                        <Image
                                            src={img}
                                            width="375"
                                            height="280"
                                        />
                                    </div>
                                    <div className={home_styles.filter_text}>
                                        <div>
                                            <p>React</p>
                                            <h2>
                                                <a href="http://">
                                                    Business planning
                                                </a>
                                            </h2>
                                            <div
                                                className={
                                                    home_styles.filter_text_icon
                                                }
                                            >
                                                <a href="#">
                                                    <HiArrowRight />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complete_project;
