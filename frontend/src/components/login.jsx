import style from "./login.module.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <section className={style.loginSection}>
      <div className={style.loginSectionWrapper}>
        <div className={style.image}></div>
        <div className={style.loginSectionCol2}>
          <h2>MOWE UNIVERSITY</h2>
          <form action="" method="post">
            <h3>Login</h3>
            <input
              type="text"
              name=""
              className={style.nameandpass}
              placeholder="Username"
            />
            <input
              type="password"
              name=""
              className={style.nameandpass}
              placeholder="Password"
            />
            <input type="submit" value="Login" className={style.submit} />
            <div className={style.row3}>
              <p>Don&apos;t have an account?</p>{" "}
              <NavLink to="/register">Register</NavLink>
            </div>
            <div className={style.row4}>
              <p>
                <input type="checkbox" name="" id="" />{" "}
                <label htmlFor="">Remember me</label>
              </p>
              <NavLink>Forgot Password</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;
