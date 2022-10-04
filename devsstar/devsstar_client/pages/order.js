import React from "react";
import Price from "../components/Order/Price";
import Page_header from "../components/Public/Page_header";

const order = () => {
    return (
        <div>
            <Page_header text="Order now"></Page_header>
            <Price></Price>
        </div>
    );
};

export default order;
