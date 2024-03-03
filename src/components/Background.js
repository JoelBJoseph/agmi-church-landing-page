import styles from "./Background.module.css";

const Background = () => {
  return (
    <section className={styles.background}>
      <img
        className={styles.httpswwwpexelscomphotofIcon}
        alt=""
        src="/httpswwwpexelscomphotofacadeofagedgrandcathedralwithdomeonrivershore5273642@2x.png"
      />
      <div className={styles.imageOverlay} />
      <div className={styles.testimonialBackground}>
        <div className={styles.mainBackground} />
        <div className={styles.bottomLine} />
        <img
          className={styles.quoteIcon}
          loading="lazy"
          alt=""
          src="/quote-icon.svg"
        />
        <h1 className={styles.weWantTo}>
          We want to serve the world around us
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
        <button className={styles.button}>
          <div className={styles.buttonText}>Visit</div>
        </button>
      </div>
    </section>
  );
};

export default Background;
