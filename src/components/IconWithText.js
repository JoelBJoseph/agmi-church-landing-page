import styles from "./IconWithText.module.css";

const IconWithText = ({ globalAcademy }) => {
  return (
    <div className={styles.iconWithText}>
      <div className={styles.backgroundShape}>
        <div className={styles.icon}>
          <div className={styles.circleShape} />
          <div className={styles.circle} />
        </div>
      </div>
      <div className={styles.globalAcademyPContainer}>
        <p className={styles.globalAcademy}>{globalAcademy}</p>
        <p className={styles.pOBox37}>P. O. Box-37,</p>
        <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
        <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
        <p className={styles.kerala683642India}>Kerala-683642, India</p>
      </div>
    </div>
  );
};

export default IconWithText;
