import Categories from "../components/Blog/Categories";
import Our_project from "../components/Project/Our_project";
import Page_header from "../components/Public/Page_header";
import blog_styles from "../styles/Blog.module.css";
import google_ads from "../styles/google_ads.module.css";
const project = () => {
    return (
        <div className="">
            <Page_header text="Our Project"></Page_header>
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
                                    {/* <Post></Post> */}
                                    <div className="mt_25 mb_25">
                                        <Our_project></Our_project>
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

                                    <div className="d-flex mt_25 justify-content-center">
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
                                    <Categories Header_text="PROJECT CATEGORIES"></Categories>
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

export default project;
