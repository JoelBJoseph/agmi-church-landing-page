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

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <div className={styles.background} />
      <div className={styles.navbarInner}>
        <div className={styles.agmiLogo1Parent}>
          <img
            className={styles.agmiLogo1Icon}
            loading="lazy"
            alt=""
            src="/agmilogo-1@2x.png"
            onClick={onAgmiLogo1ImageClick}
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
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
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <h3 className={styles.home} onClick={onHomeTextClick}>
            Home
          </h3>
        </div>
        <div className={styles.aboutUs} onClick={onAboutUsText2Click}>
          About us
        </div>
        <div className={styles.ministry} onClick={onMinistryTextClick}>
          ministry
        </div>
      </div>
      <button className={styles.navButton} onClick={onNavButtonClick}>
        <div className={styles.buttonText}>Contact us</div>
      </button>
    </header>
  );
};

export default Navbar;
