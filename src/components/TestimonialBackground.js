import Item from "./Item";
import styles from "./TestimonialBackground.module.css";

const TestimonialBackground = () => {
  return (
    <section className={styles.testimonialBackground}>
      <div className={styles.quoteIcon}>
        <h1 className={styles.heading}>a mission that's relevant</h1>
        <div className={styles.list}>
          <Item icon="/icon.svg" aboutUs="About us" />
          <Item
            icon="/icon-1.svg"
            aboutUs="Get involved"
            propPadding="var(--padding-61xl) 0rem 0rem"
          />
          <Item
            icon="/icon-2.svg"
            aboutUs="Giving back"
            propPadding="var(--padding-61xl) var(--padding-12xs) 0rem 0rem"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialBackground;
