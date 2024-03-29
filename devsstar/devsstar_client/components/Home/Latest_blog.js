import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img from "../../assets/img/home/5.jpg";
import blog_styles from "../../styles/Blog.module.css";
import { HiArrowRight } from "react-icons/hi";
import { Autoplay } from "swiper";

const Latest_blog = () => {
    return (
        <div className={`${blog_styles.Latest_blog_area}${" "}top_bottom_gap`}>
            <div className="container">
                <h3 className="text_center upper_line mt_45">
                    Latest blog posts
                </h3>
                <div className="slider mb_15">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView="auto"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div className={blog_styles.home_blog_box}>
                                <div className={blog_styles.home_blog_img}>
                                    <a href="#">
                                        <Image
                                            src={img}
                                            width="370"
                                            height="235"
                                        />
                                    </a>

                                    <div
                                        className={
                                            blog_styles.blog_time_category
                                        }
                                    >
                                        <div className="time mr_10">
                                            12/07/2022
                                        </div>
                                        <span>-</span>
                                        <div className="ml_10 category">
                                            React
                                        </div>
                                    </div>
                                </div>
                                <div className={blog_styles.home_blog_content}>
                                    <div
                                        className={blog_styles.home_blog_title}
                                    >
                                        <a href="#">
                                            8 Productivity tips to avoid burnout
                                            when working
                                        </a>
                                    </div>
                                    <p>
                                        We denounce with righteous indige nation
                                        and dislike men who are so beguiled and
                                        demo...
                                    </p>
                                    <div className="custom_btn mt_30">
                                        <a href="#">
                                            Read more
                                            <HiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={blog_styles.home_blog_box}>
                                <div className={blog_styles.home_blog_img}>
                                    <a href="#">
                                        <Image
                                            src={img}
                                            width="370"
                                            height="235"
                                        />
                                    </a>

                                    <div
                                        className={
                                            blog_styles.blog_time_category
                                        }
                                    >
                                        <div className="time mr_10">
                                            12/07/2022
                                        </div>
                                        <span>-</span>
                                        <div className="ml_10 category">
                                            React
                                        </div>
                                    </div>
                                </div>
                                <div className={blog_styles.home_blog_content}>
                                    <div
                                        className={blog_styles.home_blog_title}
                                    >
                                        <a href="#">
                                            6 Productivity tips to avoid burnout
                                            when working
                                        </a>
                                    </div>
                                    <p>
                                        We denounce with righteous indige nation
                                        and dislike men who are so beguiled and
                                        demo...
                                    </p>
                                    <div className="custom_btn mt_30">
                                        <a href="#">
                                            Read more
                                            <HiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={blog_styles.home_blog_box}>
                                <div className={blog_styles.home_blog_img}>
                                    <a href="#">
                                        <Image
                                            src={img}
                                            width="370"
                                            height="235"
                                        />
                                    </a>

                                    <div
                                        className={
                                            blog_styles.blog_time_category
                                        }
                                    >
                                        <div className="time mr_10">
                                            12/07/2022
                                        </div>
                                        <span>-</span>
                                        <div className="ml_10 category">
                                            React
                                        </div>
                                    </div>
                                </div>
                                <div className={blog_styles.home_blog_content}>
                                    <div
                                        className={blog_styles.home_blog_title}
                                    >
                                        <a href="#">
                                            7 Productivity tips to avoid burnout
                                            when working
                                        </a>
                                    </div>
                                    <p>
                                        We denounce with righteous indige nation
                                        and dislike men who are so beguiled and
                                        demo...
                                    </p>
                                    <div className="custom_btn mt_30">
                                        <a href="#">
                                            Read more
                                            <HiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={blog_styles.home_blog_box}>
                                <div className={blog_styles.home_blog_img}>
                                    <a href="#">
                                        <Image
                                            src={img}
                                            width="370"
                                            height="235"
                                        />
                                    </a>

                                    <div
                                        className={
                                            blog_styles.blog_time_category
                                        }
                                    >
                                        <div className="time mr_10">
                                            12/07/2022
                                        </div>
                                        <span>-</span>
                                        <div className="ml_10 category">
                                            React
                                        </div>
                                    </div>
                                </div>
                                <div className={blog_styles.home_blog_content}>
                                    <div
                                        className={blog_styles.home_blog_title}
                                    >
                                        <a href="#">
                                            7 Productivity tips to avoid burnout
                                            when working
                                        </a>
                                    </div>
                                    <p>
                                        We denounce with righteous indige nation
                                        and dislike men who are so beguiled and
                                        demo...
                                    </p>
                                    <div className="custom_btn mt_30">
                                        <a href="#">
                                            Read more
                                            <HiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={blog_styles.home_blog_box}>
                                <div className={blog_styles.home_blog_img}>
                                    <a href="#">
                                        <Image
                                            src={img}
                                            width="370"
                                            height="235"
                                        />
                                    </a>

                                    <div
                                        className={
                                            blog_styles.blog_time_category
                                        }
                                    >
                                        <div className="time mr_10">
                                            12/07/2022
                                        </div>
                                        <span>-</span>
                                        <div className="ml_10 category">
                                            React
                                        </div>
                                    </div>
                                </div>
                                <div className={blog_styles.home_blog_content}>
                                    <div
                                        className={blog_styles.home_blog_title}
                                    >
                                        <a href="#">
                                            7 Productivity tips to avoid burnout
                                            when working
                                        </a>
                                    </div>
                                    <p>
                                        We denounce with righteous indige nation
                                        and dislike men who are so beguiled and
                                        demo...
                                    </p>
                                    <div className="custom_btn mt_30">
                                        <a href="#">
                                            Read more
                                            <HiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Latest_blog;
