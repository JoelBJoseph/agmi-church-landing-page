import styles from "./Navbar1.module.css";

const Navbar1 = ({
  onLogoContainerClick,
  onHomeTextClick,
  onAboutUsText1Click,
  onSermonTextClick,
  onReviewText1Click,
  onNavButtonClick,
}) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.background} />
      <div className={styles.logo}>
        <div className={styles.logo1} onClick={onLogoContainerClick}>
          <div className={styles.home}>
            <h1 className={styles.agmi}>AGMI</h1>
          </div>
        </div>
        <div className={styles.linksList}>
          <div className={styles.dividerLine}>
            <div className={styles.divider} />
          </div>
          <div className={styles.home1} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <div className={styles.sermon} onClick={onSermonTextClick}>
            Sermon
          </div>
          <div className={styles.review} onClick={onReviewText1Click}>
            review
          </div>
        </div>
      </div>
      <button className={styles.navButton} onClick={onNavButtonClick}>
        <div className={styles.buttonText}>Contact us</div>
      </button>
    </header>
  );
};

export default Navbar1;
