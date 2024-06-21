import headerLogo from "../../assets/Positivus/header.png";

import styles from "./PositivusStyle.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <img src={headerLogo} alt="logo" />
      </div>
      <nav>
        <ul className={styles.header_nav}>
          <li className={styles.header_nav_item}>
            <a href="#">About us</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="3">Services</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">Use Cases</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#">Blog</a>
          </li>
          <li className={styles.header_nav_item}>
            <button>Request a quote</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
