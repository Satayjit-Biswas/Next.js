import blog_styles from "../../styles/Blog.module.css";
import google_ads from "../../styles/google_ads.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Categories = (props) => {
    return (
        <div className={blog_styles.categories_area}>
            <h3 className="upper_line">{props.Header_text}</h3>
            <div className="row">
                <div className="col-md-6 col-4">
                    <div className={blog_styles.categories_link}>
                        <HiArrowNarrowRight />
                        <a href="#">React</a>
                        <div className={blog_styles.cat_menu}>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Blog</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">E-commerce</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Agency</a>
                            </div>
                        </div>
                    </div>
                    <div className={blog_styles.categories_link}>
                        <HiArrowNarrowRight />
                        <a href="#">Wordpress</a>
                        <div className={blog_styles.cat_menu}>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Blog</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">E-commerce</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Agency</a>
                            </div>
                        </div>
                    </div>
                    <div className={blog_styles.categories_link}>
                        <HiArrowNarrowRight />
                        <a href="#">Web design</a>
                        <div className={blog_styles.cat_menu}>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Blog</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">E-commerce</a>
                            </div>
                            <div className={blog_styles.categories_link}>
                                <HiArrowNarrowRight />
                                <a href="#">Agency</a>
                            </div>
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
                BlogCategories.map((e) => (
                    <div className="categories_link" key={e._id}>
                        <i className="fal fa-long-arrow-right"></i>
                        <a
                            href="#"
                            onClick={() => filterBlog(e.categories)}
                        >
                            {e.categories}
                        </a>
                    </div>
                ))
            )} */}
                </div>
                <div className="col-md-6 col-8">
                    <div className="d-flex justify-content-center">
                        <div className={google_ads.ads160_600}></div>
                        <div className={google_ads.ads336_280}></div>
                        <div className={google_ads.ads320_100}></div>
                        <div className={google_ads.ads200_200}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
