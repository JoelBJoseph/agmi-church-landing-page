import styles from "./Navbar1.module.css";

const Navbar1 = ({
  onAgmiLogo1ImageClick,
  onLogoContainerClick,
  onAbundantGraceMinistriesClick,
  onHomeTextClick,
  onAboutUsText1Click,
  onMinistryText1Click,
  onNavButtonClick,
}) => {
  return (
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
          <div className={styles.linkslistFRAMEWrapper}>
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
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <b className={styles.home} onClick={onHomeTextClick}>
            Home
          </b>
        </div>
        <b className={styles.aboutUs} onClick={onAboutUsText1Click}>
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
    </div>
  );
};

export default Navbar1;
