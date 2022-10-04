const Page_header = (props) => {
    return (
        <div className="page_header">
            <div className="container">
                <h2 className="upper_line">{props.text}</h2>
            </div>
        </div>
    );
};

export default Page_header;
