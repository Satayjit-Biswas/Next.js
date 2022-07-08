import React from "react";
import Team from "../components/About/team";
import Page_header from "../components/Public/Page_header";

const about = () => {
    return (
        <div>
            <Page_header text="About us"></Page_header>
            <Team></Team>
        </div>
    );
};

export default about;
