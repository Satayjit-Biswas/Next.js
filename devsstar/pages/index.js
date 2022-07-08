import Complete_project from "../components/Home/Complete_project";
import Latest_blog from "../components/Home/Latest_blog";
import Level from "../components/Home/Level";
import Services from "../components/Home/Services";
import Slider from "../components/Home/Slider";
import Testimonial from "../components/Home/Testimonial";

export default function Home() {
    return (
        <>
            <Slider></Slider>
            <Level></Level>
            <Services></Services>
            <Complete_project></Complete_project>
            <Testimonial></Testimonial>
            <Latest_blog></Latest_blog>
        </>
    );
}
