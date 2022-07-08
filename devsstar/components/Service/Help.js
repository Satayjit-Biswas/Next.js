import service_styles from "../../styles/Service.module.css";
import Image from "next/image";
import img1 from "../../assets/img/service/about-3.png";
const Help = () => {
    return (
        <div className={`${service_styles.help_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="help_img">
                            <Image src={img1} width="525" height="525" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="upper_line mt_30">
                            We help to implement your ideas into automation
                        </h2>
                        <span>
                            We Donec Pulvinar Magna Id Leoersi Pellentesque
                            Impered Dignissim Rhoncus Euismod Euismod Eros Vitae
                            Best Consulting & Financial Services Theme .
                        </span>
                        <p className="mt_30 mb_30">
                            Business ipsum dolor sit amet nsectetur cing elit.
                            Suspe ndisse suscipit sagittis leo sit met entum is
                            not estibulum dignity sim posuere cubilia durae. Leo
                            sit met entum cubilia crae. At vero eos accusamus et
                            iusto odio dignissimos provident.
                        </p>
                        <div className="custom_btn">
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
