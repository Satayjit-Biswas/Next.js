import service_styles from "../../styles/Service.module.css";
import Image from "next/image";
import img1 from "../../assets/img/service/1.png";
import img2 from "../../assets/img/service/2.png";
import img3 from "../../assets/img/service/3.png";
import img4 from "../../assets/img/service/4.png";

const Process = () => {
    return (
        <div className={`${service_styles.process_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row mb_55 mt_15 ">
                    <div className="col-lg-8 col-md-7 mt_30">
                        <h2 className="upper_line">
                            Our working process - how we work for our customers
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-5 mt_30">
                        <div className="custom_btn">
                            <div className={service_styles.process_btn}>
                                <a href="#">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${service_styles.line}${" "}row`}>
                    <div className="col-lg-3 col-md-6 col-12 mt_30">
                        <div className={service_styles.process_box}>
                            <div className={service_styles.process_img}>
                                <Image src={img1} width="40" height="40" />
                                <div className={service_styles.process_number}>
                                    <span>1</span>
                                </div>
                            </div>
                            <h3>Discovery</h3>
                            <p>
                                Quisque placerat vitae focus scelerisque. Fusce
                                luctus odio ac nibh luctus, in porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt_30">
                        <div className={service_styles.process_box}>
                            <div className={service_styles.process_img}>
                                <Image src={img2} width="40" height="40" />
                                <div className={service_styles.process_number}>
                                    <span>2</span>
                                </div>
                            </div>
                            <h3>Planning</h3>
                            <p>
                                Quisque placerat vitae focus scelerisque. Fusce
                                luctus odio ac nibh luctus, in porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt_30">
                        <div className={service_styles.process_box}>
                            <div className={service_styles.process_img}>
                                <Image src={img3} width="40" height="40" />
                                <div className={service_styles.process_number}>
                                    <span>3</span>
                                </div>
                            </div>
                            <h3>Execute</h3>
                            <p>
                                Quisque placerat vitae focus scelerisque. Fusce
                                luctus odio ac nibh luctus, in porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt_30">
                        <div className={service_styles.process_box}>
                            <div className={service_styles.process_img}>
                                <Image src={img4} width="40" height="40" />
                                <div className={service_styles.process_number}>
                                    <span>4</span>
                                </div>
                            </div>
                            <h3>Deliver</h3>
                            <p>
                                Quisque placerat vitae focus scelerisque. Fusce
                                luctus odio ac nibh luctus, in porttitor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
