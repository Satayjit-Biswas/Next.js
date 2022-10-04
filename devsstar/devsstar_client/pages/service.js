import React from "react";
import Page_header from "../components/Public/Page_header";
import Help from "../components/Service/Help";
import Our_service from "../components/Service/Our_service";
import Process from "../components/Service/Process";

const service = () => {
    return (
        <div>
            <Page_header text="Our Service"></Page_header>
            <Our_service></Our_service>
            <Process></Process>
            <Help></Help>
        </div>
    );
};

export default service;
