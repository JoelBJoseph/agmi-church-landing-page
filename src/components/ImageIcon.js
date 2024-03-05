import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ImageIcon.module.css";

const ImageIcon = () => {
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
    <section className={styles.imageIcon}>
      <div className={styles.navbar}>
        <header className={styles.background} />
        <div className={styles.dividerLine}>
          <div className={styles.shapeBase}>
            <img
              className={styles.agmiLogo1Icon}
              loading="lazy"
              alt=""
              src="/agmilogo-11@2x.png"
              onClick={onAgmiLogo1ImageClick}
            />
            <div className={styles.buttonElement}>
              <div className={styles.menuList}>
                <div className={styles.socialNetworkWrapper}>
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
          <div className={styles.instantiatedFooter}>
            <div className={styles.divider} />
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <h3 className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </h3>
        </div>
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText}>Contact us</div>
        </button>
      </div>
      <div className={styles.sermonsHeader}>
        <img
          className={styles.imageIcon1}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <b className={styles.mission}>mission</b>
        <h1 className={styles.takePartIn}>take part in OUR ministry</h1>
      </div>
    </section>
  );
};

export default ImageIcon;
