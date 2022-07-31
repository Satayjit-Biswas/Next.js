import Project_styles from "../styles/Project.module.css";
import google_ads from "../styles/google_ads.module.css";
import Image from "next/image";
import p1 from "../assets/img/blog/p.jpg";
import Page_header from "../components/Public/Page_header";

const project_details = () => {
    return (
        <>
            <Page_header text="Project Details"></Page_header>
            <div className={`${Project_styles.blog_area}${" "}top_bottom_gap`}>
                <div className="container">
                    <div className={Project_styles.project_details_box}>
                        <div className="row">
                            <div className="col-lg-8 col-md-9">
                                <div
                                    className={`${
                                        Project_styles.Project_details_left_site
                                    }${" "}${
                                        google_ads.Project_details_left_site
                                    }`}
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
                                    <h3 className="">{project_title}</h3>
                                    <div className="project_details_img my-3">
                                        <img src={img1} alt="" srcSet="" />
                                    </div>
                                    <div className="project_item_date">
                                        <p>
                                            Start Date :
                                            <span> {project_start_date}</span>
                                        </p>
                                        <p>
                                            Finish Date :
                                            <span> {project_end_date}</span>
                                        </p>
                                    </div>
                                    <h5>
                                        Which has been used in the project :
                                    </h5>
                                    <p>{project_using}</p>
                                    <h5>Description This Project :</h5>
                                    <p>{description1}</p>
                                    <div className="blog_left_site mt_20">
                                        <div className="d-flex justify-content-center">
                                            <div className="ads728_90"></div>
                                            <div className="ads468_60"></div>
                                            <div className="ads320_100"></div>
                                        </div>
                                    </div>
                                    <div className="project_details_img my-5">
                                        <img src={img2} alt="" srcSet="" />
                                    </div>
                                    <p>{description2}</p>
                                    <div className="blog_left_site mt_20">
                                        <div className="d-flex justify-content-center">
                                            <div className="ads728_90"></div>
                                            <div className="ads468_60"></div>
                                            <div className="ads320_100"></div>
                                        </div>
                                    </div>{" "}
                                    <div className="project_details_img my-5">
                                        <img src={img3} alt="" srcSet="" />
                                    </div>
                                    <p className="mb_20">{description3}</p>
                                    <div className="blog_left_site">
                                        <div className="d-flex justify-content-center">
                                            <div className="ads728_90"></div>
                                            <div className="ads468_60"></div>
                                            <div className="ads320_100"></div>
                                        </div>
                                    </div>{" "}
                                    <div className="project_link mb_10">
                                        <h5>Project live Link :</h5>
                                        <a
                                            target="blank"
                                            href={project_live_link}
                                        >
                                            {project_live_link}
                                        </a>
                                        <h5>Project Client Link :</h5>
                                        <a
                                            target="blank"
                                            href={project_client_link}
                                        >
                                            {project_client_link}
                                        </a>
                                        <h5>Project Server Link :</h5>
                                        <a
                                            target="blank"
                                            href={project_server_link}
                                        >
                                            {project_server_link}
                                        </a>
                                        <h5>Project Youtube Link :</h5>
                                        <a
                                            target="blank"
                                            href={project_youtube_link}
                                        >
                                            {project_youtube_link}
                                        </a>
                                    </div>
                                </div>
                            )} */}
                                <div>
                                    <h3 className="">
                                        Bike-Store E-commerce Website
                                    </h3>
                                    <div
                                        className={
                                            Project_styles.project_details_img
                                        }
                                    >
                                        <Image
                                            src={p1}
                                            width="785"
                                            height="475"
                                        />
                                    </div>
                                    <div
                                        className={
                                            Project_styles.project_item_date
                                        }
                                    >
                                        <p>
                                            Start Date :<span> 21-2-2022 </span>
                                        </p>
                                        <p>
                                            Finish Date :
                                            <span> 21-2-2022 </span>
                                        </p>
                                    </div>
                                    <h5>
                                        Which has been used in the project :
                                    </h5>
                                    <p>
                                        Html 5 , Css 3 , Bootstrap 5 , React js
                                        , Express js , Mongodb , Firebase
                                        Authentication
                                    </p>
                                    <h5>Description This Project :</h5>
                                    <p>
                                        This is a Bike Store website. This
                                        websites name is BikeStoreThis website
                                        was designed by CoderChef and this
                                        website was using bootstrap 5, react,
                                        Using API, and Firebase for
                                        Authentication. So you can Log In and
                                        Log Out to this website. And you can
                                        maintain Orders, see your orders, delete
                                        orders. and if you want to buy any bike
                                        then must be login.
                                    </p>
                                    <div
                                        className={
                                            google_ads.Project_details_left_site
                                        }
                                    >
                                        <div className="d-flex justify-content-center mt_20">
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
                                    <div
                                        className={
                                            Project_styles.project_details_img
                                        }
                                    >
                                        <Image
                                            src={p1}
                                            width="785"
                                            height="475"
                                        />
                                    </div>
                                    <p>
                                        This is the Product section of the
                                        BikeStore website. you can purchase any
                                        Product, see details on your Product,
                                        you see the configuration of the
                                        Product. and you can rate any Product.
                                    </p>
                                    <div
                                        className={
                                            google_ads.Project_details_left_site
                                        }
                                    >
                                        <div className="d-flex justify-content-center mt_20">
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
                                    <div
                                        className={
                                            Project_styles.project_details_img
                                        }
                                    >
                                        <Image
                                            src={p1}
                                            width="785"
                                            height="475"
                                        />
                                    </div>
                                    <p className="mb_20">
                                        This is the register section.it was
                                        created by firebase authentication.
                                        first, you need an email and your
                                        name.At last, thank you for visiting
                                        this project.
                                    </p>
                                    <div
                                        className={
                                            google_ads.Project_details_left_site
                                        }
                                    >
                                        <div className="d-flex justify-content-center mt_20">
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
                                    <div
                                        className={Project_styles.project_link}
                                    >
                                        <h5>Project live Link :</h5>
                                        <a target="blank" href="#">
                                            https://bike-store-a5d20.web.app/
                                        </a>
                                        <h5>Project Client Link :</h5>
                                        <a target="blank" href="#">
                                            https://bike-store-a5d20.web.app/
                                        </a>
                                        <h5>Project Server Link :</h5>
                                        <a target="blank" href="#">
                                            https://bike-store-a5d20.web.app/
                                        </a>
                                        <h5>Project Youtube Link :</h5>
                                        <a target="blank" href="#">
                                            https://bike-store-a5d20.web.app/
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        Project_styles.Project_details_left_site
                                    }${" "}${
                                        google_ads.Project_details_left_site
                                    }`}
                                >
                                    <div className="d-flex justify-content-center mt_20">
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
                            <div className="col-lg-4 col-md-3">
                                <div
                                    className={`${
                                        Project_styles.Project_details_right_site
                                    }${" "}${
                                        google_ads.Project_details_right_site
                                    }`}
                                >
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className={google_ads.ads160_600}
                                        ></div>
                                        <div
                                            className={google_ads.ads336_28}
                                        ></div>
                                        <div
                                            className={google_ads.ads320_100}
                                        ></div>
                                        <div
                                            className={google_ads.ads200_200}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default project_details;
