import SectionHeading from "./SectionHeading";
import styles from "./PositivusStyle.module.scss";

const Testimonials = () => {
  const quotes = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <SectionHeading
        heading="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className={styles.testimonials_carousel}>
        <div className={styles.testimonials_quotes}>
          {quotes.map((quote) => (
            <div key={quote.author} className={styles.testimonials_quote}>
              <div className={styles.testimonials_text}>
                <p>{quote.text}</p>
              </div>
              <div className={styles.testimonials_person}>
                <span className={styles.testimonials_author}>{quote.author}</span>
                <span className={styles.testimonials_position}>{quote.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
