import { useCallback } from "react";
import styles from "./QuickLinksColumn.module.css";

const QuickLinksColumn = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='welcomeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.quickLinksColumn}>
      <div className={styles.homeHeader}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className={styles.backgroundShape}>
          <div className={styles.inputFrame}>
            <b className={styles.welcomeToOur}>Welcome to our CHURCH</b>
          </div>
          <div className={styles.instagramNegativeFrame}>
            <div className={styles.wwwagmiin}>
              <h1 className={styles.becomeAPart}>
                Become a part of our community
              </h1>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.buttonText}>Learn more</div>
            </button>
          </div>
        </div>
        <div className={styles.textBlock}>
          <div className={styles.frameContainer}>
            <div className={styles.headerFrame}>
              <div className={styles.backgroundImage} />
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksColumn;
