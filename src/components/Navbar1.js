import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar1.module.css";

const Navbar1 = () => {
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

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.navbar}>
      <header className={styles.background} />
      <div className={styles.backgroundRECTANGLE}>
        <div className={styles.navbarINSTANCE}>
          <img
            className={styles.agmiLogo1Icon}
            loading="lazy"
            alt=""
            src="/agmilogo-1@2x.png"
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
      <div className={styles.queryInput}>
        <div className={styles.linksList}>
          <div className={styles.divider} />
          <div className={styles.addressText}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className={styles.addressText1}>
            <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
              About us
            </div>
          </div>
          <div className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </div>
        </div>
      </div>
      <button className={styles.navButton} onClick={onNavButtonClick}>
        <div className={styles.buttonText}>Contact us</div>
      </button>
    </div>
  );
};

export default Navbar1;
