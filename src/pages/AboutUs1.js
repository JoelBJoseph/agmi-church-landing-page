import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer1 from "../components/Footer1";
import OurTeam from "../components/OurTeam";
import BenefitsOfOurChurch from "../components/BenefitsOfOurChurch";
import Welcome1 from "../components/Welcome1";
import styles from "./AboutUs1.module.css";

const AboutUs = () => {
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

  const onAboutUsText2Click = useCallback(() => {
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
    <div className={styles.aboutUs}>
      <Footer1
        socialWrapper="/social-wrapper@2x.png"
        backgroundShapeTop="278.125rem"
        inputLeft="calc(50% + 128px)"
        inputWidth="32rem"
        buttonLeft="calc(50% - 256px)"
        buttonTextLeft="calc(50% + 55px)"
        subscribeToGetLeft="3.91%"
        socialWrapperIconWidth="5.87%"
        socialWrapperIconRight="49.13%"
        linksListWidth="4.4%"
        linksListRight="59.8%"
        copyrightFinsweet2022Width="10.875rem"
        addressNumberWidth="7.4%"
        addressNumberRight="85%"
        emailnamegmsilcomWidth="11%"
        emailnamegmsilcomLeft="7.6%"
        messageFillIconWidth="82.42%"
        messageFillIconLeft="17.58%"
        onButtonClick={onButtonClick}
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <OurTeam />
      <BenefitsOfOurChurch />
      <Welcome1 />
      <section className={styles.aboutUsHero}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
        <div className={styles.header}>
          <h1 className={styles.servingTheWorld}>
            Serving the world around us
          </h1>
          <b className={styles.aboutUs1}>About us</b>
        </div>
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
          <h3 className={styles.aboutUs2} onClick={onAboutUsText2Click}>
            About us
          </h3>
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

export default AboutUs;
