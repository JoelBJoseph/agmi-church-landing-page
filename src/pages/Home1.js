import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import WhatDoWeDo from "../components/WhatDoWeDo";
import HomeHeader from "../components/HomeHeader";
import CTA from "../components/CTA";
import styles from "./Home1.module.css";

const Home = () => {
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

  const onButton2Click = useCallback(() => {
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
    <div className={styles.home}>
      <Footer
        socialWrapper="/social-wrapper1@2x.png"
        backgroundShapeTop="203.25rem"
        inputLeft="calc(50% + 128.2px)"
        inputWidth="32.044rem"
        buttonLeft="calc(50% - 256.35px)"
        buttonTextLeft="calc(50% + 54.45px)"
        subscribeToGetLeft="3.9%"
        socialWrapperIconWidth="5.8%"
        socialWrapperIconRight="49.2%"
        linksListWidth="4.39%"
        linksListRight="59.81%"
        copyrightFinsweet2022Width="11rem"
        addressNumberWidth="7.39%"
        addressNumberRight="85.01%"
        emailnamegmsilcomWidth="11.01%"
        emailnamegmsilcomLeft="7.59%"
        messageFillIconWidth="82.35%"
        messageFillIconLeft="17.65%"
        onButtonClick={onButtonClick}
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <section className={styles.welcome}>
        <div className={styles.gallery}>
          <img
            className={styles.httpswwwpexelscomphotopIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotopeoplesittingonbrownpews8674151@2x.png"
          />
          <img
            className={styles.httpswwwpexelscomphotomIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotomanandwomanreadingbookwhilesittingonpews8468470@2x.png"
          />
          <img
            className={styles.httpswwwpexelscomphotoaIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotoabeardedmanpraying5206040@2x.png"
          />
        </div>
        <div className={styles.content}>
          <button className={styles.button} onClick={onButton2Click}>
            <div className={styles.buttonText}>Read more</div>
          </button>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className={styles.heading}>
            <h1 className={styles.loveAndCompassion}>love and compassion</h1>
            <div className={styles.subHeadline}>SUB-HEADLINE</div>
          </div>
        </div>
      </section>
      <WhatDoWeDo />
      <HomeHeader />
      <CTA />
      <header className={styles.navbar}>
        <div className={styles.background} />
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText1}>Contact us</div>
        </button>
        <div className={styles.linksList}>
          <div className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText2Click}>
            About us
          </div>
          <h3 className={styles.home1} onClick={onHomeTextClick}>
            Home
          </h3>
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

export default Home;
