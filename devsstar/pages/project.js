import Page_header from "../components/Public/Page_header";

const project = () => {
    return (
        <div className="sticky_top_gap">
            <Page_header text="Our project"></Page_header>
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_left_site">
                                <div className="d-flex justify-content-center">
                                    <div className="ads728_90"></div>
                                    <div className="ads468_60"></div>
                                    <div className="ads320_100"></div>
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
                                    <Projects
                                        allproject={allfilterProject}
                                    ></Projects>
                                )} */}
                                <div className="d-flex justify-content-center">
                                    <div className="ads728_90"></div>
                                    <div className="ads468_60"></div>
                                    <div className="ads320_100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="d-flex justify-content-center">
                                    <div className="ads320_50"></div>
                                    <div className="ads468_60"></div>
                                    <div className="ads250_250"></div>
                                    <div className="ads320_100"></div>
                                </div>
                                {/* <ProjectCategories
                                    filterProject={(e) => filterProject(e)}
                                ></ProjectCategories> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default project;
