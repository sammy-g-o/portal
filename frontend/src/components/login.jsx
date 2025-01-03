/* eslint-disable react/prop-types */
import style from "./login.module.css";

function Login({children}) {
  return (
    <section className={style.loginSection}>
      <div className={style.loginSectionWrapper}>
        <div className={style.image}></div>
        <div className={style.loginSectionCol2}>
          <h2>MOWE UNIVERSITY</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
export default Login;
