import styles from "./PositivusStyle.module.scss";

const SectionHeading = ({ heading, text, className }) => {
  return (
    <div className={`${styles.sectionHeading} ${className}`}>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeading;
