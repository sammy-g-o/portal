import style from "./footer.module.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className={style.footerLists}>
        <div className={style.logo}>
          <h1>Mowe University</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. Donec
            ultricies mi in ipsum vehicula lacinia. Iner porttitor ac libero{" "}
          </p>
        </div>
        <ul>
          <li>
            <h3>Menu</h3>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/programs">Progam</NavLink>
          </li>
          <li>
            <NavLink to="/campus">Campus</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Contact Us</h3>
          </li>
          <li><NavLink to="">Facebook</NavLink></li>
          <li><NavLink to="">Instagram</NavLink></li>
          <li><NavLink to="">Email</NavLink></li>
          <li><NavLink to="">WhatsApp</NavLink></li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
