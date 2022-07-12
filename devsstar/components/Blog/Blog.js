import blog_styles from "../../styles/Blog.module.css";

const Blog = () => {
    return (
        <div className={`${blog_styles.blog_area}${" "}top_bottom_gap`}>
            <div className="container">
                <h2>Upcoming.....</h2>
            </div>
        </div>
    );
};

export default Blog;
