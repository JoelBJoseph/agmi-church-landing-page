import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <button className={styles.button}>
        <div className={styles.buttonText}>Send message</div>
      </button>
      <textarea
        className={styles.input}
        placeholder="Message"
        rows={6}
        cols={31}
      />
      <input
        className={styles.input1}
        placeholder="Your full Name"
        type="text"
      />
      <input
        className={styles.input2}
        placeholder="Query Related"
        type="text"
      />
      <input className={styles.input3} placeholder="Your Email" type="text" />
      <h3 className={styles.contactUs}>Contact form:</h3>
    </div>
  );
};

export default ContactForm;
