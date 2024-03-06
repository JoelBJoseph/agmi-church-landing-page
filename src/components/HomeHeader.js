import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section className={styles.homeHeader}>
      <div className={styles.homeHeader1}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className={styles.missionStatement}>
          <b className={styles.welcomeToOur}>Welcome to our mission</b>
          <div className={styles.givingBackSection}>
            <h1 className={styles.becomeAPart}>
              Become a part of our community
            </h1>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.buttonText}>Learn more</div>
            </button>
          </div>
        </div>
        <div className={styles.aboutUsLink}>
          <div className={styles.ministryLink}>
            <div className={styles.welcome} />
          </div>
          <b className={styles.aChanceFor}>
            “A chance for Life Change through the gospel of Jesus Christ”
          </b>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
