import Navbar1 from "../components/Navbar1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar1 />
      <section className={styles.inputTextField}>
        <div className={styles.header}>
          <img
            className={styles.httpsunsplashcomphotos6lIcon}
            alt=""
            src="/httpsunsplashcomphotos6liebveafry@2x.png"
          />
          <div className={styles.contact1}>Contact</div>
          <h1 className={styles.getInTouch}>Get in touch with our CHURCH</h1>
        </div>
      </section>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Contact;
