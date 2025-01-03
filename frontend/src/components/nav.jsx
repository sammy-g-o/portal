import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
function Nav() {
  return (
    <section className={style.navsection}>
      <nav className={style.nav}>
        <div className={style.logo}>
          Mowe University <img src="/GraduationCap.svg" alt="" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campus"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Campus
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/programs"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className={style.loginSignup}>
          <h4>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Login
            </NavLink>
          </h4>
          <h4 className={style.signup}>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Register
            </NavLink>
          </h4>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
