import Page_header from "../components/Public/Page_header";
import Web_design from "../components/Service/web_design";
import Web_development from "../components/Service/Web_development";
import Wordpress from "../components/Service/Wordpress";

const service_details = () => {
    return (
        <div>
            <Page_header text="Service details"></Page_header>
            <Web_design></Web_design>
            <Web_development></Web_development>
            <Wordpress></Wordpress>
        </div>
    );
};

export default service_details;
