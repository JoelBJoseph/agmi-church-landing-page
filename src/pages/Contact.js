import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Addresses from "../components/Addresses";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAbundantGraceMinistriesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAgmiLogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <Footer
        socialWrapper="/social-wrapper@2x.png"
        onButtonClick={onButtonClick}
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <Addresses />
      <ContactForm />
      <section className={styles.header}>
        <img
          className={styles.httpsunsplashcomphotos6lIcon}
          loading="lazy"
          alt=""
          src="/httpsunsplashcomphotos6liebveafry@2x.png"
        />
        <h1 className={styles.getInTouch}>Get in touch with our CHURCH</h1>
        <div className={styles.contact1}>Contact</div>
      </section>
      <header className={styles.navbar}>
        <div className={styles.background} />
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText}>Contact us</div>
        </button>
        <div className={styles.linksList}>
          <div className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <h1 className={styles.agmi}>AGMI</h1>
        </div>
        <div
          className={styles.abundantGraceMinistries}
          onClick={onAbundantGraceMinistriesClick}
        >
          Abundant Grace Ministries India
        </div>
        <img
          className={styles.agmiLogo1Icon}
          loading="lazy"
          alt=""
          src="/agmilogo-1@2x.png"
          onClick={onAgmiLogo1ImageClick}
        />
      </header>
    </div>
  );
};

export default Contact;
