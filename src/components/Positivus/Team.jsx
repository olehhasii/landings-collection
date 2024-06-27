import SectionHeading from "./SectionHeading";
import styles from "./PositivusStyle.module.scss";

import avatar1 from "../../assets/Positivus/avatars/avatar1.png";
import linkedin from "../../assets/Positivus/linkedin.png";

const TeamMemberCard = ({ name, position, avatar, description }) => {
  return (
    <div className={styles.employee}>
      <div className={styles.employee_header}>
        <img src={avatar} alt="photo" />
        <div>
          <h4>{name}</h4>
          <span>{position}</span>
        </div>
        <a href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <hr />
      <div className={styles.employee_description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const members = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "John Smith",
      position: "CEO and Founder",
      avatar: avatar1,
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
  ];

  return (
    <section className={styles.team}>
      <SectionHeading
        heading="Team "
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className={styles.team_members}>
        {members.map((member) => (
          <TeamMemberCard
            name={member.name}
            position={member.position}
            avatar={member.avatar}
            description={member.description}
            key={member.name}
          />
        ))}
      </div>
      <div>
        <button className={styles.team_btn}>See all team</button>
      </div>
    </section>
  );
};

export default Team;
