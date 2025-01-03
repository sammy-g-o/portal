import Nav from "../components/nav";
import Footer from "../components/footer";
import Login from "../components/login";
import { NavLink } from "react-router-dom";
import style from "../components/login.module.css";
function Loginpage() {
  return (
    <>
      <Nav />
      <Login>
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
            <p>Don&apos;t have an account?</p> <NavLink>Register</NavLink>
          </div>
          <div className={style.row4}>
            <p>
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">Remember me</label>
            </p>
            <NavLink>Forgot Password</NavLink>
          </div>
        </form>
      </Login>
      <Footer />
    </>
  );
}
export default Loginpage;
