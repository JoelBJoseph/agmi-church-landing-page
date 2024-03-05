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
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.headerBottomText}>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
        <div className={styles.welcome} />
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.buttonText}>Learn more</div>
      </button>
      <div className={styles.heading}>
        <h1 className={styles.becomeAPart}>Become a part of our community</h1>
        <b className={styles.welcomeToOur}>Welcome to our CHURCH</b>
      </div>
    </section>
  );
};

export default HomeHeader;
