import IconWithText from "./IconWithText";
import styles from "./FooterBackground.module.css";

const FooterBackground = () => {
  return (
    <div className={styles.footerBackground}>
      <h1 className={styles.joinUsAnd}>
        join us and become part of something great
      </h1>
      <div className={styles.contentParent}>
        <div className={styles.content}>
          <div className={styles.background} />
          <div className={styles.bibleTrainingParent}>
            <h1 className={styles.bibleTraining}>bible training</h1>
            <h3 className={styles.reachingEquippingSending}>
              Reaching, Equipping, Sending, Serving
            </h3>
          </div>
          <div className={styles.topBar}>
            <IconWithText globalAcademy="global academy," />
          </div>
          <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
        </div>
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
      </div>
    </div>
  );
};

export default FooterBackground;
