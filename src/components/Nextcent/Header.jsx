import styles from "./NextcentStyle.module.scss";
import logo from "../../assets/Nextcent/Logo.png";
import BaseButton from "../Buttons/BaseButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.header_nav}>
        <li className={styles.header_nav_link}>
          <a href="#">Home</a>
        </li>
        <li className={styles.header_nav_link}>
          <a href="#">Service</a>
        </li>
        <li className={styles.header_nav_link}>
          <a href="#">Feature</a>
        </li>
        <li className={styles.header_nav_link}>
          <a href="#">Product</a>
        </li>
        <li className={styles.header_nav_link}>
          <a href="#">Testimonial</a>
        </li>
        <li className={styles.header_nav_link}>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <div>
        <BaseButton btnText="Login" btnClassName={styles.header_login} />
        <BaseButton btnText="Sign Up" btnClassName={styles.header_signup} />
      </div>
    </header>
  );
};

export default Header;
