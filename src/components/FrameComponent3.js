import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section className={styles.homeHeaderWrapper}>
      <div className={styles.homeHeader}>
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
        <div className={styles.linksList}>
          <div className={styles.navButton}>
            <div className={styles.welcome} />
          </div>
          <div className={styles.aChanceFor}>
            “A chance for Life Change through the gospel of Jesus Christ”
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
