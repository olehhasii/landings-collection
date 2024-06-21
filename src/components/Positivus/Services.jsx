import SectionHeading from "./SectionHeading";
import styles from "./PositivusStyle.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <SectionHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
    </section>
  );
};

export default Services;
