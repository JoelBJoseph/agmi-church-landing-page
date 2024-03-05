import IconWithText from "./IconWithText";
import styles from "./Line.module.css";

const Line = () => {
  return (
    <div className={styles.line}>
      <div className={styles.missionConferenceParent}>
        <h1 className={styles.missionConference}>mission conference</h1>
        <div className={styles.backgroundParent}>
          <div className={styles.background} />
          <img className={styles.clockIcon} alt="" src="/clock-icon.svg" />
        </div>
        <div className={styles.connectBox}>
          <h3 className={styles.encourageEquipAnd}>
            Encourage, Equip and Enlist workers for the harvest
          </h3>
        </div>
        <div className={styles.backgroundShapeWrapper}>
          <div className={styles.backgroundShape}>
            <div className={styles.credentialSection}>
              <div className={styles.sunday2024TimeContainer}>
                <p className={styles.sunday2024}>SUNDAY, 2024</p>
                <p className={styles.time9Am}>TIME: 9 AM - 12 AM</p>
              </div>
            </div>
            <IconWithText globalAcademy="AGMI," />
          </div>
        </div>
        <div className={styles.connectBox1}>
          <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="/image-31@2x.png" />
    </div>
  );
};

export default Line;
