import blog_styles from "../../styles/Blog.module.css";

const Blogs = () => {
    return (
        <div className={`${blog_styles.blog_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog_area_img"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
