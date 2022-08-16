import home_styles from "../../styles/Home.module.css";
import Image from "next/image";
import dot from "../../assets/img/home/dot-rect.png";
import o_shape from "../../assets/img/home/circle1.png";

const Slider = () => {
    return (
        <div className={home_styles.Slider_area}>
            <div className={home_styles.overlay}>
                <div className="container">
                    <div className={home_styles.slider_text_area}>
                        <h2 className="upper_line">
                            We maximize
                            <span>your business growth</span>
                        </h2>
                        <div className="custom_btn">
                            <a href="#">find Consultant</a>
                        </div>
                        <div className="animation_part">
                            <div className={home_styles.dot}>
                                <Image src={dot} width="60" height="90" />
                            </div>
                            <div className={home_styles.o_shape}>
                                <Image src={o_shape} width="80" height="80" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
