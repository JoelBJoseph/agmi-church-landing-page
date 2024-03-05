import IconWithText from "./IconWithText";
import styles from "./Line1.module.css";

const Line1 = () => {
  return (
    <div className={styles.line}>
      <div className={styles.content}>
        <div className={styles.background} />
        <h1 className={styles.localChurches}>local churches</h1>
        <div className={styles.frameCta}>
          <h3 className={styles.whereTwoOr}>
            "Where two or three gather in my name, there am I with them." -
            Matthew 18:20
          </h3>
        </div>
        <div className={styles.image}>
          <div className={styles.frameCredential}>
            <div className={styles.textCredentialTitle}>
              <div className={styles.textCredentialSubtitle}>
                <img
                  className={styles.clockIcon}
                  loading="lazy"
                  alt=""
                  src="/clock-icon.svg"
                />
              </div>
              <div className={styles.sunday2024TimeContainer}>
                <p className={styles.sunday2024}>SUNDAY, 2024</p>
                <p className={styles.time9Am}>TIME: 9 AM - 12 AM</p>
              </div>
            </div>
            <IconWithText globalAcademy="AGMI," />
          </div>
        </div>
        <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
      </div>
      <img className={styles.imageIcon} alt="" src="/image-4@2x.png" />
    </div>
  );
};

export default Line1;
