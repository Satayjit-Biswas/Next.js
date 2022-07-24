import blog_styles from "../../styles/Blog.module.css";
import Image from "next/image";
import p1 from "../../assets/img/blog/p.jpg";
const Recent_post = (props) => {
    return (
        <>
            <h3 className="upper_line">{props.Header_text}</h3>

            <div className={blog_styles.post_area_box}>
                <div className={blog_styles.recentpost_area_box}>
                    <div className={blog_styles.recentpost_img}>
                        <a href="#">
                            <Image src={p1} width="125" height="85" />
                        </a>
                    </div>
                    <div>
                        <h2 className={blog_styles.recentpost_title}>
                            <a href="#">
                                Xterra ERG220 Rower: The Best Budget Priced
                                Rowing Machine
                            </a>
                        </h2>
                        <div className={blog_styles.recentpost_date}>
                            21/07/22
                        </div>
                    </div>
                </div>
            </div>
            <div className={blog_styles.post_area_box}>
                <div className={blog_styles.recentpost_area_box}>
                    <div className={blog_styles.recentpost_img}>
                        <a href="#">
                            <Image src={p1} width="125" height="85" />
                        </a>
                    </div>
                    <div>
                        <h2 className={blog_styles.recentpost_title}>
                            <a href="#">
                                Xterra ERG220 Rower: The Best Budget Priced
                                Rowing Machine
                            </a>
                        </h2>
                        <div className={blog_styles.recentpost_date}>
                            21/07/22
                        </div>
                    </div>
                </div>
            </div>
            <div className={blog_styles.post_area_box}>
                <div className={blog_styles.recentpost_area_box}>
                    <div className={blog_styles.recentpost_img}>
                        <a href="#">
                            <Image src={p1} width="125" height="85" />
                        </a>
                    </div>
                    <div>
                        <h2 className={blog_styles.recentpost_title}>
                            <a href="#">
                                Xterra ERG220 Rower: The Best Budget Priced
                                Rowing Machine
                            </a>
                        </h2>
                        <div className={blog_styles.recentpost_date}>
                            21/07/22
                        </div>
                    </div>
                </div>
            </div>
            <div className={blog_styles.post_area_box}>
                <div className={blog_styles.recentpost_area_box}>
                    <div className={blog_styles.recentpost_img}>
                        <a href="#">
                            <Image src={p1} width="125" height="85" />
                        </a>
                    </div>
                    <div>
                        <h2 className={blog_styles.recentpost_title}>
                            <a href="#">
                                Xterra ERG220 Rower: The Best Budget Priced
                                Rowing Machine
                            </a>
                        </h2>
                        <div className={blog_styles.recentpost_date}>
                            21/07/22
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recent_post;
