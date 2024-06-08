import BaseButton from "../Buttons/BaseButton";
import styles from "./NextcentStyle.module.scss";
import heroImg from "../../assets/Nextcent/hero.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero_heading}>
          Lessons and insights <br />
          <span>from 8 years</span>
        </h1>
        <p className={styles.hero_text}>Where to grow your business as a photographer: site or social media?</p>
        <BaseButton btnText={"Register"} btnClassName={styles.hero_btn} />
      </div>
      <div className={styles.hero_img}>
        <img src={heroImg} alt="hero image" />
      </div>
    </section>
  );
};

export default HeroSection;
