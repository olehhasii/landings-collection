import BaseButton from "../Buttons/BaseButton";
import styles from "./NextcentStyle.module.scss";

const Card = ({ text }) => {
  return (
    <div className={styles.ending_card}>
      <h3>{text}</h3>
      <a href="#">Readmore</a>
    </div>
  );
};

const Ending = () => {
  return (
    <section className={styles.ending}>
      <div>
        <h2 className={styles.ending_heading}>Caring is the new marketing</h2>
        <p className={styles.ending_text}>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos
          joining the community, read about how our community are increasing their membership income and lots more.
        </p>
        <div className={styles.ending_cards}>
          <Card text="Creating Streamlined Safeguarding Processes with OneRen" />
          <Card text="What are your safeguarding responsibilities and how can you manage them?" />
          <Card text="Revamping the Membership Model with Triathlon Australia" />
        </div>
      </div>
      <div className={styles.ending_demo}>
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
        <BaseButton btnText="Get a Demo" />
      </div>
    </section>
  );
};

export default Ending;
