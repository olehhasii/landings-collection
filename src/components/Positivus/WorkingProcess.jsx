import SectionHeading from "./SectionHeading";
import styles from "./PositivusStyle.module.scss";
import { useState } from "react";

const CollapseItem = ({ heading, text, index }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`${styles.collapse_item} ${collapsed ? styles.collapse_item_grey : styles.collapse_item_green}`}>
      <div className={styles.collapse_item_header}>
        <div>
          <span>{index}</span>
          <h3>{heading}</h3>
        </div>
        <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "+" : "-"}</button>
      </div>

      <div className={collapsed ? styles.collapse_item_closed : styles.collapse_item_opened}>
        <hr />
        <p className={styles.collapse_item_text}>{text}</p>
      </div>
    </div>
  );
};

const WorkingProcess = () => {
  const items = [
    {
      heading: "Consultation",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Research and Strategy Development",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Implementation",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Monitoring and Optimization",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Reporting and Communication",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      heading: "Continual Improvement",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  return (
    <section className={styles.process}>
      <SectionHeading heading="Our Working Process " text="Step-by-Step Guide to Achieving Your Business Goals" />
      <div className={styles.process_items}>
        {items.map((item, index) => (
          <CollapseItem heading={item.heading} text={item.text} index={`0${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
