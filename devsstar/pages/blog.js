import React from "react";
import Blog from "../components/Blog/Blog";
import Page_header from "../components/Public/Page_header";

const blog = () => {
    return (
        <div>
            <Page_header text="Our blog"></Page_header>
            <Blog></Blog>
        </div>
    );
};

export default blog;
