import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={styles.backgroundFrame}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.testimonialBackground}>
        <div className={styles.mainBackground} />
        <div className={styles.bottomLine} />
        <img
          className={styles.quoteIcon}
          loading="lazy"
          alt=""
          src="/quote-icon.svg"
        />
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.buttonText}>Visit</div>
        </button>
        <h1 className={styles.weWantTo}>
          We want to serve the world around us
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
