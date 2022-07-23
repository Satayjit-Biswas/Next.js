import React from "react";
import Categories from "../components/Blog/Categories";
import Post from "../components/Blog/Post";
import Recent_post from "../components/Blog/Recent_post";
import Page_header from "../components/Public/Page_header";
import blog_styles from "../styles/Blog.module.css";
import google_ads from "../styles/google_ads.module.css";

const blog = () => {
    return (
        <div>
            <Page_header text="Our blog"></Page_header>
            <div className={`${blog_styles.blog_area}${" "}top_bottom_gap`}>
                <div className="container">
                    <div className="blog_area_box">
                        <div className="row">
                            <div className="col-lg-8">
                                <div
                                    className={`${
                                        blog_styles.blog_left_site
                                    }${" "}${google_ads.blog_left_site}`}
                                >
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className={google_ads.ads728_90}
                                        ></div>
                                        <div
                                            className={google_ads.ads468_60}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>
                                    </div>
                                    <Post></Post>
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
                                    <Post
                                        allblog={allfilterblog}
                                        loading={loading}
                                    ></Post>
                                )} */}
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className={google_ads.ads728_90}
                                        ></div>
                                        <div
                                            className={google_ads.ads468_60}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>
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
                                    <h3 className="upper_line">RECENT POSTS</h3>
                                    <Recent_post></Recent_post>
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className={google_ads.ads468_60}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>

                                        <div
                                            className={google_ads.ads336_280}
                                        ></div>
                                    </div>
                                    <h3 className="upper_line">
                                        POSTS CATEGORIES
                                    </h3>
                                    <Categories></Categories>
                                    {/* <Categories
                                    filterBlog={(e) => filterblog(e)}
                                ></Categories> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default blog;
