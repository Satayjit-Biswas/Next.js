import order_styles from "../../styles/Order.module.css";
import { MdDevices, MdDevicesOther } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Price = () => {
    return (
        <div className={`${order_styles.price_area}${" "}top_bottom_gap`}>
            <div className="container">
                <h3 className="text_center upper_line mt_45">Pricing plans</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={order_styles.price_box}>
                            <h2>web design</h2>
                            <div className={order_styles.img}>
                                <MdDevices />
                            </div>
                            <div className={order_styles.price}>
                                $<span>26</span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Fully Responsive design</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>W3C validated HTML/CSS</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>SEO optimized</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Awesome Scroll animations</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className="custom_btn mt_40">
                                <a href="#">About More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={order_styles.price_box}>
                            <h2> web development</h2>
                            <div className={order_styles.img}>
                                <BiCodeAlt />
                            </div>
                            <div className={order_styles.price}>
                                $<span>26</span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Fully Responsive design</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>W3C validated HTML/CSS</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>SEO optimized</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Awesome Scroll animations</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className="custom_btn mt_40">
                                <a href="#">About More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={order_styles.price_box}>
                            <h2>wordpress</h2>
                            <div className={order_styles.img}>
                                <MdDevicesOther />
                            </div>
                            <div className={order_styles.price}>
                                $<span>45</span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Fully Responsive design</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>W3C validated HTML/CSS</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>SEO optimized</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className={order_styles.offer}>
                                <p>Awesome Scroll animations</p>
                                <span>
                                    <HiOutlineBadgeCheck />
                                </span>
                            </div>
                            <div className="custom_btn mt_40">
                                <a href="#">About More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
