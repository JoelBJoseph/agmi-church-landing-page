import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ItemList from "../components/ItemList";
import Footer1 from "../components/Footer1";
import styles from "./AboutUs1.module.css";

const AboutUs = () => {
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

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.navbar}>
        <header className={styles.background} />
        <div className={styles.backgroundShape}>
          <div className={styles.contentWrapper}>
            <img
              className={styles.agmiLogo1Icon}
              loading="lazy"
              alt=""
              src="/agmilogo-11@2x.png"
              onClick={onAgmiLogo1ImageClick}
            />
            <div className={styles.meetTeamFrame}>
              <div className={styles.joseCarmelNameParent}>
                <div className={styles.joseCarmelName}>
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
          <div className={styles.logoFrame}>
            <div className={styles.divider} />
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <h3 className={styles.aboutUs1} onClick={onAboutUsText2Click}>
            About us
          </h3>
          <div className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </div>
        </div>
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText}>Contact us</div>
        </button>
      </div>
      <div className={styles.inputField}>
        <div className={styles.aboutUsHero}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <b className={styles.aboutUs2}>About us</b>
          <h1 className={styles.servingTheWorld}>
            Serving the world around us
          </h1>
        </div>
      </div>
      <main className={styles.mainMenu}>
        <ItemList />
      </main>
      <Footer1 />
    </div>
  );
};

export default AboutUs;
