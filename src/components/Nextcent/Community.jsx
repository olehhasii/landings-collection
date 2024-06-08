import styles from "./NextcentStyle.module.scss";
import logo1 from "../../assets/Nextcent/Logo1.png";
import logo2 from "../../assets/Nextcent/Logo2.png";
import logo3 from "../../assets/Nextcent/Logo3.png";
import logo4 from "../../assets/Nextcent/Logo4.png";
import logo5 from "../../assets/Nextcent/Logo5.png";
import logo6 from "../../assets/Nextcent/Logo6.png";
import icon1 from "../../assets/Nextcent/Icon1.png";
import icon2 from "../../assets/Nextcent/Icon2.png";
import icon3 from "../../assets/Nextcent/Icon3.png";
import endImg from "../../assets/Nextcent/rafiki.png";
import BaseButton from "../Buttons/BaseButton";

const CommunityCard = ({ heading, text, icon }) => {
  return (
    <div className={styles.community_card}>
      <div>
        <div className={styles.community_card_logo}>
          <img src={icon} alt="icon" />
          <div className={styles.community_card_back}></div>
        </div>
        <h3 className={styles.community_card_heading}>{heading}</h3>
        <p className={styles.community_card_text}>{text}</p>
      </div>
    </div>
  );
};

const Community = () => {
  const clientsLogos = [
    { id: 1, src: logo1, alt: "client logo" },
    { id: 2, src: logo2, alt: "client logo" },
    { id: 3, src: logo3, alt: "client logo" },
    { id: 4, src: logo4, alt: "client logo" },
    { id: 5, src: logo5, alt: "client logo" },
    { id: 6, src: logo6, alt: "client logo" },
    { id: 7, src: logo3, alt: "client logo" },
  ];

  return (
    <section className={styles.community}>
      <div>
        <h2 className={styles.community_heading}>Our Clients</h2>
        <p className={styles.community_text}>We have been working with some Fortune 500+ clients</p>
        <div className={styles.community_imgs}>
          {clientsLogos.map((logo) => (
            <img src={logo.src} alt={logo.alt} key={logo.id} className={styles.community_img} />
          ))}
        </div>
      </div>
      <div>
        <h2 className={styles.community_heading}>Manage your entire community in a single system</h2>
        <p className={styles.community_text}>Who is Nextcent suitable for?</p>
      </div>
      <div className={styles.community_cards}>
        <CommunityCard
          heading="Membership Organisations"
          text="Our membership management software provides full automation of membership renewals and payments"
          icon={icon1}
        />
        <CommunityCard
          heading="National Associations"
          text="Our membership management software provides full automation of membership renewals and payments"
          icon={icon2}
        />
        <CommunityCard
          heading="Clubs And Groups"
          text="Our membership management software provides full automation of membership renewals and payments"
          icon={icon3}
        />
      </div>
      <div className={styles.community_end}>
        <img src={endImg} alt="image" />
        <div>
          <h2 className={styles.community_end_heading}>The unseen of spending three years at Pixelgrade</h2>
          <p className={styles.community_end_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae
            est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
            Donec elementum pulvinar odio.
          </p>
          <BaseButton btnText="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Community;
