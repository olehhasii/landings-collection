import BaseButton from "../Buttons/BaseButton";
import styles from "./NextcentStyle.module.scss";

import stat1 from "../../assets/Nextcent/stat4.png";
import stat2 from "../../assets/Nextcent/stat3.png";
import stat3 from "../../assets/Nextcent/stat2.png";
import stat4 from "../../assets/Nextcent/stat1.png";
import bodyImg from "../../assets/Nextcent/pana.png";

import logo1 from "../../assets/Nextcent/Logo1.png";
import logo2 from "../../assets/Nextcent/Logo2.png";
import logo3 from "../../assets/Nextcent/Logo3.png";
import logo4 from "../../assets/Nextcent/Logo4.png";
import logo5 from "../../assets/Nextcent/Logo5.png";
import logo6 from "../../assets/Nextcent/Logo6.png";

const StatItem = ({ img, value, statName }) => {
  return (
    <div className={styles.stats_info_item}>
      <img src={img} alt="users" />
      <div>
        <span className={styles.stats_info_value}>{value}</span>
        <span className={styles.stats_info_name}>{statName}</span>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div>
        <h2 className={styles.stats_heading}>
          Helping a local <br />
          <span>business reinvent itself</span>
        </h2>
        <p className={styles.stats_text}>We reached here with our hard work and dedication</p>
      </div>
      <div className={styles.stats_info}>
        <StatItem img={stat1} value={"2,245,341"} statName={"Members"} />
        <StatItem img={stat2} value={"46,328"} statName={"Clubs"} />
        <StatItem img={stat3} value={"828,867"} statName={"Event Bookings"} />
        <StatItem img={stat4} value={"1,926,436"} statName={"Payments"} />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <section className={styles.body}>
      <Stats />
      <div className={styles.community_end}>
        <img src={bodyImg} alt="image" />
        <div className={styles.body_content}>
          <h2 className={styles.community_end_heading}>How to design your site footer like we did</h2>
          <p className={styles.community_end_text}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc
            varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
            platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <BaseButton btnText="Learn More" />
        </div>
      </div>
      <div className={styles.body_end}>
        <div className={styles.body_end_content}>
          <p className={styles.body_end_text}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
            ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
            Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim
            finibus ac sit amet magna.
          </p>
          <span className={styles.body_end_author}>Tim Smith</span>
          <span className={styles.body_end_comp}>British Dragon Boat Racing Association</span>
        </div>
        <div className={styles.body_end_clients}>
          <ul className={styles.body_end_logos}>
            <li>
              <img src={logo1} alt="logo" />
            </li>
            <li>
              <img src={logo2} alt="logo" />
            </li>
            <li>
              <img src={logo3} alt="logo" />
            </li>
            <li>
              <img src={logo4} alt="logo" />
            </li>
            <li>
              <img src={logo5} alt="logo" />
            </li>
            <li>
              <img src={logo6} alt="logo" />
            </li>
            <li>
              <a href="#">Meet all customers </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Body;
