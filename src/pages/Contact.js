import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import InputFormFrame from "../components/InputFormFrame";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onAgmiLogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAbundantGraceMinistriesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryText1Click = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <Navbar1
        onAgmiLogo1ImageClick={onAgmiLogo1ImageClick}
        onLogoContainerClick={onLogoContainerClick}
        onAbundantGraceMinistriesClick={onAbundantGraceMinistriesClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsText1Click={onAboutUsText1Click}
        onMinistryText1Click={onMinistryText1Click}
        onNavButtonClick={onNavButtonClick}
      />
      <section className={styles.addressText}>
        <div className={styles.header}>
          <img
            className={styles.httpsunsplashcomphotos6lIcon}
            alt=""
            src="/httpsunsplashcomphotos6liebveafry@2x.png"
          />
          <div className={styles.contact1}>Contact</div>
          <h1 className={styles.getInTouch}>Get in touch with our ministry</h1>
        </div>
      </section>
      <InputFormFrame />
      <Footer
        socialWrapper="/social-wrapper@2x.png"
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onMinistryTextClick={onMinistryTextClick}
        onContactTextClick={onContactTextClick}
        onButton1Click={onButtonClick}
      />
    </div>
  );
};

export default Contact;
