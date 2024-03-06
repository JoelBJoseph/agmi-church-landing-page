import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
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

  const onMinistryText1Click = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <div className={styles.background} />
      <div className={styles.logoInstanceWrapper}>
        <div className={styles.logoInstance}>
          <img
            className={styles.agmiLogo1Icon}
            loading="lazy"
            alt=""
            src="/agmilogo-1@2x.png"
            onClick={onAgmiLogo1ImageClick}
          />
          <div className={styles.navButtonInstance}>
            <div className={styles.homeHeaderFrame}>
              <div className={styles.logoWrapper}>
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
        <div className={styles.dividerLine}>
          <div className={styles.divider} />
          <b className={styles.home} onClick={onHomeTextClick}>
            Home
          </b>
        </div>
        <b className={styles.aboutUs} onClick={onAboutUsText2Click}>
          About us
        </b>
        <div className={styles.ministryWrapper}>
          <b className={styles.ministry} onClick={onMinistryText1Click}>
            ministry
          </b>
        </div>
      </div>
      <button className={styles.navButton} onClick={onNavButtonClick}>
        <div className={styles.buttonText}>Contact us</div>
      </button>
    </header>
  );
};

export default Navbar;
