import Login_styles from "../../styles/Login.module.css";

const Login_reg = () => {
    return (
        <div className={`${Login_styles.login_form_area}${" "}top_bottom_gap`}>
            <div className="container">
                <div className="mt_15 mb_15">
                    <div className={Login_styles.login_form_area_box}>
                        <div className={Login_styles.form_left}>
                            <h2>Creating Account</h2>
                            <form action="">
                                <div className={Login_styles.input_box}>
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="Name"
                                    />
                                </div>
                                <div className={Login_styles.input_box}>
                                    <label>Your gmail</label>
                                    <input
                                        type="email"
                                        name=""
                                        placeholder="Email"
                                    />
                                </div>
                                <div className={Login_styles.input_box}>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name=""
                                    />
                                </div>
                                <button type="submit">Creating Account</button>
                            </form>
                        </div>
                        <div className={Login_styles.form_right}>
                            <h2>Log in</h2>
                            <form action="">
                                <div className={Login_styles.input_box}>
                                    <label>Your gmail</label>
                                    <input
                                        type="email"
                                        name=""
                                        placeholder="Email"
                                    />
                                </div>
                                <div className={Login_styles.input_box}>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name=""
                                    />
                                </div>
                                <button type="submit">Log in</button>
                            </form>
                            <p>
                                <a href="forgot">Forgot Password !</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login_reg;
