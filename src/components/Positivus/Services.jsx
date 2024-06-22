import SectionHeading from "./SectionHeading";
import styles from "./PositivusStyle.module.scss";
import arrow from "../../assets/Positivus/Arrow.png";
import Illust1 from "../../assets/Positivus/Illust1.png";
import Illust2 from "../../assets/Positivus/Illust2.png";
import Illust3 from "../../assets/Positivus/Illust3.png";
import Illust4 from "../../assets/Positivus/Illust4.png";
import Illust5 from "../../assets/Positivus/Illust5.png";
import Illust6 from "../../assets/Positivus/Illust6.png";

const Card = ({ heading, img }) => {
  return (
    <div className={styles.services_card}>
      <div>
        <h3 className={styles.services_card_heading}>{heading}</h3>
        <div>
          <a href="#" className={styles.services_card_link}>
            <div className={styles.services_card_link_icon}>
              <img src={arrow} alt="link" />
            </div>
            <span>Learn more</span>
          </a>
        </div>
      </div>
      <div className={styles.services_card_img}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

const Services = () => {
  const cards = [
    { id: 1, heading: "Search engine optimization", img: Illust1 },
    { id: 2, heading: "Pay-per-click advertising", img: Illust2 },
    { id: 3, heading: "Social Media Marketing", img: Illust3 },
    { id: 4, heading: "Email Marketing", img: Illust4 },
    { id: 5, heading: "Content Creation", img: Illust5 },
    { id: 6, heading: "Analytics and Tracking", img: Illust6 },
  ];

  return (
    <section className={styles.services}>
      <SectionHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className={styles.services_cards}>
        {cards.map((card) => (
          <Card heading={card.heading} key={card.id} img={card.img} />
        ))}
      </div>
    </section>
  );
};

export default Services;
