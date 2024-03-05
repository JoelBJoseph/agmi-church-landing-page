import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CTA.module.css";

const CTA = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={styles.cta}>
      <div className={styles.background}>
        <img
          className={styles.httpswwwpexelscomphotofIcon}
          alt=""
          src="/httpswwwpexelscomphotofacadeofagedgrandcathedralwithdomeonrivershore5273642@2x.png"
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.inner}>
        <div className={styles.testimonialBackground}>
          <div className={styles.mainBackground} />
          <div className={styles.bottomLine} />
        </div>
        <img
          className={styles.quoteIcon}
          loading="lazy"
          alt=""
          src="/quote-icon.svg"
        />
        <div className={styles.content}>
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
      </div>
    </section>
  );
};

export default CTA;
