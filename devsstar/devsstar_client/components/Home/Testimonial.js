import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import t1 from "../../assets/img/home/testi.png";
import t3 from "../../assets/img/home/3.jpg";
import quote from "../../assets/img/home/quote.png";
import home_styles from "../../styles/Home.module.css";
import { Autoplay, Pagination } from "swiper";
import { Rating, Typography } from "@mui/material";

const Testimonial = () => {
    return (
        <div className={`${home_styles.testimonial_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mt_15 mb_15">
                        <div className="testimonial_left">
                            <Image src={t1} width="500" height="440" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt_15 mb_15">
                        <div className="testimonial_right">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                            >
                                <SwiperSlide>
                                    <div
                                        className={home_styles.testimonial_box}
                                    >
                                        <div
                                            className={
                                                home_styles.testimonial_text
                                            }
                                        >
                                            <Image
                                                src={quote}
                                                width="80"
                                                height="80"
                                            />
                                            <p>
                                                Customer support is excellent
                                                and documentation good – novice
                                                can easily understand. Although
                                                I had a problem with the
                                                performance, thanks to the
                                                customer support, we have solved
                                                this problem as well..
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                home_styles.testimonial_details
                                            }
                                        >
                                            <div
                                                className={
                                                    home_styles.testimonial_img
                                                }
                                            >
                                                <Image
                                                    src={t3}
                                                    width="90"
                                                    height="90"
                                                />
                                            </div>
                                            <div className="testimonial_name">
                                                <div
                                                    className={
                                                        home_styles.Client_name
                                                    }
                                                >
                                                    Megan faxtion
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.country
                                                    }
                                                >
                                                    United-state
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.rating
                                                    }
                                                >
                                                    <Rating
                                                        name="text-feedback"
                                                        value={4.5}
                                                        readOnly
                                                        precision={0.5}
                                                    />
                                                    <Typography></Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={home_styles.testimonial_box}
                                    >
                                        <div
                                            className={
                                                home_styles.testimonial_text
                                            }
                                        >
                                            <Image
                                                src={quote}
                                                width="80"
                                                height="80"
                                            />
                                            <p>
                                                Customer support is excellent
                                                and documentation good – novice
                                                can easily understand. Although
                                                I had a problem with the
                                                performance, thanks to the
                                                customer support, we have solved
                                                this problem as well..
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                home_styles.testimonial_details
                                            }
                                        >
                                            <div
                                                className={
                                                    home_styles.testimonial_img
                                                }
                                            >
                                                <Image
                                                    src={t3}
                                                    width="90"
                                                    height="90"
                                                />
                                            </div>
                                            <div className="testimonial_name">
                                                <div
                                                    className={
                                                        home_styles.Client_name
                                                    }
                                                >
                                                    Megan faxtion
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.country
                                                    }
                                                >
                                                    United-state
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.rating
                                                    }
                                                >
                                                    <Rating
                                                        name="text-feedback"
                                                        value={4.5}
                                                        readOnly
                                                        precision={0.5}
                                                    />
                                                    <Typography></Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={home_styles.testimonial_box}
                                    >
                                        <div
                                            className={
                                                home_styles.testimonial_text
                                            }
                                        >
                                            <Image
                                                src={quote}
                                                width="80"
                                                height="80"
                                            />
                                            <p>
                                                Customer support is excellent
                                                and documentation good – novice
                                                can easily understand. Although
                                                I had a problem with the
                                                performance, thanks to the
                                                customer support, we have solved
                                                this problem as well..
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                home_styles.testimonial_details
                                            }
                                        >
                                            <div
                                                className={
                                                    home_styles.testimonial_img
                                                }
                                            >
                                                <Image
                                                    src={t3}
                                                    width="90"
                                                    height="90"
                                                />
                                            </div>
                                            <div className="testimonial_name">
                                                <div
                                                    className={
                                                        home_styles.Client_name
                                                    }
                                                >
                                                    Megan faxtion
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.country
                                                    }
                                                >
                                                    United-state
                                                </div>
                                                <div
                                                    className={
                                                        home_styles.rating
                                                    }
                                                >
                                                    <Rating
                                                        name="text-feedback"
                                                        value={4.5}
                                                        readOnly
                                                        precision={0.5}
                                                    />
                                                    <Typography></Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
