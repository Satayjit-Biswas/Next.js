import home_styles from "../../styles/Home.module.css";
import Image from "next/image";
import dot from "../../assets/img/home/about.png";
const Level = () => {
    return (
        <div className={`${home_styles.level_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 mt_15 mb_15">
                        <div className={home_styles.level_left_area}>
                            <div className={home_styles.level_img}>
                                <Image src={dot} width="550" height="515" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 mt_15 mb_15">
                        <div className={home_styles.level_right_area}>
                            <h3 className="upper_line">
                                We take your business to next level
                            </h3>
                            <h5>
                                30+ Years Experience In Business And Finance
                                Consulting, IT Solutions, And Working With 5k+
                                Clients Over The World.
                            </h5>
                            <p>
                                Nor is there anyone who loves or pursues or
                                desires to obtain pain of itself, because it is
                                pain, but occasionally circumstances occur in
                                which toil and pain can procure him some great
                                pleasure. Creation timelines for the digital
                                consulting business theme 2021 bstandard lorem
                                ipsum passage vary, with some citing the 15th
                                century and others the 20th.
                            </p>
                            <div className="custom_btn mt_40">
                                <a href="#">About More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Level;
