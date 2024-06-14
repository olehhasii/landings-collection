import logo from "../../assets/Nextcent/footer.png";
import styles from "./NextcentStyle.module.scss";
import instLogo from "../../assets/Nextcent/inst.png";
import dribleLogo from "../../assets/Nextcent/drible.png";
import twitterLogo from "../../assets/Nextcent/twitter.png";
import youtubeLogo from "../../assets/Nextcent/youtube.png";
import sendIcon from "../../assets/Nextcent/send.png";

const FooterNav = ({ navLists }) => {
  return (
    <div className={styles.footer_nav}>
      {navLists.map((item) => (
        <ul key={item.name}>
          <span>{item.name}</span>
          {item?.links?.length > 0 &&
            item.links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          {item?.elements?.length > 0 && item.elements.map((el) => el)}
        </ul>
      ))}
    </div>
  );
};

const Footer = () => {
  const emailInput = (
    <div className={styles.footer_email}>
      <input type="text" placeholder="You email address" />
      <button>
        <img src={sendIcon} alt="send" />
      </button>
    </div>
  );

  const navLinks = [
    { name: "Company", links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"] },
    { name: "Support", links: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"] },
    { name: "Stay up to date", elements: [emailInput] },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_copyright}>
        <img src={logo} alt="logo" className={styles.footer_logo} />
        <div>
          <span>Copyright © 2020 Nexcent ltd.</span>
          <br />
          <span>All rights reserved</span>
        </div>
        <div className={styles.footer_logos}>
          <a href="#" className={styles.footer_logos_logo}>
            <img src={instLogo} alt="inst" />
          </a>
          <a href="#" className={styles.footer_logos_logo}>
            <img src={dribleLogo} alt="dr" />
          </a>
          <a href="#" className={styles.footer_logos_logo}>
            <img src={twitterLogo} alt="tw" />
          </a>
          <a href="#" className={styles.footer_logos_logo}>
            <img src={youtubeLogo} alt="yt" />
          </a>
        </div>
      </div>
      <FooterNav navLists={navLinks} />
    </footer>
  );
};

export default Footer;
