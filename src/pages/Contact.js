import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputFormFrame from "../components/InputFormFrame";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

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

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <div className={styles.navbar}>
        <header className={styles.background} />
        <div className={styles.backgroundRECTANGLE}>
          <div className={styles.navbarINSTANCE}>
            <img
              className={styles.agmiLogo1Icon}
              loading="lazy"
              alt=""
              src="/agmilogo-11@2x.png"
              onClick={onAgmiLogo1ImageClick}
            />
            <div className={styles.agmiText}>
              <div className={styles.linkslistFRAME}>
                <div className={styles.navbuttonINSTANCE}>
                  <div className={styles.logo} onClick={onLogoContainerClick}>
                    <h1 className={styles.agmi}>AGMI</h1>
                  </div>
                </div>
                <div
                  className={styles.abundantGraceMinistries}
                  onClick={onAbundantGraceMinistriesClick}
                >
                  Abundant Grace Ministries India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.linksList}>
          <div className={styles.homeLinkText}>
            <div className={styles.divider} />
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <div className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </div>
        </div>
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText}>Contact us</div>
        </button>
      </div>
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
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onButton1Click={onButtonClick}
      />
    </div>
  );
};

export default Contact;
