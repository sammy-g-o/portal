import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import sideNavStyle from "./sideNav.module.css";

function Nav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
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

          {/* Hamburger Menu Icon for Mobile */}
          <div className={style.sideNav} onClick={toggleSideNav}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#030f4b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </nav>
      </section>

      {/* Mobile Side Navigation */}
      {isSideNavOpen && (
        <section className={sideNavStyle.sideNavModel}>

          <div className={sideNavStyle.sideNavWrap} onClick={closeSideNav}>
            <nav
              className={sideNavStyle.nav}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className={sideNavStyle.close} onClick={closeSideNav}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Navigation Links */}
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? sideNavStyle.active : ""
                    }
                    onClick={closeSideNav}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/campus"
                    className={({ isActive }) =>
                      isActive ? sideNavStyle.active : ""
                    }
                    onClick={closeSideNav}
                  >
                    Campus
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/programs"
                    className={({ isActive }) =>
                      isActive ? sideNavStyle.active : ""
                    }
                    onClick={closeSideNav}
                  >
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? sideNavStyle.active : ""
                    }
                    onClick={closeSideNav}
                  >
                    About
                  </NavLink>
                </li>
              </ul>

              {/* Login/Signup Section */}
              <div className={sideNavStyle.loginSignup}>
                <h4>
                  <NavLink to="/login" onClick={closeSideNav}>
                    Login
                  </NavLink>
                </h4>
                <h4 className={sideNavStyle.signup}>
                  <NavLink to="/register" onClick={closeSideNav}>
                    Register
                  </NavLink>
                </h4>
              </div>
            </nav>
          </div>
        </section>
      )}
    </>
  );
}

export default Nav;
