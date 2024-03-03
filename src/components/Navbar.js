import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onReviewText5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <div className={styles.background} />
      <div className={styles.upcomingSermonsFrame}>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <div className={styles.churchOfficersFrame}>
            <h1 className={styles.agmi}>AGMI</h1>
          </div>
        </div>
        <div className={styles.linksList}>
          <div className={styles.divider}>
            <div className={styles.divider1} />
          </div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText2Click}>
            About us
          </div>
          <div className={styles.sermon} onClick={onSermonTextClick}>
            Sermon
          </div>
          <div className={styles.review} onClick={onReviewText5Click}>
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

export default Navbar;
