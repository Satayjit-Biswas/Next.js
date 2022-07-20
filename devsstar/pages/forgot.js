import React from "react";
import Forgot_pass from "../components/Account/Forgot_pass";
import Page_header from "../components/Public/Page_header";

const forgot = () => {
    return (
        <div>
            <Page_header text="Forget"></Page_header>
            <Forgot_pass></Forgot_pass>
        </div>
    );
};

export default forgot;
