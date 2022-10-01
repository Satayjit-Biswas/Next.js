import Login_styles from "../../styles/Login.module.css";
import { useRef } from "react";

const Forgot_pass = () => {
    const click_account = useRef();
    const drop_form = (e) => {
        click_account.current.classList.toggle(`${Login_styles.form_showed}`);
    };
    return (
        <div className={`${Login_styles.login_form_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="mt_15 mb_15">
                    <div className={Login_styles.login_form_area_box}>
                        <div
                            className={`${Login_styles.form_left} ${Login_styles.Back}`}
                            ref={click_account}
                        >
                            <h2 onClick={drop_form}>Remember Password</h2>
                            <button type="submit">Go Back</button>
                        </div>
                        <div className={Login_styles.form_right}>
                            <h2>Enter Your Email Name</h2>
                            <form action="">
                                <div className={Login_styles.input_box}>
                                    <label>Your gmail</label>
                                    <input
                                        type="email"
                                        name=""
                                        placeholder="Email"
                                    />
                                </div>
                                <button type="submit">Reset password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot_pass;
