import Image from "next/image";
import p1 from "../assets/img/blog/p.jpg";

import Recent_post from "../components/Blog/Recent_post";
import Page_header from "../components/Public/Page_header";
import blog_styles from "../styles/Blog.module.css";
import google_ads from "../styles/google_ads.module.css";

const post_details = () => {
    return (
        <div>
            <Page_header text="Blog Details"></Page_header>
            <div className={`${blog_styles.blog_area}${" "}top_bottom_gap`}>
                <div className="container">
                    <div className={blog_styles.blog_area_box}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className={blog_styles.post_details_right}>
                                    <div className={google_ads.blog_left_site}>
                                        <div className="d-flex justify-content-center">
                                            <div
                                                className={google_ads.ads728_90}
                                            ></div>
                                            <div
                                                className={google_ads.ads468_60}
                                            ></div>
                                            <div
                                                className={
                                                    google_ads.ads320_100
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="mb_5 mt_20">
                                            Which has been used in the project :
                                        </h2>
                                        <div className={blog_styles.post_date}>
                                            <span className="mr_20">
                                                Categories :
                                                <span>react-blog</span>
                                            </span>
                                            <span>12-10-2022</span>
                                        </div>
                                        <p className="mb_20 mt_20">
                                            This is a Bike Store website. This
                                            websites name is BikeStoreThis
                                            website was designed by CoderChef
                                            and this website was using bootstrap
                                            5, react, Using API, and Firebase
                                            for Authentication. So you can Log
                                            In and Log Out to this website. And
                                            you can maintain Orders, see your
                                            orders, delete orders. and if you
                                            want to buy any bike then must be
                                            login.
                                        </p>
                                        <Image
                                            src={p1}
                                            width="785"
                                            height="475"
                                        />
                                        <div className="post_details mb_10">
                                            <p>
                                                This is a Bike Store website.
                                                This websites name is
                                                BikeStoreThis website was
                                                designed by CoderChef and this
                                                website was using bootstrap 5,
                                                react, Using API, and Firebase
                                                for Authentication. So you can
                                                Log In and Log Out to this
                                                website. And you can maintain
                                                Orders, see your orders, delete
                                                orders. and if you want to buy
                                                any bike then must be login.
                                            </p>
                                        </div>
                                    </div>
                                    {/* {loading ? (
                                        <div className="text-center mt_30 mb_30">
                                            <div
                                                className="spinner-border text-warning"
                                                role="status"
                                            >
                                                <span className="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <h2 className="mb_20">
                                                {blog_title}
                                            </h2>
                                            <div className="post_date mt_5 mb_5">
                                                <span className="mr_20">
                                                    Categories :{" "}
                                                    {blog_categories}
                                                </span>
                                                <span>{blog_date}</span>
                                            </div>
                                            <p className="mb_20">
                                                {blog_conclusion}
                                            </p>
                                            <img
                                                src={blog_img}
                                                alt=""
                                                className="img-fluid mb_20"
                                            />
                                            <div className="post_details mb_10">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: blog_description,
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    )} */}
                                    <div className={google_ads.blog_left_site}>
                                        <div className="d-flex justify-content-center">
                                            <div
                                                className={google_ads.ads728_90}
                                            ></div>
                                            <div
                                                className={google_ads.ads468_60}
                                            ></div>
                                            <div
                                                className={
                                                    google_ads.ads320_100
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className={`${
                                        blog_styles.blog_right_site
                                    }${" "}${google_ads.blog_right_site}`}
                                >
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className={google_ads.ads320_50}
                                        ></div>
                                        <div
                                            className={google_ads.ads468_60}
                                        ></div>
                                        <div
                                            className={google_ads.ads250_250}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>
                                    </div>
                                    <Recent_post></Recent_post>
                                    <div className="d-flex justify-content-center mt_20">
                                        <div
                                            className={google_ads.ads320_50}
                                        ></div>
                                        <div
                                            className={google_ads.ads468_60}
                                        ></div>
                                        <div
                                            className={google_ads.ads250_250}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>
                                        <div
                                            className={google_ads.ads336_280}
                                        ></div>
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

export default post_details;
