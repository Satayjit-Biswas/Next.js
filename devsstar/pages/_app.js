import Footer from "../components/Public/Footer";
import Layout from "../components/layout";
import Navbar from "../components/Public/Navbar";
import "../styles/globals.css";
import "../styles/helper.css";
import "../styles/responsive.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
    );
}

export default MyApp;
